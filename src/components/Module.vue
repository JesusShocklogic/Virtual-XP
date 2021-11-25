<template>
  <button class="module" :disabled="!enabled" @click="handleFunction">
    <img :src="icon" />
    <div>{{ text }}</div>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: String,
    text: String,
    enabled: Boolean,
  },
})
export default class Module extends Vue {
  icon!: string;
  text!: string;
  enabled!: boolean;
  handleFunction = () => this.$emit("handleFunction");

  mounted() {
    if (!this.enabled) {
      const button = document.querySelector(".module");
      button?.classList.add("disabled");
    }
  }
}
</script>

<style scoped lang="postcss">
button {
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

button:hover {
  @apply bg-main-hover;
}

img {
  @apply py-1;
  @apply m-auto;
  @apply max-h-20;
}

.disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}
</style>
