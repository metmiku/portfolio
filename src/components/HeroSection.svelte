<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		ComputerTerminal01FreeIcons,
		Location01Icon,
	} from '@hugeicons/core-free-icons';
</script>

<section class="relative mb-12">
	<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<h1
				class="mb-4 font-headline text-3xl leading-none font-bold tracking-tighter text-primary-light uppercase md:text-5xl dark:text-primary-dark"
			>
				Metmiku<br />
			</h1>
			<div
				class="border-border-primary-light dark:border-border-primary-dark flex flex-wrap gap-4 border-t pt-4 font-mono text-sm"
			>
				<span class="flex items-center gap-2 text-primary-light dark:text-primary-dark">
					<HugeiconsIcon icon={ComputerTerminal01FreeIcons} size={16} color="currentColor" />
					Software Engineer
				</span>
				<span class="flex items-center gap-2 text-primary-light dark:text-primary-dark">
					<HugeiconsIcon icon={Location01Icon} size={16} color="currentColor" />
					Addis Ababa, Ethiopia
				</span>
			</div>
		</div>
		<div class="pt-1 lg:col-span-5">
			<div
				class="border-l-2 border-success-light bg-bg-secondary-light p-4 transition-colors duration-300 dark:border-success-dark dark:bg-bg-secondary-dark"
			>
				<p
					class="mb-3 text-sm leading-relaxed font-medium text-primary-light dark:text-primary-dark"
				>
					I build reliable software with a focus on scalability, performance, and clean system design.
				</p>
			</div>
		</div>
	</div>
</section>
