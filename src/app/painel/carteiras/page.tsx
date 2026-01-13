// src/app/painel/carteiras/page.tsx

import { Metadata } from "next";
import CarteirasTable from "@/components/carteiras/CarteirasTable";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Carteiras"
}

export default function CarteirasTab() {
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="text-2xl font-roboto font-semibold">Carteiras</h1>
            <Link href="/painel/carteiras/criar" className="btn-azul-global w-fit">Nova Carteira</Link>

            <div className="flex flex-col bg-white rounded-md shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] p-2">
                <CarteirasTable />
            </div>
        </div>
    );
}