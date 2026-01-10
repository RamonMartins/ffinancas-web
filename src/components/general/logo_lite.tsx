// components/general/logo.tsx

'use client';

import Link from 'next/link';
import  '../../app/globals.css';

export default function LogoLite()  {
    return(
        <div className="flex justify-start">
            <Link href="/">
                <div className='flex col-start-1 row-start-1 z-0 font-rochester text-white flex-col text-[18px] leading-none'>
                    <span>Ferreira</span>
                    <span>Finanças</span>
                </div>
            </Link>
            <div className='w-px h-9 bg-white opacity-50 mx-2' />
        </div>
    );
}
