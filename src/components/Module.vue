<script setup lang="ts">
type Props = {
  text: string
}
const props = defineProps<Props>(),
      text = props.text
</script>

<template>
  <button class="module">
    <slot></slot>
    <div>{{ text }}</div>
  </button>
</template>

<style lang="postcss">
.module {
  @apply py-4;
  @apply px-3;
  @apply w-full;
  @apply bg-main;
  @apply shadow-xl;
  @apply rounded-xl;
  @apply text-center;
  @apply prose-button-text;
  color: white;
}

.module:hover {
  @apply bg-main-hover;
}

.module img {
  @apply py-1;
  @apply m-auto;
  @apply max-h-20;
}

.module.disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}
</style>
