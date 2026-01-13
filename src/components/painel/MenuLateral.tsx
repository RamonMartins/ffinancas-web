// src/components/painel/MenuLateral.tsx
"use client"

import { LayoutDashboard, LogOut, Receipt, User, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLateralProps {
    logoutAction: any;
    onClose?: () => void;
}

export default function MenuLateral({logoutAction, onClose}: MenuLateralProps) {
    // Pega rota atual
    const rotaAtual = usePathname();
    // Verifica se esta na rota principal do painel
    const isDashboard = rotaAtual === "/painel";
    // Verifica em qual rota esta dentro de painel
    const isDespesas = rotaAtual.startsWith("/painel/despesas");
    const isReceitas = rotaAtual.startsWith("/painel/receitas");
    const isCarteiras = rotaAtual.startsWith("/painel/carteiras");
    const isConta = rotaAtual.startsWith("/painel/conta");

    return (
        <div className="min-h-screen w-fit flex flex-col justify-between px-3 py-5 bg-white">
            { /* Topo Menu */ }
            <div className="flex flex-col gap-2.5">
                { /* Header Menu */ }
                <div className="flex flex-row items-center gap-5">
                    { /* Logo */ }
                    <Link href="/">
                        <div className="flex place-self-left font-rochester text-(--color_primary_default) items-center space-x-2" >
                            <div className='text-[40px] tracking-[6px] leading-[1em]'>
                                <span>FF</span>
                            </div>
                            <div className='w-px h-9 bg-gray-400' />
                            <div className='flex flex-col text-[18px] leading-none'>
                                <span>Ferreira</span>
                                <span>Finanças</span>
                            </div>
                        </div>
                    </Link>

                    { /* Selo painel */ }
                    <div className="bg-gray-300 flex flex-row h-fit px-2 rounded-[2px]">
                        <span className="text-[#626262] text-xs h-fit font-semibold">Painel</span>
                    </div>
                </div>

                { /* Botões navegação */ }
                <div className="flex flex-col gap-2.5">
                    { /* Botão Dashboard */ }
                    <Link
                        href="/painel"
                        onClick={onClose}
                        className={`group btn-menu-lateral
                            ${isDashboard
                                ? "bg-(--color_primary_default)/20"
                                : "bg-white hover:bg-(--color_primary_default)/7"
                            }`}
                    >
                        <div
                            className={`p-1.25 rounded-[10px]
                                ${isDashboard
                                    ? "bg-(--color_primary_default)"
                                    : "bg-white"
                                }`}
                        >
                            <LayoutDashboard size={20} color={isDashboard ? "#fff" : "#A0AEC0"} />
                        </div>
                        <span className={`text-sm ${isDashboard ? "" : "text-[#A0AEC0]"}`}>Dashboard</span>
                    </Link>
                    
                    { /* Botão Despesas */ }
                    <Link
                        href="/painel/despesas"
                        onClick={onClose}
                        className={`group btn-menu-lateral
                            ${isDespesas
                                ? "bg-(--color_primary_default)/20"
                                : "bg-white hover:bg-(--color_primary_default)/7"
                            }`}
                    >
                        <div
                            className={`p-1.25 rounded-[10px]
                                ${isDespesas
                                    ? "bg-(--color_primary_default)"
                                    : "bg-white"
                                }`}
                        >
                            <Receipt size={20} color={isDespesas ? "#fff" : "#A0AEC0"} />
                        </div>
                        <span className={`text-sm ${isDespesas ? "" : "text-[#A0AEC0]"}`}>Despesas</span>
                    </Link>

                    { /* Botão Carteiras */ }
                    <Link
                        href="/painel/carteiras"
                        onClick={onClose}
                        className={`group btn-menu-lateral
                            ${isCarteiras
                                ? "bg-(--color_primary_default)/20"
                                : "bg-white hover:bg-(--color_primary_default)/7"
                            }`}
                    >
                        <div
                            className={`p-1.25 rounded-[10px]
                                ${isCarteiras
                                    ? "bg-(--color_primary_default)"
                                    : "bg-white"
                                }`}
                        >
                            <Wallet size={20} color={isCarteiras ? "#fff" : "#A0AEC0"} />
                        </div>
                        <span className={`text-sm ${isCarteiras ? "" : "text-[#A0AEC0]"}`}>Carteiras</span>
                    </Link>
                </div>
            </div>

            { /* Fundo Menu */ }
            <div className="flex flex-col gap-2.5">
                <hr />

                { /* Botão Conta */ }
                <Link
                    href="/painel/conta"
                    onClick={onClose}
                    className={`group btn-menu-lateral
                        ${isConta
                            ? "bg-(--color_primary_default)/20"
                            : "bg-white hover:bg-(--color_primary_default)/7"
                        }`}
                >
                    <div
                        className={`p-1.25 rounded-[10px]
                            ${isConta
                                ? "bg-(--color_primary_default)"
                                : "bg-white"
                            }`}
                    >
                        <User size={20} color={isConta ? "#fff" : "#A0AEC0"} />
                    </div>
                    <span className={`text-sm ${isConta ? "" : "text-[#A0AEC0]"}`}>Conta</span>
                </Link>

                { /* Botão Sair */ }
                <form action={async () => {
                    onClose?.();
                    setTimeout(async () => {await logoutAction();}, 10);
                }}>
                    <button
                        type="submit"
                        className="group btn-menu-lateral w-full cursor-pointer bg-white hover:bg-(--color_primary_default)/7"
                    >
                        <div
                            className="p-1.25 rounded-[10px] bg-white"
                        >
                            <LogOut size={20} color="#A0AEC0" />
                        </div>
                        <span className="text-sm text-[#A0AEC0]">Sair</span>
                    </button>
                </form>
            </div>
        </div>
    );
}