import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";

const client = new LastClient(LASTFM_API_KEY);

export const load = async () => {
	const information = await getCurrentTrack(client, LASTFM_USERNAME);
	if (!information) {
		return { musicInformation: null };
	}

	return { musicInformation: information };
};
