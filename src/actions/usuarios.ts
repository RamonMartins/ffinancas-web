// src/actions/cadastrar.ts

"use server";

import { client_axios } from "@/lib/axios";
import { redirect } from "next/navigation";
import { ActionState } from "@/@types/forms";

export async function cadastrarUsuario(prevState: any, formData: FormData): Promise<ActionState> {
    // Pegamos os dados do formulário
    const nome = formData.get("nome");
    const email = formData.get("email");
    let grupo_id = formData.get("grupo_familiar");
    const lider_familiar = formData.get("lider") === "on"; // Grava na variável o resultado do teste lógico (true/false)
    const password = formData.get("senha");
    const confirmarSenha = formData.get("confirmar_senha");

    const values = {
        nome_return: nome as string,
        email_return: email as string,
        grupo_return: grupo_id as string,
        lider_return: lider_familiar as boolean
    }

    if (password !== confirmarSenha) {
        return {
            error: "As senhas não coincidem.",
            status: 400,
            payload: values
        }
    }

    if (!lider_familiar && grupo_id === "") {
        return {
            error: "Selecione um Grupo Familiar ou marque a opção de Líder.",
            status: 400,
            payload: values
        }
    }

    // Se for líder ou se o select vier vazio, envia null para a API
    if (lider_familiar || grupo_id === null) {
        grupo_id = null;
    } 
    
    try {
        // Requisição para a API
        await client_axios.post("/auth/register", {
            nome,
            email,
            grupo_id,
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
