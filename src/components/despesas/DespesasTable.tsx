// src/components/tables/DespesasTable.tsx

import { CircleCheck, CircleMinus } from "lucide-react";


export default async function DespesasTable() {
    return(
        <>
            <div className="hidden md:flex flex-col w-full gap-2.5">
               { /* Card Web */ }
                <div className="flex flex-row w-full p-2 justify-between rounded-md bg-(--color_primary_default)/10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Status */ }
                    <div className="flex flex-col items-center gap-1 w-[7%]">
                        <span className="text-muted-foreground text-sm">Status</span>
                        <CircleCheck size={20} color="var(--success)" />
                        <CircleMinus size={20} color="var(--destructive)" />
                    </div>
                    { /* Rótulo Título */ }
                    <div className="flex flex-col gap-1 w-[28%]">
                        <span className="text-muted-foreground text-sm">Título</span>
                        <span>Adventista</span>
                    </div>
                    { /* Rótulo Periodicidade */ }
                    <div className="flex flex-col gap-1 w-[20%]">
                        <span className="text-muted-foreground text-sm">Periodicidade</span>
                        <span>Recorrente</span>
                    </div>
                    { /* Rótulo Data */ }
                    <div className="flex flex-col gap-1 w-[20%]">
                        <span className="text-muted-foreground text-sm">Data Término</span>
                        <span>Indeterminado</span>
                    </div>
                    { /* Rótulo Valor da Despesa */ }
                    <div className="flex flex-col gap-1 w-[20%]">
                        <span className="text-muted-foreground text-sm">Valor da Despesa</span>
                        <span className="text-destructive">-R$ 500,00</span>
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
                <div className="flex flex-col w-full p-2 gap-2 justify-between rounded-md bg-(--color_primary_default)/10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    { /* Rótulo Status */ }
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-sm">Status:</span>
                        <CircleCheck size={20} color="var(--success)" />
                        <CircleMinus size={20} color="var(--destructive)" />
                    </div>
                    { /* Rótulo Título */ }
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-sm">Título:</span>
                        <span>Adventista</span>
                    </div>
                    { /* Rótulo Periodicidade */ }
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-sm">Periodicidade:</span>
                        <span>Recorrente</span>
                    </div>
                    { /* Rótulo Data */ }
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-sm">Data Término:</span>
                        <span>Indeterminado</span>
                    </div>
                    { /* Rótulo Valor da Despesa */ }
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-sm">Valor da Despesa:</span>
                        <span className="text-destructive">-R$ 500,00</span>
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