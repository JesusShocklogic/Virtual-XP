<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Input from "@/components/Input.vue";
import Checkbox from "./components/Checkbox.vue";
import PasswordInput from "./components/PasswordInput.vue";

@Options({
  components: {
    Navbar,
    Input,
    Checkbox,
    PasswordInput,
  },
})
export default class App extends Vue {
  inputValue = "World";
  inputBool = true;
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
