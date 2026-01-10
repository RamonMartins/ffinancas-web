// src/components/auth/EntrarForm.tsx
"use client";

import Link from "next/link";
import { useActionState } from "react";
import { logarUsuario } from "@/actions/auth";
import { RefreshCw } from "lucide-react";

export default function EntrarForm() {
    const [state, formAction, isPending] = useActionState(logarUsuario, {
        error: null,
        status: 0
    })

    return (
        <form action={formAction} className="p-5 flex flex-col gap-4">
            {state?.error && (
                <p className="text-red-500 bg-red-50 p-2 border border-red-200 rounded">
                    {state.error}
                </p>
            )}

            { /* E-mail */}
            <div className="div-col-global">
                <label>E-mail</label>
                <input
                    type="email"
                    placeholder="jose.silva@gmail.com"
                    className="input-global"
                    name="email"
                    defaultValue={state?.payload?.email_return || ""}
                    required
                />
            </div>

            { /* Senha */ }
            <div className="div-col-global">
                <label>Senha</label>
                <input
                    type="password"
                    placeholder="********"
                    className="input-global"
                    name="senha"
                    required
                />
            </div>

            { /* Botão Entrar/Link para Cadastrar */ }
            <div className="div-col-global items-end">
                <button
                    type="submit"
                    disabled={isPending}
                    className="btn-azul-global gap-2 disabled:opacity-50"
                >
                    {isPending && (<RefreshCw className="w-4 h-4 animate-spin" />)}
                    {isPending ? "Entrando..." : "Entrar"}
                </button>
                <Link
                    href="/cadastrar"
                    className="text-blue-700 text-[14px] underline"
                >
                    Não possui uma conta? Cadastre-se.
                </Link>
            </div>
        </form>
    );
}
