<script lang="ts">
	import { Link } from "$lib/components/control";
	import { Card } from "$lib/components/layout";
	import { Spotify } from "$lib/components/page/home";
	import { Text } from "$lib/components/text";
</script>

<div class="grid gap-4 lg:grid-cols-3">
	<Card
		class="bg-gradient-to-br from-indigo-200/50 via-red-200/50 to-yellow-100/50 justify-between lg:col-span-2"
	>
		<div class="flex flex-col gap-2">
			<Text style="title">Hi, I'm Caoimhe</Text>
			<Text style="subtitle">
				I'm a 17 year old software developer, and I have a lot of experience with Java,
				Typescript, Kotlin, and more.
			</Text>
		</div>

		<div class="flex">
			<Link destination="" class="bg-black text-neutral-50">Contact Me</Link>
		</div>
	</Card>

	<Spotify />
</div>
