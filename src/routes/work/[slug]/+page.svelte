<script lang="ts">
	import StackIcon from '$lib/components/StackIcon.svelte';
	import WorkLogo from '$lib/components/WorkLogo.svelte';
	import { groups, work } from '$lib/data/work';
	import { stack } from '$lib/data/stack';
	import type { PageData } from './$types';

	export let data: PageData;

	$: item = data.item;
	$: groupLabel = groups.find((g) => g.id === item.group)?.label;
	$: index = work.findIndex((w) => w.slug === item.slug);
	$: next = work[(index + 1) % work.length];
</script>

<svelte:head>
	<title>{item.name} · Jesús Aguiar</title>
	<meta name="description" content={item.summary} />
</svelte:head>

<article class="flex flex-col gap-8 px-4 py-6 md:gap-10 md:px-16 md:py-10">
	<div class="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-12">
		<div class="min-w-0 flex-1">
			<p class="label-caps">{groupLabel} · {item.role}</p>
			<h1
				class="mt-3 font-display text-[32px] font-extrabold leading-[1.1] text-ink md:text-[50px]"
			>
				{item.headline}
				<span class="rounded bg-teal/[.35] px-1.5 text-navy [box-decoration-break:clone]"
					>{item.highlight}</span
				>
			</h1>
			<p class="mt-4 max-w-[640px] text-[15px] leading-relaxed text-body md:text-[17px]">
				{item.summary}
			</p>

			<h2 class="sr-only">What I did</h2>
			<ul class="mt-5 flex flex-col gap-2">
				{#each item.did as line}
					<li class="flex items-start gap-2.5 text-sm leading-normal text-body md:text-[15px]">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#2E7D69"
							stroke-width="2.2"
							stroke-linecap="round"
							class="mt-0.5 flex-none"
							aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg
						>
						{line}
					</li>
				{/each}
			</ul>

			{#if item.links.length}
				<div class="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
					{#each item.links as link, i}
						<a
							href={link.href}
							target="_blank"
							rel="noreferrer"
							class="inline-flex h-11 items-center justify-center rounded-full px-5 text-center text-sm font-semibold {i ===
							0
								? 'bg-navy text-white shadow-button hover:bg-navydeep'
								: 'border-[1.5px] border-navy bg-white text-navy hover:bg-paper'}">{link.label}</a
						>
					{/each}
				</div>
			{/if}
		</div>

		{#if item.shot}
			<img
				src={item.shot}
				alt="Screenshot of {item.name}"
				class="w-full max-w-[420px] self-center rounded-lg border-[1.5px] border-navy bg-white shadow-mac lg:w-[380px]"
			/>
		{:else}
			<div class="hidden self-center rounded-full border-[6px] border-line lg:block">
				<WorkLogo {item} size={208} round />
			</div>
		{/if}
	</div>

	{#if item.stack.length}
		<section aria-labelledby="stack-heading">
			<h2 id="stack-heading" class="label-caps">Stack on this project</h2>
			<ul class="mt-3.5 grid grid-cols-3 gap-4 border-y border-line py-5 md:grid-cols-6">
				{#each item.stack as key}
					<li class="flex flex-col items-center gap-1.5 text-center text-sm font-semibold">
						<StackIcon {key} size={36} />
						{stack[key].name}
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<nav
		aria-label="More work"
		class="flex justify-between border-t border-line pt-4 text-sm font-semibold md:border-0 md:pt-0"
	>
		<a href="/" class="flex min-h-[44px] items-center hover:text-tealdeep">← Home</a>
		<a href="/work/{next.slug}" class="flex min-h-[44px] items-center hover:text-tealdeep"
			>Next: {next.name} →</a
		>
	</nav>
</article>
