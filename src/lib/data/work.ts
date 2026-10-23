import orangetheory from '$lib/assets/works/orangetheory.svg';
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
	/** Square logo shown in lists. Falls back to `glyph`, then `mark`, on `color`. */
	logo?: string;
	/** Stroke icon path for clients shown by industry instead of by name */
	glyph?: string;
	/** Industry tag, shown on selected work */
	industry?: string;
	/** Keep the case page out of search results */
	noindex?: boolean;
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
	{ id: 'client', label: 'Selected work' },
	{ id: 'own', label: 'Built on my own' },
	{ id: 'system', label: 'Systems I designed' }
];

// Some clients can't be named publicly, so they're described by what they are
// and drawn with an industry icon instead of their logo
const glyphs = {
	pulse: 'M3 12h4l3-7 4 14 3-7h4',
	dumbbell: 'M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12',
	steam: 'M8 3c-1.5 2 1.5 3 0 5M12 3c-1.5 2 1.5 3 0 5M16 3c-1.5 2 1.5 3 0 5M4 12h16v8H4z',
	fork: 'M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2.5 2-2.5 7 0 9v9'
};

export const work: WorkItem[] = [
	{
		slug: 'orangetheory',
		group: 'client',
		name: 'Orangetheory Fitness',
		logo: orangetheory,
		noindex: true,
		industry: 'FitTech',
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
		stack: ['react', 'webflow', 'aws', 'snowflake', 'nodejs', 'typescript'],
		links: [
			{ label: 'Visit the site', href: 'https://www.orangetheory.com/' },
			{
				label: 'Read the Webflow case study',
				href: 'https://webflow.com/customers/orangetheory-fitness'
			}
		]
	},
	{
		slug: 'boutique-fitness',
		group: 'client',
		name: 'Boutique fitness brand',
		glyph: glyphs.pulse,
		industry: 'FitTech',
		mark: 'BF',
		color: '#1B4A74',
		role: 'Engineering Manager',
		tagline: 'Webflow migration and analytics',
		headline: 'A cleaner view of the',
		highlight: 'funnel',
		summary:
			'A premium boutique fitness brand. I led its migration from a legacy WordPress site to Webflow, with a specific focus on analytics architecture.',
		did: [
			'Led the migration from WordPress to Webflow',
			'Redesigned how analytics data is ingested, reviewed, and flows into reporting',
			'Gave the team clean, reliable visibility into their funnel'
		],
		stack: ['nextjs', 'webflow', 'aws', 'snowflake', 'nodejs', 'typescript'],
		links: []
	},
	{
		slug: 'gym-franchise',
		group: 'client',
		name: 'Global gym franchise',
		glyph: glyphs.dumbbell,
		industry: 'FitTech',
		mark: 'GF',
		color: '#2E7D69',
		role: 'Engineering Manager',
		tagline: 'Shared React component library',
		headline: 'One frontend standard across',
		highlight: 'two brands',
		summary:
			'A global 24/7 gym franchise. I led its migration from legacy WordPress to Webflow, working directly with the engineering team of a sister brand so both build on the same components.',
		did: [
			'Led the migration from WordPress to Webflow',
			'Built and shared React component libraries with the sister brand',
			'Reduced duplication and enforced a consistent frontend standard across both brands',
			'Helped onboard the account, a team that adopted our ways of working from day one'
		],
		stack: ['nextjs', 'webflow', 'aws', 'snowflake', 'nodejs', 'typescript'],
		links: []
	},
	{
		slug: 'restaurant-chain',
		group: 'client',
		name: 'Breakfast restaurant chain',
		glyph: glyphs.fork,
		industry: 'Hospitality',
		mark: 'RC',
		color: '#C2410C',
		role: 'Engineering Manager',
		tagline: 'Migration and rebrand',
		headline: 'A new site and identity, shipped',
		highlight: 'together',
		summary:
			'A breakfast and brunch restaurant chain. I led its migration from a legacy site to Webflow alongside a full rebrand, giving the chain a modern site and a visual identity to match.',
		did: [
			'Led the migration from the legacy site to Webflow',
			'Shipped the new site alongside a full rebrand'
		],
		stack: ['nextjs', 'webflow', 'aws', 'nodejs', 'typescript'],
		links: []
	},
	{
		slug: 'sauna-studio',
		group: 'client',
		name: 'Sauna and wellness franchise',
		glyph: glyphs.steam,
		industry: 'Wellness',
		mark: 'SW',
		color: '#8A5A2B',
		role: 'Engineering Manager',
		tagline: 'CMS foundation from zero',
		headline: 'A CMS the business runs',
		highlight: 'on its own',
		summary:
			"A growing sauna and wellness franchise. I led the team that built its engineering foundation from the ground up on Webflow CMS.",
		did: [
			'Built the engineering foundation from scratch on Webflow CMS',
			'Set it up so the business creates promos and packages without engineering',
			'Made adding new studio openings a content task, not a dev ticket'
		],
		stack: ['nextjs', 'webflow', 'aws', 'posthog', 'nodejs', 'typescript'],
		links: []
	},
	{
		slug: 'serraform',
		group: 'client',
		name: 'Serraform Streaming',
		logo: serraform,
		industry: 'Web3',
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
		stack: ['nextjs', 'polygon', 'metamask', 'azure', 'decentraland', 'livepeer'],
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
		stack: ['react', 'nodejs', 'mongodb', 'mercadopago', 'aws', 'netlify', 'digitalocean'],
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
		stack: ['react', 'nodejs', 'mongodb', 'mercadopago', 'aws', 'netlify', 'digitalocean'],
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
		stack: ['nextjs', 'metamask', 'polygon', 'vercel'],
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
		stack: ['bedrock', 'claude'],
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
