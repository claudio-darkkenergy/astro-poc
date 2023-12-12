import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    // Enable many frameworks to support all different kinds of components.
	integrations: [
		react({ include: ['**/react/*'] }),
		vue(),
	],
});
