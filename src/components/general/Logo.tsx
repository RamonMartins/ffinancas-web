// src/components/general/Logo.tsx

'use client';

import Link from 'next/link';
import  '../../app/globals.css';

export default function Logo()  {
    return(
        <Link href="/">
            <div className="flex col-start-1 row-start-1 z-0 place-self-left font-rochester text-white items-center space-x-2" >
                <div className='text-[40px] tracking-[6px] leading-[1em] min-width-to-hide'>
                    <span>
                        FF
                    </span>
                </div>
                <div className='w-px h-9 bg-white opacity-60' />
                <div className='flex flex-col text-[18px] leading-none'>
                    <span>
                        Ferreira
                    </span>
                    <span>
                        Finanças
                    </span>
                </div>
            </div>
        </Link>
        
    );
}
