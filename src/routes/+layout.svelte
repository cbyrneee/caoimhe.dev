<script>
	import Text from "$lib/components/text/Text.svelte";
	import "../app.css";
</script>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="min-w-screen flex min-h-screen">
	<div class="mx-auto w-full xl:mx-0 xl:px-64">
		<div class="flex flex-row items-center py-6 gap-6">
			<div class="flex flex-row gap-6">
				<a href="/">
					<Text style="body" class="font-semibold !text-black">Home</Text>
				</a>
				<a class="hover:opacity-50 transition-all" href="/blog">
					<Text style="body" class="font-medium !text-black !cursor-pointer">Blog</Text>
				</a>
			</div>
		</div>

		<slot />
	</div>
</div>
