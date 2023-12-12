<template>
	<!--
		Seeing type errors on the word `class`?
		This unfortunately happens because @types/react's JSX definitions leak into every file due to being declared globally.
		There's currently no way to prevent this when using both Vue and React with TypeScript in the same project.
		You can read more about this issue here: https://github.com/johnsoncodehk/volar/discussions/592
	-->
	<h1>Astro/<span class="text-gradient">{{ title }}</span></h1>
</template>

<script lang="ts" setup>
const title = 'Vue';
</script>
