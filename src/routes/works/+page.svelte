<script>
	import orangetheory from '$lib/assets/works/orangetheory.avif';
	import barrysbootcamp from '$lib/assets/works/barrysbootcamp.jpg';
	import anytimefitness from '$lib/assets/works/anytimefitness.jpg';
	import serraform from '$lib/assets/works/serraform.jpg';

	import Project from '$lib/components/projects/project.svelte';

	import githubIcon from '$lib/icons/github.svg';
	import youtubeIcon from '$lib/icons/youtube.svg';
	import webIcon from '$lib/icons/link.svg';
</script>

<div class=" h-full w-100">
	<div class=" py-20 h-full flex flex-col items-center justify-between bg-primary">

		<h2 class="font-sfprorounded text-secondary lg:text-[54px] md:text-[35px] text-[24px] text-center my-10 mb-20">
			Projects I've worked on
		</h2>
		<Project
			text={`As Engineering Manager, led the consolidation of two separate legacy platforms into a single unified CMS architecture serving 1,500+ studios across 24 countries, and architected a cloud-native analytics pipeline (Snowplow, Snowflake, AWS) that directly contributed to a 20% Q4 2024 revenue increase.`}
			title={'Orangetheory Fitness'}
			image={orangetheory}
			links={[{ icon: webIcon, label: 'Website', link: 'https://www.orangetheory.com/' }]}
			direction={true}
		/>
		<Project
			text={`Led Barry's Bootcamp migration from a legacy WordPress site to Webflow, with a specific focus on analytics architecture — redesigning how data ingests, is reviewed, and flows into reporting systems for clean, reliable visibility into their funnel.`}
			title={"Barry's Bootcamp"}
			image={barrysbootcamp}
			links={[{ icon: webIcon, label: 'Website', link: 'https://www.barrys.com/' }]}
			direction={false}
		/>
		<Project
			text={`Led Anytime Fitness's migration from legacy WordPress to Webflow, collaborating directly with the Orangetheory engineering team to build and share React component libraries across both brands — reducing duplication and enforcing a consistent frontend standard across a $1B+ system-wide brand family.`}
			title={'Anytime Fitness'}
			image={anytimefitness}
			links={[{ icon: webIcon, label: 'Website', link: 'https://www.anytimefitness.com/' }]}
			direction={true}
		/>
		<Project
			text={`Serraform Streaming is a suite of tools for building decentralized video experiences on the web3 platform Decentraland.`}
			title={'Serraform Streaming'}
			image={serraform}
			links={[
				{ icon: githubIcon, label: 'GitHub', link: 'https://github.com/Serraform/Decentraland-Streaming' },
				{ icon: webIcon, label: 'Website', link: 'https://decentral-demo-app.azurewebsites.net/' },
				{ icon: youtubeIcon, label: 'YouTube', link: 'https://www.youtube.com/watch?v=6d4q7ToTUFs' }
			]}
			direction={false}
		/>
		<div class="py-8 bg-secondary w-full text-center">
			<p class="font-sfprorounded text-primary lg:text-[24px] md:text-[25px] text-[16px]">If you wanna see more projects I've worked on, check out this link: <a href="https://lografdesign.com/ecommerce" target="_blank">here</a> </p>
		</div>
	</div>
</div>
