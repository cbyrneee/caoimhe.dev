<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import "../app.css";

	$: ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="min-w-screen flex min-h-screen">
	<div class="mx-auto w-full p-6 xl:mx-0 xl:px-64">
		{#if ready}
			<div in:fade={{ duration: 250 }}>
				<slot />
			</div>
		{/if}
	</div>
</div>
