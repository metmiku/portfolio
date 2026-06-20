<script>
	let { item } = $props();

	let expanded = $state(false);
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let timer;

	function handleMouseEnter() {
		timer = setTimeout(() => {
			expanded = true;
		}, 500);
	}

	function handleMouseLeave() {
		clearTimeout(timer);
		expanded = false;
	}
</script>

<div
	role="group"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	class="group border-border-primary-light dark:border-border-primary-dark relative block overflow-hidden rounded-xl border bg-bg-primary-light p-3 transition-[background-color,box-shadow,transform] duration-500 ease-in-out hover:scale-[1.01] hover:bg-bg-tertiary-light hover:shadow-2xl hover:shadow-stone-900/15 md:p-4 dark:bg-bg-secondary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] dark:hover:ring-1 dark:hover:ring-primary-dark/30"
>
	<!-- Compact Default Headers -->
	<div class="flex flex-col justify-between text-right md:flex-row md:items-start">
		<div class="flex w-full flex-grow flex-col items-end justify-end">
			<span
				class="mb-1 block font-mono text-[9px] font-bold tracking-[0.15em] text-primary-light uppercase opacity-70 dark:text-primary-dark"
			>
				{item.startDate} — {item.endDate}
			</span>
			<h3
				class="font-headline text-[13px] font-bold tracking-tight text-primary-light uppercase md:text-sm lg:text-base dark:text-primary-dark"
			>
				{item.role}
			</h3>
			<p
				class="font-body text-[10px] font-medium tracking-wide text-primary-light italic opacity-80 dark:text-primary-dark"
			>
				{item.company}
			</p>
		</div>
	</div>
	{#if item.companyUrl}
		<div class="mt-3 flex flex-wrap justify-end gap-1.5">
			<a
				href={item.companyUrl}
				class="font-mono text-sm font-bold tracking-widest text-primary-light uppercase border-b border-primary-light/30 dark:border-primary-dark/30"
				target="_blank"
				rel="noopener noreferrer"
			>
				Visit Company
			</a>
		</div>
	{/if}
	<!-- Expandable Body (Hidden by default, height managed via explicit JS state) -->
	<div
		class="grid transition-[grid-template-rows] duration-500 ease-in-out"
		style="grid-template-rows: {expanded ? '1fr' : '0fr'};"
	>		
		<div class="overflow-hidden">
			<div
				class="border-border-primary-light/50 dark:border-border-primary-dark/50 mt-4 border-t pt-3 text-right"
			>
				<p class="text-sm leading-relaxed text-primary-light opacity-90 dark:text-primary-dark">
					{item.description}
				</p>
				<div class="mt-3 flex flex-wrap justify-end gap-1.5">
					{#each item.tags as tag}
						<span
							class="border-border-primary-light/30 dark:border-border-primary-dark/30 rounded-full border bg-primary-light/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-widest text-primary-light uppercase dark:bg-primary-dark/10 dark:text-primary-dark"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		</div>

	</div>
</div>
