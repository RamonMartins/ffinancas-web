// src/app/(auth)/layout.tsx

import "./styles.css";
import LogoLite from "@/components/general/logo_lite";
import TituloDinamicoAuth from "@/components/auth/tituloDinamicoAuth";

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col bg-white rounded-[10px] shadow-xl w-full max-w-97-400 min-w-80 mt-7.5 mb-7.5">
                <div className="grid grid-cols-1 grid-rows-1 bg-(--color_primary_default) p-2 rounded-t-[10px]">
                    <LogoLite />
                    <TituloDinamicoAuth />
                </div>
                { children }
            </div>
        </div>
    );
}
