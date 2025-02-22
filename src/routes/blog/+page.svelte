<script lang="ts">
	import type { PageData } from './$types';
	import blogIndex from '$lib/assets/blog-index.jpg?enhanced';
	// import Drawer from '$lib/components/blog/Drawer.svelte';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { postsMetadataByDate, postDates } = data;
</script>

<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<enhanced:img
			src={blogIndex}
			class="max-h-64 max-w-xs rounded-lg shadow-2xl lg:max-h-full"
			alt="Hand coloring blue puzzle piece with green pencil"
		/>
		<div>
			<h1 class="text-5xl font-bold">Blog</h1>
			<p class="py-6">Lo que no contamos en GitHub</p>
			<!-- <Drawer {postDates} /> -->
		</div>
	</div>
</div>

<div class="z-0 flex flex-wrap justify-center">
	{#each postsMetadataByDate as post}
		<div class="card bg-base-100 image-full w-96 p-4 shadow-sm">
			{#if post.image?.default}
				<div class="grid max-h-full max-w-full content-center">
					<enhanced:img class="max-h-48 rounded-2xl" src={post.image.default} alt={post.title} />
				</div>
			{/if}
			<div class="card-body">
				<h2 class="card-title"><a href={`blog/${post.slug}`}>{post.title}</a></h2>
				<p>{post.description}</p>
			</div>
		</div>
	{/each}
</div>
