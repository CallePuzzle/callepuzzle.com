<script>
	const imageModules = import.meta.glob(
		'/src/data-posts/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
</script>

{#each Object.entries(imageModules) as [_path, module]}
	<enhanced:img src={module.default} alt="some alt text" />
{/each}
