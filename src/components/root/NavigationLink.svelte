<script lang="ts">
	import { page } from "$app/stores";

	export let destination: string;

	$: isActive = $page.url?.pathname === destination;
</script>

<a href={destination} class={!isActive ? "transition-all hover:opacity-75" : ""}>
	<h3 class={isActive && "font-semibold"}>
		<slot />
	</h3>
</a>
