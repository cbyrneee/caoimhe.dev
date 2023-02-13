import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";
import type MusicInformation from "$types/MusicInformation";
import { Cached } from "$lib/cache";

const client = new LastClient(LASTFM_API_KEY);
const cache = new Cached<MusicInformation | undefined>(60);

export const config = {
	isr: {
		expiration: 60,
		group: 1,
	},
};

export const load = async () => {
	if (!cache.expired()) {
		return { musicInformation: cache.valueIfNotExpired() };
	}

	try {
		const track = await getCurrentTrack(client, LASTFM_USERNAME);
		cache.set(track);

		return { musicInformation: track };
	} catch (e) {
		// Ignored
		console.error("Failed to fetch last.fm track information!", e);
		cache.set(undefined);
	}
};
