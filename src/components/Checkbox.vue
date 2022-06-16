<script setup lang="ts">
import { ref, toRef } from "vue";

type Props = {
   modelValue: boolean
}

const props = defineProps<Props>(),
      checked = toRef(props, 'modelValue'),
      emit = defineEmits<{ (e: "update:modelValue", val: boolean): void }>(),
      toggleChecked = () => {
        checked.value = !checked.value
        emit("update:modelValue", checked.value)
      }
</script>

<template>
  <div @click="toggleChecked()" class="prose-small-text flex flex-row gap-4">
    <div class="checkbox" :class="checked ? 'checked' : ''">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check"
        class="svg-inline--fa fa-check"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"
        />
      </svg>
    </div>
    <div class="content overflow-hidden break-words text-left">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss">
.content {
  overflow-wrap: break-word;
}
.checkbox {
  @apply w-6 h-6 mb-auto flex flex-shrink-0 justify-center items-center block border border-main rounded-sm outline-none transition-colors duration-100 !important;
  width: 20px;
  height: 20px;
}

.checkbox > * {
  @apply w-5 h-5 transition-opacity duration-300 delay-100 opacity-0 invisible;
}

.checkbox.checked {
  @apply text-opacity-0 bg-main text-white;
}

.checkbox.checked > * {
  @apply text-white text-sm leading-none opacity-100 visible;
}
</style>
