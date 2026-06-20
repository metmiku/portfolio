<script>
	import { theme } from '$lib/theme.svelte.js';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		GithubIcon,
		LinkedinIcon,
		Mail01Icon,
		Moon02Icon,
		Sun03Icon
	} from '@hugeicons/core-free-icons';
	import { page } from '$app/stores';
	import {PUBLIC_EMAIL_ADDRESS, PUBLIC_LINKEDIN_ADDRESS, PUBLIC_GITHUB_ADDRESS} from "$env/static/public"

	let scrollY = $state(0);

	let headerContainerClasses = $derived(
		scrollY > 54
			? 'max-w-7xl px-4 md:px-8 py-2.5 border-b border-border-primary-light/30 bg-bg-primary-light/40 dark:border-border-primary-dark/30 dark:bg-bg-secondary-dark/60 backdrop-blur-lg shadow-sm'
			: 'max-w-full px-8 md:px-12 py-6 border-b-0 bg-transparent backdrop-blur-none'
	);

	let titleClasses = $derived(
		$page.url.pathname === '/'
			? scrollY > 54
				? 'text-lg'
				: 'hidden'
			: scrollY > 30
				? 'text-lg'
				: 'text-2xl'
	);
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 left-1/2 z-110 mx-auto flex w-full -translate-x-1/2 items-center justify-between transition-all duration-500 ease-in-out {headerContainerClasses}"
>
	<div
		class="font-headline font-bold tracking-tighter text-primary-light uppercase transition-all duration-500 dark:text-primary-dark {titleClasses}"
	>
		Metmiku
	</div>
	<div class="ml-auto flex items-center gap-4 md:gap-8">
		<nav class="flex items-center gap-4">
			<a
				class="text-primary-light transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
				href="{PUBLIC_GITHUB_ADDRESS}"
				title="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<HugeiconsIcon icon={GithubIcon} size={20} color="currentColor" />
			</a>
			<a
				class="text-primary-light transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
				href="{PUBLIC_LINKEDIN_ADDRESS}"
				title="LinkedIn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<HugeiconsIcon icon={LinkedinIcon} size={20} color="currentColor" />
			</a>
			<a
				class="text-primary-light transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
				href={`mailto:${PUBLIC_EMAIL_ADDRESS}`}
				title="Contact"
				target="_blank"
				rel="noopener noreferrer"
			>
				<HugeiconsIcon icon={Mail01Icon} size={20} color="currentColor" />
			</a>
		</nav>
		<div class="bg-border-primary-light/30 dark:bg-border-primary-dark/30 h-6 w-px"></div>
		<button
			class="rounded-full p-1.5 text-primary-light transition-colors hover:bg-bg-secondary-light dark:text-primary-dark dark:hover:bg-bg-tertiary-dark"
			onclick={() => theme.toggle()}
			title="Toggle Light/Dark Mode"
		>
			{#if theme.current === 'light'}
				<HugeiconsIcon icon={Moon02Icon} size={20} color="currentColor" />
			{:else}
				<HugeiconsIcon icon={Sun03Icon} size={20} color="currentColor" />
			{/if}
		</button>
		<a
			href="/Metmiku_Yohannes.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="bg-primary-light px-4 py-1.5 font-headline text-[10px] font-bold tracking-widest text-bg-primary-light uppercase transition-all hover:bg-secondary-light active:scale-95 md:block dark:bg-primary-dark dark:text-bg-primary-dark dark:hover:bg-secondary-dark"
		>
			Resume
		</a>
	</div>
</header>
