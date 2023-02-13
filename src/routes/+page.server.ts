import { LastClient } from "@musicorum/lastfm";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";
import type MusicInformation from "$types/MusicInformation";
import { Cached } from "../lib/cache";

const client = new LastClient(LASTFM_API_KEY);
const cached = new Cached<MusicInformation>(60);

export const load = async () => {
	const value = cached.valueIfNotExpired();
	if (value) {
		return { musicInformation: value };
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

	cached.set(musicInformation);

	return { musicInformation };
};
