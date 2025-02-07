<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import backgroundPiece from '$lib/assets/background-piece.jpg?enhanced';
	import Nav from '$lib/components/layout/Nav.svelte';

	import type * as GSAP from 'gsap';

	let gsap: GSAP;
	let ScrollTrigger: any;
	let gsapContext: GSAP.Context;
	let content: HTMLElement;

	console.log(backgroundPiece);

	onMount(async () => {
		if (browser) {
			gsap = (await import('gsap')).default;
			ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
			gsap.registerPlugin(ScrollTrigger);
		}

		gsapContext = gsap.context(() => {
			gsap.to('#content', {
				scrollTrigger: {
					trigger: '#background',
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
					toggleClass: 'fade-in'
				},
				autoAlpha: 1
			});
		}, content);
	});

	onDestroy(() => {
		gsapContext.revert();
	});
</script>

<div class="bg-[url($lib/assets/background-piece.jpg)] bg-fixed">
	<section id="background" class="h-dvh w-screen"></section>
	<section class="h-dvh w-screen" id="content" bind:this={content}>
		<Nav />
	</section>
</div>
