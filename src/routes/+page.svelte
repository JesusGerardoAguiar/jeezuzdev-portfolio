<script lang="ts">
	import { onMount } from 'svelte';
	import photo from '$lib/assets/about/aboutme.jpg';
	import MacWindow from '$lib/components/MacWindow.svelte';
	import StackSlider from '$lib/components/StackSlider.svelte';
	import WorkLogo from '$lib/components/WorkLogo.svelte';
	import { inGroup } from '$lib/data/work';
	import { stackGroups } from '$lib/data/stack';
	import { posts, loadPosts } from '$lib/data/posts';

	const clients = inGroup('client');
	const built = [...inGroup('own'), ...inGroup('system')];
	const stackItems = stackGroups.flatMap((g) => g.items.map((key) => ({ key, note: g.label })));

	const startHere = [
		{
			title: 'Who I am',
			text: '8+ years shipping. A manager who still reviews PRs.',
			stroke: '#C2410C',
			icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6'
		},
		{
			title: 'How I work',
			text: 'Ship small, measure everything, write things down.',
			stroke: '#1B4A74',
			icon: 'M4 12h4l3-8 4 16 3-8h2'
		},
		{
			title: "What I'm looking for",
			text: 'Remote Staff, EM, or Product Engineer roles.',
			stroke: '#2E7D69',
			icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
		}
	];

	const facts = [
		{ value: '8+', label: 'years' },
		{ value: '5 to 6', label: 'teams' },
		{ value: 'GMT-3', label: 'Montevideo' }
	];

	onMount(loadPosts);
</script>

<div class="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 pb-6 pt-6 md:gap-7 md:px-16 md:pt-8">
	<header class="flex items-center gap-4 md:gap-5">
		<img
			src={photo}
			alt="Jesús Aguiar"
			width="72"
			height="72"
			class="h-14 w-14 flex-none rounded-full border-2 border-teal object-cover md:h-[72px] md:w-[72px]"
		/>
		<div class="min-w-0">
			<h1 class="font-display text-[28px] font-extrabold leading-tight text-ink md:text-[40px]">
				Jesús Aguiar
			</h1>
			<p class="mt-1 text-[15px] leading-snug text-body md:mt-2 md:text-[17px]">
				Staff Engineer / Engineering Manager. I lead product teams for
				<span class="rounded bg-teal/[.35] px-1 font-bold text-navy">FitTech enterprise</span> clients
				and still ship code.
			</p>
		</div>
	</header>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
		<MacWindow title="Start here" id="about">
			<p class="text-[13px] text-muted">The 30 second version.</p>
			{#each startHere as item}
				<div class="flex items-start gap-3">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke={item.stroke}
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mt-0.5 flex-none"
						aria-hidden="true"><path d={item.icon} /></svg
					>
					<div>
						<h3 class="text-[15px] font-semibold">{item.title}</h3>
						<p class="mt-0.5 text-sm text-muted">{item.text}</p>
					</div>
				</div>
			{/each}
		</MacWindow>

		<MacWindow title="Right now">
			<div class="flex items-start justify-between gap-3">
				<p class="text-[13px] text-muted">Outliant, now part of Ignite.</p>
				<span
					class="inline-flex flex-none items-center gap-1.5 rounded-full bg-teal/25 px-2.5 py-1 text-xs font-semibold text-tealdeep"
				>
					<span class="h-[7px] w-[7px] rounded-full bg-teal" />Open to roles
				</span>
			</div>
			<p class="text-[15px] leading-relaxed text-body">
				Leading 5 to 6 concurrent product teams for FitTech enterprise clients. Architecture, code
				review and production incidents are part of my week, not something I delegate.
			</p>
			<dl class="mt-auto grid grid-cols-3 gap-2">
				{#each facts as fact}
					<div class="rounded-md bg-paper px-3 py-2.5">
						<dt class="sr-only">{fact.label}</dt>
						<dd class="text-xl font-bold">{fact.value}</dd>
						<dd class="label-caps text-[10px]" aria-hidden="true">{fact.label}</dd>
					</div>
				{/each}
			</dl>
		</MacWindow>

		<MacWindow title="Client work" id="work" class="md:col-span-2 xl:col-span-1 xl:row-span-2">
			<p class="text-[13px] text-muted">Enterprise brands my teams ship for.</p>
			<ul class="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
				{#each clients as client}
					<li>
						<a
							href="/work/{client.slug}"
							class="flex min-h-[52px] items-center gap-3 rounded-[10px] border border-line bg-paper px-3.5 py-2 hover:border-teal"
						>
							<WorkLogo item={client} size={30} />
							<span class="flex min-w-0 flex-col gap-0.5">
								<span class="text-[15px] font-semibold">{client.name}</span>
								<span class="label-caps">{client.tagline}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
			<a href="/work" class="mt-1 text-sm font-semibold hover:text-tealdeep">All work →</a>
		</MacWindow>

		<MacWindow title="Stack" class="md:col-span-2" padded={false}>
			<p class="px-5 pt-4 text-[13px] text-muted">What I reach for.</p>
			<div class="flex flex-1 items-center pb-5">
				<div class="min-w-0 flex-1"><StackSlider items={stackItems} size={48} /></div>
			</div>
		</MacWindow>

		<MacWindow title="Things I've built" id="built" class="md:col-span-2">
			<p class="text-[13px] text-muted">Products I founded and systems I designed.</p>
			<ul class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
				{#each built as item}
					<li>
						<a
							href="/work/{item.slug}"
							class="flex h-full items-start gap-3 rounded-[10px] border border-line bg-paper p-3.5 hover:border-teal"
						>
							<WorkLogo {item} size={28} />
							<span class="flex flex-col gap-1">
								<span class="text-sm font-semibold">{item.name}</span>
								<span class="text-[13px] leading-snug text-muted">{item.tagline}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</MacWindow>

		<MacWindow title="Writing" id="writing" class="md:col-span-2 xl:col-span-1">
			<p class="text-[13px] text-muted">Notes from the work, on Medium.</p>
			<ol class="flex flex-col gap-2.5">
				{#each $posts as post, i}
					<li>
						<a
							href={post.link}
							target="_blank"
							rel="noreferrer"
							class="flex items-baseline gap-2.5 text-sm hover:text-tealdeep"
						>
							<span class="label-caps flex-none">{String(i + 1).padStart(2, '0')}</span>{post.title}
						</a>
					</li>
				{/each}
			</ol>
			<a
				href="https://medium.com/@aguiarjesus"
				target="_blank"
				rel="noreferrer"
				class="mt-auto text-sm font-semibold hover:text-tealdeep"
			>
				All posts on Medium →
			</a>
		</MacWindow>
	</div>
</div>
