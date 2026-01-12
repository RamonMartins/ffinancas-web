// src/components/forms/DespesasCriarForm.tsx
"use client"

import { useRouter } from "next/navigation";

export default function DespesasCriarForm() {
    const router = useRouter();

    return (
        <>
            <span>formulario de criar despesa</span>

            <button className="btn-cinza-global w-fit" onClick={() => router.back()}>
                Voltar
            </button>
        </>
        
    );
}