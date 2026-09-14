// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || undefined,
	integrations: process.env.SITE_URL ? [sitemap()] : [],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
