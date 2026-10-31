<script lang="ts">
	import MacWindow from '$lib/components/MacWindow.svelte';
	import { formatDate } from '$lib/date';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Writing · Jesús Aguiar</title>
	<meta
		name="description"
		content="Notes from the work: React, Svelte, AI tooling and code review."
	/>
</svelte:head>

<div class="mx-auto max-w-[860px] px-4 pb-6 pt-6 md:px-10 md:pt-8">
	<MacWindow title="Writing" padded={false}>
		<div class="px-4 py-6 sm:px-8 md:px-12 md:py-10">
			<h1 class="font-display text-[30px] font-extrabold leading-tight text-ink md:text-[40px]">
				Notes from the work
			</h1>
			<p class="mt-2 text-[15px] text-body">
				Also published on
				<a
					href="https://medium.com/@aguiarjesus"
					target="_blank"
					rel="noreferrer"
					class="font-semibold text-navy underline decoration-teal decoration-2 underline-offset-[3px] hover:text-tealdeep"
					>Medium</a
				>, where the claps and comments are.
			</p>

			<ol class="mt-8 flex flex-col">
				{#each data.posts as post}
					<li class="border-t border-line first:border-t-0">
						<a href="/writing/{post.slug}" class="group flex flex-col gap-1.5 py-5">
							<span class="label-caps">
								<time datetime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min read
							</span>
							<span
								class="font-display text-xl font-extrabold leading-snug text-ink group-hover:text-tealdeep"
								>{post.title}</span
							>
							<span class="text-sm leading-relaxed text-body">{post.excerpt}</span>
						</a>
					</li>
				{/each}
			</ol>
		</div>
	</MacWindow>
</div>
