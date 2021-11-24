<template>
  <div
    @click="triggerAnimation()"
    ref="container"
    class="relative bg-input-bg rounded rounded-lg border hover:border-main py-4 cursor-text"
  >
    <label
      class="absolute top-0 left-0 flex flex-row items-center text-text h-full text-opacity-60 py-4 px-5 cursor-text z-0"
      :class="animate ? 'toggled':  ''"
    >{{ label }}</label>
    <input
      class="bg-transparent px-5 w-full focus:outline-none rounded rounded-lg z-10 opacity-0"
      :class="animate ? 'displaced':  ''"
      v-model="val"
      @input="handleInput()"
      @focus="triggerAnimation()"
      @blur="returnToStale()"
      ref="input"
    />
  </div>
</template>

<style lang="postcss">
label {
  transition: transform 400ms;
  @apply prose-normal-text;
}
.toggled {
  transform: scale(0.6) translateX(-20%) translateY(-40%);
  padding-top: 1em !important;
  @apply text-main !important;
}
input {
  transition: opacity 400ms;
}
.displaced {
  transform: translateY(0.5em);
  opacity: 1 !important;
}
</style>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class InputProps {
  modelValue: string = prop({ required: true });
  label: string = prop({ required: true });
}

@Options({
  emits: ["update:modelValue"],
})
export default class Input extends Vue.with(InputProps) {
  label = "";
  val = "";
  animate = false;

  mounted() {
    this.val = this.modelValue;
    if (this.val != "") this.triggerAnimation();
  }

  triggerAnimation() {
    this.animate = true;
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  returnToStale() {
    let container: HTMLDivElement = this.$refs.container as HTMLDivElement;
    if (this.val == "" && !container.matches(":hover")) this.animate = false;
  }

  handleInput() {
    this.$emit("update:modelValue", this.val);
  }
}
</script>
