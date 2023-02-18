import { LastClient } from "@musicorum/lastfm";
import { error, text } from "@sveltejs/kit";

import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";

import type { RequestHandler } from "./$types";

const client = new LastClient(LASTFM_API_KEY);

export const GET = (async () => {
	const currentTrack = await getCurrentTrack(client, LASTFM_USERNAME);
	if (!currentTrack) {
		throw error(404, "No track is currently playing");
	}

	return text(JSON.stringify(currentTrack, undefined, 2));
}) satisfies RequestHandler;
