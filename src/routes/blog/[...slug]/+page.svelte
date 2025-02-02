<!-- src/routes/blog/[slug]/page.svelte -->

<script lang="ts">
	import type { PageData } from './$types';

	let {
		data
	}: {
		data: PageData;
	} = $props();
</script>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
		</header>
		<div>
			<svelte:component this={data.component} />
		</div>
	</article>
</div>
