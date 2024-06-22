import MainNav from '@/components/layout/MainNav';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | Home',
};

export default function Home() {
	return (
		<main>
			<MainNav />
		</main>
	);
}
