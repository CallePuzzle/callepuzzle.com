<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Nav from '$lib/components/layout/Nav.svelte';
	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';
	let { children, data }: { children: Snippet; data: PageData } = $props();
</script>

<div class="h-dvh">
	<ParaglideJS {i18n}>
		<Nav />
		{@render children()}
	</ParaglideJS>
</div>
