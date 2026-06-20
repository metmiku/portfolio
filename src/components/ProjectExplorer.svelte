<script>
	import { projects } from '$lib/data/projects.js';
	import ProjectCard from './ProjectCard.svelte';

	let { limit = undefined } = $props();
	let displayProjects = $derived(limit ? projects.slice(0, limit) : projects);
</script>

<section class="mb-24">
	<div class="mb-8 flex items-center gap-4">
		<div
			class="bg-primary-light px-3 py-1 font-mono text-md font-bold text-bg-primary-light uppercase dark:bg-primary-dark dark:text-bg-primary-dark"
		>
			Project Explorer
		</div>
		<div class="bg-border-primary-light dark:bg-border-primary-dark h-px grow"></div>
		<span class="font-mono text-sm tracking-widest text-primary-light dark:text-primary-dark"
			>Projects: {projects.length < 10 ? '0' + projects.length : projects.length}</span
		>
	</div>
	<div class="grid grid-cols-1 gap-16">
		{#each displayProjects as project, index}
			<ProjectCard {project} reversed={index % 2 !== 0} />
		{/each}
	</div>

	{#if limit && projects.length > limit}
		<div class="mt-16 text-center">
			<a
				href="/projects"
				class="inline-block border border-primary-light/30 px-6 py-2 font-mono text-sm tracking-widest text-primary-light uppercase transition-all duration-300 hover:scale-105 hover:bg-bg-tertiary-light hover:text-secondary-light active:scale-95 dark:border-primary-dark/30 dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:text-secondary-dark"
			>
				Browse Project DB
			</a>
		</div>
	{/if}
</section>
