// src/app/loading.tsx

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner animado com a cor do seu projeto */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-(--color_primary_default)"></div>
        
        {/* Texto opcional */}
        <p className="font-rochester text-(--color_primary_default) text-xl animate-pulse">
          Ferreira Finanças
        </p>
      </div>
    </div>
  );
}