<script>
	import orangetheory from '$lib/assets/works/orangetheory.svg';
	import barrysbootcamp from '$lib/assets/works/barrysbootcamp.svg';
	import anytimefitness from '$lib/assets/works/anytimefitness.svg';
	import brokenyolk from '$lib/assets/works/brokenyolk.svg';
	import perspire from '$lib/assets/works/perspire.svg';
	import serraform from '$lib/assets/works/serraform.jpg';

	import Project from '$lib/components/projects/project.svelte';

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
			links={[
				{ icon: webIcon, label: 'Website', link: 'https://www.orangetheory.com/' },
				{ icon: webIcon, label: 'Webflow Case Study', link: 'https://webflow.com/customers/orangetheory-fitness' }
			]}
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
			text={`Led The Broken Yolk Cafe's migration from a legacy site to Webflow alongside a full rebranding, giving the diner chain a modern site and visual identity to match.`}
			title={'The Broken Yolk Cafe'}
			image={brokenyolk}
			links={[{ icon: webIcon, label: 'Website', link: 'https://www.thebrokenyolkcafe.com/' }]}
			direction={false}
		/>
		<Project
			text={`Led the team building Perspire Sauna Studio's engineering foundation from the ground up on Webflow CMS, giving the business the ability to easily create new promos and packages and add new studio openings themselves without engineering involvement.`}
			title={'Perspire Sauna Studio'}
			image={perspire}
			links={[{ icon: webIcon, label: 'Website', link: 'https://www.perspiresaunastudio.com/' }]}
			direction={true}
		/>
		<Project
			text={`Serraform Streaming is a suite of tools for building decentralized video experiences on the web3 platform Decentraland.`}
			title={'Serraform Streaming'}
			image={serraform}
			links={[
				{ icon: youtubeIcon, label: 'YouTube', link: 'https://www.youtube.com/watch?v=6d4q7ToTUFs' }
			]}
			direction={false}
		/>
	</div>
</div>
