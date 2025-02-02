<script lang="ts">
	import type { PostDate } from '$lib/blog/dates';
	let { postDates }: { postDates: PostDate[] } = $props();
</script>

<div class="drawer drawer-end justify-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<label for="my-drawer-4" class="drawer-button btn btn-primary">Ver fechas y tags</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			{#each postDates as postDate}
				<li>
					<p>{postDate.year}-{postDate.month}</p>
				</li>
			{/each}
            {#each postDates as postDate}
                <li>
                    <p>tag</p>
                </li>
            {/each}
		</ul>
	</div>
</div>
