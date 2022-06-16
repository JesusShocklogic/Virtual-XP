<script setup lang="ts">
import { computed } from "vue";

type Props = {
    toggled: boolean
}

const props = defineProps<Props>(),
      emit = defineEmits<{ (e: 'hide'): void }>(),
      isToggled = computed(() => props.toggled),
      hide = () => emit('hide')
</script>

<template>
    <transition name="slide-sidebar">
        <div v-if="isToggled" class="sidebar">
            <div class="sidebar-content">
                <div class="header">
                    <img src="../assets/logoipsum-logo-30-white.svg" class="enterprise-img" />
                    <img src="../assets/business-man-profile-vector.jpg" class="profile-img" />
                </div>
                <div class="items">
                    <div class="item">
                        <img class="item-icon" src="../assets/broadcast-tower-solid.svg"/>
                        Live now
                    </div>
                    <div class="item">
                        <img class="item-icon" src="../assets/calendar-alt-solid.svg"/>
                        Programme
                    </div>
                    <div class="item">
                        <img class="item-icon" src="../assets/users-solid.svg"/>
                        Stages
                    </div>
                    <div class="item">
                        <img class="item-icon" src="../assets/concierge-bell-solid.svg"/>
                        Speakers
                    </div>
                    <div class="item">
                        <img class="item-icon" src="../assets/store-solid.svg"/>
                        Exhibition
                    </div>
                    <div class="item">
                        <img class="item-icon" src="../assets/network-wired-solid.svg"/>
                        Networking
                    </div>
                    <div class="item-logout">
                        <img class="item-icon" src="../assets/sign-out-alt-solid.svg"/>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    </transition>
    <transition name="backdrop-appear">
        <div v-if="isToggled" @click="hide()" class="backdrop"></div>
    </transition>
</template>

<style lang="postcss">
    .slide-sidebar-enter-active {
        animation: slideRight 400ms ease-out;
    }
    .slide-sidebar-leave-active {
        animation: slideRight 400ms ease-in reverse ;
    }
    .backdrop-appear-enter-active {
        animation: fadeIn 400ms ease-out;
    }
    .backdrop-appear-leave-active {
        animation: fadeIn 400ms ease-in reverse;
    }
    @keyframes slideRight {
        0% {
            transform: translateX(-100%);
        } 
        100% {
            transform: translateX(0);
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        } 
        100% {
            opacity: 1;
        }
    }
    .sidebar {
        @apply absolute top-0 left-0 bottom-0 bg-main z-50 w-5/6 py-4 text-white shadow-lg;
    }
    .sidebar .sidebar-content {
        @apply flex flex-col h-full;
    }
    .sidebar-content .items {
        @apply flex-auto pt-6 flex flex-col gap-y-2;
    }
    .sidebar-content .header {
        @apply flex flex-row justify-between py-2 px-6;
    }
    .items .item {
        @apply flex flex-row justify-start items-center gap-x-4 px-6 py-3 prose-normal-text hover:bg-white hover:bg-opacity-10;
    }
    .items .item-logout {
        @apply flex flex-row mt-auto justify-start items-center gap-x-4 px-6 py-3 prose-normal-text hover:bg-white hover:bg-opacity-10;
    }
    .items .item .item-icon, .items .item-logout .item-icon {
        width: 30px;
        height: 30px;
    }
    .header .enterprise-img {
        @apply self-center;
        width: 125px;
    }
    .header .profile-img {
        @apply self-center;
        height: 32px;
        width: 32px;
        clip-path: circle(50%);
    }
    .backdrop {
        @apply absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 z-40;
    }
</style>
