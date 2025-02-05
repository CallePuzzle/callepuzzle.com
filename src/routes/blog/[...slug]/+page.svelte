<script lang="ts">
	import type { PageData } from './$types';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { content: PostContent, metadata } = data;
</script>

<div class="hero w-screen">
	{#if metadata.image?.default}
		<enhanced:img
			src={metadata.image.default}
			alt={metadata.title}
			class="max-h-64 rounded-2xl lg:max-h-80"
		/>
	{/if}
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{metadata.title}</h1>
			<p class="mb-5">
				{metadata.description}
			</p>
		</div>
	</div>
</div>

<article class="article__blog container px-10 py-5">
	<PostContent />
</article>

<style>
	:global(.article__blog h2) {
		font-size: 1.5rem;
		padding: 0.5rem 0.2rem;
	}
	:global(.article__blog p) {
		text-align: justify;
		padding: 0 0.2rem;
	}
	:global(.article__blog ul) {
		list-style-type: disc;
	}
	:global(.article__blog ol) {
		list-style-type: decimal;
	}
	:global(.article__blog li) {
		margin-left: 1rem;
	}
	:global(.article__blog pre) {
		margin: 0.7rem 0.5rem;
	}
</style>
