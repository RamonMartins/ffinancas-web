// src/app/painel/layout.tsx

import { logoutUsuario } from "@/actions/auth";
import { usuarioAtual } from "@/actions/usuarios";
import MenuLateral from "@/components/painel/MenuLateral";
import MenuTopo from "@/components/painel/MenuTopo";
import Breadcumb from "@/components/painel/Breadcrumb";

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { usuario, error } = await usuarioAtual();

    return (
        <div className="min-h-screen flex flex-row bg-[#F2F5F7]">
            <div className="hidden lg:flex shrink-0">
                <MenuLateral 
                    logoutAction={logoutUsuario}
                />
            </div>
            <div className="flex flex-col w-full">
                <MenuTopo
                    usuarioLogado={usuario}
                    logoutAction={logoutUsuario}
                />
                <div className="flex flex-col p-2.5 gap-2.5">
                    <Breadcumb />
                    {children}
                </div>
                
            </div>
        </div>
    );
}
