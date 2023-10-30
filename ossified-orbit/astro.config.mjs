import { defineConfig } from 'astro/config';
 import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    //  root: './src/pages/landing.astro',

// srcDir: './src/pages/ventori.astro',
 outDir: './Ventori_Build',
   output: 'server',
 adapter: node({
   mode: "standalone"
  })
});