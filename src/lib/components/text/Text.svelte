<script lang="ts">
	type Style = "title" | "subtitle" | "body";

	export let style: Style = "body";

	let className = "";
	export { className as class };
</script>

{#if style == "title"}
	<h1 class="cursor-default text-xl font-semibold text-neutral-800 xl:text-2xl {className}">
		<slot />
	</h1>
{:else if style == "subtitle"}
	<h3 class="cursor-default text-lg font-medium text-neutral-600 xl:text-xl {className}">
		<slot />
	</h3>
{:else if style == "body"}
	<p class="cursor-default text-neutral-600 {className}">
		<slot />
	</p>
{/if}
