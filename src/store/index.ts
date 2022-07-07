import {createStore} from "vuex";
import {AuthenticationState, authModule} from "./auth";
import createPersistedState from "vuex-persistedstate"

export type StoreState = {
    authModule: AuthenticationState
}

export const store = createStore<StoreState>({
    modules: {
        authModule
    },
    plugins: [createPersistedState()]
})