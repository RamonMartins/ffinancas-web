// src/app/(auth)/entrar/page.tsx

import { Metadata } from 'next'
import EntrarForm from '@/components/auth/EntrarForm';

export const metadata: Metadata = {
    title: 'Entrar',
}

export default async function EntrarPage() {
    return (
        <EntrarForm />
    );
}
