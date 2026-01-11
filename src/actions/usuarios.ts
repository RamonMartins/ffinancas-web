// src/actions/usuarios.ts

"use server"

import { client_axios } from "@/lib/axios"

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
        return {
            usuario: null,
            error: error.response?.data?.detail || "Erro ao carregar usuário"
        };
    }
}
