import { ReactNode, useActionState } from 'react';
import { createContactMessage } from '@/app/actions/createContactMessage';
import { Button } from '../button';
import { Input } from '../input';
import { Textarea } from '../textarea';
import { useFormStatus } from 'react-dom';

type ContactFormIProps = {};

function ContactForm(props: ContactFormIProps): JSX.Element {
	const [state, formAction] = useActionState(createContactMessage, null);
	const { pending } = useFormStatus();

	return (
		<form className='flex flex-col gap-2' action={formAction}>
			<Input type='text' placeholder='Name' className='max-w-lg flex-1' />
			<Input type='email' placeholder='Email' className='max-w-lg flex-1' />
			<Textarea placeholder='Message' className='max-w-lg flex-1' />
			<SubmitButton>Send Message</SubmitButton>
		</form>
	);
}

function SubmitButton({ children }: { children: ReactNode }) {
	const { pending } = useFormStatus();

	return (
		<Button type='submit' aria-disabled={pending}>
			{children}
		</Button>
	);
}
