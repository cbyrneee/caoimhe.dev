import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";

const client = new LastClient(LASTFM_API_KEY);

export const load = async () => {
	const track = await getCurrentTrack(client, LASTFM_USERNAME);
	return { musicInformation: track };
};
