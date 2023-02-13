<script lang="ts">
	import { fade } from "svelte/transition";
	import { Navigation } from "$components/root";

	import "../app.css";
	import "@fontsource/inter";

	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="min-w-screen flex min-h-screen">
	<div class="flex flex-col mx-auto w-full gap-6 p-6 xl:mx-0 xl:px-64">
		<Navigation />

		{#key data.pathname}
			<div in:fade={{ duration: 250 }}>
				<slot />
			</div>
		{/key}
	</div>
</div>
