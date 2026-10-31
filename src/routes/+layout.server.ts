import { getSummaries } from '$lib/server/posts';
import type { LayoutServerLoad } from './$types';

// The dock and the home page both list the latest stories
export const load: LayoutServerLoad = async () => ({
	latestPosts: (await getSummaries()).slice(0, 4)
});
