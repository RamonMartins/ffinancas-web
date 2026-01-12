// src/components/painel/MenuTopo.tsx
"use client"

import Image from "next/image";
import { dataMenu } from "@/components/utils/dataFormatada";
import { CircleX, Menu } from "lucide-react";
import MenuLateral from "./MenuLateral";
import { useState } from "react";

interface MenuTopoProps {
    usuarioLogado: any;
    logoutAction: any;
}

export default function MenuTopo({ usuarioLogado, logoutAction }: MenuTopoProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex flex-row items-center justify-between lg:justify-end px-3 py-2.5 bg-(--color_primary_default)">
            { /* Dados usuário */ }
            <div className="flex flex-row items-center gap-1.5">
                <Image src="/imgs/user-icon.jpg" alt="Foto perfil" className="flex rounded-full" width={25} height={25} />

                <div className="flex flex-col">
                    {usuarioLogado && (<span className="text-white">Olá, {usuarioLogado.nome.split(" ")[0]}</span>)}
                    {dataMenu() && (<span className="text-xs font-semibold text-white opacity-70">{dataMenu()}</span>)}
                </div>
            </div>

            { /* Botão Menu */ }
            <button className="flex h-fit lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu color="#ffffff" />
            </button>

            { /* Menu Lateral Flutuante */ }
            {isOpen && (
                <>
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-10 bg-gray-600/30 backdrop-blur-xs"
                    />

                    <div className="absolute flex flex-row justify-end right-0 top-0 z-20">
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <CircleX color="#ffffff" size={35} className="m-2.5" />
                        </div>
                        
                        <MenuLateral logoutAction={logoutAction} onClose={() => setIsOpen(false)} />
                    </div>
                </>
            )}
            
        </div>
    );
}