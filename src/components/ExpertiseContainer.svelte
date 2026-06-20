<script>
	import { expertiseGroups } from '$lib/data/expertise.js';
	import ExpertiseCard from './ExpertiseCard.svelte';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowDown01Icon, ArrowUp01Icon } from '@hugeicons/core-free-icons';

	const totalItems = expertiseGroups.reduce((sum, g) => sum + g.items.length, 0);

	/** @type {Record<string, boolean>} */
	let expandedGroups = $state({});

	/**
	 * Toggles the expansion state of a specific category group.
	 * @param {string} label - The label of the category group to toggle.
	 * @returns {void}
	 */
	function toggleExpand(label) {
		expandedGroups[label] = !expandedGroups[label];
	}
</script>

<section class="mb-24">
	<div class="mb-12 flex items-center gap-4">
		<div
			class="bg-primary-light px-3 py-1 font-mono text-md font-bold text-bg-primary-light uppercase dark:bg-primary-dark dark:text-bg-primary-dark"
		>
			Technical Expertise
		</div>
		<div class="bg-border-primary-light dark:bg-border-primary-dark h-px grow"></div>
		<span class="font-mono text-sm tracking-widest text-primary-light dark:text-primary-dark"
			>Skills: {totalItems < 10 ? '0' + totalItems : totalItems}</span
		>
	</div>

	<div class="flex flex-col gap-10">
		{#each expertiseGroups as group}
			<div>
				<p
					class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-primary-light/50 uppercase dark:text-primary-dark/50"
				>
					{group.label}
				</p>
				<div
					class="border-border-primary-light dark:border-border-primary-dark grid grid-cols-2 border-t border-l md:grid-cols-4 lg:grid-cols-6"
				>
					{#each (expandedGroups[group.label] ? group.items : group.items.slice(0, 5)) as item}
						<ExpertiseCard {item} />
					{/each}

					{#if group.items.length > 5}
						<button
							type="button"
							onclick={() => toggleExpand(group.label)}
							class="group border-border-primary-light dark:border-border-primary-dark relative z-0 flex flex-col items-center justify-center gap-3 border-r border-b bg-bg-primary-light p-4 md:p-5 text-primary-light transition-[background-color,box-shadow,transform] duration-300 hover:z-10 hover:scale-[1.02] hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25 cursor-pointer"
						>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light/10 transition-transform group-hover:scale-110 dark:bg-primary-dark/10"
							>
								{#if expandedGroups[group.label]}
									<HugeiconsIcon icon={ArrowUp01Icon} size={20} color="currentColor" />
								{:else}
									<HugeiconsIcon icon={ArrowDown01Icon} size={20} color="currentColor" />
								{/if}
							</div>
							<div class="text-center">
								<h3
									class="font-mono text-[10px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
								>
									{#if expandedGroups[group.label]}
										Show Less
									{:else}
										+ {group.items.length - 5} More
									{/if}
								</h3>
							</div>
						</button>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
