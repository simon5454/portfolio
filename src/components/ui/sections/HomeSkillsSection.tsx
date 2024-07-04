import SkillCard from '../cards/SkillCard';

type HomeSkillsSectionIProps = {};

function HomeSkillsSection(props: HomeSkillsSectionIProps): JSX.Element {
	return (
		<section
			id='skills'
			className='w-full py-12 md:py-24 lg:py-32 border-t bg-profileImageBgColor'
		>
			<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
				<div className='space-y-3'>
					<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
						My Skills
					</h2>
					<p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
						Software tools and technologies.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<SkillCard title='FrontEnd' skills={['html', 'css', 'javascript', 'React']} />
					<SkillCard
						title='Backend'
						skills={['NodeJs', 'PHP', 'NextJs', 'Laravel', 'MySql', 'Redis']}
					/>
					<SkillCard
						title='Others'
						skills={[
							'Figma',
							'DrawIo',
							'DigitalOcean',
							'Vercel',
							'HostGator',
							'Sentry',
						]}
					/>
				</div>
			</div>
		</section>
	);
}

export default HomeSkillsSection;
