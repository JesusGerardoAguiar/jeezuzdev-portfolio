// Reads Jesús's Medium RSS feed and turns each story into a post the site can render.
// Plain JS so scripts/sync-posts.js can reuse it outside of SvelteKit.

export const MEDIUM_PROFILE = 'https://medium.com/@aguiarjesus';
export const FEED_URL = 'https://medium.com/feed/@aguiarjesus';

/**
 * @typedef {object} Post
 * @property {string} slug     URL segment on this site
 * @property {string} id       Medium's post id
 * @property {string} title
 * @property {string} date     ISO publish date
 * @property {string[]} tags
 * @property {string} medium   The story on Medium, for claps and comments
 * @property {string} excerpt
 * @property {number} minutes  Reading time
 * @property {string} html     Story body
 */

/** @type {Record<string, string>} */
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };

/** @param {string} s */
function decode(s) {
	return s
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
		.replace(/&(\w+|#39);/g, (m, n) => entities[n] ?? m);
}

/** @param {string} item @param {string} tag */
function field(item, tag) {
	const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
	if (!m) return '';
	const raw = m[1].trim();
	const cdata = raw.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
	return cdata ? cdata[1] : decode(raw);
}

/** @param {string} html */
function text(html) {
	return decode(html.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, ' '))
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Drops Medium's tracking pixel and anything executable; lazy-loads images.
 * @param {string} html
 */
function clean(html) {
	return html
		.replace(/<img[^>]*medium\.com\/_\/stat[^>]*>/g, '')
		.replace(/<(script|style|iframe)[\s\S]*?<\/\1>/gi, '')
		.replace(/\son\w+="[^"]*"/gi, '')
		.replace(/<img /g, '<img loading="lazy" decoding="async" ')
		.replace(/<a href="(https?:)/g, '<a target="_blank" rel="noreferrer" href="$1')
		.trim();
}

/**
 * "doing-code-review-to-claude-ff42786cfcc9" becomes "doing-code-review-to-claude"
 * @param {string} link
 * @param {string} id
 */
function slugOf(link, id) {
	const last = new URL(link).pathname.split('/').filter(Boolean).pop() ?? id;
	return last.replace(new RegExp(`-${id}$`), '') || id;
}

/** @param {string} xml @returns {Post[]} */
export function parseFeed(xml) {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
	return items
		.map((item) => {
			const link = field(item, 'link').split('?')[0];
			const id = field(item, 'guid').split('/').pop() ?? '';
			const body = clean(field(item, 'content:encoded'));
			const words = text(body).split(' ').length;
			const firstParagraph = body.match(/<p>([\s\S]*?)<\/p>/);
			const excerpt = firstParagraph ? text(firstParagraph[1]) : '';
			return {
				slug: slugOf(link, id),
				id,
				title: text(field(item, 'title')),
				date: new Date(field(item, 'pubDate')).toISOString(),
				tags: [...item.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)].map((m) => m[1]),
				medium: link,
				excerpt: excerpt.length > 180 ? `${excerpt.slice(0, 177).trimEnd()}...` : excerpt,
				minutes: Math.max(1, Math.round(words / 230)),
				html: body
			};
		})
		.filter((p) => p.id && p.html);
}

/** @returns {Promise<Post[]>} */
export async function fetchFeed() {
	const res = await fetch(FEED_URL, { headers: { 'user-agent': 'jeezuz.dev build' } });
	if (!res.ok) throw new Error(`Medium feed returned ${res.status}`);
	return parseFeed(await res.text());
}

/**
 * Medium's feed only carries the latest 10 stories, so older ones come from the saved copy.
 * Fresh feed entries win over saved ones with the same id.
 * @param {Post[]} fresh @param {Post[]} saved @returns {Post[]}
 */
export function merge(fresh, saved) {
	const byId = new Map(saved.map((p) => [p.id, p]));
	for (const p of fresh) byId.set(p.id, p);
	return [...byId.values()].sort((a, b) => b.date.localeCompare(a.date));
}
