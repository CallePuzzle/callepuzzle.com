import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import FusionCollection from 'fusionable/FusionCollection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const buildDir = dev ? '' : '/.svelte-kit/output/server';
	const postDataDir = process.cwd() + buildDir + '/src/data-posts/2020-05';
	const collection = new FusionCollection().loadFromDir(postDataDir);
	const post = collection.getOneBySlug(slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post: post.getItem()
	};
};
