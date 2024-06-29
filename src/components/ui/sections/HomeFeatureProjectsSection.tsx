import { Button } from '../button';

type HomeFeatureProjectsSectionIProps = {};

function HomeFeatureProjectsSection(props: HomeFeatureProjectsSectionIProps): JSX.Element {
	return (
		<section id='projects' className='w-full py-12 md:py-24 lg:py-32 bg-profileImageBgColor'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Featured Projects
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Check out some of my recent projects that showcase my skills and
							experience.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
					{/* <Image
								src='/placeholder.svg'
								width='550'
								height='310'
								alt='Project 1'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
							/> */}
					<div className='flex flex-col justify-center space-y-4'>
						<div className='grid gap-1'>
							<h3 className='text-xl font-bold'>Project 1</h3>
							<p className='text-muted-foreground'>
								A web application that helps users manage their tasks and projects
								more efficiently.
							</p>
							<div className='flex items-center gap-2'>
								<Button variant='secondary' size='sm'>
									View Demo
								</Button>
								<Button variant='secondary' size='sm'>
									View Code
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
					{/* <Image
								src='/placeholder.svg'
								width='550'
								height='310'
								alt='Project 2'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
							/> */}
					<div className='flex flex-col justify-center space-y-4'>
						<div className='grid gap-1'>
							<h3 className='text-xl font-bold'>Project 2</h3>
							<p className='text-muted-foreground'>
								A mobile app that helps users track their fitness goals and
								progress.
							</p>
							<div className='flex items-center gap-2'>
								<Button variant='secondary' size='sm'>
									View Demo
								</Button>
								<Button variant='secondary' size='sm'>
									View Code
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeFeatureProjectsSection;
