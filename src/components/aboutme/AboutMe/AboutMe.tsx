import SectionContainer from '@/components/common/section/SectionContainer/SectionContainer';
import Image from 'next/image';
import styles from './AboutMe.module.css';

import WithFadeUpTranslate from '@/components/container/WithFadeUpTranslate';
import { getBase64 } from '@/util/blurData';
import { SectionID } from '@/constant/sectionId';

export default async function AboutMe() {
	const base64Img = await getBase64('public/assets/sun.jpeg');

	return (
		<SectionContainer title="About Me" count="01." id={SectionID.aboutMe}>
			<WithFadeUpTranslate>
				<div className="flex flex-col gap-8 md:flex-row">
					<div className="basis-[70%]">
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[처음으로 마주한 백엔드]
							</h3>
							<p>
								학원에서 교육을 처음 받으면서 백엔드를 활용한 프로젝트를 만들어 보았으며,
								사용자에게 먼저 보여지는 것은 아니지만 뒤에서 무언가를 해결하는 백엔드에 흥미를 느껴
								백엔드에 집중하고 있습니다.
							</p>
						</div>
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[성장에 대한 즐거움]
							</h3>
							<p>
							새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용한 기술을 활용하는 것이 아니라,
							이전 프로젝트에서 부족했던 점을 개선하고 새로운 코드 스타일이나 기술을 도입하는 것에 큰 즐거움을 느낍니다. 
							이는 저에게 개발 능력을 향상시키는 기회를 제공하며, 지속적인 성장과 학습을 추구하는 원동력이 됩니다.
							</p>
						</div>
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[꺾이지 않는 집념]
							</h3>
							<p>
							협업을 통한 백앤드 개발을 진행하면서 오류도 많았고 직면한 문제들도 많지만, 
							그 과정에서 스스로 해결책을 찾아내는 데 큰 집념을 발휘했습니다. 
							이는 개발 과정에서 어떤 어려움도 극복할 수 있다는 확신을 갖게 했고, 
							끊임없는 노력과 자기 동기부여를 통해 저 자신을 발전시킬 수 있는 열정을 키웠습니다.
							</p>
						</div>
					</div>
					<div
						className={`relative mx-auto aspect-square h-[300px] w-[300px] max-w-[300px]  md:!w-[70%]  ${styles.imgBorder}`}
					>
						<Image
							src="/assets/bb.jpg"
							fill
							alt="프로필 이미지"
							sizes="300px"
							blurDataURL={base64Img}
							placeholder="blur"
							className="z-10 -translate-x-2 -translate-y-2 rounded-lg"
						/>
					</div>
				</div>
			</WithFadeUpTranslate>
		</SectionContainer>
	);
}
