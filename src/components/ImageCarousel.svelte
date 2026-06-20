<script>
	let {
		items = [],
		autoScroll = false,
		autoScrollIntervalMs = 5000,
		ariaLabel = 'Image carousel',
		class: className = '',
		overlay
	} = $props();

	let currentIndex = $state(0);
	let hover = $state(false);
	let focusWithin = $state(false);
	let reduceMotion = $state(false);
	let touchStartX = $state(/** @type {number | null} */ (null));

	let paused = $derived(hover || focusWithin);

	let normalizedItems = $derived(
		items.map((item, i) =>
			typeof item === 'string'
				? { src: item, alt: `Slide ${i + 1}` }
				: { alt: `Slide ${i + 1}`, ...item }
		)
	);

	let effectiveAutoScroll = $derived(
		autoScroll && !reduceMotion && !paused && normalizedItems.length > 1
	);

	$effect(() => {
		if (typeof window === 'undefined') return;
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduceMotion = mq.matches;
		const onChange = () => {
			reduceMotion = mq.matches;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	$effect(() => {
		if (!effectiveAutoScroll) return;
		const id = window.setInterval(() => {
			goNext();
		}, autoScrollIntervalMs);
		return () => window.clearInterval(id);
	});

	$effect(() => {
		if (!normalizedItems.length) {
			currentIndex = 0;
			return;
		}
		if (currentIndex >= normalizedItems.length) {
			currentIndex = normalizedItems.length - 1;
		}
	});

	function goNext() {
		if (!normalizedItems.length) return;
		currentIndex = (currentIndex + 1) % normalizedItems.length;
	}

	function goPrev() {
		if (!normalizedItems.length) return;
		currentIndex = (currentIndex - 1 + normalizedItems.length) % normalizedItems.length;
	}

	/** @param {number} i */
	function goTo(i) {
		if (i < 0 || i >= normalizedItems.length) return;
		currentIndex = i;
	}

	/** @param {KeyboardEvent} e */
	function onKeydown(e) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			goPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			goNext();
		} else if (e.key === 'Home') {
			e.preventDefault();
			goTo(0);
		} else if (e.key === 'End') {
			e.preventDefault();
			goTo(normalizedItems.length - 1);
		}
	}

	/** @param {TouchEvent} e */
	function onTouchStart(e) {
		touchStartX = e.touches[0].clientX;
	}

	/** @param {TouchEvent} e */
	function onTouchEnd(e) {
		if (touchStartX === null) return;
		const dx = e.changedTouches[0].clientX - touchStartX;
		touchStartX = null;
		if (Math.abs(dx) < 48) return;
		if (dx > 0) goPrev();
		else goNext();
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="relative h-full w-full bg-black {className}"
	role="region"
	aria-roledescription="carousel"
	aria-label={ariaLabel}
	tabindex="0"
	onkeydown={onKeydown}
	onpointerenter={() => {
		hover = true;
	}}
	onpointerleave={() => {
		hover = false;
	}}
	onfocusin={() => {
		focusWithin = true;
	}}
	onfocusout={(e) => {
		const cur = e.currentTarget;
		const next = e.relatedTarget;
		if (next instanceof Node && cur instanceof Node && cur.contains(next)) return;
		focusWithin = false;
	}}
	ontouchstart={onTouchStart}
	ontouchend={onTouchEnd}
>
	{#each normalizedItems as item, i (item.src + i)}
		<img
			src={item.src}
			alt={item.alt}
			aria-hidden={i !== currentIndex}
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
			style="opacity: {i === currentIndex ? 1 : 0}; z-index: {i === currentIndex ? 1 : 0}"
		/>
	{/each}

	{#if overlay}
		{@render overlay()}
	{/if}

	{#if normalizedItems.length > 1}
		<button
			type="button"
			onclick={goPrev}
			aria-label="Previous slide"
			class="absolute top-1/2 left-2 z-20 min-h-11 min-w-11 -translate-y-1/2 touch-manipulation bg-bg-primary-light/80 p-3 text-primary-light backdrop-blur transition-all hover:bg-primary-light hover:text-bg-primary-light sm:left-4 dark:bg-bg-primary-dark/80 dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-bg-primary-dark"
		>
			<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"
				><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg
			>
		</button>
		<button
			type="button"
			onclick={goNext}
			aria-label="Next slide"
			class="absolute top-1/2 right-2 z-20 min-h-11 min-w-11 -translate-y-1/2 touch-manipulation bg-bg-primary-light/80 p-3 text-primary-light backdrop-blur transition-all hover:bg-primary-light hover:text-bg-primary-light sm:right-4 dark:bg-bg-primary-dark/80 dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-bg-primary-dark"
		>
			<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"
				><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg
			>
		</button>
		<div
			class="absolute bottom-3 left-1/2 z-20 flex max-w-[min(100%,20rem)] -translate-x-1/2 flex-wrap justify-center gap-2 px-2 sm:bottom-4"
			aria-label="Slide navigation"
		>
			{#each normalizedItems as item, i (item.src + i)}
				<button
					type="button"
					aria-current={i === currentIndex ? 'true' : undefined}
					aria-label="Go to slide {i + 1} of {normalizedItems.length}"
					onclick={() => goTo(i)}
					class="min-h-11 min-w-11 touch-manipulation p-2 sm:min-h-0 sm:min-w-0 sm:p-0"
				>
					<span
						class="block h-2 w-2 rounded-full transition-all {i === currentIndex
							? 'scale-125 bg-primary-light dark:bg-primary-dark'
							: 'bg-bg-primary-light/50 dark:bg-bg-primary-dark/50'}"
					></span>
				</button>
			{/each}
		</div>
	{/if}
</div>
