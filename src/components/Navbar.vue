<template>
  <div class="w-full bg-card px-4 py-1 shadow-md grid grid-cols-3">
    <div class="hamburger p-3">
      <div class="icon-container" @click="hamburgerClicked()">
        <img src="../assets/hamburger.svg" />
      </div>
    </div>
    <div class="img-container" @click="homeClicked()">
      <svg id="logo-30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.123 2L26.1218 2L22.5097 12.0943C16.1521 13.2115 11.2895 19.3625 11.2895 26.783C11.2895 30.1305 12.2791 33.2197 13.949 35.7049L2.00006 35.7049L12.9237 5.17808C13.6105 3.25863 15.2736 2 17.123 2Z"
          class="ccompli1"
          fill="#341492"
        />
        <path d="M26.1216 2L23.583 9.09426L22.8181 2L26.1216 2Z" fill="black" fill-opacity="0.3" />
        <path
          d="M31.8169 2L22.8181 2L26.415 12.0517C32.8991 13.0452 37.8942 19.262 37.8942 26.783C37.8942 30.1305 36.9046 33.2197 35.2347 35.7049L46.9398 35.7049L36.0162 5.17809C35.3294 3.25863 33.6663 2 31.8169 2Z"
          class="ccustom"
          fill="#4C28B5"
        />
        <path
          d="M15.5181 34.7334C13.9803 32.5434 13.0633 29.7829 13.0633 26.7829C13.0633 19.6655 18.2249 13.8958 24.592 13.8958C30.9592 13.8958 36.1208 19.6655 36.1208 26.7829C36.1208 29.7829 35.2038 32.5434 33.666 34.7334C31.1415 32.854 27.9987 31.7395 24.592 31.7395C21.1854 31.7395 18.0426 32.854 15.5181 34.7334Z"
          class="ccustom"
          fill="#4C28B5"
        />
      </svg>
    </div>
    <div class="user-profile">
      <div class="icon-container" @click="userProfileClicked()">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-circle"
          class="svg-inline--fa fa-user-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.icon-container {
  @apply cursor-pointer rounded-full hover:bg-black hover:bg-opacity-10 p-1 transition-all duration-500 outline-none;
}

.user-profile {
  @apply text-main p-2 stroke-current font-bold justify-self-end flex flex-row justify-end items-center;
}
.user-profile svg {
  width: 26px;
  height: 26px;
}
.hamburger {
  @apply text-main font-bold justify-self-start flex flex-row items-center;
}
.hamburger img {
  width: 21px;
  height: 21px;
}
.img-container {
  @apply text-main font-bold flex flex-row justify-center items-center cursor-pointer;
}
.img-container > * {
  width: 50px;
  height: 40px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  emits: ["hamburgerClicked", "userProfileClicked", "homeClicked"],
})
export default class Navbar extends Vue {
  hamburgerClicked() {
    console.log("Hamburger Clicked");
    this.$emit("hamburgerClicked");
  }
  userProfileClicked() {
    console.log("User Profile Clicked");
    this.$emit("userProfileClicked");
  }
  homeClicked() {
    console.log("Home Clicked");
    this.$emit("homeClicked");
  }
}
</script>>
