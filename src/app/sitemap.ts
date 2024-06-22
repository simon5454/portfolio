import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL = 'https://acme.com';

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/about`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
	];
}
