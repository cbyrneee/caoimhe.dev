<script lang="ts">
	let className = "";
	export { className as class };
</script>

<div class="flex flex-col gap-4 rounded-xl p-6 {className}">
	<slot />
</div>
