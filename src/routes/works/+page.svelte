<script>
	import brujaslab from '$lib/assets/works/brujaslab.jpg';
	import malcri from '$lib/assets/works/malcri.jpg';
	import mihabito from '$lib/assets/works/mihabito.jpg';
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
			text={`Serraform Streaming is a suite of tools for building decentralized video experiences on the web3 platform Decentraland.`}
			title={'Serraform Streaming'}
			image={serraform}
			links={[
				{ icon: githubIcon, link: 'https://github.com/Serraform/Decentraland-Streaming' },
				{ icon: webIcon, link: 'https://decentral-demo-app.azurewebsites.net/' },
				{ icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=6d4q7ToTUFs' }
			]}
			direction={false}
		/>
		<Project
			text={`Powered by Lograf Ecommerce, Brujaslab is a a store dedicated to commercializing ceramics and supplies within the field of aromatherapy.`}
			title={'Brujaslab'}
			image={brujaslab}
			links={[{ icon: webIcon, link: 'https://brujaslab.com/' }]}
			direction={false}
		/>
		<Project
			text={`Powered by Lograf Agenda, Mi hábito Nutricional is the appointment scheduling service for nutrition consultations offered by Lic. Micaela Moreira, in which her clients can choose a date and time, and pay for the consultation through the web.`}
			title={'Mi hábito nutricional'}
			image={mihabito}
			links={[{ icon: webIcon, link: 'https://mihabitonutricional.com.uy/' }]}
			direction={false}
		/>
		<Project
			text={`Powered by Lograf Ecommerce, A los 80s y Malcriada are both two second-hand vintage clothing companies founded in 2018. They entered the industry with the aim of making a mark and truly generating a social and psychological change in the country. Vintage clothing, in addition to promoting sustainability and giving garments a longer lifespan, is becoming increasingly present in the wardrobes of Uruguayans.`}
			title={'A los 80s y Malcriada'}
			image={malcri}
			links={[{ icon: webIcon, link: 'https://alos80smalcriada.com.uy/' }]}
			direction={false}
		/>
	</div>
</div>
