<script lang="ts">
	import type { PageData } from './$types';
	import blogIndex from '$lib/assets/blog-index.jpg';
	import Drawer from '$lib/components/blog/Drawer.svelte';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { posts, postDates } = data;
	console.log('posts', posts);
</script>

<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src={blogIndex}
			class="max-h-64 max-w-sm rounded-lg shadow-2xl lg:max-h-full"
			alt="Hand coloring blue puzzle piece with green pencil"
		/>
		<div>
			<h1 class="text-5xl font-bold">Blog</h1>
			<p class="py-6">
				Bienvenido al blog de Calle Puzzle, donde encontrarás artículos sobre tecnología y
				desarrollo web.
			</p>
			<Drawer {postDates} />
		</div>
	</div>
</div>

<div class="z-0 flex flex-wrap justify-center">
	{#each posts as post}
		<div class="card bg-base-100 image-full w-96 p-4 shadow-sm">
			{#if post.image}
				<figure>
					<img src={post.image} alt={post.title} />
				</figure>
			{/if}
			<div class="card-body">
				<h2 class="card-title"><a href={`blog/${post.slug}`}>{post.title}</a></h2>
				<p>{post.description}</p>
			</div>
		</div>
	{/each}
</div>
