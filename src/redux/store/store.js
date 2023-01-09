import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducer";
import { pokemonCommentReducers } from "../reducers/pokemonCommentReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
        loginStore: loginReducers,
        pokemonCommentStore: pokemonCommentReducers
        

})

export const store = createStore(
    reducers,
   composeEnhancers(
    applyMiddleware(thunk)
   )
)
