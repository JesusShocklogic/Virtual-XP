<script setup lang="ts">
import Module from "../components/Module.vue";
import Card from "../components/Card.vue";
import Sidebar from "../components/Sidebar.vue";
import { toRefs } from "vue";

type Props = {
  hamburgerToggled: boolean;
};

const props = defineProps<Props>(),
  { hamburgerToggled } = toRefs(props),
  emit = defineEmits<{ (e: "update:hamburgerToggled", val: boolean): void }>(),
  hide = () => emit("update:hamburgerToggled", false);

//TODO remove this example when API is connected
const sections = [
  {
    title: "Main speakers",
    speakers: [
      {
        name: "Alicia Herbert",
        org: "FCDO",
        position: "Director for Education",
      },
      {
        name: "Naomi Rayner",
        org: "Foreign, Commonwealth and...",
        position: "Head of The Scholarship",
      },
    ],
  },
  {
    title: "Becoming Chevening Alumni",
    speakers: [
      {
        name: "Tom Lisboa",
        org: "Drops Cultural",
        position: "Creative director",
      },
      {
        name: "Alicia Herbert",
        org: "FCDO",
        position: "Director for Education",
      },
    ],
  },
  {
    title: "Regional Sessions",
    speakers: [
      {
        name: "Naomi Rayner",
        org: "Foreign, Commonwealth and",
        position: "Head of The Scholarship",
      },
      {
        name: "Tom Lisboa",
        org: "Drops Cultural",
        position: "Creative director",
      },
    ],
  },
];
</script>

<template>
  <div class="speakers py-4 px-8 h-full">
    <Sidebar :toggled="hamburgerToggled" @hide="hide" />
    <Card>
      <div class="title-section">
        <img class="arrow" src="../assets/left-arrow-solid.svg" />
        <span class="title font-bold">Speakers</span>
      </div>
      <div class="py-3">
        <input class="searchbar" placeholder="Search" />
      </div>
      <div v-bind:key="index" v-for="(section, index) in sections">
        <hr v-if="index != 0" class="border-t-2 m-3" />
        <div class="speaker-section-title font-bold">{{ section.title }}</div>
        <div
          class="speaker-section"
          v-bind:key="speakerIndex"
          v-for="(speaker, speakerIndex) in section.speakers"
        >
          <div class="row-span-3">
            <img
              class="speaker-image"
              src="../assets/business-man-profile-vector.jpg"
            />
          </div>
          <div class="col-span-3 text-left font-bold">{{ speaker.name }}</div>
          <div class="col-span-3 text-left">{{ speaker.org }}</div>
          <div class="col-span-3 text-left">{{ speaker.position }}</div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped lang="postcss">
.title-section {
  position: relative;
  @apply pb-4;
}
.title {
  color: #202020;
  @apply text-center;
  @apply text-xl;
}
.arrow {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  @apply p-1 h-8 w-8;
  @apply rounded-full;
}
.arrow:hover {
  background-color: #f0f0f0;
}
.searchbar {
  border-radius: 10px;
  width: 100%;
  background: url("../assets/search-solid.svg") no-repeat 5%50%;
  background-size: 1.2rem;
  background-color: #f2f0f6;
  position: relative;
  font-size: 1.1rem;
  @apply pt-5 pb-3 pl-14 sm:pl-16 md:pl-20 lg:pl-24 pr-4;
}
.searchbar::placeholder {
  color: #787779;
}
.searchbar:focus-visible {
  outline: none;
}
.speaker-section-title {
  color: #202020;
  opacity: 0.6;
  @apply py-3;
  @apply tracking-wide;
}
.speaker-section {
  border-radius: 15px;
  @apply text-sm md:text-base lg:text-lg xl:text-xl;
  @apply py-3 px-3;
  @apply my-2;
  @apply grid grid-rows-3 grid-cols-4 gap-x-4 items-center;
}
.speaker-section:hover {
  background-color: #f4f4f4;
}
.speaker-image {
  border: 2px solid #4c28b5;
  @apply rounded-full;
}
</style>
