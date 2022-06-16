<script setup lang="ts">
import { ref } from "vue";

type Props = {
     text: string,
     enabled: boolean
 }

const props = defineProps<Props>(),
      button = ref<HTMLButtonElement>(),
      emit = defineEmits<{ (e: 'handleFunction'): void }>(),
      handleFunction = () => emit("handleFunction")

if (!props.enabled) {
  button.value?.classList.add("disabled");
}
</script>

<template>
    <button class="button" ref="button" :disabled="!enabled" @click="handleFunction">
        {{ text }}
    </button>
</template>

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
