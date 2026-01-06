// src/app/(auth)/cadastrar/page.tsx

import type { Metadata } from "next";
import CadastroForm from "@/components/auth/CadastroForm";
import { AllGruposFamiliares } from '@/actions/grupos_familiares';

export const metadata: Metadata = {
    title: "Cadastrar",
}

//export const dynamic = 'force-dynamic';

export default async function CadastrarPage() {
    const grupos_familiares = await AllGruposFamiliares();

    return (
        <CadastroForm grupos={grupos_familiares} />
    );
}
