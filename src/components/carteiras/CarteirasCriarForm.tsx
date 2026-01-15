// src/components/carteiras/CarteirasCriarForm.tsx
"use client"

import { Info, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { MoedaMask } from "../utils/moedaMask";
import { useActionState } from "react";
import { CriarCarteiraMe } from "@/actions/carteiras";

export default function CarteirasCriarForm() {
    const router = useRouter();
    const {valorMoeda, valorNumerico, handleInputChange} = MoedaMask(0);
    const [state, formAction, isPending] = useActionState(CriarCarteiraMe, {
        error: null,
        status: 0
    })

    return (
        <form action={formAction} className="flex flex-col gap-4">
            {state?.error && (
                <p className="text-red-500 bg-red-50 p-2 border border-red-200 rounded">
                    {state.error}
                </p>
            )}

            { /* Campo título */ }
            <div className="div-col-global">
                <div className="div-row-global items-center">
                    <label>
                        Título da Carteira:
                        <span className="text-destructive">*</span>
                    </label>
                    <span title="Defina o título da Carteira. Caso duas pessoas da Família possua o mesmo banco, descriminir nesse campo o titular">
                        <Info size={15} />
                    </span>
                </div>
                
                <input
                    type="text"
                    placeholder="Banco do Brasil"
                    className="input-global w-62.5!"
                    name="titulo"
                    defaultValue={state?.payload?.titulo_return}
                    required
                />
            </div>

            { /* Saldo */ }
            <div className="div-col-global">
                <div className="div-row-global items-center">
                    <label>Saldo da Carteira:</label>
                    <span title="Informe o saldo inicial desta carteira.">
                        <Info size={15} />
                    </span>
                </div>
                
                <input
                    type="text"
                    placeholder="R$ 0,00"
                    className="input-global  w-62.5!"
                    name="saldo-formatado"
                    onChange={handleInputChange}
                    value={valorMoeda}
                />
                { /* Input oculto para passar apenas o valor numérico */ }
                <input type="hidden" value={valorNumerico} name="saldo" />
            </div>

            { /* Botões */ }
            <div className="div-row-global gap-4!">
                <button type="button" className="btn-cinza-global w-fit" onClick={() => router.back()}>
                    Voltar
                </button>
                <button
                    type="submit"
                    className="btn-azul-global w-fit gap-2 disabled:opacity-50"
                    disabled={isPending}
                >
                    {isPending && (<RefreshCw className="w-4 h-4 animate-spin" />)}
                    {isPending ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>
        </form>
        
    );
}