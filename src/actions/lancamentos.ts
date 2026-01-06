// src/actions/lancamentos.ts

"use server"
// import 'server-only';
import * as TypeLancamento from "@/@types/lancamentos"
import { revalidatePath } from 'next/cache';
import { API_BASE_URL } from '@/config/api'
import { client_axios } from "@/lib/axios";


// ===> Action de Buscar todos os Lançamentos
export async function AllLancamentos(): Promise<TypeLancamento.LancamentoReadType[]> {

    try {
        const response = await client_axios.get<TypeLancamento.LancamentoReadType[]>('/lancamentos');

        return response.data;
    } catch (error: any) {
        throw new Error('Falha ao buscar os dados de lançamentos.');
    }

}

// ===> Action de Criar um Lançamento
export async function CreateLancamento(data: TypeLancamento.LancamentoCreateType) {
    try {
        const res = await fetch(`${API_BASE_URL}/lancamentos`, {
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