<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { spring } from 'svelte/motion';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { siGithub } from 'simple-icons';
	import photo from '$lib/assets/about/aboutme.jpg';
	import { posts, loadPosts } from '$lib/data/posts';

	// Desktop navigation as a Mac dock pinned to the bottom of the screen, so the page
	// starts right at the top. Icons magnify toward the cursor like the real one.
	type Item = {
		id: string;
		label: string;
		tile: string;
		href?: string;
		external?: boolean;
		/** Opens a panel above the dock instead of navigating */
		panel?: boolean;
	};

	const items: Item[] = [
		{ id: 'home', label: 'Home', href: '/', tile: 'bg-cream' },
		{ id: 'about', label: 'About', panel: true, tile: 'bg-teal' },
		{ id: 'work', label: 'Work', href: '/work', tile: 'bg-navy' },
		{ id: 'writing', label: 'Writing', panel: true, tile: 'bg-paper' },
		{ id: 'github', label: 'GitHub', href: 'https://github.com/JesusGerardoAguiar/', external: true, tile: 'bg-[#181717]' },
		{ id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aguiarjesus/', external: true, tile: 'bg-[#0A66C2]' },
		{ id: 'medium', label: 'Medium', href: 'https://medium.com/@aguiarjesus', external: true, tile: 'bg-white' }
	];
	// A divider goes before the first external link, like the one before the Trash
	const divider = items.findIndex((i) => i.external);

	const about = [
		{ title: 'Who I am', text: '8+ years shipping. A manager who still reviews PRs.' },
		{ title: 'How I work', text: 'Ship small, measure everything, write things down.' },
		{ title: "What I'm looking for", text: 'Remote Staff, EM, or Product Engineer roles.' }
	];

	const actions = [
		{ label: 'Download cool CV', href: '/cv/Jesus_Aguiar_CV.pdf', download: true },
		{ label: 'Download boring CV', hint: 'ATS friendly', href: '/cv/Jesus_Aguiar_CV_ATS.pdf', download: true },
		{ label: 'Get in touch', hint: 'aguiarf.j16@gmail.com', href: 'mailto:aguiarf.j16@gmail.com', download: false }
	];

	const BASE = 36;
	const MAX = 1.55;
	const RANGE = 120;

	const flat = items.map(() => 1);
	// A spring rather than CSS transitions: each mousemove retargets it, so icons glide
	// after the cursor instead of restarting a transition on every event
	const scales = spring(flat, { stiffness: 0.16, damping: 0.72, precision: 0.001 });
	let hovered: number | null = null;
	let open: string | null = null;
	let shelf: HTMLElement;
	let root: HTMLElement;
	let panel: HTMLElement;
	let panelLeft = 0;
	const tiles: HTMLElement[] = [];
	// Icon centers at rest, relative to the shelf's center, so growing icons don't feed back into the math
	let centers: number[] = [];
	let still = false;

	$: path = $page.url.pathname;
	$: running = (id: string) => (id === 'home' ? path === '/' : id === 'work' && path.startsWith('/work'));

	function measure() {
		const box = shelf.getBoundingClientRect();
		const mid = box.left + box.width / 2;
		centers = tiles.map((t) => {
			const r = t.getBoundingClientRect();
			return r.left + r.width / 2 - mid;
		});
	}

	function magnify(e: MouseEvent) {
		if (still) return;
		if (!centers.length) measure();
		const box = shelf.getBoundingClientRect();
		const x = e.clientX - (box.left + box.width / 2);
		scales.set(
			centers.map((c) => {
				const d = Math.min(Math.abs(x - c) / RANGE, 1);
				return 1 + ((MAX - 1) * (Math.cos(d * Math.PI) + 1)) / 2;
			})
		);
	}

	function rest() {
		scales.set(flat);
		hovered = null;
	}

	async function toggle(id: string, i: number) {
		open = open === id ? null : id;
		if (!open) return;
		await tick();
		const box = root.getBoundingClientRect();
		const t = tiles[i].getBoundingClientRect();
		const half = panel.offsetWidth / 2;
		// Center over the icon, but keep the panel on screen
		const center = Math.min(Math.max(t.left + t.width / 2, half + 16), innerWidth - half - 16);
		panelLeft = center - box.left;
		panel.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
	}

	function onKey(e: KeyboardEvent) {
		if (open && e.key === 'Escape') {
			const i = items.findIndex((it) => it.id === open);
			open = null;
			tiles[i]?.focus();
		}
	}

	function onPointer(e: PointerEvent) {
		if (open && !root.contains(e.target as Node)) open = null;
	}

	afterNavigate(() => (open = null));
	onMount(() => {
		loadPosts();
		still = matchMedia('(prefers-reduced-motion: reduce)').matches;
	});
</script>

<svelte:window on:keydown={onKey} on:pointerdown={onPointer} on:resize={() => (centers = [])} />

<nav
	aria-label="Main"
	bind:this={root}
	class="fixed bottom-3 left-1/2 z-40 hidden -translate-x-1/2 md:block"
>
	{#if open}
		<div
			bind:this={panel}
			id="dock-{open}"
			class="dock-panel"
			style="left: {panelLeft}px"
		>
			{#if open === 'about'}
				<div class="flex items-center gap-3 px-4 pb-3 pt-4">
					<img src={photo} alt="" width="48" height="48" class="h-12 w-12 flex-none rounded-full border-2 border-teal object-cover" />
					<div class="min-w-0">
						<p class="font-display text-lg font-extrabold leading-tight text-ink">Jesús Aguiar</p>
						<p class="text-[13px] text-muted">Staff Engineer / Engineering Manager</p>
					</div>
				</div>
				<dl class="flex flex-col gap-2.5 px-4 pb-3.5">
					{#each about as row}
						<div>
							<dt class="text-[13px] font-semibold text-ink">{row.title}</dt>
							<dd class="text-[13px] text-muted">{row.text}</dd>
						</div>
					{/each}
				</dl>
				<div class="dock-sep" />
				<ul class="p-1.5">
					{#each actions as action}
						<li>
							<a href={action.href} download={action.download || undefined} class="dock-item">
								<span class="text-sm font-semibold">{action.label}</span>
								{#if action.hint}<span class="dock-hint ml-auto">{action.hint}</span>{/if}
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="px-4 pb-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
					Latest on Medium
				</p>
				<ol class="px-1.5">
					{#each $posts as post, i}
						<li>
							<a href={post.link} target="_blank" rel="noreferrer" class="dock-item items-baseline">
								<span class="dock-hint flex-none font-semibold">{String(i + 1).padStart(2, '0')}</span>
								<span class="text-sm">{post.title}</span>
							</a>
						</li>
					{/each}
				</ol>
				<div class="dock-sep mt-1.5" />
				<div class="p-1.5">
					<a href="https://medium.com/@aguiarjesus" target="_blank" rel="noreferrer" class="dock-item text-sm font-semibold">
						All posts on Medium
					</a>
				</div>
			{/if}
		</div>
	{/if}

	<ul
		bind:this={shelf}
		on:mousemove={magnify}
		on:mouseleave={rest}
		class="flex h-[50px] items-end gap-1.5 rounded-[14px] border-[1.5px] border-navy bg-white/80 px-2 pb-[6px] shadow-mac backdrop-blur-md"
	>
		{#each items as item, i}
			{#if i === divider}
				<li class="mx-1 h-8 w-px self-center bg-navy/30" aria-hidden="true" />
			{/if}
			<li class="relative flex flex-col items-center" style="width: {BASE * $scales[i]}px">
				<svelte:element
					this={item.panel ? 'button' : 'a'}
					bind:this={tiles[i]}
					type={item.panel ? 'button' : undefined}
					href={item.href}
					target={item.external ? '_blank' : undefined}
					rel={item.external ? 'noreferrer' : undefined}
					aria-label={item.label}
					aria-expanded={item.panel ? open === item.id : undefined}
					aria-controls={item.panel ? `dock-${item.id}` : undefined}
					aria-current={running(item.id) ? 'page' : undefined}
					on:click={() => item.panel && toggle(item.id, i)}
					on:mouseenter={() => (hovered = i)}
					on:focus={() => (hovered = i)}
					on:blur={() => (hovered = null)}
					class="tile {item.tile}"
					style="width: {BASE * $scales[i]}px; height: {BASE * $scales[i]}px"
				>
					{#if item.id === 'home'}
						<span class="font-display font-extrabold text-navy" style="font-size: {16 * $scales[i]}px">j<span class="text-tealdeep">.</span></span>
					{:else}
						<svg viewBox="0 0 24 24" class="h-[52%] w-[52%]" aria-hidden="true">
							{#if item.id === 'about'}
								<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="#17324D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							{:else if item.id === 'work'}
								<path d="M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							{:else if item.id === 'writing'}
								<path d="M4 4h10l6 6v10H4zM14 4v6h6M8 14h8M8 17h5" fill="none" stroke="#1B4A74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							{:else if item.id === 'github'}
								<path d={siGithub.path} fill="#FFFFFF" />
							{:else if item.id === 'linkedin'}
								<path d="M7 10v7M7 7v.01M11 17v-7M11 13.5a3 3 0 0 1 6 0V17" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
							{:else}
								<g fill="#000000"><circle cx="7" cy="12" r="5" /><ellipse cx="15.5" cy="12" rx="2.5" ry="4.7" /><ellipse cx="20.5" cy="12" rx="1" ry="4.2" /></g>
							{/if}
						</svg>
					{/if}
				</svelte:element>
				<span
					class="absolute -bottom-[5px] h-1 w-1 rounded-full bg-navy transition-opacity {running(item.id) ? 'opacity-100' : 'opacity-0'}"
					aria-hidden="true"
				/>
				{#if hovered === i && open !== item.id}
					<span
						class="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-xs font-semibold text-white shadow-macsm"
						role="tooltip">{item.label}</span
					>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.tile {
		@apply flex flex-none items-center justify-center rounded-[10px] border-[1.5px] border-navy shadow-macsm;
	}
	/* Pops up above the dock like a Dock stack */
	.dock-panel {
		@apply absolute bottom-full mb-7 max-h-[calc(100vh-120px)] w-[360px] -translate-x-1/2 overflow-y-auto rounded-lg border-[1.5px] border-navy bg-white text-ink shadow-mac;
	}
	.dock-sep {
		@apply border-t border-dashed border-navy/40;
	}
	.dock-item {
		@apply flex w-full items-center gap-3 rounded-[4px] px-2.5 py-2 text-ink outline-none;
	}
	.dock-item:hover,
	.dock-item:focus-visible {
		@apply bg-navy text-white;
	}
	.dock-hint {
		@apply text-[12px] text-muted;
	}
	.dock-item:hover .dock-hint,
	.dock-item:focus-visible .dock-hint {
		@apply text-white/75;
	}
</style>
