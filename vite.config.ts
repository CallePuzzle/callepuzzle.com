import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		viteStaticCopy({
			targets: [
				{
					src: './src/data-posts/',
					dest: './src/data-posts/'
				}
			]
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
