// app/page.tsx

import type { Metadata } from "next";
import Logo from '@/components/general/logo';
import NavbarMenu from '@/components/general/navbar-actions';

export const metadata: Metadata = {
  title: "Ferreira Finanças",
};

export default function HomePage() {
	return (
		<div className="bg-gray-100 flex flex-col items-center min-h-screen pt-5 gap-5">
			<div className='bg-(--color_primary_default) flex flex-row items-center justify-between navbar-index-width w-full rounded-sm shadow-lg'>
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
	);
}