import { redirect } from '@sveltejs/kit';
import { work } from '$lib/data/work';

export function load() {
	throw redirect(307, `/work/${work[0].slug}`);
}
