import type MusicInformation from "$types/MusicInformation";
import type { LastClient } from "@musicorum/lastfm";

export async function getCurrentTrack(
	client: LastClient,
	username: string,
): Promise<MusicInformation | undefined> {
	const recentTracks = await client.user.getRecentTracks(username);
	const track = recentTracks.tracks.at(0);

	if (!track || !track.nowPlaying) {
		return undefined;
	}

	return {
		title: track.name,
		artist: track.artist.name,
		albumArt: track.images[0].url,
		url: track.url,
	};
}
