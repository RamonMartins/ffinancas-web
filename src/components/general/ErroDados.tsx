
"use client"

// ERRO AO CARREGAR DADOS EM PÁGINA DENTRO DE ROTAS

import { SearchAlert } from "lucide-react";

export default function ErroDados() {
    return (
        <div className="flex flex-col p-4 bg-red-100 border border-red-400 text-red-700 rounded gap-2">
            <div className="flex flex-row gap-2">
                <SearchAlert color="var(--color-red-700)" />
                <strong>Erro:</strong>
            </div>

            <p className="text-sm">Tente atualizar a página em alguns instantes.</p>
            
            <button
                onClick={() => window.location.reload()}
                className="w-fit px-4 py-2 bg-red-700 text-white text-xs font-bold rounded hover:bg-red-800 transition-colors"
            >
                Atualizar Página
            </button>
        </div>
    );
}