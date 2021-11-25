<template>
  <div class="body">
    <router-view />
  </div>
</template>

<style lang="postcss">
.body {
  @apply h-screen bg-white;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FullPageLayout extends Vue {}
</script>
