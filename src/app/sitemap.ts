import { MetadataRoute } from 'next';

const domain = 'https://bjh-github-io.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: domain,
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 1,
		},
	];
}
