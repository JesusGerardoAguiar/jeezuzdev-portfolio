<script lang="ts">
	export let title: string;
	export let id: string | undefined = undefined;
	let className = '';
	export { className as class };
	/** Padding for the window body; set to false when the content handles its own. */
	export let padded = true;

	const headingId = `win-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
</script>

<section
	{id}
	aria-labelledby={headingId}
	class="flex min-w-0 flex-col overflow-hidden rounded-lg border-[1.5px] border-navy bg-white shadow-mac {className}"
>
	<div class="mac-titlebar">
		<span class="mac-box left-3.5" aria-hidden="true" />
		<h2
			id={headingId}
			class="bg-white px-2.5 font-display text-[13px] font-extrabold tracking-wide text-navy"
		>
			{title}
		</h2>
		<span class="mac-box right-3.5" aria-hidden="true">
			<span
				class="absolute left-px top-px h-[5px] w-[5px] border-b-[1.5px] border-r-[1.5px] border-navy"
			/>
		</span>
	</div>
	<div class="flex flex-1 flex-col gap-3 {padded ? 'px-5 pb-5 pt-4' : ''}">
		<slot />
	</div>
</section>
