import image from "@astrojs/image";
import react from "@astrojs/react";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	experimental: {
		integrations: true,
	  },
	integrations: [react(), compress(), image(), robotsTxt()],
});
