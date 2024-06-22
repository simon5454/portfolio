import MainNav from '@/components/layout/MainNav';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Simon Ritchot | Contact',
};

export default function Contact() {
	return (
		<main>
			<MainNav />
		</main>
	);
}
