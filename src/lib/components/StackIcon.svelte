<script lang="ts">
	import { stack, type StackKey } from '$lib/data/stack';

	export let key: StackKey;
	export let size = 28;

	$: entry = stack[key] as { name: string; path?: string; hex?: string; glyph?: string };
</script>

<span
	class="flex flex-none items-center justify-center rounded-md border border-line bg-paper"
	style="width: {size}px; height: {size}px"
	aria-hidden="true"
>
	{#if entry.path}
		<svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill={entry.hex}
			><path d={entry.path} /></svg
		>
	{:else}
		<svg
			width={size * 0.62}
			height={size * 0.62}
			viewBox="0 0 24 24"
			fill="none"
			stroke="#1B4A74"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"><path d={entry.glyph} /></svg
		>
	{/if}
</span>
