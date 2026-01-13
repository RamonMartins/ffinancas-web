// src/actions/carteiras.ts
"use server"

import { client_axios } from "@/lib/axios"
import { CarteirasRead } from "@/@types/carteiras"


export interface RespostaListagem {
    data: CarteirasRead[];
    error: string | null;
}

export async function AllCarteirasMe(): Promise<RespostaListagem> {
    try {
        const carteiras = await client_axios.get<CarteirasRead[]>("/carteiras");
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
