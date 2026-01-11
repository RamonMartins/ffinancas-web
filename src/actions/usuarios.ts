// src/actions/usuarios.ts

"use server"

import { client_axios } from "@/lib/axios"
import { cookies } from "next/headers";

// ####################
// ==> Action para obter os dados do usuário logado
// ####################
export async function usuarioAtual() {
    try {
        const userResponse = await client_axios.get("/usuarios/me")
        return {
            usuario: userResponse.data,
            error: null
        };
    } catch (error: any) {
        // Se o navegador enviou um cookie que a API não aceitou mais (401), ele é limpo
        if (error.response?.status === 401) {
            const cookieStore = await cookies();
            cookieStore.delete("auth_token");
        }

        return {
            usuario: null,
            error: error.response?.data?.detail || "Erro ao carregar usuário"
        };
    }
}
