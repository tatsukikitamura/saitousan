import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE || "https://example.com";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  integrations: [react()],
  server: {
    port: Number(process.env.PORT) || 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
