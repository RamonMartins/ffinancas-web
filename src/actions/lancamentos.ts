// src/actions/lancamentos.ts

"use server"
// import 'server-only';
import * as TypeLancamento from "@/@types/lancamentos"
import { revalidatePath } from 'next/cache';

// Define a URL base da sua API FastAPI
let API_BASE_URL: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'production') {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_PUBLIC;
    API_BASE_URL = `http://${API_BASE_URL}`;
} else {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_LOCAL_URL;
    API_BASE_URL = `${API_BASE_URL}`;
}

// ===> Action de Buscar todos os Lançamentos
export async function AllLancamentos(): Promise<TypeLancamento.LancamentoReadType[]> {

    // Verifica se a URL da API está definida, caso contrário lança um erro
    if (!API_BASE_URL) {
        throw new Error('A URL da API (NEXT_PUBLIC_API_BASE_URL) não foi configurada.');
    };

    // Configurações de cache do Next.js: 'no-store' garante que a busca sempre ocorrerá
    // Se quiser cachear por um tempo, use { next: { revalidate: 60 } }
    const res = await fetch(`${API_BASE_URL}/lancamentos/list_all`, {
        cache: 'no-store'
    });

    // Lança um erro que será capturado pelo try/catch no componente da página
    if (!res.ok) {
        throw new Error('Falha ao buscar os dados de lançamentos. Status: ${res.status}');
    }

    return res.json();
}

// ===> Action de Criar um Lançamento
export async function CreateLancamento(data: TypeLancamento.LancamentoCreateType) {
    try {
        const res = await fetch(`${API_BASE_URL}/lancamentos/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { error: errorData.detail || 'Falha ao criar Lançamento' };
        }

        revalidatePath('/lancamentos');

        return { success: true };
    } catch (error) {
        return { error: 'Erro de conexão com a API' };
    }
}