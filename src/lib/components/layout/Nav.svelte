<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BiMenu } from 'svelte-icons-pack/bi';
	import logo from '$lib/assets/logo.png';
  import NavList from '$lib/components/layout/NavList.svelte';
</script>

<nav class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<Icon src={BiMenu} size="32" />
			</div>
      <NavList isBurgerMenu={true} />
		</div>
		<a href="/" class="btn btn-ghost text-xl">
			<img src={logo} alt="Logo" class="h-8 w-auto" />
      <span>Calle Puzzle</span>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
    <NavList isBurgerMenu={false} />
	</div>
	<div class="navbar-end">
		<a class="btn">Button</a>
	</div>
</nav>
