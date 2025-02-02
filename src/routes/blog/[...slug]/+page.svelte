<script lang="ts">
	import type { PageData } from './$types';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { PostContent, post } = data;
</script>

<div class="hero w-screen" style={post.image ? `background-image: url(${post.image});` : ''}>
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{post.title}</h1>
			<p class="mb-5">
				{post.description}
			</p>
		</div>
	</div>
</div>

<article>
	<PostContent />
</article>
