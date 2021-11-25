<template>
  <button class="button" :disabled="!enabled" @click="handleFunction">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
    enabled: Boolean,
  },
})
export default class Button extends Vue {
  text!: string;
  enabled!: boolean;
  handleFunction = () => this.$emit("handleFunction");

  mounted() {
    if (!this.enabled) {
      const button = document.querySelector(".button");
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
  @apply rounded-md;
  @apply prose-button-text;
  color: white;
}

button:hover {
  @apply bg-main-hover;
}

.disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}
</style>
