<script lang="ts">
	import { Card, PerspectiveImage } from "$components/base";
	import { Open } from "$components/icon";

	export let title: string;
	export let description: string;

	export let image: string | undefined;
	export let link: string | undefined;
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
					<Open class="h-4 w-4 text-white" />
				</div>
			</a>
		{/if}
	</div>

	<h2 class="text-body -mt-2">{description}</h2>

	{#if image}
		<PerspectiveImage class="self-center xl:w-2/3">
			<img src={image} alt={title} />
		</PerspectiveImage>
	{/if}
</Card>
