import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3TouchEvents from 'vue3-touch-events'
import "./main.css"
import { store } from "./store";

createApp(App).use(router).use(store).use(Vue3TouchEvents).mount('#app')
