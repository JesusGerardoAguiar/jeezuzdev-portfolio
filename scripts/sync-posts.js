// Refreshes src/lib/data/posts.json from Medium. Run `npm run posts:sync` after publishing,
// then commit the file. The build also reads the live feed, so this copy is the fallback
// and the archive for stories that have dropped out of Medium's 10-item feed.
import { readFile, writeFile } from 'node:fs/promises';
import { fetchFeed, merge } from '../src/lib/server/medium.js';

const file = new URL('../src/lib/data/posts.json', import.meta.url);
const saved = JSON.parse(await readFile(file, 'utf8').catch(() => '[]'));
const posts = merge(await fetchFeed(), saved);
await writeFile(file, JSON.stringify(posts, null, '\t') + '\n');
console.log(`Saved ${posts.length} posts`);
