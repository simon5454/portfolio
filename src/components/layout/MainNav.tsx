import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Component() {
	return (
		<header className='flex h-16 w-full items-center justify-between px-4 md:px-6'>
			<Link href='/' className='flex items-center gap-2' prefetch={false}>
				<Image src='/favicon/favicon-32x32.png' width={32} height={32} alt='logo' />
				<span className='sr-only'>Acme Inc</span>
			</Link>
			<nav className='hidden items-center gap-6 md:flex'>
				<Link
					href='/'
					className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
					prefetch={false}
				>
					Home
				</Link>
				<Link
					href='/projects'
					className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
					prefetch={false}
				>
					Projects
				</Link>
				<Link
					href='/about'
					className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
					prefetch={false}
				>
					About
				</Link>
				<Link
					href='/contact'
					className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
					prefetch={false}
				>
					Contact
				</Link>

				<Button variant='default' size='icon' className='w-full p-3'>
					Download CV
				</Button>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='md:hidden'>
						<MenuIcon className='h-6 w-6' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='right'>
					<div className='grid gap-4 p-4'>
						<Link
							href='#'
							className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href='#'
							className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
							prefetch={false}
						>
							About
						</Link>
						<Link
							href='#'
							className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
							prefetch={false}
						>
							Contact
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
}

function MenuIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}
