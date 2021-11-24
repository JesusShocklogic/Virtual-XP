<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Button extends Vue {}
</script>

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
