<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import NProgress from "nprogress";

	import { navigating } from "$app/stores";
	import { Card } from "$components/base";
	import { Navigation } from "$components/page/root";
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
	<div class="w-ful mx-auto flex h-full flex-col gap-6 p-6 xl:mx-0 xl:px-48">
		<Navigation />

		{#if ready}
			{#key data.pathname}
				<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
					<slot />
				</div>
			{/key}
		{/if}

		<Card class="cursor-default bg-neutral-100 dark:bg-neutral-800">
			<p class="bottom-0 text-neutral-600 dark:text-neutral-400">
				Made with ❤️ by <a
					target="_blank"
					rel="noreferrer"
					class="text-blue-500 transition-all hover:opacity-60"
					href="https://twitter.com/cbyrnedev"
				>
					Caoimhe
				</a> in 🇮🇪
			</p>
		</Card>
	</div>
</div>
