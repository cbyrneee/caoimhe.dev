<script lang="ts">
	import { Link } from "$components/base";
	import { Card } from "$components/base";
	import { Spotify } from "$components/home";

	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
	<Card
		class="justify-between bg-gradient-to-br from-indigo-200/50 via-red-200/50 to-yellow-100/50 lg:col-span-2"
	>
		<div class="flex flex-col gap-2">
			<h1 class="text-title">Hi, I'm Caoimhe</h1>
			<h2 class="text-subtitle">
				I'm a 17 year old software developer, and I have a lot of experience with Java,
				Typescript, Kotlin, and more.
			</h2>
		</div>

		<div class="flex">
			<Link destination="" class="bg-black text-neutral-50">Contact Me</Link>
		</div>
	</Card>

	<Spotify data={data.musicInformation} />
</div>
