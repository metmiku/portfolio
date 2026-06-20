<script>
	import { ProjectExplorer } from '$components';
</script>

<svelte:head>
	<title>Node Registry</title>
</svelte:head>

<div class="mx-auto mt-32 max-w-7xl px-4 md:px-8">
	<a
		href="/"
		class="mb-10 flex items-center gap-2 font-mono text-[10px] tracking-widest text-primary-light uppercase opacity-60 transition-opacity hover:opacity-100 dark:text-primary-dark"
	>
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19 12H5M12 5l-7 7 7 7" />
		</svg>
		Back
	</a>

	<header class="mb-16">
		<h1
			class="font-headline text-4xl font-bold tracking-tight text-primary-light uppercase md:text-5xl dark:text-primary-dark"
		>
			Node Registry
		</h1>
		<p
			class="mt-4 max-w-2xl font-body text-base text-primary-light opacity-70 dark:text-primary-dark"
		>
			Full database of structural experiments, production systems, and independent code
			repositories.
		</p>
	</header>

	<div class="mt-16">
		<ProjectExplorer />
	</div>
</div>
