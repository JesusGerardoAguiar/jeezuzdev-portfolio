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

<div class={` flex ${direction ? 'flex-col-reverse lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'}  my-5 lg:my-0 flex-wrap lg:flex-nowrap items-center justify-between `}>
	<div class="w-full px-5 lg:px-10 mt-8 lg:mt-0">
		<h2 class="font-sfprorounded text-secondary text-[24px] md:text-[35px] lg:text-[54px] mb-5">{title}</h2>
		<p>
			{text}
		</p>
		{#if links.length}
			<h3 class="font-sfprorounded text-secondary text-[18px] md:text-[15px] lg:text-[24px] mt-5 mb-2">
				You can learn more about it in the following links
			</h3>
			<div class="flex flex-row items-center ">
				{#each links as link}
					<a href={link.link} target="_blank" class="mr-5">
						<img src={link.icon} alt={link.label ?? 'link'} />
					</a>
				{/each}
			</div>
		{/if}
	</div>
	<img src={image} alt={title} class="w-full h-[16rem] lg:w-auto object-cover lg:h-auto lg:object-none"/>
</div>
