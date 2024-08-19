'use client';

import SpecialBtn from '@/components/common/button/SpecialBtn';
import WithFadeUpTranslate from '@/components/container/WithFadeUpTranslate';
import { SectionID } from '@/constant/sectionId';
import { postMail } from '@/service/client/mail';
import { EmailDateType } from '@/types';
import dynamic from 'next/dynamic';
import {
	ChangeEventHandler,
	FormEventHandler,
	useEffect,
	useRef,
	useState,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import { ClipLoader } from 'react-spinners';
const Confeti = dynamic(() => import('@/components/common/Confetti/Confeti'), {
	ssr: false,
});

export default function Contact() {
	const dialog = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		dialog.current?.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if (target.nodeName === 'DIALOG') {
				dialog.current?.close();
			}
		});
	}, []);

	return (
		<section
			className="flex flex-col items-center py-40"
			id={SectionID.contact}
		>
			<WithFadeUpTranslate>
				<h2 className="mb-8 text-3xl font-semibold text-lightest-slate">
					Contact
				</h2>
			</WithFadeUpTranslate>
			<WithFadeUpTranslate delay={0.2}>
				<p className="mb-14 text-lg">
					더 많은 정보를 원하신다면 언제든지
					연락주세요. 새로운 기회를 기다리고 있습니다!
				</p>
			</WithFadeUpTranslate>
			<WithFadeUpTranslate delay={0.4}>
			<SpecialBtn className="px-6 py-4 text-xl text-center">
				<div className="mb-4">
					<strong>Email:</strong> bjihun0511@gmail.com
				</div>
				<div className="mb-4">
					<strong>Phone:</strong> 010-2217-1
				</div>
				<div>
					<strong>Github:</strong> <a href="https://github.com/BaeejiH" target="_blank">https://github.com/BaeejiH</a>
				</div>
    		</SpecialBtn>
			</WithFadeUpTranslate>
			
		</section>
	);
}
