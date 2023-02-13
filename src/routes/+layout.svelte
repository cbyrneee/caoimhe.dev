<script>
	import "../app.css";
</script>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="min-w-screen flex min-h-screen">
	<div class="mx-auto w-full p-6 xl:mx-0 xl:px-64">
		<slot />
	</div>
</div>
