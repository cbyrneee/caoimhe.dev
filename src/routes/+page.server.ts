import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";
import type MusicInformation from "$types/MusicInformation";

const client = new LastClient(LASTFM_API_KEY);

export const load = async () => {
	let information: MusicInformation | null = null;
	try {
		information = await getCurrentTrack(client, LASTFM_USERNAME);
	} catch (e) {
		// Ignored
		console.error("Failed to fetch last.fm track information!", e);
	}

	return { musicInformation: information };
};
