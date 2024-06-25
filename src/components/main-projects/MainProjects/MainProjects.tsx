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
		date: '2024.07 ~ 2024.08',
		serviceMaintain: '',
		description: `파이널 프로젝트에 대한 내용 기입.
    `,
		skillList: [
			'Spring Boot',
			'Java Script',
			'jQuery',
			'MariaDB',
			'Docker',
			'GItHub',
			'API',
			//사용 기술 수정 필요
		],
		linkList: (
			<>
				<Link
					href={'https://github.com/BaeejiH/Final-p'}
					target="_blank"
				>
					<GitHubIcon size={20} />
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
					src="/assets/project-images/no.PNG"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/c82099c04f4540f0817285a224841055',
	},
	{
		title: 'Semi 프로젝트',
		date: '2024.05 ~ 2024.06',
		serviceMaintain: '* AWS 기간이 만료되어 운영중이지 않습니다.(9월까지)',
		description: `Lms 프로젝트로 대학교를 토대로 Lms를 구현하였습니다.
		Semi 프로젝트에 관한 내용 기입.
    `,
		skillList: [
			'Eclipse',
			'Java',
			'MariaDB',
			'AWS',
			'HTML5',
			'GitHub',
		],
		linkList: (
			<>
				<Link href={'https://github.com/semi-E/semi-E'} target="_blank">
					<GitHubIcon size={20} />
				</Link>
				
			</>
		),

		ImgComponent: (
			<Link
				href={'https://poje-frontend.vercel.app/'}
				target="_blank"
				className="relative"
			>
				<Image src="/assets/project-images/semi-main.PNG" fill alt="이미지" />
			</Link>
		),
		detailSrc: '/notion/POJE-3928923bdf4d4037b6bc585da568208a',
	},
	{
		title: '쇼핑몰',
		serviceMaintain: '* AWS 기간이 만료되어 운영중이지 않습니다.',
		date: '2024.04 ~ 2022.05',
		description: `쇼핑몰 프로젝트에 관한 내용 기입.
    `,
		skillList: [
			'jsp',
			'Java',
			'MariaDB',
		],
		linkList: (
			<>
				<Link
					href={'https://github.com/BaeejiH/shop'}
					target="_blank"
				>
					<GitHubIcon size={20} />
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
					src="/assets/project-images/shop-main.PNG"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/f29afe7d87d44564a7a8f31043b34050',
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
