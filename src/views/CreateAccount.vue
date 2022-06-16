<script setup lang="ts">
import Button from "../components/Button.vue";
import Checkbox from "../components/Checkbox.vue";
import Input from "../components/Input.vue";
import PasswordInput from "../components/PasswordInput.vue";
import { ref } from "vue";

const email = ref(""),
      name = ref(""),
      password = ref(""),
      agreed = ref(false)

</script>
<template>
  <div class="flex flex-col p-8 gap-8">
    <img src="../assets/logoipsum-logo-30.svg" class="py-8 px-14" />
    <div class="flex-auto flex flex-col gap-7">
      <h1 class="prose-button-text text-main">Create a new account</h1>
      <Input label="Name" v-model="name"></Input>
      <Input label="Email" v-model="email"></Input>
      <PasswordInput label="Password" v-model="password"></PasswordInput>
      <Checkbox class="px-3 py-2" v-model="agreed">
        I agree to the
        <a class="text-main" href="#">Terms of Service</a> and
        <a class="text-main" href="#">Privacy Policy</a>
      </Checkbox>
      <Button class="submit-button" :enabled="true" text="Sign Up"></Button>
      <p class="prose-small-text py-3">
        Already have an account?
        <a class="text-main font-bold" href="#">Log In</a>
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
.submit-button {
  @apply prose-normal-text font-extrabold !important;
}
</style>
