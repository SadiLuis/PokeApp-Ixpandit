import { typePokemon } from "../types/types"

const initialState = {
    commentData: []
}

export const pokemonCommentReducers = (state = initialState, action) => {
    switch (action.type) {
        case typePokemon.add:
            return {
                commentData: [...state.commentData, action.payload]
            }
        case typePokemon.delete:
            return {
                commentData: state.commentData.filter(c => c.id !== action.payload)
            }
        case typePokemon.list:
            return {
                commentData: [...action.payload]
            }
        case typePokemon.edit:
                return {
                  ...state
            }
        default:
            return state
    }

}