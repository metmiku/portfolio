// src/lib/theme.svelte.js
import { browser } from '$app/environment';

class Theme {
	current = $state('dark');

	constructor() {
		if (browser) {
			const stored = localStorage.getItem('theme');
			if (stored) {
				this.current = stored;
			} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this.current = 'dark';
			} else {
				this.current = 'light';
			}
			this.applyTheme();
		}
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('theme', this.current);
			this.applyTheme();
		}
	}

	applyTheme() {
		if (browser) {
			if (this.current === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
}

export const theme = new Theme();
