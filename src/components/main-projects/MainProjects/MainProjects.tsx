import SectionContainer from '@/components/common/section/SectionContainer/SectionContainer';
import Link from 'next/link';
import { GitHubIcon, ShareIcon } from '@/components/common/icons/react-icons';
import Image from 'next/image';
import MainProject from '../MainProject/MainProject';
import { Project } from '@/types';
import { SectionID } from '@/constant/sectionId';

const PROJECT_DATA: Project[] = [
	{
		title: 'Final 프로젝트',
		date: '2023.10.16 ~ 2024.01.05',
		serviceMaintain: '',
		description: `파이널 프로젝트에 대한 내용 기입.
    `,
		skillList: [
			'React',
			'NextJS v14',
			'TailwindCSS',
			'React-Query v5',
			'Zustand',
			'Nginx',
			'Docker',
			'GItlab',
			'KakaoAPI',
			'Typescript',
			//사용 기술 수정 필요
		],
		linkList: (
			<>
				<Link
					href={'https://gitlab.com/commerce9235338/emmerce-web'}
					target="_blank"
				>
					<GitHubIcon size={20} />
				</Link>
				<Link href={'https://emmerce1.duckdns.org/'} target="_blank">
					<ShareIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link
				href={'https://emmerce1.duckdns.org/'}
				target="_blank"
				className="relative"
			>
				<Image
					src="/assets/project-images/emmerce-main.png"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/c82099c04f4540f0817285a224841055',
	},
	{
		title: 'Semi 프로젝트',
		date: '2023.01.15 ~ 2023.03.25',
		serviceMaintain: '* AWS 기간이 만료되어 운영중이지 않습니다.(9월까지)',
		description: `Lms 프로젝트로 대학교를 토대로 Lms를 구현하였습니다.
		Semi 프로젝트에 관한 내용 기입.
    `,
		skillList: [
			'React',
			'React-Query v4',
			'Recoil',
			'AWS S3',
			'React-Testing-Library',
			'React-Router-Dom v6',
			'GitHub Actions',
			'Typescript',
		],
		linkList: (
			<>
				<Link href={'https://github.com/SeungYn/poje-frontend'} target="_blank">
					<GitHubIcon size={20} />
				</Link>
				<Link href={'https://poje-frontend.vercel.app/'} target="_blank">
					<ShareIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link
				href={'https://poje-frontend.vercel.app/'}
				target="_blank"
				className="relative"
			>
				<Image src="/assets/project-images/poje-main.png" fill alt="이미지" />
			</Link>
		),
		detailSrc: '/notion/POJE-3928923bdf4d4037b6bc585da568208a',
	},
	{
		title: '쇼핑몰',
		serviceMaintain: '* AWS 기간이 만료되어 운영중이지 않습니다.',
		date: '2022.03 ~ 2022.11',
		description: `쇼핑몰 프로젝트에 관한 내용 기입.
    `,
		skillList: [
			'React',
			'React-router-dom',
			'ContextAPI',
			'StompJS',
			'Socket.io',
			'Express',
			'Mysql',
			'KakaoMapAPI',
			'Javascript',
		],
		linkList: (
			<>
				<Link
					href={'https://github.com/SeungYn/capstonClientBySpring'}
					target="_blank"
				>
					<GitHubIcon size={20} />
				</Link>
				<Link
					href={'https://seungyn.github.io/capstonClientBySpring/'}
					target="_blank"
				>
					<ShareIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link
				href={'https://seungyn.github.io/capstonClientBySpring/'}
				target="_blank"
				className="relative"
			>
				<Image
					src="/assets/project-images/babmate-main.png"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/f29afe7d87d44564a7a8f31043b34050',
	},
	{
		title: '미정',
		serviceMaintain: '* heroku 기간이 만료되어 운영중이지 않습니다.',
		date: '2022.02 ~ 2022.3',
		description: `추후 기입.
    `,
		skillList: ['React', 'Express', 'React-Router-Dom', 'Javascript'],
		linkList: (
			<>
				<Link
					href={'https://github.com/SeungYn/capstonClientBySpring'}
					target="_blank"
				>
					<GitHubIcon size={20} />
				</Link>
				<Link href={'https://hspackges.netlify.app/'} target="_blank">
					<ShareIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link
				href={'https://hspackges.netlify.app/'}
				target="_blank"
				className="relative"
			>
				<Image
					src="/assets/project-images/hanshin-main.png"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/a4927aec9b72434db112ec0ade9c2327',
	},
];

export default function MainProjects() {
	return (
		<SectionContainer
			title="Main Projects"
			count="03."
			id={SectionID.mainProjects}
		>
			{PROJECT_DATA.map((pro, i) => (
				<MainProject key={i} {...pro} />
			))}
		</SectionContainer>
	);
}
