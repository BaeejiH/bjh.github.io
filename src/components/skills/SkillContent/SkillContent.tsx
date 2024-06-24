import { SkillCategoryList } from '../Skills/Skills';
import styles from './SkillContext.module.css';
import IconBackground from '@/components/common/icons/IconBackground/IconBackground';
import Image from 'next/image';

//language svg
import CSSIcon from '/public/assets/skills/icons/language/css-3.svg';
import HTMLIcon from '/public/assets/skills/icons/language/html-5.svg';
import JAVAIcon from '/public/assets/skills/icons/language/java.svg';
import JavscriptIcon from '/public/assets/skills/icons/language/javascript.svg';
import TypescriptIcon from '/public/assets/skills/icons/language/typescript-icon.svg';

//front svg
import AxiosIcon from '/public/assets/skills/icons/front/axios.svg';
import ReactIcon from '/public/assets/skills/icons/front/react.svg';
import NextJSIcon from '/public/assets/skills/icons/front/nextjs-icon.svg';
import PlaywrightIcon from '/public/assets/skills/icons/front/playwright.svg';
import PostCSSIcon from '/public/assets/skills/icons/front/postcss.svg';
import ReactQueryIcon from '/public/assets/skills/icons/front/react-query-icon.svg';
import ReactRouterIcon from '/public/assets/skills/icons/front/react-router.svg';
import RecoilIcon from '/public/assets/skills/icons/front/recoil-icon.svg';
import ReduxIcon from '/public/assets/skills/icons/front/redux.svg';
import JestIcon from '/public/assets/skills/icons/front/jest.svg';
import TestingLibraryIcon from '/public/assets/skills/icons/front/testing-library.svg';
import TailWindIcon from '/public/assets/skills/icons/front/tailwindcss-icon.svg';

//back svg
import SpringIcon from '/public/assets/skills/icons/back/spring-icon.svg';
import ExpressIcon from '/public/assets/skills/icons/back/express.svg';

//database svg
import MysqlIcon from '/public/assets/skills/icons/database/mysql-icon.svg';

//etc svg
import AwsEc2Icon from '/public/assets/skills/icons/etc/aws-ec2.svg';
import AwsS3Icon from '/public/assets/skills/icons/etc/aws-s3.svg';
import DockerIcon from '/public/assets/skills/icons/etc/docker-icon.svg';
import GitIcon from '/public/assets/skills/icons/etc/git-icon.svg';
import GithubIcon from '/public/assets/skills/icons/etc/github-octocat.svg';
import Gitlab from '/public/assets/skills/icons/etc/gitlab.svg';
import NetilifyIcon from '/public/assets/skills/icons/etc/netlify-icon.svg';
import VercelIcon from '/public/assets/skills/icons/etc/vercel-icon.svg';

const SkillList = [
	[
		{
			SkillIcon: (
				<IconBackground>
					<HTMLIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'HTML5',
			description: '• 기본적인 HTML 태그를 사용할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<CSSIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'CSS',
			description: '• 순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<JavscriptIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Javacript',
			description: '• Javacript를 활용하여 차트 구현과 웹 페이지 코드를 작성 할 수 있습니다. ',
		},
		{
			SkillIcon: (
				<IconBackground>
					<TypescriptIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Typescript',
			description:
				'• 타입을 활용하여 기본적인 코드를 작성할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<JAVAIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Java',
			description:
				'• 학원에서 교육받으면서 처음으로 배운 언어이며, 6개월간 자바를 통해서 과제나, 프로그램을 만들었습니다.',
		},
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<ReactIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'React',
			description:
				'• 최근에 마지막으로 진행한 프로젝트에서 리엑트를 활용해 페이지를 구현했습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<NextJSIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'NextJS',
			description: `• 기본. 
			• NextJS를 사용해 기본적인 코드를 작성할 수 있습니다.
			`,
		},
		
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<ExpressIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Express',
			description: `• React와 Express를 학습 후 첫 간단한 프로젝트의 백엔드 프레임워크로 사용한 경험이 있습니다.
		`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<SpringIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Spring-Boot',
			description: `• 파이널 프로젝트에서 Spring-Boot를 통해서 코드작업을 했고, Spring-Boot가 어떻게 쓰이는지와 MVC패턴에 대해 숙지하고 있습니다 .
		`,
		},
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<MysqlIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'mariDB',
			description: `• 프로젝트의 대부분을 mariDB로 진행하였습니다.
	`,
		},
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<DockerIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Docker',
			description: `• NextJS 프로젝트를 Docker 파일을 작성하여 배포해 본 경험이 있습니다.
`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<GitIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Git',
			description: `• 코드 저장과 버전 기록을 위해 사용했습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<VercelIcon className={styles.svg} />
				</IconBackground>
			),
			title: 'Vercel',
			description: `• NextJS 프로젝트를 배포해 본 경험이 있습니다.
			`,
		},
	],
];

type Props = {
	categoryIndex: number;
};

export default function SkillContent({ categoryIndex }: Props) {
	return SkillCategoryList.map((cate) => (
		<div
			key={cate.index}
			className={`${styles.content} ${
				categoryIndex === cate.index
					? styles.contentFadeIn
					: styles.contentFadeOut
			}`}
		>
			<h3 className="mb-6 text-xl font-semibold leading-10 text-lightest-slate">
				Skill Stack <span className="text-green">@ {cate.title}</span>
			</h3>
			{SkillList[cate.index].map(({ description, SkillIcon, title }, index) => (
				<ul key={cate.index + '' + index}>
					<li className="mb-4 flex gap-4">
						<IconBackground>{SkillIcon}</IconBackground>
						<div>
							<h3 className="mb-2 text-xl text-lightest-slate">{title}</h3>
							<p className="whitespace-pre-line text-lg">{description}</p>
						</div>
					</li>
				</ul>
			))}
		</div>
	));

	// 추가된 스킬이나 빼야할 스킬들은 차후에 수정 바람.
}
