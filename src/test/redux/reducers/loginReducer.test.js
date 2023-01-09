import '@testing-library/jest-dom'

import { loginReducers } from '../../../redux/reducers/loginReducer';
import { typesLogin } from '../../../redux/types/types';


describe('prueba en LoginReducer',()=>{
    test('debe realizar el login',()=>{
        const initState={};
      
        const action={
            type:typesLogin.login,
            payload: {
             email:"camila@hotmail.com",
             password:12345678
            }
        }
        const state=loginReducers(initState,action);
        expect(state).toEqual({user:{
            email:"camila@hotmail.com",
            password:12345678
        }})
    })
})

test('Cerrar sesión ',()=>{
    const initialState={
        email:"camila@hotmail.com",
        password:12345678
    }
    const action={
        type:typesLogin.getOut,
    }
    const state=loginReducers(initialState,action)
    expect(state).toEqual({})
})
 test('estado por defecto',()=>{
    const initialState={
        email:"camila@hotmail.com",
        password:12345678
    }
    const action ={
        type:typesLogin.nada,
    }
    const state =loginReducers(initialState,action)
    expect(state).toBe(initialState)
 })