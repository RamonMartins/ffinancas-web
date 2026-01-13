// src/components/carteiras/CarteirasCriarForm.tsx
"use client"

import { useRouter } from "next/navigation";

export default function CarteirasCriarForm() {
    const router = useRouter();

    return (
        <>
            <span>formulario de criar carteira</span>

            <button className="btn-cinza-global w-fit" onClick={() => router.back()}>
                Voltar
            </button>
        </>
        
    );
}