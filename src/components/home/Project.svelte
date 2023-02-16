<script lang="ts">
	import { Card, PerspectiveImage } from "$components/base";
	import { Open } from "$components/icon";

	export let title: string;
	export let description: string;

	export let image: string | undefined;
	export let link: string | undefined;

	export let imageClass: string | undefined;
</script>

<Card class="border border-neutral-100 bg-neutral-50">
	<div class="flex flex-row items-center justify-between">
		<div class="flex flex-col gap-2">
			<h1 class="text-title">{title}</h1>
		</div>

		{#if link}
			<a target="_blank" href={link} rel="noreferrer">
				<div
					class="rounded-full bg-black p-1.5 transition-all hover:scale-105 hover:opacity-75 active:scale-105 active:opacity-75"
				>
					<Open class="h-3 xl:h-4 text-white" />
				</div>
			</a>
		{/if}
	</div>

	<h2 class="text-body -mt-2">{description}</h2>

	<div class="flex flex-col self-center items-center justify-center h-full">
		{#if image}
			<PerspectiveImage class="self-center {imageClass}">
				<img class="rounded-lg" src={image} alt={title} />
			</PerspectiveImage>
		{/if}
	</div>
</Card>
