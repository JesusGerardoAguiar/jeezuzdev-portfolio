<script>
	import { onMount } from 'svelte';
	let showCursor = true;

	/**
	 * @type {string | any[]}
	 */
	export let strings = [];
	export let delay = 60;

	let currentIndex = 0;
	let currentString = '';

	async function typeNextString() {
		if (currentIndex === strings.length) {
			currentIndex = 0;
		}

		const nextString = strings[currentIndex];
		const nextStringLength = nextString.length;

		for (let i = 0; i < nextStringLength; i++) {
			currentString = nextString.slice(0, i + 1);
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
		currentIndex++;
		showCursor = false;
		await new Promise((resolve) => setTimeout(resolve, delay));
		showCursor = true;
		setTimeout(typeNextString, delay * 4);
	}

	onMount(() => {
		typeNextString();
	});
</script>

<p class="font-sfprorounded text-secondary text-[54px] md:text-[35px]">
	{currentString}
	{#if showCursor}
		<span>|</span>
	{/if}
</p>
