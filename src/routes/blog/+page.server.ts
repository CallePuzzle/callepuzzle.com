import { logger } from '$lib/server/logger';
import FusionCollection from 'fusionable/FusionCollection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const collection = new FusionCollection()
		.loadFromDir('src/data-posts/2020-05')
		.orderBy('date', 'desc');

	const posts = collection.getItemsArray();
	logger.info('posts', posts);
	return { posts };
};
