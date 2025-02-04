import { postsMetadataByDate } from '$lib/blog/posts';
import { postDates } from '$lib/blog/dates';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		postsMetadataByDate,
		postDates
	};
};
