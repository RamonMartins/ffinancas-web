import { LoaderCircle } from "lucide-react";

export default function LoadingGeral() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <LoaderCircle className="h-12 w-12 animate-spin text-(--color_primary_default)" />
                <p className="font-rochester text-(--color_primary_default) text-xl animate-pulse">
                    Ferreira Finanças
                </p>
            </div>
        </div>
    );
}