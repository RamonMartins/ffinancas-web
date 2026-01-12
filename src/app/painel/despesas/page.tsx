// src/app/painel/despesas/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import DespesasTable from "@/components/tables/DespesasTable";


export const metadata: Metadata = {
    title: "Despesas"
}

export default function DespesasTab() {
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="text-2xl font-roboto font-semibold">Despesas</h1>
            <Link href="/painel/despesas/criar" className="btn-azul-global w-fit">Nova Despesa</Link>

            <div className="flex flex-col bg-white rounded-md shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] p-2">
                <DespesasTable />
            </div>
        </div>
    );
}
