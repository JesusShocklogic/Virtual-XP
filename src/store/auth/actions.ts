import {ActionContext} from "vuex";
import {AuthenticationState} from "./index";
import {StoreState} from "../index";

type AuthActionContext = ActionContext<AuthenticationState, StoreState>
type LogInResult = { message: string } | { id: number, email: string }

export type UserCredentials = {
    email: string
    password: string
}
export const login = async (context: AuthActionContext, { email, password }: UserCredentials): Promise<LogInResult> => {
    context.commit('authModule/setCredentials', { email, id: 1234 })
    return { id: 1234, email: email }
}
export const logout = (context: AuthActionContext) => {
    context.commit('authModule/setCredentials', { email: null, id: null })
    return Promise.resolve(null)
}