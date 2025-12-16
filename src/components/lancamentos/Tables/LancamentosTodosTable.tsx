// components/lancamentos/Tables/LancamentosTodosTable.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { LancamentoRead } from '@/@types/lancamentos';
import CreateLancamentoForm from '@/components/lancamentos/Forms/LancamentoForm';

let API_BASE_URL: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'production') {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    API_BASE_URL = `https://${API_BASE_URL}/lancamentos/listar_todos`;
} else {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    API_BASE_URL = `${API_BASE_URL}/lancamentos/listar_todos`;
}


// Função utilitária para buscar (sem a lógica de retry complexa, para simplificar)
async function fetchLancamentos(): Promise<LancamentoRead[]> {
    if (!API_BASE_URL) {
        console.error('API_BASE_URL não configurada.');
        return [];
    }
    
    // ATENÇÃO: Se usar http://localhost:8000, isso deve funcionar no CLIENTE.
    // Se usar a URL do Railway, o cliente fará a requisição diretamente.
    const res = await fetch(API_BASE_URL, {
         // O cache no CSR é gerenciado pelo navegador
    });

    if (!res.ok) {
        throw new Error('Falha ao buscar os dados de lançamentos no cliente.');
    }
    return res.json();
}

export default function LancamentosClientPage() {
    const [lancamentos, setLancamentos] = useState<LancamentoRead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // O useEffect garante que o fetch só será executado no navegador (client side)
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchLancamentos();
                setLancamentos(data);
            } catch (err) {
                console.error(err);
                setError('Não foi possível carregar os lançamentos (CSR).');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []); // Array de dependências vazio para rodar apenas uma vez após a montagem

    if (loading) {
        return <div className="text-center p-8 text-indigo-600">Carregando Lançamentos...</div>;
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Erro:</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-indigo-700">📋 Lançamentos Financeiros</h1>
            
            <CreateLancamentoForm />

            {/* Condição para exibir a lista ou mensagem de vazio */}
            {lancamentos.length === 0 ? (
                <p className="text-gray-500 text-lg">Nenhum lançamento encontrado.</p>
             ) : (
                /* ... (Sua tabela de listagem, usando `lancamentos` do estado) ... */
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Título
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Data
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {lancamentos.map((lancamento) => (
                            <tr key={lancamento.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {lancamento.titulo}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {/* Formata a data para um formato mais legível */}
                                    {new Date(lancamento.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${lancamento.is_active 
                                                ? 'bg-green-100 text-green-800' // Fundo verde, texto verde escuro para 'Ativo'
                                                : 'bg-red-100 text-red-800'    // Fundo vermelho, texto vermelho escuro para 'Inativo'
                                            }`
                                        }
                                    >
                                        {lancamento.is_active ? 'Ativo' : 'Inativo'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}