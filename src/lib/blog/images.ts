const images = import.meta.glob('/src/data-posts/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
	eager: true,
	query: {
		enhanced: true
	}
});

export const getImage = (name: string | undefined) => {
	return images[`/src/data-posts/${name}`];
};
