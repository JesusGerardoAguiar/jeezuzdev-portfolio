<script lang="ts">
	import '../styles/global.css';
	import { page } from '$app/stores';
	import { siGithub } from 'simple-icons';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
	import type { WorkItem } from '$lib/data/work';

	const title = 'Jesús Aguiar · Staff Engineer / Engineering Manager';
	const description =
		'Staff Engineer / Engineering Manager with 8+ years shipping production software. I lead product teams for FitTech enterprise clients and still ship code.';

	const nav = [
		{
			label: 'About',
			href: '/#about',
			icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6'
		},
		{
			label: 'Work',
			href: '/work',
			icon: 'M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18'
		},
		{
			label: 'Built',
			href: '/work/lograf-ecommerce',
			icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z'
		},
		{ label: 'Writing', href: '/#writing', icon: 'M4 4h10l6 6v10H4zM14 4v6h6M8 14h8M8 17h5' }
	];

	// Work and Built both open the work section; which one is lit depends on the project's group
	$: group = ($page.data.item as WorkItem | undefined)?.group;
	$: active = (label: string) =>
		label === 'Work'
			? group === 'client'
			: label === 'Built'
			? group === 'own' || group === 'system'
			: false;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://jeezuzdev-portfolio.vercel.app/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://i.ibb.co/vY6V9PT/download.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://i.ibb.co/vY6V9PT/download.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Nunito:wght@800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
>
	Skip to content
</a>

<header class="sticky top-0 z-30 border-b-[1.5px] border-navy bg-white">
	<div
		class="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:h-[60px] md:px-12"
	>
		<a href="/" class="font-display text-xl font-extrabold text-navy md:text-[22px]">
			jeezuz<span class="text-tealdeep">.dev</span>
		</a>
		<nav aria-label="Main" class="flex items-center gap-1">
			<ul class="hidden items-center gap-1 md:flex">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="inline-flex h-11 items-center rounded-full px-4 text-sm font-semibold text-navy hover:bg-navy/10 {active(
								item.label
							)
								? 'bg-navy/10'
								: ''}"
							aria-current={active(item.label) ? 'page' : undefined}>{item.label}</a
						>
					</li>
				{/each}
			</ul>
			<a
				href="https://github.com/JesusGerardoAguiar/"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-navy/10"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="#1B4A74" aria-hidden="true"
					><path d={siGithub.path} /></svg
				>
			</a>
			<a
				href="https://www.linkedin.com/in/aguiarjesus/"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-navy/10"
			>
				<svg
					width="19"
					height="19"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#1B4A74"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					><rect x="3" y="3" width="18" height="18" rx="3" /><path
						d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"
					/></svg
				>
			</a>
			<a
				href="https://medium.com/@aguiarjesus"
				target="_blank"
				rel="noreferrer"
				aria-label="Medium"
				class="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-navy/10 sm:inline-flex"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="#1B4A74" aria-hidden="true"
					><circle cx="7" cy="12" r="5" /><ellipse cx="15.5" cy="12" rx="2.5" ry="4.7" /><ellipse
						cx="20.5"
						cy="12"
						rx="1"
						ry="4.2"
					/></svg
				>
			</a>
		</nav>
	</div>
	<nav aria-label="Sections" class="border-t border-line bg-cream md:hidden">
		<ul class="grid grid-cols-4 px-3 py-1.5">
			{#each nav as item}
				<li>
					<a
						href={item.href}
						class="flex flex-col items-center gap-1 rounded-md py-1.5 text-[11px] font-semibold text-navy {active(
							item.label
						)
							? 'bg-navy/10'
							: ''}"
						aria-current={active(item.label) ? 'page' : undefined}
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#1B4A74"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"><path d={item.icon} /></svg
						>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main id="main">
	<slot />
</main>

<footer
	class="mx-auto flex max-w-[1440px] items-center justify-between px-4 pb-28 pt-6 text-xs text-muted md:px-16 md:pb-10 md:pr-36"
>
	<span>Jesús Aguiar · Montevideo, Uruguay</span>
	<span>Built with SvelteKit</span>
</footer>

<SpeedDial />
