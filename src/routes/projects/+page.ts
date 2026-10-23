import { redirect } from '@sveltejs/kit';

// Old URL from the previous site
export function load() {
	throw redirect(301, '/work/lograf-ecommerce');
}
