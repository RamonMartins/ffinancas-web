// src/app/(auth)/cadastrar/page.tsx

import type { Metadata } from "next";
import CadastroForm from "@/components/auth/CadastroForm";

export const metadata: Metadata = {
    title: "Cadastrar",
}

export default function CadastrarPage() {
    return (
        <CadastroForm />
    );
}
