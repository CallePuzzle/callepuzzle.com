<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Nav from '$lib/components/layout/Nav.svelte';
	let { children } = $props();
</script>

<main style="margin: 0; display: flex; flex-direction: column; min-height: 100vh;">
	<ParaglideJS {i18n}>
		<Nav />
		{@render children()}
	</ParaglideJS>
</main>
