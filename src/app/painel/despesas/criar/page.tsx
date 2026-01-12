// src/app/painel/despesas/criar/page.tsx

import { Metadata } from "next";
import DespesasCriarForm from "@/components/despesas/DespesasCriarForm";

export const metadata: Metadata = {
    title: "Criar Despesa"
}

export default function CriarDespesa() {
    return (
        <DespesasCriarForm />
    );
}