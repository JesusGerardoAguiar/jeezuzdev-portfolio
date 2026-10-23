import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Every page is prerendered, so the site ships as static files.
		// adapter-static writes Vercel's output format when it builds there.
		adapter: adapter()
	}
};

export default config;
