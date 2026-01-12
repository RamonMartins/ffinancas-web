// src/actions/auth.ts

"use server";

import { client_axios } from "@/lib/axios";
import { redirect } from "next/navigation";
import { ActionState } from "@/@types/forms";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// ####################
// ==> Action para Cadastrar o usuário
// ####################
export async function cadastrarUsuario(prevState: any, formData: FormData): Promise<ActionState> {
    const nome = formData.get("nome");
    const email = formData.get("email");
    let grupo_familiar_id = formData.get("grupo_familiar");
    const lider_familiar = formData.get("lider") === "on"; // Grava na variável o resultado do teste lógico (true/false)
    const password = formData.get("senha");
    const confirmarSenha = formData.get("confirmar_senha");

    const values = {
        nome_return: nome as string,
        email_return: email as string,
        grupo_return: grupo_familiar_id as string,
        lider_return: lider_familiar as boolean
    }

    if (password !== confirmarSenha) {
        return {
            error: "As senhas não coincidem.",
            status: 400,
            payload: values
        }
    }

    if (!lider_familiar && grupo_familiar_id === "") {
        return {
            error: "Selecione um Grupo Familiar ou marque a opção de Líder.",
            status: 400,
            payload: values
        }
    }

    // Se for líder ou se o select vier vazio, envia null para a API
    if (lider_familiar || grupo_familiar_id === null) {
        grupo_familiar_id = null;
    } 
    
    try {
        // Requisição para a API
        await client_axios.post("/auth/register", {
            nome,
            email,
            grupo_familiar_id,
            lider_familiar,
            password,
        });

    } catch (error: any) {
        // Tratamento de erro específico do Axios
        const mensagemErro = error.response?.data?.detail || "Erro ao cadastrar usuário. Tente novamente.";
        console.error("Erro na API:", mensagemErro);
        
        return { 
            error: mensagemErro, 
            status: error.response?.status || 500,
            payload: values
        };
    }
    
    redirect("/entrar");
}


// ####################
// ==> Action para Logar  o usuário
// ####################
export async function logarUsuario(prevState: any, formData: FormData): Promise<ActionState> {
    const email = formData.get("email");
    const password = formData.get("senha");

    let token: string;

    const values = {
        email_return: email as string
    };

    try {
        const loginData = new URLSearchParams();
        loginData.append("username", email as string);
        loginData.append("password", password as string);
        
        const response = await client_axios.post("/auth/login", loginData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        // Extrai o token da resposta
        token = response.data.access_token;

        // Salva o token nos cookies para as próximas requisições
        const cookieStore = await cookies();

        cookieStore.set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
            maxAge: 86400, // 24 horas
            path: "/"
        });

    } catch (error: any) {
        const mensagemErro = error.response?.data?.detail === "LOGIN_BAD_CREDENTIALS" ? "E-mail ou senha incorretos." : "Erro ao realizar login. Tente novamente";

        return {
            error: mensagemErro,
            status: error.response?.status || 500,
            payload: values
        }
    }

    const userResponse = await client_axios.get("/usuarios/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const userData = userResponse.data;

    if (userData.lider_familiar === true && userData.grupo_familiar_id === null) {
        redirect("/grupo-familiar")
    } else {
        redirect("/painel");
    }
}

// ####################
// ==> Action para usuário fazer logout
// ####################
export async function logoutUsuario() {
    try {
        await client_axios.post("/auth/logout");
    } catch (error: any) {
        console.error("Erro ao tentar fazer logout", error)
    }

    // Limpa o cookie do navegador do usuário
    const userCookie = await cookies();
    userCookie.delete("auth_token");
    
    // Limpa o cache de todas as rotas do site
    revalidatePath("/", "layout");

    redirect("/");

}
