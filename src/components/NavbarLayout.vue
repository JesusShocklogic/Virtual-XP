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
export default class NavbarLayout extends Vue {
  hamburgerToggled = false

  hide() {
    this.hamburgerToggled = false
  }

  show() {
    this.hamburgerToggled = true
  }
}
</script>
