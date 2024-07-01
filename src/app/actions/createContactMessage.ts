'use server';

import { z } from 'zod';

const createContactMessageSchema = z.object({
	name: z.string().min(3).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500),
});

export async function createContactMessage(prevState: any, formData: FormData) {
	const validateSchema = createContactMessageSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message'),
	});

	if (!validateSchema.success) {
		return validateSchema.error;
	}

	try {
	} catch (error) {}
}
