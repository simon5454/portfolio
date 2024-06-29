import Link from 'next/link';
import Image from 'next/image';

type HomeSectionIProps = {};

function HomeSection(props: HomeSectionIProps): JSX.Element {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-colorPalette-blackWash'>
			<div className='container px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-colorPalette-solidSnake'>
								Simon Ritchot
							</h1>
							<h2 className='text-2xl font-bold tracking-tighter sm:text-4xl text-colorPalette-tokyoUnderground'>
								Software Developer
							</h2>
							<p className='max-w-[600px] md:text-xl text-colorPalette-solidSnake'>
								I&apos;m a software developer with a strong background in web
								development. My civil engineering background helps me convert
								abstract ideas into concrete solutions.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row text-colorPalette-tokyoUnderground'>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md bg-colorPalette-aloeVeraTea px-8 text-sm font-medium text-colorPalette-blackWash shadow transition-colors hover:bg-[#848C72]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								View Projects
							</Link>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md border border-colorPalette-solidSnake bg-colorPalette-blackWash px-8 text-sm font-medium shadow-sm transition-colors hover:bg-colorPalette-solidSnake hover:text-colorPalette-blackWash focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
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
	);
}

export default HomeSection;
