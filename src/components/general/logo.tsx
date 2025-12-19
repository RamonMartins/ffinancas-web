// components/general/logo.tsx

'use client';

import  '../../app/globals.css';

export default function Logo()  {
    return(
        <div className="flex col-start-1 row-start-1 z-0 place-self-left font-rochester text-white items-center space-x-2" >
            <div className='text-[40px] tracking-[6px] leading-[1em] min-width-to-hide'>
                <span>
                    FF
                </span>
            </div>
            <div className='flex bg-[#cbcbcb] w-0.75 h-10 min-width-to-hide'></div>
            <div className='flex flex-col text-[18px] leading-none'>
                <span>
                    Ferreira
                </span>
                <span>
                    Finanças
                </span>
            </div>
        </div>
    );
}
