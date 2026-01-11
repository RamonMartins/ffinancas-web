// src/components/general/NavbarMenu.tsx

"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NavbarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex relative items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-opacity hover:opacity-80"
            >
                <Menu size={28} color="#fff" />
            </button>

            {isOpen && (
                <>
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-10"
                    />

                    <div className="bg-white absolute z-20 right-0 top-8 flex flex-col w-45 px-2 py-2 gap-2 rounded-md shadow-lg">
                        <Link
                            href="/entrar"
                            className="btn-azul-global"
                            onClick={() => setIsOpen(false)}
                        >
                            Entrar
                        </Link>

                        <hr  />

                        <Link
                            href="/cadastrar"
                            className="btn-azul-global"
                            onClick={() => setIsOpen(false)}
                        >
                            Cadastrar
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}