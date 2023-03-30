<script>
	import lografadmin from '$lib/assets/builts/lografadmin.png';
	import lografecommerce from '$lib/assets/builts/lografecommerce.png';
	import lografagenda from '$lib/assets/builts/lograf-agenda.png';
	import alexandria from '$lib/assets/builts/alexandria.png';
	import Project from '$lib/components/projects/project.svelte';

	import webIcon from '$lib/icons/link.svg';
</script>

<div class=" h-full w-100">
	<div class="px-5 lg:px-20 py-20 h-full flex flex-col items-center justify-between bg-primary">
		<h2
			class="font-sfprorounded text-secondary lg:text-[54px] md:text-[35px] text-[24px] text-center my-10 mb-20"
		>
			Projects I've built
		</h2>
		<Project
			text={`Lograf Admin is an easy-to-manage CMS that allows you to have an administrator portal in
    which you can manage your online store, controlling the handling of your products, order
    status, agendas, and services.`}
			title={'Lograf Admin'}
			image={lografadmin}
			links={[{ icon: webIcon, link: 'https://www.lografdesign.com/ecommerce' }]}
			direction={false}
		/>
		<Project
			text={`Lograf Ecommerce is an easy-to-manage online sales ecosystem that allows you to have your ecommerce site integrated into your commerce's internal system. It will allow you to have different payment methods to access your products. Using Lograf Admin the user can manage his online store, controlling the handling of their products and order status. Currently there are more than 30 online stores powered by Lograf Ecommerce`}
			title={'Lograf Ecommerce'}
			image={lografecommerce}
			links={[{ icon: webIcon, link: 'https://www.lografdesign.com/ecommerce' }]}
			direction={true}
		/>
		<Project
			text={`Lograf Agenda is an easy-to-manage appointment scheduling ecosystem that allows you to have your site where you can have information about your services and your clients can choose a date and time to schedule themselves. Using Lograf Admin the user can manage his schedules and days easily.`}
			title={'Lograf Agenda'}
			image={lografagenda}
			links={[{ icon: webIcon, link: 'https://www.lografdesign.com/ecommerce' }]}
			direction={false}
		/>
		<Project
			text={`Lograf Agenda is an easy-to-manage appointment scheduling ecosystem that allows you to have your site where you can have information about your services and your clients can choose a date and time to schedule themselves. Using Lograf Admin the user can manage his schedules and days easily.`}
			title={'Alexandria'}
			image={alexandria}
			links={[{ icon: webIcon, link: 'https://alexandria-theta.vercel.app/' }]}
			direction={true}
		/>
	</div>
</div>
