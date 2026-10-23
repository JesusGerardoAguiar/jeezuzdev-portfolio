<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WorkLogo from '$lib/components/WorkLogo.svelte';
	import { groups, inGroup, work, type WorkItem } from '$lib/data/work';

	let query = '';

	$: current = $page.data.item as WorkItem | undefined;
	$: q = query.trim().toLowerCase();
	$: matches = (w: WorkItem) => !q || `${w.name} ${w.tagline}`.toLowerCase().includes(q);
</script>

<div class="mx-auto max-w-[1440px] px-0 pb-6 md:px-10 md:pt-7">
	<!-- Phone: a project picker replaces the sidebar -->
	<div class="px-4 pt-3 md:hidden">
		<label
			class="relative flex h-11 items-center justify-between gap-2 rounded-full border border-line bg-white px-3.5 text-sm font-semibold"
		>
			<span class="flex min-w-0 items-center gap-2.5">
				{#if current}<WorkLogo item={current} size={22} />{current.name}{/if}
			</span>
			<span class="flex flex-none items-center gap-1 text-xs text-muted">
				All projects
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#5E6E7C"
					stroke-width="2"
					stroke-linecap="round"
					aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg
				>
			</span>
			<select
				class="absolute inset-0 cursor-pointer opacity-0"
				aria-label="Choose a project"
				value={current?.slug}
				on:change={(e) => goto(`/work/${e.currentTarget.value}`)}
			>
				{#each groups as group}
					<optgroup label={group.label}>
						{#each inGroup(group.id) as item}
							<option value={item.slug}>{item.name}</option>
						{/each}
					</optgroup>
				{/each}
			</select>
		</label>
	</div>

	<section
		aria-label="Work"
		class="flex flex-col overflow-hidden bg-paper md:rounded-lg md:border-[1.5px] md:border-navy md:shadow-[6px_6px_0_rgba(27,74,116,0.16)]"
	>
		<div class="mac-titlebar hidden md:flex">
			<span class="mac-box left-3.5" aria-hidden="true" />
			<span class="bg-white px-2.5 font-display text-[13px] font-extrabold tracking-wide text-navy">
				Work{current ? ` / ${current.name}` : ''}
			</span>
			<span class="mac-box right-3.5" aria-hidden="true">
				<span
					class="absolute left-px top-px h-[5px] w-[5px] border-b-[1.5px] border-r-[1.5px] border-navy"
				/>
			</span>
		</div>

		<div class="flex min-h-0 flex-1">
			<nav
				aria-label="Projects"
				class="hidden w-[268px] flex-none border-r-[1.5px] border-navy bg-[#F7EFE3] px-3 py-4 md:block"
			>
				<label class="flex h-9 items-center gap-2 rounded-md border border-line bg-white px-2.5">
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#5E6E7C"
						stroke-width="2"
						aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg
					>
					<input
						type="search"
						bind:value={query}
						placeholder="Search projects..."
						aria-label="Search projects"
						class="w-full border-0 bg-transparent p-0 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-0"
					/>
				</label>
				{#each groups as group}
					{@const items = inGroup(group.id).filter(matches)}
					{#if items.length}
						<h2 class="mb-1.5 mt-5 px-2.5 text-[13px] text-muted">{group.label}</h2>
						<ul>
							{#each items as item}
								<li>
									<a
										href="/work/{item.slug}"
										aria-current={current?.slug === item.slug ? 'page' : undefined}
										class="flex items-center gap-2.5 rounded-[5px] px-2.5 py-[7px] text-sm hover:bg-white {current?.slug ===
										item.slug
											? 'bg-cream font-semibold text-ink'
											: 'text-[#2A4560]'}"
									>
										<WorkLogo {item} size={20} />{item.name}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
				{#if !work.some(matches)}
					<p class="mt-5 px-2.5 text-sm text-muted">Nothing matches "{query}".</p>
				{/if}
			</nav>

			<div class="min-w-0 flex-1">
				<slot />
			</div>
		</div>
	</section>
</div>
