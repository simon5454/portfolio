import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card';

type SkillCardIProps = {
	title: string;
	skills: string[];
};

function SkillCard({ title, skills }: SkillCardIProps): JSX.Element {
	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					{skills.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}

export default SkillCard;
