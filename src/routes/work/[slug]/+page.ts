import { error } from '@sveltejs/kit';
import { bySlug } from '$lib/data/work';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const item = bySlug(params.slug);
	if (!item) throw error(404, 'Project not found');
	return { item };
};
