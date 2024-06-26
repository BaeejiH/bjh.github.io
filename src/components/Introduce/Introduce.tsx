'use client';

import Link from 'next/link';
import { BlogIcon, GitHubIcon, GitlabIcon } from '../common/icons/react-icons';
import { motion } from 'framer-motion';
import { FadeUp } from '@/constant/framer-motion';
import { Links } from '@/constant/link';

const ICONLIST = [

	{ link: Links.github, ICON: <GitHubIcon size={30} /> },
	
];

export default function Introduce() {
	return (
		<motion.section
			className="flex h-screen flex-col justify-center"
			initial="init"
			animate="on"
			transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
		>
			<motion.h1 className="pb-8 text-2xl text-green" variants={FadeUp}>
				안녕하세요. 저는 웹 백엔드 개발자
			</motion.h1>
			<motion.h2
				className="pb-6 text-6xl font-bold text-lightest-slate"
				variants={FadeUp}
			>
				배지훈입니다.
			</motion.h2>
			<motion.h2 className="pb-8 text-6xl font-bold" variants={FadeUp}>
				
			저는 지속적인 도전을 즐기며,
			<br /> 웹 개발의 매력에 매료되어 있습니다.

			</motion.h2>
			<motion.p
				className="max-w-[580px] break-keep pb-8 text-xl"
				variants={FadeUp}
			>
				
			현재는 백엔드 기술을 핵심으로 삼아 전문적인 학습을 진행 중이며, 
			이를 바탕으로 사용자가 시스템을 이용하는데 있어서 편리함을  
			향상시키는 웹사이트의 백엔드 부분을 주도적으로 개발하고 있습니다. 
			저의 웹 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.
			</motion.p>

			<motion.ol className="flex gap-4 text-green" variants={FadeUp}>
				{ICONLIST.map((obj, i) => (
					<Link key={i} href={obj.link} target="_blank">
						<li>{obj.ICON}</li>
					</Link>
				))}
			</motion.ol>
		</motion.section>
	);
}
