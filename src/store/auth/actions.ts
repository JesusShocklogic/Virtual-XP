import {ActionContext} from "vuex";
import {AuthenticationState} from "./index";
import {StoreState} from "../index";
import * as api from "../../api/auth";

type AuthActionContext = ActionContext<AuthenticationState, StoreState>
type LogInResult = { id: number, email: string }

export type UserCredentials = {
    email: string
    password: string
}
export const login = async (context: AuthActionContext, { email, password }: UserCredentials): Promise<LogInResult> => {
    const loginResult = await api.login({ email, password })

    if ("message" in loginResult) throw new Error(loginResult.message)

    const authPayload = { email: loginResult.email, id: loginResult.personId }

    context.commit('setCredentials', authPayload)

    return authPayload
}
export const logout = async (context: AuthActionContext) => {
    const logoutResult = await api.logout();

    if (!logoutResult) throw new Error("Logout unsuccessful")

    context.commit('setCredentials', { email: null, id: null })
}