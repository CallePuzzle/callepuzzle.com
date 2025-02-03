import { dev } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug

	const buildDir = dev ? '' : '/.svelte-kit/output/server';
	const postContent = await import(data.post.filepath); 	/* @vite-ignore */

	return {
		post: data.post,
		PostContent: postContent.default,
		layout: {
			fullWidth: true
		}
	};
};
