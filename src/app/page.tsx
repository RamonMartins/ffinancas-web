// app/page.tsx
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferreira Finanças",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-extrabold mb-8 text-indigo-800">
        Bem-vindo ao Ferreira Finanças
      </h1>
      
      <p className="text-xl text-gray-600 mb-10">
        Acesse a lista completa de lançamentos para gerenciar suas finanças.
      </p>

      {/* O componente Link do Next.js habilita a navegação otimizada (sem recarregar a página).
        O 'href' aponta para a rota que criamos: /lancamentos
      */}
      <Link 
        href="/lancamentos"
        className="
          px-8 py-3 
          text-lg font-semibold text-white 
          bg-indigo-600 rounded-lg 
          shadow-lg 
          transition duration-300 ease-in-out 
          hover:bg-indigo-700 hover:shadow-xl
          focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
        "
      >
        Ver Lançamentos 📈
      </Link>
    </div>
  );
}