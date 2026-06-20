<script>
	import { theme } from '$lib/theme.svelte.js';
	import { defaultEnvIcon, defaultLinkIcon, defaultProjectIcon, iconByKey } from '$lib/iconMaps.js';
	import { HugeiconsIcon } from '@hugeicons/svelte';

	let { project, reversed = false } = $props();

	let WrapperClasses = $derived(
		reversed ? 'border-border-primary-light dark:border-border-primary-dark' : ''
	);
	let DetailsOrderInfo = $derived(
		reversed ? 'lg:col-span-3 lg:order-2 order-2' : 'lg:col-span-3 order-2 lg:order-1'
	);
	let ContainerOrderInfo = $derived(
		reversed ? 'lg:col-span-9 lg:order-1 order-1' : 'lg:col-span-9 order-1 lg:order-2'
	);
	let TextStyleInfo = $derived(reversed ? 'text-right lg:pr-8' : '');

	let activePreviewImage = $derived(
		theme.current === 'dark' && project.previewImageDark
			? project.previewImageDark
			: project.previewImage
	);
</script>

<div class="group relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 border-t pt-12 {WrapperClasses}">
	<!-- Details Column -->
	<div class={DetailsOrderInfo}>
		<div class="sticky top-24 space-y-6">
			<div>
				<h3
					class="mb-3 font-headline text-sm font-bold tracking-widest text-primary-light uppercase dark:text-primary-dark"
				>
					Technologies
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each project.environment as env}
						{@const envIcon = iconByKey[env.icon] || defaultEnvIcon}
						<span
							class="flex items-center gap-1.5 rounded border border-primary-light/20 bg-primary-light/10 px-2 py-1 font-mono text-sm text-primary-light dark:border-primary-dark/20 dark:bg-primary-dark/5 dark:text-primary-dark"
						>
							{env.name}
						</span>
					{/each}
				</div>
			</div>
			<div class="space-y-2.5">
				{#each project.links as link}
					{@const linkIcon = iconByKey[link.icon] || defaultLinkIcon}
					<a
						class="group/link flex items-center gap-2 font-mono text-sm text-primary-light uppercase transition-colors hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<HugeiconsIcon
							icon={linkIcon}
							size={16}
							color="currentColor"
							class="shrink-0 transition-transform group-hover/link:translate-x-0.5"
						/>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Preview Column -->
	<div class={ContainerOrderInfo}>
		<a
			href="/projects/{project.id}"
			style="view-transition-name: project-{project.id}"
			class="ide-border relative block cursor-pointer bg-bg-primary-light transition-all duration-500 group-hover:shadow-2xl hover:outline-2 hover:outline-primary-light/50 dark:bg-bg-secondary-dark dark:hover:outline-primary-dark/50"
		>
			<div
				class="border-border-primary-light dark:border-border-primary-dark flex items-center gap-2 border-b bg-bg-tertiary-light px-4 py-1.5 dark:bg-bg-tertiary-dark"
			>
				<div class="flex gap-1.5">
					<div class="h-2.5 w-2.5 rounded-full bg-danger-light/50 dark:bg-danger-dark/50"></div>
					<div class="h-2.5 w-2.5 rounded-full bg-warning-light/50 dark:bg-warning-dark/50"></div>
					<div class="h-2.5 w-2.5 rounded-full bg-success-light/50 dark:bg-success-dark/50"></div>
				</div>
				<span
					class="mx-auto font-mono text-[9px] tracking-widest text-primary-light dark:text-primary-dark"
					>{project.filename}</span
				>
			</div>
			<div class="bg-bg-quaternary-light p-4 dark:bg-bg-quaternary-dark">
				{#if project.codeImage}
					{@const mainIcon = iconByKey[project.icon] || defaultProjectIcon}
					<div class="grid aspect-16/8 grid-cols-4 gap-3">
						<div
							class="ide-border relative col-span-3 overflow-hidden bg-bg-primary-light dark:bg-black/20"
						>
							<img
								alt="{project.name} Preview"
								class="h-full w-full object-cover opacity-90 grayscale-[0.2] transition-opacity group-hover:opacity-100"
								src={activePreviewImage}
							/>
							<div class="scanline absolute inset-0 opacity-20"></div>
						</div>
						<div class="col-span-1 flex flex-col gap-3">
							<div class="ide-border h-1/2 overflow-hidden bg-bg-primary-light dark:bg-black/20">
								<img
									alt="Code"
									class="h-full w-full object-cover opacity-40 grayscale"
									src={project.codeImage}
								/>
							</div>
							<div
								class="ide-border flex h-1/2 items-center justify-center bg-primary-light/5 dark:bg-primary-dark/5"
							>
								<HugeiconsIcon icon={mainIcon} size={32} color="currentColor" class="opacity-20" />
							</div>
						</div>
					</div>
				{:else}
					<div
						class="ide-border relative aspect-16/8 overflow-hidden bg-bg-quaternary-light dark:bg-black/20"
					>
						<img
							alt="{project.name} Preview"
							class="h-full w-full object-cover opacity-90 grayscale-[0.2] transition-opacity group-hover:opacity-100"
							src={activePreviewImage}
						/>
						<div class="scanline absolute inset-0 opacity-20"></div>
					</div>
				{/if}
			</div>
		</a>
		<div class="mt-4 {TextStyleInfo}">
			<h3
				class="mb-2 font-headline text-xl font-bold tracking-tight text-primary-light uppercase dark:text-primary-dark"
			>
				{project.name}
			</h3>
			<p
				class="max-w-2xl text-sm leading-relaxed text-primary-light dark:text-primary-dark {reversed
					? 'ml-auto'
					: ''}"
			>
				{project.description}
			</p>
		</div>
	</div>
</div>
