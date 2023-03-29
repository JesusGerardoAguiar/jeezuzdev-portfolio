<script>
	import Hero from '$lib/components/home/hero/index.svelte';
	import About from '$lib/components/home/about/index.svelte';
	import separator from '$lib/assets/about/separator.jpg';
    import Skills from '$lib/components/home/skills/index.svelte';
	import Projects from '$lib/components/home/projects/index.svelte';
	import MediumArticles from '$lib/components/home/medium/index.svelte';
</script>

<Hero />
<About />
<div
	class="w-full h-[4rem]"
	style={`background-image: url(${separator}); background-position: bottom;
background-repeat: no-repeat;
`}
/>
<Skills />
<Projects />
<MediumArticles />