<script lang="ts">
	import { page } from "$app/stores";

	export let destination: string;

	$: isActive = $page.url.pathname === destination;
</script>

<a href={destination} class={!isActive ? "hover:opacity-75 transition-all" : ""}>
	<h3 class={isActive && "font-semibold"}>
		<slot />
	</h3>
</a>
