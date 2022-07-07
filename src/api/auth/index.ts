import {UserCredentials} from "../../store/auth/actions";

const apiBaseUrl = import.meta.env.VITE_API_BASE

export type ErrorResult = { message: string }
export type SuccessResult = { personId: number, email: string }

type LoginResult = SuccessResult | ErrorResult
type RegisterResult = string | ErrorResult

type UserInformation = {
    name: string
    lastname: string
    email: string
    password: string
}

export const login = (credentials: UserCredentials): Promise<LoginResult> => {
    return fetch(`${apiBaseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
}

export const logout = (): Promise<boolean> => {
    return fetch(`${apiBaseUrl}/auth/logout`, { method: "POST" })
        .then(response => response.ok)
}

export const register = (information: UserInformation): Promise<RegisterResult> => {
    return fetch(`${apiBaseUrl}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(information)
        })
        .then(response => response.json())
}