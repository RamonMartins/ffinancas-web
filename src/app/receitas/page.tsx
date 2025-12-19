// src/app/receitas/page.tsx

"use client";

import React, { useState } from 'react';

export default function ReceitasPage() {
    const [fotoPreview, setFotoPreview] = useState<string | null>(null);
    
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFotoPreview(URL.createObjectURL(file));
        }
      };

    return (
        <form className="w-max p-5 flex flex-col gap-4">
        
        {/* Nome Completo */}
        <div>
            <label className="block text-gray-700 font-semibold mb-1">Nome completo</label>
            <input 
            type="text" 
            placeholder="José da Silva" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            />
        </div>

        {/* Grupo Familiar */}
        <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1">
            Grupo Familiar 
            <span className="ml-1 text-gray-400 cursor-help text-xs border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center">i</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Escolha um Grupo Familiar</option>
            </select>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
            <input type="checkbox" id="lider" className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
            <label htmlFor="lider" className="text-gray-700 font-semibold">Sou um Líder Familiar</label>
        </div>

        {/* Email */}
        <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input 
            type="email" 
            placeholder="josesilva@exemplo.com" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            />
        </div>

        {/* Senhas */}
        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Senha</label>
            <input 
                type="password" 
                placeholder="******" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            />
            </div>
            <div>
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Confirme a senha</label>
            <input 
                type="password" 
                placeholder="******" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            />
            </div>
        </div>

        {/* Foto de Perfil */}
        <div>
            <label className="block text-gray-700 font-semibold mb-2">Foto Perfil</label>
            <div className="flex flex-col items-start space-y-3">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
                {fotoPreview ? (
                <img src={fotoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                )}
            </div>
            <label className="cursor-pointer bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded shadow-sm hover:bg-blue-50 transition-colors font-semibold">
                Selecionar
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
            </label>
            </div>
        </div>

        {/* Botão Cadastrar */}
        <div className="pt-4 flex flex-col items-end">
            <button 
            type="submit" 
            className="w-48 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors shadow-md"
            >
            Cadastrar
            </button>
            <a href="#" className="mt-4 text-blue-900 text-sm font-semibold underline underline-offset-4">
            Já possui cadastro? Entre.
            </a>
        </div>
    </form>
    )
};