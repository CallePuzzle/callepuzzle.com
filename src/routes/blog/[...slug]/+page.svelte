<script lang="ts">
	import Showdown from 'showdown';

	import type { PageData } from './$types';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { post } = data;
	const converter = new Showdown.Converter();
	const postContentHTML = converter.makeHtml(post.content);
</script>

<div
	class="hero w-screen"
	style={post.fields.image ? `background-image: url(${post.fields.image});` : ''}
>
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{post.fields.title}</h1>
			<p class="mb-5">
				{post.fields.description}
			</p>
		</div>
	</div>
</div>

<article class="article__blog container px-10 py-5">
	{@html postContentHTML}
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
