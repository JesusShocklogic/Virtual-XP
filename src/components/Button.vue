<template>
  <button class="button" @click="handleFunction">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class Button extends Vue {
  text!: string;
  handleFunction = () => {
    this.$emit("handleFunction");
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
