import { typesLogin } from "../types/types"

const initialState={
    users:{}
}
export const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                user: action.payload
            }
        case typesLogin.register:
            return {
                user: action.payload
            }

        case typesLogin.getOut:
            return {

            }

        default:
            return state

    }

}