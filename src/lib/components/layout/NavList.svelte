<script lang="ts">
	let { isBurgerMenu }: { isBurgerMenu: boolean } = $props();

	let ulClass = isBurgerMenu
		? 'menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
		: 'menu menu-horizontal px-1';
</script>

<ul class={ulClass}>
	<li><a>Item 1</a></li>
</ul>
