<script lang="ts">
	import { Card } from "$components/base";
	import { PerspectiveImage } from "$components/decoration";
	import { Open } from "$components/icon";

	export let title: string;
	export let description: string;

	export let image: string | undefined;
	export let link: string | undefined;
</script>

<Card class="border-default bg-neutral-100 dark:bg-neutral-800">
	<div class="flex flex-row items-center justify-between">
		<div class="flex flex-col gap-2">
			<h1 class="text-title">{title}</h1>
		</div>

		{#if link}
			<a target="_blank" href={link} rel="noreferrer">
				<div
					class="rounded-full bg-black p-1.5 transition-all hover:scale-105 hover:opacity-75 active:scale-105 active:opacity-75"
				>
					<Open class="h-3 text-white xl:h-4" />
				</div>
			</a>
		{/if}
	</div>

	<h2 class="text-body -mt-2">{@html description}</h2>

	<div class="flex h-full flex-col items-center justify-center self-center">
		{#if image}
			<PerspectiveImage class="self-center">
				<img class="rounded-lg" src={image} alt={title} />
			</PerspectiveImage>
		{/if}
	</div>
</Card>
