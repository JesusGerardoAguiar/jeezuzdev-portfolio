<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import photo from '$lib/assets/about/aboutme.jpg';
	import WorkLogo from '$lib/components/WorkLogo.svelte';
	import { inGroup, type WorkItem } from '$lib/data/work';
	import { posts, loadPosts } from '$lib/data/posts';

	// Desktop menu bar. Each item drops a classic Mac menu with the content itself,
	// so nobody has to scroll the home page to find it.
	const menus = [
		{ id: 'about', label: 'About', align: 'left', width: 'w-[360px]' },
		{ id: 'work', label: 'Work', align: 'left', width: 'w-[380px]' },
		{ id: 'built', label: 'Built', align: 'right', width: 'w-[380px]' },
		{ id: 'writing', label: 'Writing', align: 'right', width: 'w-[360px]' }
	] as const;
	type MenuId = (typeof menus)[number]['id'];

	const clients = inGroup('client');
	const own = inGroup('own');
	const systems = inGroup('system');

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

	let open: MenuId | null = null;
	let root: HTMLElement;
	const triggers: Partial<Record<MenuId, HTMLButtonElement>> = {};
	const panels: Partial<Record<MenuId, HTMLElement>> = {};

	$: group = ($page.data.item as WorkItem | undefined)?.group;
	$: lit = (id: MenuId) =>
		id === 'work' ? group === 'client' : id === 'built' ? group === 'own' || group === 'system' : false;

	// Set when hovering switched to a menu, so the click that follows doesn't close it again
	let hovered: MenuId | null = null;

	async function toggle(id: MenuId, focusFirst = false) {
		open = open === id && hovered !== id ? null : id;
		hovered = null;
		if (open && focusFirst) {
			await tick();
			panels[id]?.querySelector<HTMLElement>('a')?.focus();
		}
	}

	// Like a real menu bar: once one menu is open, moving across the bar switches menus
	function hover(id: MenuId) {
		if (open && open !== id) open = hovered = id;
	}

	function onKey(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') {
			const id = open;
			open = null;
			triggers[id]?.focus();
			return;
		}
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
		const links = [...(panels[open]?.querySelectorAll<HTMLElement>('a') ?? [])];
		if (!links.length) return;
		e.preventDefault();
		const at = links.indexOf(document.activeElement as HTMLElement);
		const next = e.key === 'ArrowDown' ? at + 1 : at < 0 ? links.length - 1 : at - 1;
		links[(next + links.length) % links.length].focus();
	}

	function onPointer(e: PointerEvent) {
		if (open && !root.contains(e.target as Node)) open = null;
	}

	function onFocusOut(e: FocusEvent) {
		if (open && !root.contains(e.relatedTarget as Node | null) && e.relatedTarget) open = null;
	}

	afterNavigate(() => (open = null));
	onMount(loadPosts);
</script>

<svelte:window on:keydown={onKey} on:pointerdown={onPointer} />

<ul class="hidden items-center gap-1 md:flex" bind:this={root} on:focusout={onFocusOut}>
	{#each menus as menu}
		<li class="relative">
			<button
				type="button"
				bind:this={triggers[menu.id]}
				on:click={() => toggle(menu.id)}
				on:mouseenter={() => hover(menu.id)}
				on:mouseleave={() => (hovered = null)}
				on:keydown={(e) => e.key === 'ArrowDown' && (e.preventDefault(), open !== menu.id && toggle(menu.id, true))}
				aria-expanded={open === menu.id}
				aria-controls="menu-{menu.id}"
				aria-current={lit(menu.id) ? 'page' : undefined}
				class="inline-flex h-11 items-center gap-1.5 rounded-md px-3.5 text-sm font-semibold {open === menu.id
					? 'bg-navy text-white'
					: lit(menu.id)
					? 'bg-navy/10 text-navy hover:bg-navy/10'
					: 'text-navy hover:bg-navy/10'}"
			>
				{menu.label}
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					class="transition-transform {open === menu.id ? 'rotate-180' : ''}"
					aria-hidden="true"><path d="M1.5 3.5L5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" /></svg
				>
			</button>

			{#if open === menu.id}
				<div
					id="menu-{menu.id}"
					bind:this={panels[menu.id]}
					class="menu-panel {menu.width} {menu.align === 'left' ? 'left-0' : 'right-0'}"
				>
					{#if menu.id === 'about'}
						<div class="flex items-center gap-3 px-4 pb-3 pt-4">
							<img
								src={photo}
								alt=""
								width="48"
								height="48"
								class="h-12 w-12 flex-none rounded-full border-2 border-teal object-cover"
							/>
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
						<div class="menu-sep" />
						<ul class="p-1.5">
							{#each actions as action}
								<li>
									<a href={action.href} download={action.download || undefined} class="menu-item">
										<span class="text-sm font-semibold">{action.label}</span>
										{#if action.hint}<span class="menu-hint ml-auto">{action.hint}</span>{/if}
									</a>
								</li>
							{/each}
						</ul>
					{:else if menu.id === 'work'}
						<p class="menu-label">Client work</p>
						<ul class="px-1.5">
							{#each clients as item}
								<li>
									<a href="/work/{item.slug}" class="menu-item">
										<WorkLogo {item} size={28} />
										<span class="flex min-w-0 flex-col">
											<span class="text-sm font-semibold">{item.name}</span>
											<span class="menu-hint">{item.tagline}</span>
										</span>
									</a>
								</li>
							{/each}
						</ul>
						<div class="menu-sep mt-1.5" />
						<div class="p-1.5"><a href="/work" class="menu-item text-sm font-semibold">All work</a></div>
					{:else if menu.id === 'built'}
						{#each [{ label: 'Built on my own', items: own }, { label: 'Systems I designed', items: systems }] as section, i}
							{#if i}<div class="menu-sep mt-1.5" />{/if}
							<p class="menu-label">{section.label}</p>
							<ul class="px-1.5 pb-1.5">
								{#each section.items as item}
									<li>
										<a href="/work/{item.slug}" class="menu-item">
											<WorkLogo {item} size={28} />
											<span class="flex min-w-0 flex-col">
												<span class="text-sm font-semibold">{item.name}</span>
												<span class="menu-hint">{item.tagline}</span>
											</span>
										</a>
									</li>
								{/each}
							</ul>
						{/each}
					{:else}
						<p class="menu-label">Latest on Medium</p>
						<ol class="px-1.5">
							{#each $posts as post, i}
								<li>
									<a href={post.link} target="_blank" rel="noreferrer" class="menu-item items-baseline">
										<span class="menu-hint flex-none font-semibold">{String(i + 1).padStart(2, '0')}</span>
										<span class="text-sm">{post.title}</span>
									</a>
								</li>
							{/each}
						</ol>
						<div class="menu-sep mt-1.5" />
						<div class="p-1.5">
							<a href="https://medium.com/@aguiarjesus" target="_blank" rel="noreferrer" class="menu-item text-sm font-semibold">
								All posts on Medium
							</a>
						</div>
					{/if}
				</div>
			{/if}
		</li>
	{/each}
</ul>

<style lang="postcss">
	/* Classic Mac pull-down: square white sheet, navy outline, hard shadow, inverted highlight */
	.menu-panel {
		@apply absolute top-[calc(100%+8px)] z-40 max-h-[calc(100vh-84px)] overflow-y-auto border-[1.5px] border-navy bg-white text-ink shadow-macsm;
	}
	.menu-label {
		@apply px-4 pb-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted;
	}
	.menu-sep {
		@apply border-t border-dashed border-navy/40;
	}
	.menu-item {
		@apply flex w-full items-center gap-3 rounded-[4px] px-2.5 py-2 text-ink outline-none;
	}
	.menu-item:hover,
	.menu-item:focus-visible {
		@apply bg-navy text-white;
	}
	.menu-hint {
		@apply text-[12px] text-muted;
	}
	.menu-item:hover .menu-hint,
	.menu-item:focus-visible .menu-hint {
		@apply text-white/75;
	}
</style>
