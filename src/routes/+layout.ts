import type { Config } from "@sveltejs/adapter-vercel";

import type { LayoutLoad } from "./$types";

export const config: Config = {
	isr: {
		expiration: 60,
	},
};

/*
 * Always provide the pathname to the layout, so that it can
 * be used to determine which page is active
 */
export const load: LayoutLoad = async ({ url: { pathname } }) => {
	return { pathname };
};
