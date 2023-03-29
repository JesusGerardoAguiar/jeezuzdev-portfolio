<script>
	import skills from '$lib/assets/skills/skills.jpg';
	import Percentage from './percentage.svelte';
</script>

<div class=" h-full w-full flex flex-row flex-wrap lg:flex-nowrap">
	<div
		class="w-[100%] lg:w-[50%] py-24 lg:py-0 flex flex-row items-center justify-center"
		style={`background-image: url(${skills}); background-position: center center;
background-repeat: no-repeat; background-size: cover;
`}
	>
		<p class="font-sfprorounded text-secondary text-[18px] md:text-[35px] lg:text-[54px] text-center">My awesome skills</p>
	</div>
	<div class="px-10 py-10 w-[100%] lg:w-[50%] h-full flex flex-row items-baseline justify-between flex-wrap">
		<Percentage  />
	</div>
</div>



