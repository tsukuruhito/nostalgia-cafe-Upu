import react from "@astrojs/react";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://upu.pages.dev/",
	integrations: [react(), compress(), robotsTxt()],
});
