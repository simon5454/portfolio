import { Button } from '../button';
import { Input } from '../input';
import { Textarea } from '../textarea';

type HomeContactSectionIProps = {};

function HomeContactSection(props: HomeContactSectionIProps): JSX.Element {
	return (
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
						I&apos;m always excited to discuss new projects and opportunities. Feel free
						to reach out to me using the form below.
					</p>
				</div>
				<div className='mx-auto w-full max-w-sm space-y-2'>
					<form className='flex flex-col gap-2'>
						<Input type='text' placeholder='Name' className='max-w-lg flex-1' />
						<Input type='email' placeholder='Email' className='max-w-lg flex-1' />
						<Textarea placeholder='Message' className='max-w-lg flex-1' />
						<Button type='submit'>Send Message</Button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default HomeContactSection;
