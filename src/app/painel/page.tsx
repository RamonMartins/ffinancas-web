
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function DashboardTab() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-indigo-700">📊 Painel Financeiro</h1>
            <p className="text-lg text-gray-700">
                Bem-vindo ao seu painel financeiro! Aqui você pode visualizar um resumo das suas finanças, acompanhar seus lançamentos e muito mais.
            </p>
        </div>
    );
}
