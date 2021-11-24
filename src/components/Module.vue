<template>
  <div class="module">
    <button>
      <img :src="icon" />
      <div>{{ text }}</div>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: String,
    text: String,
  },
})
export default class Button extends Vue {
  icon!: string;
  text!: string;
}
</script>

<style scoped lang="postcss">
button {
  @apply py-4;
  @apply px-3;
  @apply w-full;
  @apply bg-main;
  @apply rounded-xl;
  @apply text-center;
  @apply prose-button-text;
  color: white;
}

button:hover {
  @apply bg-main-hover;
}

img {
  @apply py-1;
  @apply m-auto;
  @apply max-h-20;
}
</style>
