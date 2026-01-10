'use client';

import { usePathname } from 'next/navigation';

export default function TituloDinamicoAuth() {
    const pathname = usePathname();

    // Mapeamento de rotas para títulos
    const titles: { [key: string]: string } = {
        '/cadastrar': 'Cadastrar',
        '/entrar': 'Entrar',
        '/grupo-familiar': 'Grupo Familiar',
    };

    // Retorna o título com base na rota, ou um padrão
    const currentTitle = titles[pathname] || 'Bem-vindo';

    return (
        <div className='flex justify-center'>
            <span className="text-white text-[20px] font-semibold place-self-center col-start-1 row-start-1 z-10">
                {currentTitle}
            </span>
        </div>
        
    );
}
