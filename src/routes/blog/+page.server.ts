import { dev } from '$app/environment';
import { logger } from '$lib/server/logger';
import FusionCollection from 'fusionable/FusionCollection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

	logger.warn(dev, 'environment');

	const buildDir = dev ? '' : '/.svelte-kit/output/server';
	const postDataDir = process.cwd() + buildDir + '/src/data-posts/2020-05';
	const collection = new FusionCollection().loadFromDir(postDataDir).orderBy('date', 'desc');

	const posts = collection.getItemsArray();
	return { posts };
};
