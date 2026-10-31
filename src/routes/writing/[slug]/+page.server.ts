import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

// Prerendering finds every post through the links on /writing
export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();
	const index = posts.findIndex((p) => p.slug === params.slug);
	if (index === -1) throw error(404, 'Post not found');
	const pick = (i: number) => posts[i] && { slug: posts[i].slug, title: posts[i].title };
	return { post: posts[index], newer: pick(index - 1), older: pick(index + 1) };
};
