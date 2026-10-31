<script lang="ts">
	import { formatDate } from '$lib/date';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ post, newer, older } = data);
</script>

<svelte:head>
	<title>{post.title} · Jesús Aguiar</title>
	<meta name="description" content={post.excerpt} />
	<!-- Medium is where the story was first published, so search engines credit that copy -->
	<link rel="canonical" href={post.medium} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="article:published_time" content={post.date} />
</svelte:head>

<div class="mx-auto max-w-[860px] px-0 pb-6 md:px-10 md:pt-7">
	<article
		class="overflow-hidden bg-white md:rounded-lg md:border-[1.5px] md:border-navy md:shadow-[6px_6px_0_rgba(27,74,116,0.16)]"
	>
		<div class="mac-titlebar hidden md:flex">
			<span class="mac-box left-3.5" aria-hidden="true" />
			<a
				href="/writing"
				class="bg-white px-2.5 font-display text-[13px] font-extrabold tracking-wide text-navy hover:text-tealdeep"
				>Writing</a
			>
			<span class="mac-box right-3.5" aria-hidden="true">
				<span
					class="absolute left-px top-px h-[5px] w-[5px] border-b-[1.5px] border-r-[1.5px] border-navy"
				/>
			</span>
		</div>

		<div class="px-4 py-7 sm:px-8 md:px-14 md:py-12">
			<header class="mx-auto max-w-[680px]">
				<p class="label-caps">
					<time datetime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min read
				</p>
				<h1
					class="mt-3 font-display text-[30px] font-extrabold leading-[1.15] text-ink md:text-[42px]"
				>
					{post.title}
				</h1>
				<a
					href={post.medium}
					target="_blank"
					rel="noreferrer"
					class="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-navy hover:text-tealdeep"
				>
					Also on Medium
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg
					>
				</a>
			</header>

			<div class="post mx-auto mt-6 max-w-[680px] border-t border-line pt-8">
				{@html post.html}
			</div>

			<aside
				class="mx-auto mt-12 flex max-w-[680px] flex-col gap-4 rounded-lg border-[1.5px] border-navy bg-paper p-5 shadow-macsm sm:flex-row sm:items-center sm:justify-between"
			>
				<div>
					<p class="font-display text-lg font-extrabold text-ink">Liked it? Say so on Medium.</p>
					<p class="mt-1 text-sm text-body">Claps and comments live over there.</p>
				</div>
				<a
					href={post.medium}
					target="_blank"
					rel="noreferrer"
					class="inline-flex h-11 flex-none items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-button hover:bg-navydeep"
				>
					Clap or comment
				</a>
			</aside>

			<nav
				aria-label="More writing"
				class="mx-auto mt-10 grid max-w-[680px] gap-3 border-t border-line pt-5 text-sm font-semibold sm:grid-cols-2"
			>
				{#if older}
					<a href="/writing/{older.slug}" class="flex min-h-[44px] flex-col hover:text-tealdeep">
						<span class="label-caps">Older</span>{older.title}
					</a>
				{:else}
					<a href="/writing" class="flex min-h-[44px] items-center hover:text-tealdeep"
						>← All writing</a
					>
				{/if}
				{#if newer}
					<a
						href="/writing/{newer.slug}"
						class="flex min-h-[44px] flex-col hover:text-tealdeep sm:items-end sm:text-right"
					>
						<span class="label-caps">Newer</span>{newer.title}
					</a>
				{/if}
			</nav>
		</div>
	</article>
</div>

<style lang="postcss">
	/* Medium's markup: p, h3, h4, figure, pre, blockquote, lists, links */
	.post {
		@apply text-[17px] leading-[1.75] text-body;
	}
	.post :global(p),
	.post :global(ul),
	.post :global(ol),
	.post :global(blockquote),
	.post :global(pre),
	.post :global(figure) {
		@apply mb-6;
	}
	.post :global(h3) {
		@apply mb-3 mt-10 font-display text-2xl font-extrabold leading-tight text-ink;
	}
	.post :global(h4) {
		@apply mb-2 mt-8 font-display text-xl font-extrabold text-ink;
	}
	.post :global(strong) {
		@apply font-semibold text-ink;
	}
	.post :global(a) {
		@apply font-medium text-navy underline decoration-teal decoration-2 underline-offset-[3px] hover:text-tealdeep;
	}
	.post :global(ul) {
		@apply list-disc pl-6;
	}
	.post :global(ol) {
		@apply list-decimal pl-6;
	}
	.post :global(li) {
		@apply mb-2 pl-1;
	}
	.post :global(blockquote) {
		@apply border-l-4 border-teal pl-4 italic;
	}
	.post :global(figure img) {
		@apply mx-auto h-auto max-w-full rounded-md border border-line;
	}
	.post :global(figcaption) {
		@apply mt-2 text-center text-[13px] text-muted;
	}
	.post :global(pre) {
		@apply overflow-x-auto rounded-md border-[1.5px] border-navy bg-navydeep p-4 font-mono text-[13px] leading-relaxed text-[#E8EEF3];
		white-space: pre;
	}
	.post :global(code) {
		@apply rounded bg-cream px-1 py-0.5 font-mono text-[0.9em] text-ink;
	}
	.post :global(pre code) {
		@apply bg-transparent p-0 text-inherit;
	}
	.post :global(hr) {
		@apply my-10 border-line;
	}
</style>
