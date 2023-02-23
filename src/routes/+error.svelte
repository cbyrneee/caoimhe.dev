<script lang="ts">
	import { Card, Link } from "$components/base";
	import { GradientBackground } from "$components/decoration";

	import { page } from "$app/stores";
</script>

{#if $page.error}
	<Card class="border-default bg-neutral-50 dark:bg-neutral-800">
		<div class="flex flex-col gap-2">
			<h1 class="text-title">{$page.error.message ?? "Uh oh! An error occurred."}</h1>
		</div>

		<div class="flex">
			<Link newTab={false} destination="/" class="bg-black text-neutral-50">Go back</Link>
		</div>
	</Card>
{/if}
