<template>
	<div>
		<p>{{ title }}</p>
		<slot />
	</div>
</template>

<script lang="ts" setup>
const title = 'I\'m a Vue Container Component.';
</script>
