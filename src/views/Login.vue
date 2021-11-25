<template></template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Button,
    Input,
  },
})
export default class Login extends Vue {}
</script>
