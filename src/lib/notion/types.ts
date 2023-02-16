import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type ValueOf<T> = T[keyof T];
export type NotionProperties<T> = ValueOf<PageObjectResponse["properties"]> & { type: T };
export type NotionPropertyType = ValueOf<PageObjectResponse["properties"]>["type"];
