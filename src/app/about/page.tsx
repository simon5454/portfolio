import MainNav from '@/components/layout/MainNav';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | About',
};

export default function About() {
	return (
		<main>
			<MainNav />
		</main>
	);
}
