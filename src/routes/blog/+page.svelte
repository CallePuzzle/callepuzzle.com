<script lang="ts">
	import type { PageData } from './$types';
	import blogIndex from '$lib/assets/blog-index.jpg';
	import Drawer from '$lib/components/blog/Drawer.svelte';

	let {
		data
	}: {
		data: PageData;
	} = $props();
</script>

<div class="container">
	<div class="hero bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src={blogIndex}
				class="max-w-sm rounded-lg shadow-2xl"
				alt="Hand coloring blue puzzle piece with green pencil"
			/>
			<div>
				<h1 class="text-5xl font-bold">Blog</h1>
				<p class="py-6">
					Bienvenido al blog de Calle Puzzle, donde encontrarás artículos sobre tecnología y
					desarrollo web.
				</p>
				<Drawer />
			</div>
		</div>
	</div>

	<ul class="links">
		{#each data.posts as post}
			<li>
				<a href={`blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>

	<ul class="links">
		{#each data.postDates as postDate}
			<li>
				<p>{postDate.day}</p>
				<p>{postDate.month}</p>
				<p>{postDate.year}</p>
			</li>
		{/each}
	</ul>
</div>
