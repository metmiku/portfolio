<script>
	import { experience } from '$lib/data/experience.js';
	import ExperienceCard from './ExperienceCard.svelte';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { defaultEnvIcon, iconByKey } from '$lib/iconMaps.js';

	let { limit = undefined } = $props();
	let displayExperience = $derived(limit ? experience.slice(0, limit) : experience);
</script>

<section class="mb-24">
	<div class="mb-12 flex items-center gap-4">
		<div
			class="bg-primary-light px-3 py-1 font-mono text-md font-bold text-bg-primary-light uppercase dark:bg-primary-dark dark:text-bg-primary-dark"
		>
			Professional Experience
		</div>
		<div class="bg-border-primary-light dark:bg-border-primary-dark h-px grow"></div>
		<span class="font-mono text-sm tracking-widest text-primary-light dark:text-primary-dark"
			>Employment: {experience.length < 10 ? '0' + experience.length : experience.length}</span
		>
	</div>

	<div class="relative mx-auto max-w-5xl">
		<!-- Central Timeline Line -->
		<div
			class="bg-border-primary-light dark:border-border-primary-dark absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-1/2"
		></div>

		<div class="space-y-16">
			{#each displayExperience as exp, index}
				<div
					class="relative flex flex-col md:flex-row {index % 2 === 0
						? 'md:flex-row-reverse'
						: ''} items-center justify-center"
				>
					<!-- Center Node & Year -->
					<div
						class="absolute left-4 z-10 flex -translate-x-1/2 flex-col items-center md:left-1/2 md:-translate-x-1/2"
					>
						<span
							class="mb-3 bg-bg-primary-light px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-primary-light dark:bg-bg-secondary-dark dark:text-primary-dark"
						>
							{exp.startDate.split(' ')[1] || exp.startDate}
						</span>
						<div
							class="border-border-primary-light dark:border-border-primary-dark flex h-10 w-10 items-center justify-center rounded border bg-bg-primary-light shadow-md dark:bg-bg-secondary-dark"
						>
							<HugeiconsIcon
								icon={iconByKey[exp.icon] || defaultEnvIcon}
								size={16}
								color="currentColor"
								class={index === 0
									? 'animate-pulse text-success-light dark:text-success-dark'
									: 'text-primary-light opacity-70 dark:text-primary-dark'}
							/>
						</div>
					</div>

					<!-- Card Space -->
					<div class="w-full pl-12 md:w-1/2 md:pl-0 {index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}">
						<ExperienceCard item={exp} />
					</div>

					<!-- Empty Spacer for Alignment -->
					<div class="hidden w-1/2 md:block"></div>
				</div>
			{/each}
		</div>
	</div>

	{#if limit && experience.length > limit}
		<div class="mt-16 text-center">
			<a
				href="/experience"
				class="inline-block border border-primary-light/30 px-6 py-2 font-mono text-sm tracking-widest text-primary-light uppercase transition-all duration-300 hover:scale-105 hover:bg-bg-tertiary-light hover:text-secondary-light active:scale-95 dark:border-primary-dark/30 dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:text-secondary-dark"
			>
				View Event History
			</a>
		</div>
	{/if}
</section>
