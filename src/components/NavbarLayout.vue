<script setup lang="ts">
import Navbar from "./Navbar.vue";
import { ref } from "vue";

const hamburgerToggled = ref(false),
      hide = () => hamburgerToggled.value = false,
      show = () => hamburgerToggled.value = true

</script>

<!-- /home/ 
     /1 -->
<template>
  <div class="body" v-touch:swipe.left="hide" v-touch:swipe.right="show">
    <header>
      <Navbar @hamburgerClicked="show"></Navbar>
    </header>
    <main>
      <router-view v-model:hamburgerToggled="hamburgerToggled"/>
    </main>
  </div>
</template>

<style lang="postcss">
.body {
  @apply bg-bgcolor h-screen flex flex-col;
}
.body > main {
  @apply flex-auto;
  background-color: rgb(235 240 243 / var(--tw-bg-opacity));
}
</style>
