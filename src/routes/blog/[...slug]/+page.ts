import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug
	/* @vite-ignore */
	const postContent = await import(data.post.filepath);

	return {
		post: data.post,
		PostContent: postContent.default,
		layout: {
			fullWidth: true
		}
	};
};
