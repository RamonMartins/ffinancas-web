// src/actions/carteiras.ts
"use server"

import { client_axios } from "@/lib/axios"
import * as TypeCarteira from "@/@types/carteiras"
import { ActionState } from "@/@types/forms";
import { redirect } from "next/navigation";


export interface RespostaListagem {
    data: TypeCarteira.CarteirasRead[];
    error: string | null;
}

// ####################
// ==> Action para listar Carteiras do usuário atual
// ####################
export async function AllCarteirasMe(): Promise<RespostaListagem> {
    try {
        const carteiras = await client_axios.get<TypeCarteira.CarteirasRead[]>("/carteiras");
        return {
            data: carteiras.data,
            error: null
        };
    } catch (error: any) {
        return {
            data: [],
            error: error.response?.data?.detail || "Erro ao carregar as Carteiras."
        }
    }
}


// ####################
// ==> Action para criar Carteira para o usuário atual
// ####################
export async function CriarCarteiraMe(prevState: any, formData: FormData): Promise<ActionState> {
    const titulo = (formData.get("titulo") as string) || "";
    const saldo = Number(formData.get("saldo")) || 0;

    const values = {
        titulo_return: titulo as string
    };


    try {
        await client_axios.post("/carteiras", {
            titulo,
            saldo
        });

    } catch (error: any) {
        const mensagemErro = error.response?.data?.detail || "Erro ao criar a Carteira. Tente novamente."

        return {
            error: mensagemErro,
            status: error.response?.status || 500,
            payload: values
        }
    }

    redirect("/painel/carteiras");
}