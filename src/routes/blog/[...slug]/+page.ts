import { error } from '@sveltejs/kit';
import { posts } from '$lib/blog/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = posts['/src/data-posts/' + params.slug + '.md'];

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		content: post.default,
		metadata: post.metadata
	};
};

export const entries: EntryGenerator = async () => {
	const entries = Object.keys(posts).map((path) => {
		return { slug: path.replace('.md', '').replace('/src/data-posts/', '') };
	});

	return entries;
};

export const prerender = true;
