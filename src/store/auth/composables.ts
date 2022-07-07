import {useStore} from "vuex";
import {StoreState} from "../index";
import {UserCredentials} from "./actions";

export const useAuthOperations = () => {
    const store = useStore<StoreState>()

    return {
        login: (credentials: UserCredentials) => store.dispatch("authModule/login", credentials),
        logout: () => store.dispatch("authModule/logout")
    }
}
export const useAuthInfo = () => {
    const store = useStore<StoreState>()

    return {
        id: store.state.authModule.id,
        email: store.state.authModule.email
    }
}