import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Post {
	title: string;
	link: string;
}

const feed = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aguiarjesus';

// Shown until (or if) the live feed loads
export const posts = writable<Post[]>([
	{ title: 'Doing Code Review to Claude', link: 'https://medium.com/@aguiarjesus' },
	{ title: 'My first Svelte library', link: 'https://medium.com/@aguiarjesus' },
	{ title: 'Taming the useState Hell', link: 'https://medium.com/@aguiarjesus' },
	{ title: 'Bundlr + Arweave + NextJS', link: 'https://medium.com/@aguiarjesus' }
]);

let loaded = false;

/** Fetches the latest Medium posts once per visit; safe to call from every component that shows them. */
export async function loadPosts() {
	if (!browser || loaded) return;
	loaded = true;
	try {
		const res = await fetch(feed);
		if (!res.ok) return;
		const data = await res.json();
		if (data.status === 'ok' && data.items?.length) {
			posts.set(data.items.slice(0, 4).map((i: Post) => ({ title: i.title, link: i.link })));
		}
	} catch {
		// keep the fallback list
	}
}
