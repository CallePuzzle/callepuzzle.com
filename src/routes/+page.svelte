<script lang="ts">
	import backgroundName from '$lib/assets/background-name.jpg?enhanced';
</script>

<section id="background" class="flex h-svw w-screen items-center justify-center">
	<enhanced:img src={backgroundName}> </enhanced:img>
</section>

<style>
	#background {
		background: linear-gradient(
			to bottom,
			var(--color-base-100) 0%,
			black 25%,
			black 75%,
			var(--color-base-100) 100%
		);
	}
</style>
