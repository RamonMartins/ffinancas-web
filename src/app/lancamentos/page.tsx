// app/lancamentos/page.tsx
import { LancamentoRead } from '@/@types/lancamentos'; // Certifique-se de que o caminho está correto
import LancamentosClientPage from '@/components/lancamentos/Tables/LancamentosTodosTable';

// Força renderização dinâmica (SSR) para esta rota, evitando tentativas
// de pré-renderização estática quando fetch é usado com comportamento dinâmico.
export const dynamic = 'force-dynamic';

// Define a URL base da sua API FastAPI
let API_BASE_URL: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'production') {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    API_BASE_URL = `https://${API_BASE_URL}/lancamentos/listar_todos`;
} else {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    API_BASE_URL = `${API_BASE_URL}/lancamentos/listar_todos`;
}

/**
 * Função para buscar os dados de lançamentos da API FastAPI.
 */
async function getLancamentos(): Promise<LancamentoRead[]> {
  if (!API_BASE_URL) {
    throw new Error('A URL da API (NEXT_PUBLIC_API_BASE_URL) não foi configurada.');
  }

  // Configurações de cache do Next.js: 'no-store' garante que a busca sempre ocorrerá
  // Se quiser cachear por um tempo, use { next: { revalidate: 60 } }
  const res = await fetch(API_BASE_URL, {
    cache: 'no-store', 
  });

  if (!res.ok) {
    // É uma boa prática lidar com erros, por exemplo, lançando um erro
    // que pode ser capturado por um boundary de erro do Next.js
    throw new Error('Falha ao buscar os dados de lançamentos');
  }

  // A resposta é parseada como JSON e tipada
  return res.json();
}

/**
 * Componente da Página de Listagem de Lançamentos
 */
export default async function LancamentosPage() {
  let lancamentos: LancamentoRead[] = [];
  let error: string | null = null;

  try {
    // A função é chamada diretamente no componente de servidor
    lancamentos = await getLancamentos();
  } catch (err) {
    console.error(err);
    error = 'Não foi possível carregar os lançamentos. Tente novamente mais tarde.';
  }

  return (
    <LancamentosClientPage />
  );
}

// **OPCIONAL:** Adicione metadados específicos para esta página
export const metadata = {
  title: 'Lista de Lançamentos | Seu Projeto',
  description: 'Lista completa de todos os lançamentos financeiros.',
};