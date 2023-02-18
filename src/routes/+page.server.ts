import { LastClient } from "@musicorum/lastfm";

import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import { getCurrentTrack } from "$lib/lastfm";

const lastClient = new LastClient(LASTFM_API_KEY);

export const load = async () => {
	const musicInformation = await getCurrentTrack(lastClient, LASTFM_USERNAME);
	return { musicInformation };
};
