import { defineCollection, z } from 'astro:content';
import { getPosts } from './content';
import type { RTTextNode } from '@prismicio/client';

const blog = defineCollection({
	loader: async () => {
		const posts = await getPosts();
		console.log(JSON.stringify(posts, null, 2));
		return posts.map((x) => ({
			...x,
			title: x.data.title.reduce((acc, x) => `${acc} ${x.text}`, ''),
			description: x.data.body.reduce((acc, x) => `${acc} ${(x as RTTextNode).text ?? ''}`, ''),
			first_publication_date: new Date(Date.parse(x.first_publication_date)),
			last_publication_date: new Date(Date.parse(x.last_publication_date)),
		}));
	},
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		first_publication_date: z.date(),
		last_publication_date: z.date(),
		slugs: z.array(z.string()),
		lang: z.string(),
		data: z.object({
			title: z.array(z.object({
				type: z.string(),
				text: z.string(),
				spans: z.array(z.any().optional()),
				direction: z.string(),
			})),
			category: z.string().optional(),
			body: z.array(z.object({
				type: z.string(),
				text: z.string(),
				spans: z.array(z.any().optional()),
				direction: z.string(),
			})),
		})
	}),
});

export const collections = { blog };
