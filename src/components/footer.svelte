<script>
	import { PUBLIC_EMAIL_ADDRESS, PUBLIC_GITHUB_ADDRESS, PUBLIC_TELEGRAM_ADDRESS } from "$env/static/public";

</script>
<footer
	class="border-border-primary-light dark:border-border-primary-dark flex w-full flex-col items-center justify-between gap-8 border-t bg-bg-secondary-light px-8 py-10 transition-colors duration-300 md:flex-row dark:bg-bg-secondary-dark"
>
	<div class="flex flex-col items-center gap-1 md:items-start">
		<span
			class="font-headline text-xl font-bold tracking-tighter text-primary-light uppercase dark:text-primary-dark"
			>METMIKU</span
		>
		<p
			class="font-body text-[10px] tracking-widest text-primary-light uppercase dark:text-primary-dark"
		>
			© {new Date().getFullYear()} Metmiku Yohannes
		</p>
	</div>
	<div class="flex items-center gap-8">
		<a
			class="font-mono text-sm text-primary-light uppercase transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
			href="{PUBLIC_GITHUB_ADDRESS}" target="_blank">github</a
		>
		<a
			class="font-mono text-sm text-primary-light uppercase transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
			href="{PUBLIC_TELEGRAM_ADDRESS}" target="_blank">Telegram</a
		>
		<a
			class="font-mono text-sm text-primary-light uppercase transition-all hover:text-secondary-light dark:text-primary-dark dark:hover:text-secondary-dark"
			href="mailto:{PUBLIC_EMAIL_ADDRESS}" target="_blank">Email</a
		>
	</div>
	<div></div>
</footer>
