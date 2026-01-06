// src/actions/grupos_familiares.ts

"use server";

import * as TyperGrupoFamiliar from "@/@types/grupos_familiares"
import { client_axios } from "@/lib/axios";


export async function AllGruposFamiliares(): Promise<TyperGrupoFamiliar.GrupoFamiliarRead[]> {
    
    try {
        const response = await client_axios.get<TyperGrupoFamiliar.GrupoFamiliarRead[]>('/grupos-familiares');

        return response.data;
    } catch (error: any) {
        throw new Error('Falha ao buscar os dados de grupos familiares.');
    }

}
