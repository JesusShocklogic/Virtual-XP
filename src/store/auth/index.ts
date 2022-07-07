import {Module} from "vuex";
import {StoreState} from "../index";
import {getEmail, getId} from "./getters";
import {setCredentials} from "./mutations";
import {login, logout} from "./actions";

export type Credentials = {
    id: number
    email: string
}
export type AuthenticationState = Partial<Credentials>

export const authModule: Module<AuthenticationState, StoreState> = {
    namespaced: true,
    getters: {
        getId,
        getEmail
    },
    mutations: {
        setCredentials
    },
    actions: {
        login,
        logout
    }
}