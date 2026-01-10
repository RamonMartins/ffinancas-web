// src/app/(auth)/grupo-familiar/page.tsx

import { Metadata } from 'next';
import GrupoFamiliarForm from '@/components/auth/GrupoFamiliarForm';
import { client_axios } from '@/lib/axios';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Grupo Familiar'
}

export default async function GrupoFamiliarPage() {
    const responseUser = await client_axios.get("/usuarios/me");
    const userData = responseUser.data;

    if (userData.lider_familiar === false || userData.grupo_id !== null) {
        redirect("/painel");
    }

    return (
        <GrupoFamiliarForm />
    );
}
