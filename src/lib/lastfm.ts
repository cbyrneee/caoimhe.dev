import type TrackInformation from "$lib/types/track.types";
import type { LastClient } from "@musicorum/lastfm";

export async function getCurrentTrack(
	client: LastClient,
	username: string,
): Promise<TrackInformation | undefined> {
	const recentTracks = await client.user.getRecentTracks(username);
	const track = recentTracks.tracks.at(0);

	if (!track || !track.nowPlaying) {
		return undefined;
	}

	return {
		title: track.name,
		artist: track.artist.name,
		albumArt: track.images[1].url,
		url: track.url,
	};
}
