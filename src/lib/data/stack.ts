import {
	siAmazonwebservices,
	siClaude,
	siDecentraland,
	siDigitalocean,
	siDocker,
	siGithubactions,
	siGraphql,
	siMercadopago,
	siMongodb,
	siNestjs,
	siNetlify,
	siNextdotjs,
	siNodedotjs,
	siPolygon,
	siPosthog,
	siPostgresql,
	siReact,
	siSnowflake,
	siTypescript,
	siVercel,
	siWebflow
} from 'simple-icons';

/**
 * A stack entry renders either a brand logo (`path`, a 24x24 filled
 * simple-icons path on `hex`) or a stroke `glyph` for things without one.
 */
export interface StackEntry {
	name: string;
	note?: string;
	path?: string;
	hex?: string;
	glyph?: string;
}

const brand = (name: string, icon: { path: string; hex: string }, note?: string): StackEntry => ({
	name,
	note,
	path: icon.path,
	hex: `#${icon.hex}`
});

const glyphs = {
	sparkle:
		'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
	cursor: 'M5 3l14 8-6 2-2 6z',
	people:
		'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c1-4 3.5-6 7-6s6 2 7 6M17 11a3 3 0 1 0 0-6M19 15c1.8.7 3 2.5 3.5 6',
	review: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9',
	siren: 'M7 18v-6a5 5 0 0 1 10 0v6M5 18h14v3H5zM12 2v2M4.2 5.2l1.4 1.4M19.8 5.2l-1.4 1.4',
	spec: 'M14 3H6v18h12V7zM14 3v4h4M9 12h6M9 15h6M9 18h4',
	azure: 'M10 3L3 19h5l8-16zM13 9l-3 7 4 3h7z',
	broadcast:
		'M12 12h.01M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8',
	wallet: 'M3 7a2 2 0 0 1 2-2h13v4M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2zM16 14.5h.01'
};

export const stack = {
	typescript: brand('TypeScript', siTypescript),
	react: brand('React', siReact),
	nextjs: brand('Next.js', siNextdotjs),
	nodejs: brand('Node.js', siNodedotjs),
	nestjs: brand('NestJS', siNestjs),
	graphql: brand('GraphQL', siGraphql),
	postgresql: brand('PostgreSQL', siPostgresql),
	aws: brand('AWS', siAmazonwebservices),
	docker: brand('Docker', siDocker),
	cicd: brand('CI/CD', siGithubactions),
	snowflake: brand('Snowflake', siSnowflake),
	webflow: brand('Webflow', siWebflow),
	claude: brand('Claude', siClaude),
	polygon: brand('Polygon', siPolygon),
	mongodb: brand('MongoDB', siMongodb),
	mercadopago: brand('MercadoPago', siMercadopago),
	posthog: brand('PostHog', siPosthog),
	decentraland: brand('Decentraland', siDecentraland),
	netlify: brand('Netlify', siNetlify),
	digitalocean: brand('DigitalOcean', siDigitalocean),
	vercel: brand('Vercel', siVercel),
	azure: { name: 'Azure', glyph: glyphs.azure },
	livepeer: { name: 'Livepeer', glyph: glyphs.broadcast },
	metamask: { name: 'MetaMask', glyph: glyphs.wallet },
	bedrock: { name: 'AWS Bedrock', glyph: glyphs.sparkle },
	cursor: { name: 'Cursor', glyph: glyphs.cursor },
	hiring: { name: 'Hiring', glyph: glyphs.people },
	performance: { name: 'Performance reviews', glyph: glyphs.review },
	incidents: { name: 'Incident response', glyph: glyphs.siren },
	specs: { name: 'Specs and SOPs', glyph: glyphs.spec }
} satisfies Record<string, StackEntry>;

export type StackKey = keyof typeof stack;

export const stackGroups: { label: string; items: StackKey[] }[] = [
	{ label: 'Build', items: ['typescript', 'react', 'nextjs', 'nodejs', 'nestjs', 'graphql'] },
	{
		label: 'Data and cloud',
		items: ['postgresql', 'mongodb', 'aws', 'docker', 'cicd', 'snowflake', 'webflow']
	},
	{ label: 'AI', items: ['claude', 'bedrock', 'cursor'] },
	{ label: 'Leading teams', items: ['hiring', 'performance', 'incidents', 'specs'] }
];
