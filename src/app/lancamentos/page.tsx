// app/lancamentos/page.tsx
import { LancamentoReadType } from '@/@types/lancamentos';
import { AllLancamentos } from '@/actions/lancamentos';
import CreateLancamentoForm from '@/components/lancamentos/LancamentoForm'

// Adicione metadados específicos para esta página
export const metadata = {
  title: 'Lançamentos',
};

// Força renderização dinâmica (SSR) para esta rota, evitando tentativas
// de pré-renderização estática quando fetch é usado com comportamento dinâmico.
export const dynamic = 'force-dynamic';

/**
 * Componente da Página de Listagem de Lançamentos
 */
export default async function LancamentosPage() {
  let lancamentos: LancamentoReadType[] = [];
  let error: string | null = null;

  try {
    // A função é chamada diretamente no componente de servidor
    lancamentos = await AllLancamentos();
  } catch (err) {
    console.error(err);
    error = 'Não foi possível carregar os lançamentos. Tente novamente mais tarde.';
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">📋 Lançamentos Financeiros</h1>

      <CreateLancamentoForm />
      
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