<script lang="ts">
	import type { PageData } from './$types';

	let {
		data
	}: {
		data: PageData;
	} = $props();

	const { PostContent, post } = data;
</script>

<div>
	<article>
		<header>
			<h1>{post.title}</h1>
		</header>
		<div>
			<PostContent />
		</div>
	</article>
</div>
