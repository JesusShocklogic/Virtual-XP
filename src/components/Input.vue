<script setup lang="ts">
import { ref, toRef } from "vue";

type Props = {
  modelValue: string,
  label: string
}

const props = defineProps<Props>(),
      emit = defineEmits<{ (e: "update:modelValue", val: string): void }>(),
      val = toRef(props, 'modelValue'),
      animate = ref(false),
      input = ref<HTMLInputElement>(),
      container = ref<HTMLDivElement>(),
      triggerAnimation = () => {
        animate.value = true
        input.value?.focus()
      },
      returnToStale = () => {
        if (val.value == "" && container.value && !container.value.matches(":hover"))
          animate.value = true
      },
      handleInput = () => emit("update:modelValue", val.value)
</script>

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
