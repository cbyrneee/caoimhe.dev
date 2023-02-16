import type {
	PageObjectResponse,
	RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import type { NotionProperties, NotionPropertyType } from "./types";

type Properties = {
	[name: string]: NotionPropertyType;
};

type URL = { type: "url"; url: string | null };
type Files = { type: "files"; files: string[] };
type RichText = { type: "rich_text" | "title"; text: string };

type CustomProperty = URL | Files | RichText;

interface Page<T extends Properties> {
	properties: {
		[name in keyof T]: CustomProperty & { type: T[name] };
	};
}

export function parseNotionPage<T extends Properties>(page: PageObjectResponse): Page<T> {
	// Create a new record of properties
	const properties = {} as Page<T>["properties"];

	// This is really ugly... I know
	const typedProperties: T | { [name: string]: CustomProperty } = properties;

	// Iterate over the property name -> property pairs
	for (const [key, value] of Object.entries(page.properties)) {
		const friendlyKey = key.toLowerCase();
		switch (value.type) {
			case "url": {
				typedProperties[friendlyKey] = parseNotionURL(value);
				break;
			}
			case "files": {
				typedProperties[friendlyKey] = parseNotionFiles(value);
				break;
			}
			case "rich_text":
			case "title": {
				const text = value.type == "rich_text" ? value.rich_text : value.title;
				typedProperties[friendlyKey] = parseNotionRichText(text);

				break;
			}
			default:
				break;
		}
	}

	return { properties };
}

function parseNotionURL(value: NotionProperties<"url">): URL {
	return { type: "url", url: value.url };
}

function parseNotionFiles(value: NotionProperties<"files">): Files {
	const fileUrls = value.files.map((file) => {
		if (file.type != "file") {
			return;
		}

		return file.file.url;
	});

	return {
		type: "files",
		files: fileUrls.filter((it): it is string => it != null),
	};
}

function parseNotionRichText(value: RichTextItemResponse[]): RichText {
	return { type: "rich_text", text: value.map((item) => item.plain_text).join("") };
}
