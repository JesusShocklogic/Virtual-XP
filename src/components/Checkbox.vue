<template>
  <div
    @click="toggleChecked()"
    class="prose-small-text grid auto-cols-max grid-rows-none grid-flow-col"
  >
    <div type="checkbox" class="checkbox" :class="checked ? 'checked' : ''">
      <span>✔</span>
    </div>
    <span class="px-3 text-left mt-1 focus:ring-4 focus:ring-main-hover">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="postcss">
.checkbox {
  @apply relative my-auto block transform scale-150 border border-main rounded-sm outline-none transition-colors duration-100 !important;
  width: 13px;
  height: 13px;
}

.checkbox > * {
  @apply absolute top-0 bottom-0 right-0 left-0 transition-opacity duration-300 delay-100 opacity-0 invisible;
}

.checkbox.checked {
  @apply text-opacity-0 bg-main text-white;
}

.checkbox.checked > * {
  @apply text-white text-sm leading-none flex flex-row items-center opacity-100 visible;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

class CheckboxProps {
  modelValue = false;
}

@Options({
  emits: ["update:modelValue"],
})
export default class Checkbox extends Vue.with(CheckboxProps) {
  checked = false;
  created() {
    this.checked = this.modelValue;
  }
  toggleChecked() {
    this.checked = !this.checked;
    this.$emit("update:modelValue", this.checked);
  }
}
</script>
