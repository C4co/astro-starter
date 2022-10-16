import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'material-palenight',
      wrap: true,
    },
  },
  integrations: [tailwind(), mdx(), svelte()],
})
