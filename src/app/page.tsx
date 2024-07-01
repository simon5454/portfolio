import MainNav from '@/components/layout/MainNav';
import HomeContactSection from '@/components/ui/sections/HomeContactSection';
import HomeFeatureProjectsSection from '@/components/ui/sections/HomeFeatureProjectsSection';
import HomeSection from '@/components/ui/sections/HomeSection';
import HomeSkillsSection from '@/components/ui/sections/HomeSkillsSection';
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

				<HomeSkillsSection />

				<HomeContactSection />
			</main>
		</>
	);
}
