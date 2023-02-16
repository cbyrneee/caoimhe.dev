import { LastClient } from "@musicorum/lastfm";

import { Client as NotionClient } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import {
	LASTFM_API_KEY,
	LASTFM_USERNAME,
	NOTION_DATABASE_ID,
	NOTION_TOKEN,
} from "$env/static/private";

import { parseNotionPage } from "$lib/notion/parser";
import { getCurrentTrack } from "$lib/lastfm";

const lastClient = new LastClient(LASTFM_API_KEY);
const notionClient = new NotionClient({
	auth: NOTION_TOKEN,
});

export const load = async () => {
	const musicInformation = await getCurrentTrack(lastClient, LASTFM_USERNAME);

	const response = await notionClient.databases.query({ database_id: NOTION_DATABASE_ID });
	const pages = response.results.map((page) =>
		parseNotionPage<{
			title: "title";
			description: "rich_text";
			image: "files";
			link: "url";
			imageclass: "rich_text";
		}>(page as PageObjectResponse),
	);

	return { musicInformation, pages };
};
