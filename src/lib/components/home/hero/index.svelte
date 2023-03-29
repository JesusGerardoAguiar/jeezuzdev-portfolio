<script>
	import Typewriter from './typewriter.svelte';
	let strings = [
		'Hi! I’m Jesus aka Jeezuz',
		'I’m full stack developer',
		'No. I cannot turn water into wine'
	];
	import hero from '$lib/assets/hero/hero.jpg';
	import illus from '$lib/assets/hero/illus.png';
</script>

<div
	class=" h-full w-100 aspect-[4/3] lg:aspect-[4/2]"
	style={`background-image: url(${hero}); background-position: bottom;
background-repeat: no-repeat;
background-size: cover;`}
>
	<div class="px-10 lg:px-40 h-full flex flex-row items-center justify-between">
		<Typewriter {strings} delay={150} />
		<img src={illus} class="w-[40%]"/>
	</div>
</div>
