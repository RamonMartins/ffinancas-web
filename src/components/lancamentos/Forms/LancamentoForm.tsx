// components/lancamentos/Forms/FormLancamento.tsx
"use client";

import React, { useState } from 'react';
import { CreateLancamento } from '@/actions/lancamentos'


export default function CreateLancamentoForm() {
    const [titulo, setTitulo] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const result = await CreateLancamento({
            titulo: titulo,
            is_active: isActive
        });

        if (result.success) {
            // Informa mensagem de sucesso
            setMessage({type: 'success', text: 'Lançamento criado com sucesso!'});
            // Limpa os dois campos
            setTitulo('');
            setIsActive(true);
        } else {
            setMessage({type: 'error', text: result.error || 'Erro desconhecido'});
        }

        setLoading(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">➕ Novo Lançamento</h2>
            
            {message && (
                <div 
                    className={`p-3 mb-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                
                {/* Input Título */}
                <div className="flex-1">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título/Descrição</label>
                    <input
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        disabled={loading}
                    />
                </div>

                {/* Select is_active */}
                <div className="w-full md:w-1/4">
                    <label htmlFor="is_active" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                        id="is_active"
                        value={isActive.toString()} // Converte booleano para string para o select
                        onChange={(e) => setIsActive(e.target.value === 'true')} // Converte string de volta para booleano
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700"
                        disabled={loading}
                    >
                        <option value="true">Ativo (True)</option>
                        <option value="false">Inativo (False)</option>
                    </select>
                </div>

                {/* Botão de Envio */}
                <div className="w-full md:w-auto self-end">
                    <button
                        type="submit"
                        disabled={loading || !titulo}
                        className={`w-full md:w-auto px-4 py-2 text-white font-semibold rounded-md shadow-md transition duration-150 
                            ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                        `}
                    >
                        {loading ? 'Criando...' : 'Salvar Lançamento'}
                    </button>
                </div>
            </form>
        </div>
    );
}