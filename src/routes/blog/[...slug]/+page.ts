import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

import type { Component } from 'svelte';

export type ContentMetadata = {
	title: string;
	description: string;
};

export type ContentModules = Record<
	string,
	() => Promise<{ default: Component; metadata: ContentMetadata }>
>;

export const load: PageLoad = async ({ params, data }) => {
	const posts = import.meta.glob<GlobEntry>('/src/data-posts/**/*.md', {
		eager: true
	}) as ContentModules;

	const post = posts['/src/data-posts/' + params.slug + '.md'];
	console.log('slug', params.slug);
	console.log('posts', posts);
	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post,
		content: post.default,
		metadata: post.metadata
	};
};

export const entries: EntryGenerator = async () => {
	const posts = import.meta.glob<GlobEntry>('/src/data-posts/**/*.md', {
		eager: true
	}) as ContentModules;

	const entries = Object.keys(posts).map((path) => {
		return { slug: path.replace('.md', '').replace('/src/data-posts/', '') };
	});

	return entries;
};

export const prerender = true;
