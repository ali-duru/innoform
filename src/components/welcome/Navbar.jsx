'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { SiFirebase } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { useAuth } from '../../../firebase/auth';
import { useRouter } from 'next/navigation';
import { useToastMessages } from '@/components/message/useToastMessages';
const Navbar = () => {
	const router = useRouter();
	const { Info } = useToastMessages();
	const { authUser, isLoading, signOut } = useAuth();
	useEffect(() => {
		if (!isLoading && !authUser) {
			router.push('/');
		}
	}, [isLoading, authUser]);

	return (
		<>
			<div className="bg-slate-600 flex justify-around items-center gap-9 p-5 text-3xl sticky top-0 ">
				<h1 className="text-3xl text-white font-semibold flex justify-center items-center gap-4">
					Duru <TbBrandNextjs className=" text-3xl" />
					<SiFirebase className="text-[#FF8F00] text-3xl" />
				</h1>

				<nav>
					<ul className="flex items-center gap-10 text-2xl text-white font-semibold">
						{/* {!authUser && (
							<li>
								<Link href="/register">Üye Ol</Link>
							</li>
						)} */}
						{!authUser && (
							<li>
								<Link href="/login">Giriş Yap</Link>
							</li>
						)}
					</ul>
				</nav>
				{authUser && (
					<button
						className="font-Pacifico text-xl rounded-lg hover:text-white w-auto p-2 bg-[#7b9194]"
						onClick={() => {
							signOut();
							Info('Çıkış Yapıldı !');
						}}
					>
						Çıkış Yap
					</button>
				)}
			</div>
		</>
	);
};

export default Navbar;
