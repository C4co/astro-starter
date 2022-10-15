import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },

  integrations: [tailwind(), mdx()],
})
