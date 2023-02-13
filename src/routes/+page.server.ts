import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { Cached } from "$lib/cache";
import { getCurrentTrack } from "$lib/lastfm";

import type MusicInformation from "$types/MusicInformation";

const client = new LastClient(LASTFM_API_KEY);
const cached = new Cached<MusicInformation>(60);

export const load = async () => {
	const value = cached.valueIfNotExpired();
	if (value) {
		return { musicInformation: value };
	}

	const information = await getCurrentTrack(client, LASTFM_USERNAME);
	if (!information) {
		return { musicInformation: null };
	}

	cached.set(information);

	return { musicInformation: information };
};
