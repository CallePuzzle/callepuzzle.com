<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Nav from '$lib/components/layout/Nav.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Nav />
	{@render children()}
</ParaglideJS>
