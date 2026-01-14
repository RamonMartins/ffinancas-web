"use client";

// PÁGINA DE ERRO GERAL

import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface ErrorViewProps {
  error?: Error;
  reset: () => void;
}

export default function ErrorView({ error, reset }: ErrorViewProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleTryAgain() {
    startTransition(() => {
      // O refresh força o Next.js a buscar os dados no servidor novamente
      router.refresh();
      // O reset limpa o estado de erro do Error Boundary
      reset();
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="bg-orange-50 p-4 rounded-full mb-6">
        <AlertCircle className={`w-10 h-10 text-orange-500 ${isPending ? "animate-pulse" : ""}`} />
      </div>

      <h2 className="text-xl font-bold text-gray-800">Algo não saiu como esperado</h2>
      <p className="text-gray-500 mt-2 mb-8 max-w-xs text-center">
        Tivemos um problema temporário ao carregar esta página. Por favor, tente novamente ou volte para o início.
      </p>

      <div className="flex flex-wrap w-full gap-3 justify-center">
        <button
          onClick={handleTryAgain}
          disabled={isPending}
          className="flex w-41.25 items-center justify-center gap-2 bg-blue-600 text-white py-1 px-2 rounded-md font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isPending ? "animate-spin" : ""}`} />
          {isPending ? "Carregando..." : "Atualizar"}
        </button>
        
        <a 
          href="/"
          className="flex w-41.25 items-center justify-center gap-2 bg-gray-200 text-gray-700 py-1 px-2 rounded-md font-semibold hover:bg-gray-200 transition-all"
        >
          <Home className="w-4 h-4" />
          Ir para o início
        </a>
      </div>

      <details className="mt-8 transition-opacity cursor-pointer text-center text-gray-500">
        <summary className="text-[10px] uppercase tracking-widest outline-none">
          Informações Técnicas
        </summary>
        <p className="text-[10px] font-mono mt-2">
          O erro foi registrado e nossa equipe será notificada.
        </p>
      </details>
    </div>
  );
}