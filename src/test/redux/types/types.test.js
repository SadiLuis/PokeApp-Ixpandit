import '@testing-library/jest-dom';
import { typePokemon, typesLogin } from '../../../redux/types/types';
describe('verificar types de Login ',()=>{
    test('comparar objetps',()=>{
        expect(typesLogin).toEqual({
            login: '[Login] login',
            getOut:'get Out',
            register: 'register User',
        })

    })
})

describe('verificar types del CRUD ',()=>{
    test('comparar objetps',()=>{
        expect(typePokemon).toEqual({
            add:'add comment of a pokemon',
            delete: 'Delete comment of a pokemon',
             edit:'Edit comment of a pokemon',
             list:'list pokemon comments'
        })

    })
})