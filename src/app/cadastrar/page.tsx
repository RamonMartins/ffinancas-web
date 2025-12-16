// src/app/cadastrar/page.tsx

import type { Metadata } from "next";
import Logo from "../../components/general/logo"
import "./styles.css";

import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
    title: "Cadastro",
}

export default function CadastrarPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col bg-white rounded-[10px] shadow-xl w-full max-w-97-500">
                <div className="grid grid-cols-1 grid-rows-1 bg-(--color_primary_default) p-[8px] rounded-t-[10px]">
                    <Logo />
                    <span className="text-white place-self-center col-start-1 row-start-1 z-10">Cadastrar</span>
                </div>
                <div className="p-[10px]">
                </div>
            </div>
        </div>
    );
}
