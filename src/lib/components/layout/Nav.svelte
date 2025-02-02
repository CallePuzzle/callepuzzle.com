<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BiMenu } from 'svelte-icons-pack/bi';
	import { VscGithub } from 'svelte-icons-pack/vsc';
	import logo from '$lib/assets/logo.png';
	import NavList from '$lib/components/layout/NavList.svelte';
	import Routes from '$lib/routes';
</script>

<nav class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<Icon src={BiMenu} size="32" />
			</div>
			<NavList isBurgerMenu={true} />
		</div>
		<a href={Routes.home.getUrl()} class="btn btn-ghost text-xl">
			<img src={logo} alt="Logo" class="h-8 w-auto" />
			<span class="calle-puzzle-gradient">Calle Puzzle</span>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<NavList isBurgerMenu={false} />
	</div>
	<div class="navbar-end">
		<a href="https://github.com/CallePuzzle" target="_blank">
			<Icon src={VscGithub} size="32" />
		</a>
	</div>
</nav>

<style>
	.calle-puzzle-gradient {
		background: linear-gradient(90deg, #0884ba, #21a1d7, #17a3d4);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>
