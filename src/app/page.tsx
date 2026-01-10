// app/page.tsx

import type { Metadata } from "next";
import Logo from '@/components/general/logo';
import NavbarMenu from '@/components/general/navbar-actions';

export const metadata: Metadata = {
  title: "Ferreira Finanças",
};

export default function HomePage() {
	return (
		<div className="bg-gray-100 flex flex-col items-center min-h-screen pt-5">
			<div className="flex flex-col justify-center items-center navbar-index-width gap-5">
				<div className='bg-(--color_primary_default) flex flex-row py-0.5 px-2.5 items-center justify-between w-full rounded-sm shadow-lg'>
					<Logo />
					<NavbarMenu />
				</div>
				<h1 className="text-4xl font-extrabold mt-12 text-gray-700">
					Bem-vindo ao Ferreira Finanças
				</h1>

				<p className="text-xl text-gray-500">
					Suas finanças de forma simplificada e completa.
				</p>
			</div>
			
		</div>
	);
}