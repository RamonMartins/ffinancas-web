// src/app/painel/carteiras/criar/page.tsx

import { Metadata } from "next"
import CarteirasCriarForm from "@/components/carteiras/CarteirasCriarForm";

export const metadata: Metadata = {
    title: "Criar Carteira"
}

export default function CriarCarteira() {
    return (
        <CarteirasCriarForm />
    );
}