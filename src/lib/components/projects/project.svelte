<script>
	import illus from '$lib/assets/hero/illus.png';
	export let text = '';
	export let title = '';
	export let image = '';
	
	/**
	 * @type {any[]}
	 */
	 export let links = [];
	export let direction = true;
</script>

<div class={` flex ${direction ? 'flex-row' : 'flex-row-reverse'} items-center justify-between `}>
	<div class="w-full px-20">
		<h2 class="font-sfprorounded text-secondary text-[54px] md:text-[35px] mb-5">{title}</h2>
		<p>
			{text}
		</p>
		<h3 class="font-sfprorounded text-secondary text-[24px] md:text-[15px] mt-5 mb-2">
			You can learn more about it in the following links
		</h3>
		<div class="flex flex-row items-center ">
			{#each links as link}
				<a href={link.link} target="_blank" class="mr-5">
					<img src={link.icon} />
				</a>
			{/each}
		</div>
	</div>
	<img src={image} />
</div>
