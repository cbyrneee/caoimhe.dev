<script lang="ts">
	export let destination: string;

	let className = "";
	export { className as class };
</script>

<a target="_blank" href={destination} rel="noreferrer">
	<div
		class="cursor-pointer rounded-full px-4 py-2 font-semibold transition-all hover:scale-105 hover:opacity-60 {className}"
	>
		<slot />
	</div>
</a>
