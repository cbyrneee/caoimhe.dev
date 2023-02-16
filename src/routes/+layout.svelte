<script lang="ts">
	import { onMount } from "svelte";
	import NProgress from "nprogress";

	import { fade } from "svelte/transition";
	import { Navigation } from "$components/root";

	import { navigating } from "$app/stores";
	import type { PageData } from "./$types";

	import "nprogress/nprogress.css";
	import "../app.css";

	NProgress.configure({ showSpinner: false });

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	// Used for loading on page refresh
	let ready = false;

	onMount(() => {
		ready = true;
	});

	export let data: PageData;
</script>

<div class="min-w-screen flex min-h-screen">
	<div class="flex flex-col mx-auto w-full gap-6 p-6 xl:mx-0 xl:px-64">
		<Navigation />

		{#if ready}
			{#key data.pathname}
				<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
					<slot />
				</div>
			{/key}
		{/if}
	</div>
</div>
