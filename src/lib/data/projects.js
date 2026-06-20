import fleetfinesseLight01 from '$lib/assets/projects/fleetfinesse/light/fleetfinesse_light_01.png';
import fleetfinesseLight02 from '$lib/assets/projects/fleetfinesse/light/fleetfinesse_light_02.png';
import fleetfinesseLight03 from '$lib/assets/projects/fleetfinesse/light/fleetfinesse_light_03.png';
import fleetfinesseDark01 from '$lib/assets/projects/fleetfinesse/dark/fleetfinesse_dark_01.png';
import fleetfinesseDark02 from '$lib/assets/projects/fleetfinesse/dark/fleetfinesse_dark_02.png';
import fleetfinesseDark03 from '$lib/assets/projects/fleetfinesse/dark/fleetfinesse_dark_03.png';

export const projects = [
	{
		id: 'fleetfinesse',
		name: 'Fleet Finesse',
		filename: 'https://v2.fleetfinesse.com',
		description: 'Fleet Finesse is a full-stack SaaS platform I built to manage fleet and rental operations from end to end. It handles real-time reservations, asset tracking, billing, and customer management in a single multi-tenant system. The platform was designed with scalability and modularity in mind, so different types of rental businesses can use the same core system without requiring custom builds.',
		environment: [
			{ name: 'Next.js', icon: 'nextjs' },
			{ name: 'Firebase', icon: 'cloud' },
			{ name: 'TailwindCSS', icon: 'layers' },
			{ name: 'Vercel', icon: 'rocket_launch' },
			{ name: 'Stripe', icon: 'shield' }
		],
		links: [
			{ name: 'live_deployment', url: 'https://v2.fleetfinesse.com', icon: 'rocket_launch' }
		],
		stats: { lastCommit: '2 days ago', totalCommits: 342, buildStatus: 'Passing' },
		previewImage: fleetfinesseLight01,
		previewImageDark: fleetfinesseDark01,
		codeImage: '',
		displayImages: [fleetfinesseLight01, fleetfinesseLight02, fleetfinesseLight03],
		displayImagesDark: [fleetfinesseDark01, fleetfinesseDark02, fleetfinesseDark03],
		icon: 'query_stats'
	}
];
