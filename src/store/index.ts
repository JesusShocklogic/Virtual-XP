import {createStore} from "vuex";
import {AuthenticationState, authModule} from "./auth";

export type StoreState = {
    auth: AuthenticationState
}

export const store = createStore<StoreState>({
    modules: {
        authModule
    }
})