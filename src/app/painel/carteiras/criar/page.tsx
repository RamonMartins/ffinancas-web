// src/app/painel/carteiras/criar/page.tsx

import { Metadata } from "next"
import CarteirasCriarForm from "@/components/carteiras/CarteirasCriarForm";

export const metadata: Metadata = {
    title: "Criar Carteira"
}

export default function CriarCarteira() {
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="text-2xl font-roboto font-semibold">Nova Carteira</h1>

            <div className="flex flex-col bg-white rounded-md shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] p-2">
                <CarteirasCriarForm />
            </div>
        </div>
    );
}