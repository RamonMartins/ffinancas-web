// src/components/painel/Breadcumb.tsx
"use client"

import { usePathname } from "next/navigation";

export default function Breadcumb() {
    const rotaAtual = usePathname();

    const isDashboard = rotaAtual === "/painel";
    const isDespesas = rotaAtual.startsWith("/painel/despesas");
    const isReceitas = rotaAtual.startsWith("/painel/receitas");
    const isCarteiras = rotaAtual.startsWith("/painel/carteiras");
    const isConta = rotaAtual.startsWith("/painel/conta");

    return (
        <div className="text-xs text-gray-500 font-semibold">
            <span>Painel</span>
            <span>{" > "}</span>

            {isDashboard && (
                <span>Dashboard</span>
            )}

            {isDespesas && (
                <span>Despesas</span>
            )}

            {isReceitas && (
                <span>Receitas</span>
            )}

            {isCarteiras && (
                <span>Carteiras</span>
            )}

            {isConta && (
                <span>Conta</span>
            )}

            
        </div>
    );
}