<script>
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projects.js';
	import { theme } from '$lib/theme.svelte.js';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { defaultEnvIcon, defaultLinkIcon, iconByKey } from '$lib/iconMaps.js';
	import { ImageCarousel } from '$components';

	let project = $derived(projects.find((p) => p.id === $page.params.id));

	let activeDisplayImages = $derived(
		theme.current === 'dark' && project?.displayImagesDark?.length
			? project.displayImagesDark
			: (project?.displayImages ?? [])
	);

	let carouselItems = $derived(
		activeDisplayImages.map((src, i) => ({
			src,
			alt: project ? `${project.name} slide ${i + 1}` : `Slide ${i + 1}`
		}))
	);
</script>

<svelte:head>
	<title>{project ? project.name : 'Projects'} | METMIKU</title>
</svelte:head>

<div class="mx-auto min-h-screen max-w-7xl px-4 pt-4 pb-24 md:px-8">
	<div class="mb-12 flex items-center justify-between">
		<button
			onclick={(e) => {
				e.preventDefault();
				window.history.length > 1 ? window.history.back() : (window.location.href = '/');
			}}
			class="flex items-center gap-2 border border-primary-light/20 px-4 py-2 font-mono text-xs tracking-widest text-primary-light uppercase transition-colors hover:bg-bg-tertiary-light hover:text-secondary-light dark:border-primary-dark/20 dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:text-secondary-dark"
		>
			<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"
				><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg
			>
			Back
		</button>
	</div>

	{#if project && activeDisplayImages.length}
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<div class="lg:col-span-12">
				<div
					style="view-transition-name: project-{project.id}"
					class="ide-border relative aspect-video overflow-hidden bg-bg-tertiary-light shadow-2xl dark:bg-bg-tertiary-dark"
				>
					<div
						class="border-border-primary-light dark:border-border-primary-dark relative z-10 flex items-center gap-2 border-b bg-bg-secondary-light px-4 py-1.5 dark:bg-bg-quaternary-dark"
					>
						<div class="flex gap-1.5">
							<div class="h-2.5 w-2.5 rounded-full bg-danger-light/50 dark:bg-danger-dark/50"></div>
							<div
								class="h-2.5 w-2.5 rounded-full bg-warning-light/50 dark:bg-warning-dark/50"
							></div>
							<div
								class="h-2.5 w-2.5 rounded-full bg-success-light/50 dark:bg-success-dark/50"
							></div>
						</div>
						<span
							class="mx-auto font-mono text-[9px] tracking-widest text-primary-light dark:text-primary-dark"
							>{project.filename}</span
						>
					</div>

					{#snippet carouselScanOverlay()}
						<div class="scanline pointer-events-none absolute inset-0 z-10 opacity-20"></div>
					{/snippet}
					<div class="relative h-[calc(100%-1.75rem)] w-full">
						<ImageCarousel
							items={carouselItems}
							autoScroll={false}
							ariaLabel={project ? `Screenshots for ${project.name}` : 'Screenshots'}
							overlay={carouselScanOverlay}
						/>
					</div>
				</div>
			</div>

			<div class="flex flex-col justify-center lg:col-span-8">
				<h1
					class="mb-8 font-headline text-4xl leading-none font-bold tracking-tighter text-primary-light uppercase md:text-5xl lg:text-6xl"
				>
					{project.name}
				</h1>
				<p
					class="max-w-3xl text-base leading-relaxed text-primary-light opacity-90 md:text-lg dark:text-primary-dark"
				>
					{project.description}
				</p>
			</div>

			<div
				class="border-border-primary-light/30 dark:border-border-primary-dark/30 space-y-8 border-t pt-8 pl-0 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-12"
			>
				<div>
					<h3
						class="mb-4 font-headline text-md font-bold tracking-widest text-primary-light uppercase opacity-60 dark:text-primary-dark"
					>
						Technologies Used
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each project.environment as env}
							{@const envIcon = iconByKey[env.icon] || defaultEnvIcon}
							<span
								class="flex items-center gap-1.5 rounded border border-primary-light/20 bg-primary-light/5 px-3 py-1.5 font-mono text-sm text-primary-light dark:border-primary-dark/20 dark:bg-primary-dark/5 dark:text-primary-dark"
							>
								{env.name}
							</span>
						{/each}
					</div>
				</div>

				<div class="space-y-4">
					<h3
						class="mb-4 font-headline text-xs font-bold tracking-widest text-primary-light uppercase opacity-60 dark:text-primary-dark"
					>
						Project links
					</h3>
					{#each project.links as link}
						{@const linkIcon = iconByKey[link.icon] || defaultLinkIcon}
						<a
							class="group/link flex items-center gap-3 border border-primary-light/20 p-3 font-mono text-xs text-primary-light uppercase transition-colors hover:bg-primary-light/10 hover:text-secondary-light dark:border-primary-dark/20 dark:text-primary-dark dark:hover:bg-primary-dark/10 dark:hover:text-secondary-dark"
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<HugeiconsIcon
								icon={linkIcon}
								size={20}
								color="currentColor"
								class="shrink-0 transition-transform group-hover/link:scale-110"
							/>
							{link.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div class="py-24 text-center font-headline text-2xl text-primary-light dark:text-primary-dark">
			Project Node Offline or Missing View Assets
		</div>
	{/if}
</div>
