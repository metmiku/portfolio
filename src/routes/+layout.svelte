<script>
	import { onNavigate } from '$app/navigation';
	import '@fontsource/space-grotesk/300.css';
	import '@fontsource/space-grotesk/400.css';
	import '@fontsource/space-grotesk/500.css';
	import '@fontsource/space-grotesk/600.css';
	import '@fontsource/space-grotesk/700.css';

	import '@fontsource/manrope/300.css';
	import '@fontsource/manrope/400.css';
	import '@fontsource/manrope/500.css';
	import '@fontsource/manrope/600.css';
	import '@fontsource/manrope/700.css';

	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';

	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/500.css';

	import 'material-symbols';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Header, Footer } from '$components';
	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Developer Metmiku</title>
</svelte:head>
<Header />
<main class="mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-12">
	{@render children()}
</main>
<Footer />
<div
	class="pointer-events-none fixed inset-0 z-100 hidden border-[0.75rem] border-bg-tertiary-light/20 lg:block dark:border-bg-quaternary-dark/80"
></div>
