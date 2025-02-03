import { error } from '@sveltejs/kit';
import FusionCollection from 'fusionable/FusionCollection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const collection = new FusionCollection().loadFromDir(process.cwd() + '/src/data-posts/2020-05');
	const post = collection.getOneBySlug(slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post: post.getItem()
	};
};
