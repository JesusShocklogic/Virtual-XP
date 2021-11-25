<template>
  <div class="body">
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="postcss">
.body {
  @apply bg-bgcolor h-screen flex flex-col;
}
.body > main {
  @apply flex-auto;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "./Navbar.vue";
@Options({
  components: {
    Navbar,
  },
})
export default class NavbarLayout extends Vue {}
</script>
