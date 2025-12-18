// src/app/lancamentos/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">📋 Lançamentos Financeiros</h1>
      <div className="flex items-center justify-center p-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Acordando servidores e carregando dados...</p>
        </div>
      </div>
    </div>
  );
}