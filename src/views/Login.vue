<template>
  <div class="login-bg">Login</div>
</template>

<style lang="postcss">
.login-bg {
  @apply bg-white h-full w-full;
}
</style>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Button,
    Input,
    PasswordInput,
  },
})
export default class Login extends Vue {}
</script>
