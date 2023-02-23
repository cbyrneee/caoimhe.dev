import { LastClient } from "@musicorum/lastfm";

import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";

import type { PageServerLoad } from "./$types";

const client = new LastClient(LASTFM_API_KEY);

export const load: PageServerLoad = async () => {
	const currentTrack = await getCurrentTrack(client, LASTFM_USERNAME);
	return { currentTrack };
};
