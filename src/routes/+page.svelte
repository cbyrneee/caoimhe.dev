<script lang="ts">
	import { onMount } from "svelte";

	import { Link, Card, GradientBackground, PerspectiveImage } from "$components/base";
	import { Spotify, Project } from "$components/home";
	import { Open } from "$components/icon";

	import projects from "$lib/projects";
	import { trackStore, trackState } from "$lib/stores";

	// This reloads the track data when the page is navigated to after being loaded before.
	onMount(() => {
		if ($trackState?.isLoaded) {
			trackStore.reload();
		}
	});
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
	<Card class="relative justify-between lg:col-span-2">
		<GradientBackground class="h-full w-full opacity-20 dark:opacity-40" />

		<div class="flex flex-col gap-2">
			<h1 class="text-title">Hi, I'm Caoimhe</h1>
			<h2 class="text-subtitle">
				I'm a 17 year old software developer, and I have a lot of experience with Java,
				Typescript, Kotlin, and more.
			</h2>
		</div>

		<div class="flex">
			<Link destination="/contact" class="bg-black text-neutral-50" newTab={false}
				>Contact Me</Link
			>
		</div>
	</Card>

	{#if $trackState?.isLoading}
		<Spotify />
	{:else}
		<Spotify data={$trackStore} />
	{/if}
</div>

<div class="flex flex-col gap-2 py-6">
	<h1 class="text-title">Personal Projects</h1>
	<h2 class="text-subtitle">
		Check out some of my personal projects that I work on in my spare time.
	</h2>
</div>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
	{#each projects as project}
		<Project
			title={project.title}
			description={project.description}
			image={project.image}
			link={project.link}
		/>
	{/each}
</div>
