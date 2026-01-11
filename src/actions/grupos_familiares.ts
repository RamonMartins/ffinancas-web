// src/actions/grupos_familiares.ts

"use server";

import * as TyperGrupoFamiliar from "@/@types/grupos_familiares"
import { client_axios } from "@/lib/axios";
import { ActionState } from "@/@types/forms";
import { redirect } from "next/navigation";


// ####################
// ==> Action para Criar Grupo Familia e atribuir ao usuário criador
// ####################
export async function atribuirGrupoFamiliar(prevState: any, formData: FormData): Promise<ActionState> {
    const titulo = formData.get("titulo");

    if (!titulo || typeof titulo !== "string") {
        return {
            error: "O título é obrigatório.",
            status: 400,
            payload: {titulo_return: ""}
        };
    }

    const values = {
        titulo_return: titulo as string
    };
    
    try {
        await client_axios.post("/grupos-familiares", {
            titulo
        })
    } catch (error: any) {
        const mensagemErro = error.response?.data?.detail || "Erro ao criar Grupo Familiar. Tente novamente."

        return {
            error: mensagemErro,
            status: error.response?.status || 500,
            payload: values
        }
    }

    redirect("/painel");
}


export async function AllGruposFamiliares(): Promise<TyperGrupoFamiliar.GrupoFamiliarRead[]> {
    
    try {
        const response = await client_axios.get<TyperGrupoFamiliar.GrupoFamiliarRead[]>('/grupos-familiares');

        return response.data;
    } catch (error: any) {
        throw new Error('Falha ao buscar os dados de grupos familiares.');
    }

}
