// components/general/logo.tsx

'use client';

import Link from 'next/link';
import  '../../app/globals.css';

export default function LogoLite()  {
    return(
        <div className="flex w-fit col-start-1 row-start-1">
            <Link href="/" className='flex'>
                <div className='flex flex-col font-rochester text-white text-[18px] leading-none'>
                    <span>Ferreira</span>
                    <span>Finanças</span>
                </div>
                <div className='w-px h-9 bg-white opacity-50 mx-2' />
            </Link>
        </div>
    );
}
