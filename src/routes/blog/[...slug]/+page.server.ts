// src/routes/blog/[slug]/+page.server.ts

import { posts } from '$lib/blog/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// get post with metadata
	const post = posts.find((post) => slug === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
