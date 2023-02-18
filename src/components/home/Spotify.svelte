<script lang="ts">
	import { Link, Card } from "$components/base";
	import { PUBLIC_SPOTIFY_PROFILE } from "$env/static/public";
	import type MusicInformation from "$lib/types/TrackInformation";

	export let data: TrackInformation | undefined = undefined;
</script>

<Card class="flex justify-between border-default bg-neutral-50 dark:bg-neutral-800">
	<div class="flex flex-col gap-2">
		<div class="flex flex-row items-center gap-2">
			{#if data}
				<img
					class="aspect-square w-8 rounded-full transition-all hover:scale-105"
					src={data.albumArt}
					alt="Album art"
				/>
			{/if}

			<h1 class="text-title">Spotify</h1>
		</div>

		{#if data}
			<h2 class="text-subtitle">
				I am currently listening to
				<span class="font-semibold text-neural-900 dark:text-green-500">{data.title}</span>
				by
				<span class="font-semibold text-neural-900 dark:text-green-500">{data.artist}</span
				>.
			</h2>
		{:else}
			<h2 class="text-subtitle">
				I'm not listening to anything! You should check back agan later.
			</h2>
		{/if}
	</div>

	{#if data}
		<div class="flex">
			<Link destination={data.url} class="bg-green-500 text-black">See more info</Link>
		</div>
	{:else}
		<div class="flex">
			<Link destination={PUBLIC_SPOTIFY_PROFILE} class="bg-green-500 text-black"
				>My Spotify Profile</Link
			>
		</div>
	{/if}
</Card>
