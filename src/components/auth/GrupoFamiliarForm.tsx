// src/components/auth/GrupoFamiliarForm.tsx
"use client";

import { useActionState } from "react";
import { atribuirGrupoFamiliar } from "@/actions/grupos_familiares";
import { RefreshCw } from "lucide-react";


export default function GrupoFamiliarForm() {
    const [state, formAction, isPending] = useActionState(atribuirGrupoFamiliar, {
        error: null,
        status: 0
    });

    return (
        <form action={formAction} className="flex flex-col p-5 gap-4">
            {state?.error && (
                <p className="text-red-500 bg-red-50 p-2 border border-red-200 rounded">
                    {state.error}
                </p>
            )}

            { /* Título Grupo Familiar */ }
            <div className="div-col-global">
                <label className="text-gray-600 self-center text-center w-[80%]">Defina o nome do Grupo Familiar que você irá liderar.</label>
                <label>Título:</label>
                <input
                    type="text"
                    className="input-global"
                    placeholder="Família Silva"
                    name="titulo"
                    defaultValue={state?.payload?.titulo_return || ""}
                    required
                />
            </div>

            { /* Botão submit */ }
            <div className="div-col-global items-end">
                <button
                    type="submit"
                    className="btn-azul-global gap-2 disabled:opacity-50"
                    disabled={isPending}
                >
                    {isPending && (<RefreshCw className="w-4 h-4 animate-spin" />)}
                    {isPending ? "Salvando..." : "Salvar"}
                </button>
            </div>
        </form>
    );
}