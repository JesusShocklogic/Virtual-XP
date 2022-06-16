<script setup lang="ts">
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import PasswordInput from "../components/PasswordInput.vue";
import { ref } from "vue";

const email = ref(""),
      password = ref("")
</script>

<template>
  <div class="flex flex-col p-8 gap-8">
    <img src="../assets/logoipsum-logo-30.svg" class="py-8 px-14" />
    <div class="flex-auto flex flex-col gap-7">
      <h1 class="prose-button-text text-main">Welcome Back!</h1>
      <Input label="Email" v-model="email"></Input>
      <PasswordInput label="Password" v-model="password"></PasswordInput>
      <div class="pt-4 flex flex-col gap-7">
        <Button text="Log in" class="submit-button" :enabled="true"></Button>
        <span class="notice">
          Don't have an account?
          <a href="#">Sign Up</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.login-bg {
  @apply bg-white h-full w-full;
}
.submit-button {
  @apply py-4 prose-normal-text font-bold !important;
}
.notice {
  @apply text-black prose-small-text;
}

.notice a {
  @apply text-main font-bold;
}
</style>