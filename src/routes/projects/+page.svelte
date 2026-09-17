<script>
	import lografadmin from '$lib/assets/builts/lografadmin.png';
	import lografecommerce from '$lib/assets/builts/lografecommerce.png';
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
			text={`Lograf Admin is the CMS and administrator portal behind Lograf's ecommerce and appointment-scheduling products — a single dashboard where business owners manage products, order status, agendas, and services without touching code.`}
			title={'Lograf Admin'}
			image={lografadmin}
			links={[]}
			direction={false}
		/>
		<Project
			text={`Lograf Ecommerce is an easy-to-manage online store platform with MercadoPago checkout built in and a professional, responsive storefront out of the box. Using Lograf Admin, the business owner manages products and order status without touching code. More than 30 live stores have been powered by Lograf Ecommerce.`}
			title={'Lograf Ecommerce'}
			image={lografecommerce}
			links={[]}
			direction={true}
		/>
		<Project
			text={`A way for teachers and creators to upload their content into a blockchain, from studying material to whole online courses for students to purchase using their wallet so they can have unlimited and permanent access for the items stored on their wallets.`}
			title={'Alexandria'}
			image={alexandria}
			links={[{ icon: webIcon, label: 'Website', link: 'https://alexandria-theta.vercel.app/' }]}
			direction={true}
		/>
	</div>
</div>
