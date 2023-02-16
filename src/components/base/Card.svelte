<script lang="ts">
	let className = "";
	export { className as class };
</script>

<div class="flex flex-col gap-4 overflow-clip rounded-xl p-4 xl:p-6 {className}">
	<slot />
</div>
