<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ComputerTerminal01FreeIcons } from '@hugeicons/core-free-icons';
	import { iconByKey } from '$lib/iconMaps.js';

	let { item } = $props();

	let icon = $derived(iconByKey[item.icon] || ComputerTerminal01FreeIcons);
</script>

<a
	href={item.url}
	target="_blank"
	rel="noopener noreferrer"
	class="group border-border-primary-light dark:border-border-primary-dark relative z-0 flex flex-col items-center gap-3 border-r border-b bg-bg-primary-light p-4 md:p-5 text-primary-light transition-[background-color,box-shadow,transform] duration-300 hover:z-10 hover:scale-[1.02] hover:bg-bg-tertiary-light hover:shadow-lg hover:shadow-stone-900/12 dark:bg-bg-secondary-dark dark:text-primary-dark dark:hover:bg-bg-tertiary-dark dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:hover:ring-1 dark:hover:ring-primary-dark/25"
>
	<div
		class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light/10 transition-transform group-hover:scale-110 dark:bg-primary-dark/10"
	>
		<HugeiconsIcon {icon} size={20} color="currentColor" />
	</div>
	<div class="text-center">
		<h3
			class="mb-1 font-mono text-[10px] font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
		>
			{item.title}
		</h3>
		<p class="text-[11px] leading-relaxed text-primary-light opacity-70 dark:text-primary-dark">
			{item.desc}
		</p>
	</div>
</a>
