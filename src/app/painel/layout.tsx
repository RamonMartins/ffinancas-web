// src/app/painel/layout.tsx

import { logoutUsuario } from "@/actions/auth";
import { usuarioAtual } from "@/actions/usuarios";
import { dataMenu } from "@/components/utils/dataFormatada";

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { usuario, error } = await usuarioAtual();

    return (
        <div className="flex flex-row">
            <div className="flex shrink-0">
                <span>menu lateral</span>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between px-3 py-2.5 bg-(--color_primary_default)">
                    <div className="flex flex-col">
                        {usuario && (<span className="text-white">Olá, {usuario.nome.split(" ")[0]}</span>)}
                        {dataMenu() && (<span className="text-xs font-semibold text-white opacity-70">{dataMenu()}</span>)}
                    </div>
                    <form action={logoutUsuario}>
                        <button type="submit" className="btn-azul-global">
                            Sair
                        </button>
                    </form>
                </div>

                {children}
            </div>
        </div>
    );
}
