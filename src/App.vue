<template>
  <div class="bg-bgcolor h-screen">
    <header>
      <Navbar></Navbar>
    </header>
    <main class="p-4">
      <PasswordInput label="Password" v-model="inputValue"></PasswordInput>
      <Input label="Hello" v-model="inputValue"></Input>
      <Checkbox v-model="inputBool">
        Hello
        <a href="#">World</a>
      </Checkbox>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </main>
  </div>
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
