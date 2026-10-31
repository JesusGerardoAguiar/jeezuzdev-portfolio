import saved from '$lib/data/posts.json';
import { fetchFeed, merge, type Post } from './medium.js';

export type { Post };
/** What lists need: everything but the body */
export type PostSummary = Omit<Post, 'html'>;

// Slugs listed here stay on Medium but are left off this site.
const hidden: string[] = [];

let cache: Promise<Post[]> | undefined;

/** Links between stories point at this site's copy instead of Medium's. */
function linkLocally(posts: Post[]): Post[] {
	return posts.map((post) => ({
		...post,
		html: post.html.replace(
			/<a target="_blank" rel="noreferrer" href="https:\/\/[^"]*medium\.com\/[^"]*-([0-9a-f]{12})[^"]*"/g,
			(tag, id: string) => {
				const target = posts.find((p) => p.id === id);
				return target ? `<a href="/writing/${target.slug}"` : tag;
			}
		)
	}));
}

/**
 * Every post, newest first. Runs at build time (the site is prerendered), so a new Medium
 * story shows up on the next deploy. If Medium can't be reached, the saved copy is used.
 */
export function getPosts(): Promise<Post[]> {
	cache ??= fetchFeed()
		.catch((err) => {
			console.warn(`[posts] Using saved posts: ${err.message}`);
			return [];
		})
		.then((fresh) =>
			linkLocally(merge(fresh, saved as Post[]).filter((p) => !hidden.includes(p.slug)))
		);
	return cache;
}

export async function getSummaries(): Promise<PostSummary[]> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return (await getPosts()).map(({ html, ...rest }) => rest);
}
