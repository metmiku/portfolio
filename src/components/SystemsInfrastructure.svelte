<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { iconByKey } from '$lib/iconMaps.js';
</script>

<section class="mb-24">
	<div class="mb-8 flex items-center gap-4">
		<h2
			class="font-headline text-lg font-bold tracking-tighter text-primary-light uppercase dark:text-primary-dark"
		>
			Systems &amp; Infrastructure
		</h2>
		<div class="bg-border-primary-light dark:bg-border-primary-dark h-px grow"></div>
	</div>
	<div
		class="border-border-primary-light dark:border-border-primary-dark grid grid-cols-2 border-t border-l md:grid-cols-4 lg:grid-cols-6"
	>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.database}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>PostgreSQL</span
			>
		</div>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.cloud}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>Kubernetes</span
			>
		</div>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.data_object}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>GraphQL</span
			>
		</div>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.api}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>REST Micro</span
			>
		</div>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.query_stats}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>Grafana</span
			>
		</div>
		<div
			class="group relative z-0 flex flex-col items-center gap-4 border-r border-b border-outline-variant bg-white p-8 text-primary-light transition-[background-color,box-shadow] duration-300 hover:z-10 hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
		>
			<HugeiconsIcon
				icon={iconByKey.terminal}
				size={40}
				color="currentColor"
				class="text-primary-light dark:text-primary-dark"
			/>
			<span
				class="font-mono text-[9px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>Bash/CI/CD</span
			>
		</div>
	</div>
</section>
