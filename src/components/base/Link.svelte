<script lang="ts">
	export let destination: string;
	export let newTab: boolean = true;

	let className = "";
	export { className as class };

	const props = newTab ? { target: "_blank", rel: "noreferrer" } : {};
</script>

<a href={destination} {...props}>
	<div
		class="cursor-pointer rounded-full px-4 py-2 font-semibold transition-all hover:scale-105 hover:opacity-60 {className}"
	>
		<slot />
	</div>
</a>
