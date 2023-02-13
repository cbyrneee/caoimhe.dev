<script lang="ts">
	import { Link, Card } from "$components/base";

	let title = "Boxcutter";
	let artist = "Gatherers";
</script>

<Card class="border border-neutral-100 bg-neutral-50">
	<div class="flex flex-col gap-2">
		<div class="flex flex-row gap-2 items-center">
			<img
				class="rounded-full w-8 aspect-square transition-all hover:scale-105"
				src="https://i.scdn.co/image/ab67616d0000b2736ee397740a778e1a3dc51dac"
				alt="Album art"
			/>

			<h1 class="text-title">Spotify</h1>
		</div>

		<h2 class="text-subtitle">
			I am currently listening to
			<span class="text-neutral-900 font-semibold">{title}</span> by
			<span class="text-neutral-900 font-semibold">{artist}</span>.
		</h2>
	</div>

	<div class="flex">
		<Link destination="" class="bg-green-500 text-black">Play on Spotify</Link>
	</div>
</Card>
