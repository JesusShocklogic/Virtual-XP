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

const speaker = {
  name: "Alicia Herbert",
  organization: "FCDO",
  position:
    "Director for Education, Gender, Equality and Special Envoy on Gender Equality at the FCDO.",
  about:
    "Alicia Herbert OBE is the Director for Education, Gender, Equality and Special Envoy on Gender Equality at the FCDO. Alicia Herbert, OBE, has more than 20 years' experience in international development. She has worked with a huge range of organisations including multilaterals, academia and since 1999, the Department for International Development (DFID) now, the Foreign and Commonwealth Development Office (FCDO) She has previously held the post of Head of DFID Mozambique.",
  contact: "loremipsum@email.com",
  sessions: [
    {
      date: "18 AUG",
      title: "Lorem ipsum dolor sit amet...",
      tags: ["Main Stage", "tag no. 2"],
      time: "08:00 - 09:00",
      speakers: "Alicia Herbert, Naomi Rayner, Tom Lisboa...",
      type: "past",
      recording: "#",
    },
    {
      date: "19 AUG",
      title: "Consectetur adipiscing elit",
      tags: ["tag no. 2", "tag no. 3"],
      time: "10:30 - 11:00",
      speakers: "Alicia Herbert",
      type: "upcoming",
    },
  ],
};
</script>

<template>
  <div class="speaker py-4 px-8 h-full">
    <Sidebar :toggled="hamburgerToggled" @hide="hide" />
    <Card>
      <div class="title-section">
        <img class="arrow" src="../assets/left-arrow-solid.svg" />
        <img class="star-speaker" src="../assets/star-rounded-fill.svg" />
        <img
          class="speaker-image m-auto"
          src="../assets/business-man-profile-vector.jpg"
        />
        <div class="py-2 text-center">
          <div class="py-1 font-bold">Alicia Herbert</div>
          <div class="py-1 text-sm">FCDO</div>
          <div class="py-1 text-sm">
            Director for Education, Gender, Equality and Special Envoy on Gender
            Equality at the FCDO.
          </div>
        </div>
      </div>
      <div class="about-speaker">
        <b>About the speaker:</b>
        <div class="py-2">
          Alicia Herbert OBE is the Director for Education, Gender, Equality and
          Special Envoy on Gender Equality at the FCDO. Alicia Herbert, OBE, has
          more than 20 years' experience in international development. She has
          worked with a huge range of organisations including multilaterals,
          academia and since 1999, the Department for International Development
          (DFID) now, the Foreign and Commonwealth Development Office (FCDO) She
          has previously held the post of Head of DFID Mozambique.
        </div>
      </div>
      <div class="contact-speaker">
        <b>Contact:</b>
        <div class="py-2">loremipsum@email.com</div>
      </div>
      <div class="sessions-speaker">
        <div class="px-6">
          <hr class="session-title" data-content="18 AUG" />
        </div>
        <div class="py-4">
          <div class="session">
            <div class="relative">
              <img
                class="star-session"
                src="../assets/start-rounded-outline.svg"
              />
              <div class="font-semibold">Lorem ipsum dolor sit amet...</div>
              <div class="flex gap-2 py-2">
                <button class="text-xs px-3 py-1 my-1 rounded-full purple-btn">
                  <span class="tag-circle">&#9679;</span> Main Stage
                </button>
                <button class="text-xs px-3 py-1 my-1 rounded-full green-btn">
                  <span class="tag-circle">&#9679;</span> tag no. 2
                </button>
              </div>
              <div class="flex">
                <img src="../assets/clock-solid.svg" />
                <span class="px-3">08:00 - 09:00</span>
              </div>
              <div class="flex">
                <img src="../assets/user-solid.svg" />
                <span class="px-3">Alicia Herbert, Naomi Rayne... </span>
              </div>
              <div class="px-2 py-4">
                <button class="recording-btn">View recording</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped lang="postcss">
* {
  color: #202020;
}
.title-section {
  position: relative;
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
.star-speaker {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  @apply h-8 w-8;
}
.speaker-image {
  border: 2px solid #4c28b5;
  @apply rounded-full;
  @apply m-auto;
  @apply w-20;
}
.about-speaker,
.contact-speaker {
  text-align: left;
  @apply py-2;
}
.session-title {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
}
.session-title::before {
  content: "";
  background: linear-gradient(to right, #dbd4f0, #dbd4f0, #dbd4f0);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.session-title::after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;

  padding: 0 0.5em;
  line-height: 1.5em;
  color: #4c28b5;
  background-color: #fcfcfa;
  font-family: Segoe-UI-bold;
  font-size: 1.125rem;
}
.sessions-speaker .session {
  border-radius: 15px;
  background-color: #f6f6f6;
  text-align: left;
  @apply p-4;
}
.star-session {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  @apply h-7 w-7;
}
.tag-circle {
  color: white;
  font-size: 0.6rem;
  vertical-align: top;
}
.purple-btn {
  background-color: #4c28b5;
  color: white;
}
.green-btn {
  background-color: #1aaa4a;
  color: white;
}
.recording-btn {
  border-radius: 5px;
  background-color: #4c28b5;
  color: white;
  width: 100%;
  font-family: Segoe-UI-bold;
  @apply text-lg;
  @apply py-2;
}
.recording-btn:hover {
  background-color: #341492;
}
</style>
