// src/actions/cadastrar.ts

"use server";

import { redirect } from "next/navigation";

export async function cadastrarUsuario(formData: FormData) {
    // Pegamos os dados do formulário
    const nome = formData.get("nome");
    const email = formData.get("email");
    const senha = formData.get("senha");
    const grupo = formData.get("grupo");
    const lider = formData.get("lider") === "on"; // Checkbox retorna "on" se marcado

    // Chamada para sua API FastAPI
    const response = await fetch("https://sua-api.railway.app/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, grupo_id: grupo, eh_lider: lider }),
    });

    if (!response.ok) {
        // Você pode tratar erros aqui (ex: email já existe)
        throw new Error("Erro ao cadastrar usuário");
    }

    // Se deu certo, manda para o login ou dashboard
    redirect("/entrar");
}