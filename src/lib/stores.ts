import { asyncReadable } from "@square/svelte-store";

export const { state: trackState, store: trackStore } = asyncReadable(
	{},
	async () => {
		const response = await fetch("/api/track");
		if (response.ok) {
			return await response.json();
		} else {
			return undefined;
		}
	},
	{ reloadable: true, trackState: true },
);
