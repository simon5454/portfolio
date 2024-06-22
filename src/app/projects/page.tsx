import MainNav from '@/components/layout/MainNav';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | Projects',
};

export default function Projects() {
	return (
		<main>
			<MainNav />
		</main>
	);
}
