// src/actions/lancamentos.ts

import { LancamentoRead } from "@/@types/lancamentos";
import 'server-only';

// Define a URL base da sua API FastAPI
let API_BASE_URL: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'production') {
    API_BASE_URL = process.env.API_INTERNAL_URL;
    API_BASE_URL = `http://${API_BASE_URL}:${process.env.API_PORT}/lancamentos/listar_todos`;
} else {
    API_BASE_URL = process.env.API_LOCAL_URL;
    API_BASE_URL = `${API_BASE_URL}/lancamentos/listar_todos`;
}


export async function AllLancamentos(): Promise<LancamentoRead[]> {
    // Verifica se a URL da API está definida, caso contrário lança um erro
    if (!API_BASE_URL) {
        throw new Error('A URL da API (NEXT_PUBLIC_API_BASE_URL) não foi configurada.');
    };

    // Configurações de cache do Next.js: 'no-store' garante que a busca sempre ocorrerá
    // Se quiser cachear por um tempo, use { next: { revalidate: 60 } }
    const res = await fetch(API_BASE_URL, {
        cache: 'no-store'
    });

    // Lança um erro que será capturado pelo try/catch no componente da página
    if (!res.ok) {
        throw new Error('Falha ao buscar os dados de lançamentos. Status: ${res.status}');
    }

    return res.json();
}
