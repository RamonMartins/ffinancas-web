// app/lancamentos/page.tsx
import { LancamentoRead } from '@/types/lancamentos'; // Certifique-se de que o caminho está correto

// Força renderização dinâmica (SSR) para esta rota, evitando tentativas
// de pré-renderização estática quando fetch é usado com comportamento dinâmico.
export const dynamic = 'force-dynamic';

// Define a URL base da sua API FastAPI
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Mude para a URL real da sua API

/**
 * Função para buscar os dados de lançamentos da API FastAPI.
 */
async function getLancamentos(): Promise<LancamentoRead[]> {
  // Configurações de cache do Next.js: 'no-store' garante que a busca sempre ocorrerá
  // Se quiser cachear por um tempo, use { next: { revalidate: 60 } }
  const res = await fetch(`${API_BASE_URL}/lancamentos`, {
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">📋 Lançamentos Financeiros</h1>
      
      {/* Exibe erro se houver falha na busca */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erro:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {/* Condição para exibir a lista ou mensagem de vazio */}
      {lancamentos.length === 0 && !error ? (
        <p className="text-gray-500 text-lg">Nenhum lançamento encontrado.</p>
      ) : (
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Descrição
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tipo
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lancamentos.map((lancamento) => (
                <tr key={lancamento.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lancamento.titulo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* Formata a data para um formato mais legível */}
                    {new Date(lancamento.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${lancamento.is_active 
                                ? 'bg-green-100 text-green-800' // Fundo verde, texto verde escuro para 'Ativo'
                                : 'bg-red-100 text-red-800'    // Fundo vermelho, texto vermelho escuro para 'Inativo'
                            }`
                        }
                    >
                        {lancamento.is_active ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// **OPCIONAL:** Adicione metadados específicos para esta página
export const metadata = {
  title: 'Lista de Lançamentos | Seu Projeto',
  description: 'Lista completa de todos os lançamentos financeiros.',
};