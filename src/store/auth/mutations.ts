import {AuthenticationState, Credentials} from "./index";

export const setCredentials = (state: AuthenticationState, { id, email }: Credentials) => {
    state.email = email
    state.id = id
}