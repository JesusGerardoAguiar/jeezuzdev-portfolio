<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	/**
	 * @type {string | any[]}
	 */
	let items = [];

	onMount(async () => {
		const res = await fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aguiarjesus'
		);
		const data = await res.json();
		items = data.items;
	});
</script>

<div class=" py-8 px-10">
	<h3 class="font-sfprorounded text-secondary lg:text-[54px] md:text-[35px] text-[28px] text-center mb-10">
		Find me on Medium
	</h3>
	{#if items.length}
		<swiper-container slides-per-view={4} speed={200} loop={true} autoplay={true} class="ml-5"  breakpoints={{
			992: {
			  slidesPerView: 3,
			},
			576: {
			  slidesPerView: 2,
			},
			0: {
			  slidesPerView: 1,
			},
		  }}>
			{#each items as item}
				<swiper-slide>
					<div class="carousel-item" key={item.link}>
						<a href={item.link} target="_blank">
							<img class="carousel-image" src={item.thumbnail} alt={item.title} />
							<h3 class="font-sfprorounded text-secondary text-center mt-5">{item.title}</h3>
						</a>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	{:else}
		<div class="flex flex-row justify-center">
			<div class="basic" />
		</div>
	{/if}
</div>
