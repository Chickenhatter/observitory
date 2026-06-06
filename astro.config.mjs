// @ts-check
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config


import { defineConfig, envField } from 'astro/config';

export default defineConfig({
  env: {
    schema: {
      API_KEY: envField.string({ context: 'server', access: 'secret' }),
      API_BDA: envField.string({ context: 'server', access: 'secret' }),
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
  
});