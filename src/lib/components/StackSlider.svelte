<script lang="ts">
	import StackIcon from './StackIcon.svelte';
	import { stack, type StackKey } from '$lib/data/stack';

	/** Items to show; `note` is the small line under the name. */
	export let items: { key: StackKey; note?: string }[];
	/** Seconds per item, so long and short lists move at the same pace. */
	export let pace = 2.6;
	export let size = 36;

	// Short lists repeat so the strip is always wider than the window it scrolls in
	$: copies = Math.max(1, Math.ceil(12 / items.length));
	$: set = Array.from({ length: copies }, () => items).flat();
	$: duration = set.length * pace;
</script>

<div class="slider relative overflow-hidden">
	<ul class="sr-only">
		{#each items as item}
			<li>{stack[item.key].name}{item.note ? `, ${item.note}` : ''}</li>
		{/each}
	</ul>
	<div class="track flex w-max" style="animation-duration: {duration}s" aria-hidden="true">
		{#each [0, 1] as half}
			<div class="flex" data-half={half}>
				{#each set as item}
					<div class="flex w-[132px] flex-none flex-col items-center gap-1.5 px-2 text-center">
						<StackIcon key={item.key} {size} />
						<span class="text-sm font-semibold leading-tight">{stack[item.key].name}</span>
						{#if item.note}<span class="text-xs text-muted">{item.note}</span>{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.slider {
		-webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
		mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
	}
	.track {
		animation: slide linear infinite;
	}
	.slider:hover .track {
		animation-play-state: paused;
	}
	@keyframes slide {
		to {
			transform: translateX(-50%);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.slider {
			overflow-x: auto;
		}
		.track {
			animation: none;
		}
		[data-half='1'] {
			display: none;
		}
	}
</style>
