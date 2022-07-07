import {NavigationGuardWithThis} from "vue-router";
import { store } from "../../store"

export const requiresLogin: NavigationGuardWithThis<undefined> = () => {
    console.log(store.state.authModule)
    if (!store.state.authModule.email || !store.state.authModule.id)
        return { name: 'Login' }
}