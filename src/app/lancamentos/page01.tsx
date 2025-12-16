// app/lancamentos/page.tsx

// Apenas a importação do componente cliente
import LancamentosClientPage from '@/components/lancamentos/Tables/LancamentosTodosTable';
import { Metadata } from 'next';

/**
 * ATENÇÃO: Removemos a função getLancamentos e o async/await.
 * Tudo será feito no cliente.
 */

// A página AGORA É UM COMPONENTE DE SERVIDOR que apenas envia o cliente
export default function LancamentosPage() {
    return (
        // Renderiza o componente cliente que fará o fetch no navegador
        <LancamentosClientPage /> 
    );
}

// Metadata (Pode permanecer no Server Component)
export const metadata: Metadata = {
    title: 'Lista de Lançamentos',
    description: 'Lista completa de todos os lançamentos financeiros',
};

// ATENÇÃO: O dynamic = 'force-dynamic' é desnecessário aqui, 
// mas o Next.js pode tentar otimizar. Se precisar garantir
// que NADA neste nível seja estático, mantenha.
export const dynamic = 'force-dynamic';