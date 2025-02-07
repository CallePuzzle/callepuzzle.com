<script lang="ts">
	import Routes from '$lib/routes';
	let { isBurgerMenu }: { isBurgerMenu: boolean } = $props();

	let ulClass = isBurgerMenu
		? 'menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow'
		: 'menu menu-horizontal px-1';
</script>

<ul class={ulClass}>
	<li><a href={Routes.home.getUrl()}>{Routes.home.name}</a></li>
	<li><a href={Routes.blog.getUrl()}>{Routes.blog.name}</a></li>
</ul>
