import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { addCommentAsync, deleteCommentAsync, editCommentAsync } from "../../../redux/actiones/pokemonComment";



const middlewares=[thunk]
const mockStore=configureStore(middlewares)
const initialState={
    login:{
        id:'TESTING'
    }
};
let store=mockStore(initialState)
describe ('pruebas con las acciones de los comentarios de Pokemon',()=>{
    beforeEach(()=>{
        store=mockStore(initialState)
    })
    test('crear comentario',async()=>{
        await store.dispatch(addCommentAsync({
            id:12,
            name:"ABC",
            color:"ABC",
            generation:"ABC",
            comment:"ABC",
            image:"ABC",
        }))
        const actions=store.getActions()
    })
   
})

describe ('pruebas con las acciones de los comentarios de Pokemon',()=>{
    beforeEach(()=>{
        store=mockStore(initialState)
    })
    test('Borrar comentario',()=>{
    store.dispatch(deleteCommentAsync({
            id:12,
            name:"ABC",
            color:"ABC",
            generation:"ABC",
            comment:"ABC",
            image:"ABC",
        }))
        const actions=store.getActions()
    })
   
})