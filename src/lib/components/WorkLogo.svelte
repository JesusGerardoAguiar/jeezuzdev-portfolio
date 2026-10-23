<script lang="ts">
	import type { WorkItem } from '$lib/data/work';

	export let item: WorkItem;
	export let size = 28;
	export let round = false;

	// Dark text on light brand colors, white on dark ones
	const isLight = (hex: string) => {
		const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
		return 0.299 * r + 0.587 * g + 0.114 * b > 150;
	};
</script>

{#if item.logo}
	<img
		src={item.logo}
		alt=""
		width={size}
		height={size}
		class="flex-none object-cover {round ? 'rounded-full' : 'rounded-md'}"
		style="width: {size}px; height: {size}px"
	/>
{:else if item.glyph}
	<span
		class="flex flex-none items-center justify-center {round ? 'rounded-full' : 'rounded-md'}"
		style="width: {size}px; height: {size}px; background: {item.color}"
		aria-hidden="true"
	>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke={isLight(item.color) ? '#17324D' : '#FFFFFF'}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			style="width: {Math.round(size * 0.55)}px; height: {Math.round(size * 0.55)}px"
			><path d={item.glyph} /></svg
		>
	</span>
{:else}
	<span
		class="flex flex-none items-center justify-center font-bold {isLight(item.color)
			? 'text-ink'
			: 'text-white'} {round ? 'rounded-full' : 'rounded-md'}"
		style="width: {size}px; height: {size}px; background: {item.color}; font-size: {Math.round(
			size * 0.38
		)}px"
		aria-hidden="true">{item.mark}</span
	>
{/if}
