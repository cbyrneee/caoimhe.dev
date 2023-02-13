import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import type MusicInformation from "$types/MusicInformation";

const client = new LastClient(LASTFM_API_KEY);

let lastFetched = 0;
let cached: MusicInformation | undefined;

export const load = async () => {
	if (Date.now() - lastFetched < 60000 && cached) {
		return { musicInformation: cached };
	}

	const recentTracks = await client.user.getRecentTracks(LASTFM_USERNAME);
	const track = recentTracks.tracks[0];
	if (track.nowPlaying != true) {
		return { musicInformation: null };
	}

	const musicInformation: MusicInformation = {
		title: track.name,
		artist: track.artist.name,
		albumArt: track.images[0].url,
		url: track.url,
	};

	lastFetched = Date.now();
	cached = musicInformation;

	return { musicInformation };
};
