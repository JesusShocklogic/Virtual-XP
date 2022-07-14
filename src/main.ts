import 'vite/modulepreload-polyfill'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3TouchEvents from 'vue3-touch-events'
import "./main.css"
import { store } from "./store";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
    onOfflineReady() {},
    onRegistered(r) {
        console.log('Registering')
        r && setInterval(() => {
            console.log("Updating");
            r.update()
        }, 90 * 1000)
    }
})

createApp(App).use(router).use(store).use(Vue3TouchEvents).mount('#app')
