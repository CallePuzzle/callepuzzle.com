<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { browser } from '$app/environment';
	import backgroundPiece from '$lib/assets/background-piece.jpg?enhanced';

	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
	}

	let boxesContainer: ReturnType<typeof gsap.selector>;

	onMount(() => {
		const ctx = gsap.context((self) => {
			const boxes = self.selector('.box');
			boxes.forEach((box) => {
				gsap.to(box, {
					x: 150,
					scrollTrigger: {
						trigger: box,
						start: 'bottom bottom',
						end: 'top 20%',
						scrub: true
					}
				});
			});
		}, boxesContainer); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	});
</script>

<div>
	<div>
		<div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
			<enhanced:img src={backgroundPiece} alt="Logo" style="max-height: 100vh; max-width: 100vw;"/>
		</div>
	</div>
	<section class="">
	</section>
</div>

