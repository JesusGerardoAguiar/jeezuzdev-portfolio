import orangetheory from '$lib/assets/works/orangetheory.svg';
import barrys from '$lib/assets/works/barrysbootcamp.svg';
import anytimefitness from '$lib/assets/works/anytimefitness.svg';
import brokenyolk from '$lib/assets/works/brokenyolk.svg';
import perspire from '$lib/assets/works/perspire.svg';
import serraform from '$lib/assets/works/serraform.jpg';
import lografecommerce from '$lib/assets/builts/lografecommerce.png';
import lografadmin from '$lib/assets/builts/lografadmin.png';
import alexandria from '$lib/assets/builts/alexandria.png';
import type { StackKey } from './stack';

export type WorkGroup = 'client' | 'own' | 'system';

export interface WorkLink {
	label: string;
	href: string;
}

export interface WorkItem {
	slug: string;
	group: WorkGroup;
	name: string;
	/** Square logo shown in lists. Falls back to `mark` on `color`. */
	logo?: string;
	/** Wide screenshot shown on the case page instead of the logo. */
	shot?: string;
	mark: string;
	color: string;
	role: string;
	/** Short line under the name in lists. */
	tagline: string;
	headline: string;
	highlight: string;
	summary: string;
	did: string[];
	stack: StackKey[];
	links: WorkLink[];
}

export const groups: { id: WorkGroup; label: string }[] = [
	{ id: 'client', label: 'Client work' },
	{ id: 'own', label: 'Built on my own' },
	{ id: 'system', label: 'Systems I designed' }
];

export const work: WorkItem[] = [
	{
		slug: 'orangetheory',
		group: 'client',
		name: 'Orangetheory Fitness',
		logo: orangetheory,
		mark: 'OT',
		color: '#F26B21',
		role: 'Engineering Manager',
		tagline: 'Unified CMS and analytics',
		headline: 'Two legacy platforms,',
		highlight: 'one CMS',
		summary:
			'Orangetheory ran its studio network on two separate platforms. I led the team that consolidated them into a single Webflow CMS while the product stayed live, and architected the analytics pipeline behind it.',
		did: [
			'Led the consolidation of two legacy platforms into one unified CMS architecture',
			'Migrated content, data streams, normalization and localization without taking the product down',
			'Architected a cloud-native analytics pipeline on Snowplow, Snowflake and AWS'
		],
		stack: ['webflow', 'react', 'snowplow', 'snowflake', 'aws'],
		links: [
			{ label: 'Visit the site', href: 'https://www.orangetheory.com/' },
			{
				label: 'Read the Webflow case study',
				href: 'https://webflow.com/customers/orangetheory-fitness'
			}
		]
	},
	{
		slug: 'barrys',
		group: 'client',
		name: "Barry's",
		logo: barrys,
		mark: 'B',
		color: '#D7263D',
		role: 'Engineering Manager',
		tagline: 'Webflow migration and analytics',
		headline: 'A cleaner view of the',
		highlight: 'funnel',
		summary:
			"I led Barry's migration from a legacy WordPress site to Webflow, with a specific focus on analytics architecture.",
		did: [
			'Led the migration from WordPress to Webflow',
			'Redesigned how analytics data is ingested, reviewed, and flows into reporting',
			'Gave the team clean, reliable visibility into their funnel'
		],
		stack: ['webflow', 'analytics'],
		links: [{ label: 'Visit the site', href: 'https://www.barrys.com/' }]
	},
	{
		slug: 'anytime-fitness',
		group: 'client',
		name: 'Anytime Fitness',
		logo: anytimefitness,
		mark: 'AF',
		color: '#6E3FA3',
		role: 'Engineering Manager',
		tagline: 'Shared React component library',
		headline: 'One frontend standard across',
		highlight: 'two brands',
		summary:
			"I led Anytime Fitness's migration from legacy WordPress to Webflow, working directly with the Orangetheory engineering team so both brands build on the same components.",
		did: [
			'Led the migration from WordPress to Webflow',
			'Built and shared React component libraries with the Orangetheory team',
			'Reduced duplication and enforced a consistent frontend standard across both brands',
			'Helped onboard the account, a team that adopted our ways of working from day one'
		],
		stack: ['webflow', 'react'],
		links: [{ label: 'Visit the site', href: 'https://www.anytimefitness.com/' }]
	},
	{
		slug: 'broken-yolk',
		group: 'client',
		name: 'The Broken Yolk Cafe',
		logo: brokenyolk,
		mark: 'BY',
		color: '#F5C542',
		role: 'Engineering Manager',
		tagline: 'Migration and rebrand',
		headline: 'A new site and identity, shipped',
		highlight: 'together',
		summary:
			"I led The Broken Yolk Cafe's migration from a legacy site to Webflow alongside a full rebrand, giving the diner chain a modern site and a visual identity to match.",
		did: [
			'Led the migration from the legacy site to Webflow',
			'Shipped the new site alongside a full rebrand'
		],
		stack: ['webflow'],
		links: [{ label: 'Visit the site', href: 'https://www.thebrokenyolkcafe.com/' }]
	},
	{
		slug: 'perspire',
		group: 'client',
		name: 'Perspire Sauna Studio',
		logo: perspire,
		mark: 'PS',
		color: '#2F6F62',
		role: 'Engineering Manager',
		tagline: 'CMS foundation from zero',
		headline: 'A CMS the business runs',
		highlight: 'on its own',
		summary:
			"I led the team that built Perspire Sauna Studio's engineering foundation from the ground up on Webflow CMS.",
		did: [
			'Built the engineering foundation from scratch on Webflow CMS',
			'Set it up so the business creates promos and packages without engineering',
			'Made adding new studio openings a content task, not a dev ticket'
		],
		stack: ['webflow'],
		links: [{ label: 'Visit the site', href: 'https://www.perspiresaunastudio.com/' }]
	},
	{
		slug: 'serraform',
		group: 'client',
		name: 'Serraform Streaming',
		logo: serraform,
		mark: 'SS',
		color: '#4B5563',
		role: 'Lead Frontend Engineer',
		tagline: 'Live streams in Decentraland',
		headline: 'Renting live streams inside',
		highlight: 'Decentraland',
		summary:
			'Serraform Streaming is a suite of tools for building decentralized video experiences in Decentraland. I led the small team that shipped it.',
		did: [
			'Led a small team that shipped an app for renting live streams inside Decentraland',
			'Smart contracts on Polygon',
			'Transaction signing across the main Web3 wallets',
			'Real-time streams on Livepeer'
		],
		stack: ['polygon', 'web3'],
		links: [{ label: 'Watch the demo', href: 'https://www.youtube.com/watch?v=6d4q7ToTUFs' }]
	},
	{
		slug: 'lograf-ecommerce',
		group: 'own',
		name: 'Lograf Ecommerce',
		shot: lografecommerce,
		mark: 'LE',
		color: '#76B29F',
		role: 'Founder and CTO',
		tagline: 'Founded, built and sold it',
		headline: 'An online store a business owner can',
		highlight: 'run alone',
		summary:
			'Lograf Ecommerce is an easy-to-manage online store platform with MercadoPago checkout built in and a professional, responsive storefront out of the box. More than 30 live stores have run on it.',
		did: [
			'Founded the company and built the product from zero',
			'MercadoPago checkout built in',
			'Responsive storefront out of the box, managed from Lograf Admin'
		],
		stack: [],
		links: []
	},
	{
		slug: 'lograf-admin',
		group: 'own',
		name: 'Lograf Admin',
		shot: lografadmin,
		mark: 'LA',
		color: '#76B29F',
		role: 'Founder and CTO',
		tagline: 'Back office for stores and agendas',
		headline: 'One dashboard behind',
		highlight: 'every store',
		summary:
			"Lograf Admin is the CMS and administrator portal behind Lograf's ecommerce and appointment-scheduling products.",
		did: [
			'Business owners manage products and order status without touching code',
			'Agendas and services for the appointment-scheduling product live in the same place'
		],
		stack: [],
		links: []
	},
	{
		slug: 'alexandria',
		group: 'own',
		name: 'Alexandria',
		shot: alexandria,
		mark: 'Ax',
		color: '#C084FC',
		role: 'Builder',
		tagline: 'Courses stored on chain',
		headline: 'Course content that lives in',
		highlight: 'your wallet',
		summary:
			'A way for teachers and creators to upload their content to a blockchain, from study material to whole online courses, so students who buy with their wallet keep permanent access.',
		did: [
			'Creators upload material and full courses',
			'Students buy with their wallet and keep unlimited, permanent access'
		],
		stack: ['web3'],
		links: []
	},
	{
		slug: 'proposal-rag',
		group: 'system',
		name: 'Proposal RAG pipeline',
		mark: 'RG',
		color: '#D97757',
		role: 'Engineering Manager',
		tagline: 'Briefs in, proposals out',
		headline: 'Sales briefs into',
		highlight: 'structured proposals',
		summary:
			"A production RAG pipeline that turns sales briefs into structured proposals, drawing on the company's archive of past work.",
		did: [
			'Built on AWS Bedrock with Pinecone and Claude',
			'Owned retrieval strategy, prompt architecture, and the API'
		],
		stack: ['bedrock', 'pinecone', 'claude'],
		links: []
	},
	{
		slug: 'agentic-workflow',
		group: 'system',
		name: 'Agentic dev workflow',
		mark: 'AG',
		color: '#1B4A74',
		role: 'Engineering Manager',
		tagline: 'Spec first, guardrails on',
		headline: 'Agents that work like',
		highlight: 'good teammates',
		summary:
			'A development workflow for my teams where agents do the legwork and engineers own every decision.',
		did: [
			'Agents load product context before touching code',
			'They clarify scope with the engineer and write a spec for approval',
			'Execution runs behind guardrails, with a clean handoff at the end'
		],
		stack: ['claude', 'cursor'],
		links: []
	}
];

export const bySlug = (slug: string) => work.find((w) => w.slug === slug);
export const inGroup = (group: WorkGroup) => work.filter((w) => w.group === group);
