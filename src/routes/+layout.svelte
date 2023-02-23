<script lang="ts">
	import { onMount } from "svelte";
	import NProgress from "nprogress";

	import { fade } from "svelte/transition";
	import { Navigation } from "$components/page/root";

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
	<div class="mx-auto flex w-full flex-col gap-6 p-6 xl:mx-0 xl:px-48">
		<Navigation />

		{#if ready}
			{#key data.pathname}
				<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
					<slot />
				</div>
			{/key}
		{/if}
	</div>
</div>
