<template>
  <div class="title">{{ text }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class Title extends Vue {
  text!: string;
}
</script>

<style scoped lang="postcss">
div {
	@apply font-bold;
  @apply text-main;
  @apply prose-main-title;
}
</style>
