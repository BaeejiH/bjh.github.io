import SectionContainer from '@/components/common/section/SectionContainer/SectionContainer';
import Link from 'next/link';
import { GitHubIcon, ShareIcon } from '@/components/common/icons/react-icons';
import Image from 'next/image';
import MainProject from '../MainProject/MainProject';
import { Project } from '@/types';
import { SectionID } from '@/constant/sectionId';

const PROJECT_DATA: Project[] = [
	{
		title: 'Movie 프로젝트',
		date: '2024.07 ~ 2024.08',
		serviceMaintain: '',
		description: `Spring boot를 통해서 구현한 영화 대여사이트 프로젝트 입니다. 회원들이 자유롭게 영화 대여사이트를 통해서 영화를 대여하고 반납할 수 있게했고,주요 기능으로는 즐겨찾기와 리뷰,영화에 대한 댓글을 다는 기능이 있습니다. 
					  AWS에 도커를 통해서 배포하였습니다.	
    `,
		skillList: [
			'Spring Boot',
			'Java Script',
			'jQuery',
			'MariaDB',
			'Docker',
			'GItHub',
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
				href={'http://13.209.213.177/Final/public/login'} //파이널 배포 링크
				target="_blank"
				className="relative"
			>
				<Image
					src="/assets/project-images/Final-main.PNG"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion//Final-project-f738c38ac46a439ca551e1d3397fd245?pvs=4', // 파이널 노션 링크 수정
	},
	{
		title: 'LMS 프로젝트',
		date: '2024.05 ~ 2024.06',
		serviceMaintain: '* AWS 기간이 9월까지 입니다.',
		description: `Eclipse를 통해서 구현한 대학교 Lms 프로젝트 입니다. 
					  대부분 학교에서 쓰는 LMS처럼 학생과 교수 그리고 
					  관리자를 나누었고, 주요 기능으로는 학생 수업에 따른
					  시간표 구현 및 강의 등록이 있습니다. 
					  대학교 LMS와 비슷하게 구현하는것을 목표로 했고,
					  AWS에 도커를 통해서 배포하였습니다.				
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
				href={'http://13.209.213.177/lms/loginForm.jsp'} // 세미 배포 링크
				target="_blank"
				className="relative"
			>
				<Image src="/assets/project-images/semi-main.PNG" fill alt="이미지" />
			</Link>
		),
		detailSrc: '/notion//Semi-project-071f8bc62c894a588fc97a746257ffec?pvs=4', // 세미 노션 링크 수정
	},
	{
		title: '쇼핑몰 프로젝트',
		serviceMaintain: '* AWS 기간이 만료되어 운영중이지 않습니다.',
		date: '2024.04 ~ 2022.05',
		description: `Eclipse를 통해 간단하게 만들어본 쇼핑몰 프로젝트입니다.
					  여러가지 기능을 구현하기 보다는 쇼핑몰 사이트의 
					  기본적인 기능과 화면을 만드는 것을 목표로 했습니다.
					  
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
				href={''}  //shop 배포 링크
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
		detailSrc: '/notion//Shop-project-fdcac4970a6449e1bdf20fa6004f762a?pvs=4', // Shop 노션 링크 수정
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
