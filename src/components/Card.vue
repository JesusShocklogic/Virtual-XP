<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="postcss">
div {
  @apply py-5;
  @apply px-4;
  @apply h-full;
  @apply bg-card;
  @apply shadow-2xl;
  @apply rounded-xl;
}
</style>
