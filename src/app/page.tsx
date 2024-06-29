import MainNav from '@/components/layout/MainNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HomeFeatureProjectsSection from '@/components/ui/sections/HomeFeatureProjectsSection';
import HomeSection from '@/components/ui/sections/HomeSection';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | Home',
};

export default function Home() {
	return (
		<>
			<MainNav />

			<main className='flex-1'>
				<HomeSection />

				<HomeFeatureProjectsSection />
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
					className='w-full py-12 md:py-24 lg:py-32 border-t bg-profileImageBgColor'
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
