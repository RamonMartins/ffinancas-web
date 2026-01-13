// src/components/carteiras/CarteirasTable.tsx

import { CircleCheck, CircleMinus, DollarSign, Pencil } from "lucide-react";


export default async function CarteirasTable() {
    return(
        <>
            <div className="hidden md:flex flex-col w-full gap-2.5">
               { /* Card Web */ }
                <div className="flex flex-row w-full p-2 justify-between rounded-md bg-(--color_primary_default)/10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Título */ }
                    <div className="flex flex-col gap-1 w-[40%]">
                        <span className="text-muted-foreground text-sm">Título</span>
                        <span>Banco Bradesco</span>
                    </div>
                    { /* Rótulo Saldo */ }
                    <div className="flex flex-col gap-1 w-[30%]">
                        <span className="text-muted-foreground text-sm">Saldo</span>
                        <span>R$ 20,00</span>
                    </div>
                    { /* Rótulo Ações */ }
                    <div className="flex flex-col gap-1 w-[30%]">
                        <span className="text-muted-foreground text-sm">Ações</span>
                        <div className="flex flex-row gap-3">
                            <DollarSign size={20} color="var(--success)" />
                            <Pencil size={20} color="var(--color_primary_default)" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full p-2 rounded-md bg-[#f2f2f2] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Status */ }
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-muted-foreground text-sm">Status</span>
                        <CircleCheck size={20} color="var(--success)" />
                    </div>
                </div> 
            </div>
            

            <div className="flex md:hidden flex-col w-full gap-2.5">
                { /* Card Mobile */ }
                <div className="flex flex-col w-full p-2 justify-between rounded-md bg-(--color_primary_default)/10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Título */ }
                    <div className="flex flex-col gap-1 w-[40%]">
                        <span className="text-muted-foreground text-sm">Título:</span>
                        <span>Banco Bradesco</span>
                    </div>
                    { /* Rótulo Saldo */ }
                    <div className="flex flex-col gap-1 w-[30%]">
                        <span className="text-muted-foreground text-sm">Saldo:</span>
                        <span>R$ 20,00</span>
                    </div>
                    { /* Rótulo Ações */ }
                    <div className="flex flex-col gap-1 w-[30%]">
                        <span className="text-muted-foreground text-sm">Ações:</span>
                        <div className="flex flex-row gap-3">
                            <DollarSign size={20} color="var(--success)" />
                            <Pencil size={20} color="var(--color_primary_default)" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full p-2 rounded-md bg-[#f2f2f2] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Status */ }
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-muted-foreground text-sm">Status</span>
                        <CircleCheck size={20} color="var(--success)" />
                    </div>
                </div>
            </div>
        </>
    );
}