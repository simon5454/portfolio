import MainNav from '@/components/layout/MainNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | Home',
};

const profileImageBgColor = '#f8f9fd';

export default function Home() {
	return (
		<>
			<MainNav />

			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Simon Ritchot
									</h1>
									<h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>
										Software Developer
									</h2>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										I&apos;m a software developer with a strong background in
										web development. My civil engineering background helps me
										convert abstract ideas and needs to concrete solutions.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link
										href='#'
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										prefetch={false}
									>
										View Projects
									</Link>
									<Link
										href='#'
										className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										prefetch={false}
									>
										Contact Me
									</Link>
								</div>
							</div>
							{/* My profile image */}
							<Image
								src='/simon.png'
								width='517'
								height='517'
								alt='Simon Ritchot'
								className='mx-auto overflow-hidden rounded-xl object-scale-down lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section
					id='projects'
					style={{ backgroundColor: profileImageBgColor }}
					className='w-full py-12 md:py-24 lg:py-32'
				>
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
										A web application that helps users manage their tasks and
										projects more efficiently.
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
				<section id='skills' className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
								My Skills
							</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								I have a diverse set of skills that allow me to tackle a wide range
								of software development projects.
							</p>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>HTML/CSS</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[90%] rounded-full bg-primary' />
								</div>
							</div>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>JavaScript</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[85%] rounded-full bg-primary' />
								</div>
							</div>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>React</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[92%] rounded-full bg-primary' />
								</div>
							</div>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>Node.js</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[80%] rounded-full bg-primary' />
								</div>
							</div>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>MongoDB</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[75%] rounded-full bg-primary' />
								</div>
							</div>
							<div className='flex flex-col items-start gap-2'>
								<div className='text-sm font-medium'>AWS</div>
								<div className='w-full h-2 rounded-full bg-muted'>
									<div className='h-full w-[88%] rounded-full bg-primary' />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id='contact'
					style={{ backgroundColor: profileImageBgColor }}
					className='w-full py-12 md:py-24 lg:py-32 border-t'
				>
					<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
						<div className='space-y-3'>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
								Get in Touch
							</h2>
							<p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								I&apos;m always excited to discuss new projects and opportunities.
								Feel free to reach out to me using the form below.
							</p>
						</div>
						<div className='mx-auto w-full max-w-sm space-y-2'>
							<form className='flex flex-col gap-2'>
								<Input type='text' placeholder='Name' className='max-w-lg flex-1' />
								<Input
									type='email'
									placeholder='Email'
									className='max-w-lg flex-1'
								/>
								<Textarea placeholder='Message' className='max-w-lg flex-1' />
								<Button type='submit'>Send Message</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
