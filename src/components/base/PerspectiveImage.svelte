<script lang="ts">
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	let x = tweened(0, { duration: 1000, easing: cubicOut });
	let y = tweened(0, { duration: 1000, easing: cubicOut });

	const onMouseMove = (e: MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();

		const xValue = (e.clientX - rect.left) / rect.width;
		const yValue = (e.clientY - rect.top) / rect.height;

		x.set(xValue);
		y.set(yValue);
	};

	const onMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	$: transform = `rotateX(${$y * 10}deg) rotateY(${$x * 5}deg)`;

	let className = "";
	export { className as class };
</script>

<div
	class={className}
	on:mousemove={onMouseMove}
	on:mouseleave={onMouseLeave}
	style="perspective: 1000px; transform-style: preserve-3d;"
>
	<div style="transform: {transform}">
		<slot />
	</div>
</div>
