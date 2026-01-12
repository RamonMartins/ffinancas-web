// src/app/(auth)/grupo-familiar/page.tsx

import { Metadata } from 'next';
import GrupoFamiliarForm from '@/components/auth/GrupoFamiliarForm';
import { usuarioAtual } from '@/actions/usuarios';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Grupo Familiar'
}

export default async function GrupoFamiliarPage() {
    const { usuario, error } = await usuarioAtual();

    if (error || !usuario) {
        redirect("/entrar");
    }

    if (usuario.lider_familiar === false || usuario.grupo_familiar_id !== null) {
        redirect("/painel");
    }

    return (
        <GrupoFamiliarForm />
    );
}
