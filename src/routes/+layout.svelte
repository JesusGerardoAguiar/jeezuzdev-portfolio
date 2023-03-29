<script>
	import '../styles/global.css';
	import githubIcon from '$lib/icons/github.svg';
	import twitterIcon from '$lib/icons/twitter.svg';
	import mediumIcon from '$lib/icons/medium.svg';
	import linkedinIcon from '$lib/icons/linkedin.svg';
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { page } from '$app/stores';
</script>
<!-- Primary Meta Tags -->
<title>Jeezuzdev - Fullstack Engineer</title>
<meta name="title" content="Jeezuzdev - Fullstack Engineer">
<meta name="description" content="Hi there! My name is Jesús and I'm a fullstack engineer with React and a web3 developer, thanks for visiting my page!">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://jeezuzdev.vercel.app/">
<meta property="og:title" content="Jeezuzdev - Fullstack Engineer">
<meta property="og:description" content="Hi there! My name is Jesús and I'm a fullstack engineer with React and a web3 developer, thanks for visiting my page!">
<meta property="og:image" content="https://i.ibb.co/vY6V9PT/download.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://jeezuzdev.vercel.app/">
<meta property="twitter:title" content="Jeezuzdev - Fullstack Engineer">
<meta property="twitter:description" content="Hi there! My name is Jesús and I'm a fullstack engineer with React and a web3 developer, thanks for visiting my page!">
<meta property="twitter:image" content="https://i.ibb.co/vY6V9PT/download.png">

<Navbar let:hidden let:toggle class="absolute !bg-transparent">
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi
			href="/"
			class={`hover:!text-third active:!text-third ${
				$page.url.pathname === '/' ? 'md:text-third' : ''
			}`}>home</NavLi
		>
		<NavLi
			href="/projects"
			class={`hover:!text-third active:!text-third ${
				$page.url.pathname === '/projects' ? 'md:text-third' : ''
			}`}>what I’ve built</NavLi
		>
		<NavLi
			href="/works"
			class={`hover:!text-third active:!text-third ${
				$page.url.pathname === '/works' ? 'md:text-third' : ''
			}`}>projects i've worked</NavLi
		>
		<NavLi
			href="https://drive.google.com/file/d/1Wawxb_MRFGVhsNKYELVWdaRYfEU1BXvN/view?usp=share_link"
			target="_blank"
			class="hover:!text-third active:!text-third">resume</NavLi
		>
	</NavUl>
	<div class="flex flex-row justify-end items-center ml-auto">
		<a class="mx-2" href="https://github.com/JesusGerardoAguiar/" target="_blank"
			><img src={githubIcon} /></a
		>
		<a class="mx-2" href="https://twitter.com/jeezuzdev" target="_blank"
			><img src={twitterIcon} /></a
		>
		<a class="mx-2" href="https://medium.com/@aguiarjesus" target="_blank"
			><img src={mediumIcon} /></a
		>
		<a class="mx-2" href="https://www.linkedin.com/in/aguiarjesus/" target="_blank"
			><img src={linkedinIcon} /></a
		>
	</div>
</Navbar>
<slot />
<div class="flex flex-row justify-center py-2 items-center px-[40px]">
	<p class="font-sfprorounded text-third text-[12px]">Build with Svelte 2023</p>
	<div class="flex flex-row justify-end items-center ml-auto">
		<a class="mx-2" href="https://github.com/JesusGerardoAguiar/" target="_blank"
			><img src={githubIcon} /></a
		>
		<a class="mx-2" href="https://twitter.com/jeezuzdev" target="_blank"
			><img src={twitterIcon} /></a
		>
		<a class="mx-2" href="https://medium.com/@aguiarjesus" target="_blank"
			><img src={mediumIcon} /></a
		>
		<a class="mx-2" href="https://www.linkedin.com/in/aguiarjesus/" target="_blank"
			><img src={linkedinIcon} /></a
		>
	</div>
</div>
