<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let open = false;

	// Fanned out on a quarter arc, like X's compose button: up, diagonal, left.
	// The top label sits above its bubble and the others to the left, so none collide.
	const actions = [
		{
			label: 'Download cool CV',
			href: '/cv/Jesus_Aguiar_CV.pdf',
			download: true,
			bg: 'bg-teal',
			stroke: '#17324D',
			icon: 'M13 3H5v18h12V9M9 13v4M7 15l2 2 2-2M18 2v5M15.5 4.5h5',
			angle: 90,
			labelAbove: true
		},
		{
			label: 'Download boring CV',
			hint: 'ATS friendly',
			href: '/cv/Jesus_Aguiar_CV_ATS.pdf',
			download: true,
			bg: 'bg-white',
			stroke: '#1B4A74',
			icon: 'M14 3H6v18h12V7zM14 3v4h4M9 12h6M9 15h6M9 18h4',
			angle: 135,
			labelAbove: false
		},
		{
			label: 'Get in touch',
			href: 'mailto:aguiarf.j16@gmail.com',
			download: false,
			bg: 'bg-navy',
			stroke: '#FFFFFF',
			icon: 'M3 5h18v14H3zM3 7l9 6 9-6',
			angle: 180,
			labelAbove: false
		}
	];

	const radius = 92;
	const offset = (angle: number) => ({
		x: Math.round(radius * Math.cos((angle * Math.PI) / 180)),
		y: Math.round(-radius * Math.sin((angle * Math.PI) / 180))
	});

	function onKey(e: KeyboardEvent) {
		if (open && e.key === 'Escape') open = false;
	}
</script>

<svelte:window on:keydown={onKey} />

{#if open}
	<button
		type="button"
		class="fixed inset-0 z-40 cursor-default bg-cream/60"
		aria-label="Close menu"
		tabindex="-1"
		on:click={() => (open = false)}
		transition:fade={{ duration: 150 }}
	/>
{/if}

<div class="fixed bottom-6 right-5 z-50 h-16 w-16 md:bottom-9 md:right-10">
	{#if open}
		<ul id="speed-dial-actions" class="contents">
			{#each actions as action, i}
				{@const pos = offset(action.angle)}
				<li
					class="absolute left-1/2 top-1/2 h-[52px] w-[52px]"
					style="transform: translate(calc(-50% + {pos.x}px), calc(-50% + {pos.y}px))"
				>
					<a
						href={action.href}
						download={action.download ? '' : undefined}
						class="group relative block h-full w-full"
						title={action.hint ? `${action.label} (${action.hint})` : action.label}
						on:click={() => (open = false)}
						in:fly={{
							x: -pos.x,
							y: -pos.y,
							duration: 240,
							delay: i * 40,
							easing: backOut,
							opacity: 0
						}}
						out:fade={{ duration: 120 }}
					>
						<span
							class="flex h-full w-full items-center justify-center rounded-full border-[1.5px] border-navy shadow-macsm transition-transform group-hover:-translate-y-0.5 {action.bg}"
						>
							<svg
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								stroke={action.stroke}
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"><path d={action.icon} /></svg
							>
						</span>
						<span
							class="absolute whitespace-nowrap rounded-full border-[1.5px] border-navy bg-white px-2.5 py-0.5 text-xs font-bold text-navy {action.labelAbove
								? 'bottom-full right-0 mb-1.5'
								: 'right-full top-1/2 mr-1.5 -translate-y-1/2'}">{action.label}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	<button
		type="button"
		class="relative flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-navy shadow-mac transition-colors {open
			? 'bg-white'
			: 'bg-navy hover:bg-navydeep'}"
		aria-label={open ? 'Close menu' : 'Download my CV or get in touch'}
		aria-expanded={open}
		aria-controls="speed-dial-actions"
		on:click={() => (open = !open)}
	>
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke={open ? '#1B4A74' : '#FFFFFF'}
			stroke-width="2.4"
			stroke-linecap="round"
			class="transition-transform duration-200 {open ? 'rotate-45' : ''}"
			aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg
		>
	</button>
</div>
