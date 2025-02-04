import { getImage } from '$lib/blog/images';
import type { Component } from 'svelte';

interface Image {
	default: unknown;
}

export interface Post {
	title: string;
	description: string;
	date: string;
	image?: string;
}

export type GlobEntry = { default: Component; metadata: Post };

export const posts = import.meta.glob<GlobEntry>('/src/data-posts/**/*.md', { eager: true });

export const postsMetadataByDate = Object.entries(posts)
	.map(([filepath, globEntry]) => {
		return {
			...globEntry.metadata,
			slug: filepath.replace('.md', '').replace('/src/data-posts/', ''),
			filepath: filepath,
			image: getImage(globEntry.metadata.image) as Image | undefined
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0
	}));
