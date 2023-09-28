import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import mdx from "@astrojs/mdx"

import { resolve } from "node:path"
const __dirname = new URL(".", import.meta.url).pathname

export default defineConfig({
  /** @type {import('astro').AstroUserConfig} */
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "~": __dirname
      }
    }
  },
  integrations: [svelte(), mdx()]
})
