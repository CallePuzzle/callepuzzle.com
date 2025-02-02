import { posts } from '$lib/blog/posts';

export type PostDate = {
	day: number;
	month: number;
	year: number;
};

export const postDates = posts.map((post) => {
	const date = new Date(post.date);
	return {
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear()
	};
});
