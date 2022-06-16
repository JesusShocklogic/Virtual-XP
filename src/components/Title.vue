<script setup lang="ts">
 type Props = {
   title: string
   text: string
 }

 const props = defineProps<Props>()
</script>

<template>
  <div class="title">{{ text }}</div>
</template>

<style scoped lang="postcss">
div {
	@apply font-bold;
  @apply text-main;
  @apply prose-main-title;
}
</style>
