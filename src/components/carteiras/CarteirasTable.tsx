// src/components/carteiras/CarteirasTable.tsx

import { DollarSign, Pencil } from "lucide-react";
import { AllCarteirasMe } from "@/actions/carteiras";
import ErroDados from "../general/ErroDados";
import { moedaFormatada } from "../utils/moedaFormatada";


export default async function CarteirasTable() {
    const { data: carteiras, error } = await AllCarteirasMe();

    // Caso a requisição tenha dado erro, exibe isso
    if (error) {
        return (
            <ErroDados />
        );
    }

    // Caso a requisição retorne uma lista vazia
    if (carteiras.length == 0) {
        return (
            <div className="p-8 text-center text-gray-500 border-2 border-dashed rounded">
                <p>Você não possui carteiras cadastradas.</p>
            </div>
        );
    }

    return(
        <div className="flex flex-col w-full gap-2.5">
            { /* Card */ }
            {carteiras.map((carteira, index) => {
                const corCard = index % 2 === 0 ? "bg-(--color_primary_default)/10" : "bg-[#f2f2f2]"

                return (
                    <div className={`flex flex-col sm:flex-row w-full p-2 justify-between rounded-md ${corCard} shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]`}>
                        { /* Rótulo Título */ }
                        <div className="flex flex-col gap-1 w-[40%]">
                            <span className="text-muted-foreground text-sm after:content-[':'] sm:after:content-none">Título</span>
                            <span>{carteira.titulo}</span>
                        </div>
                        { /* Rótulo Saldo */ }
                        <div className="flex flex-col gap-1 w-[30%]">
                            <span className="text-muted-foreground text-sm after:content-[':'] sm:after:content-none">Saldo</span>
                            <span className={`${carteira.saldo < 0 ? "text-destructive" : "text-(--color_primary_default)"}`}>{moedaFormatada(carteira.saldo)}</span>
                        </div>
                        { /* Rótulo Ações */ }
                        <div className="flex flex-col gap-1 w-[30%]">
                            <span className="text-muted-foreground text-sm after:content-[':'] sm:after:content-none">Ações</span>
                            <div className="flex flex-row gap-3">
                                <DollarSign size={20} color="var(--success)" />
                                <Pencil size={20} color="var(--color_primary_default)" />
                            </div>
                        </div>
                    </div>
                );}
            )}
        </div>
    );
}