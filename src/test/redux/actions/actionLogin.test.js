import { actionLoginSync, actionLogoutSyn, registerUserSync } from "../../../redux/actiones/actionLogin"
import { typesLogin } from "../../../redux/types/types"

describe('Verificar acciones de Login', ()=>{
    test('validar login sincronico',()=>{
        const email = 'melisamendozamogolln@gmail.com'
        const password ='12345678'
        const loginAction= actionLoginSync(email,password)
        expect(loginAction).toEqual({
            type:typesLogin.login,
            payload:{
                email,
                password
            }
        })
    })
    
})
describe('Verificar acciones de LogoUt', ()=>{
    test ('accion de cerrar sesión',()=>{
        
        const logoutAction=actionLogoutSyn();
        expect (logoutAction).toEqual({
            type:typesLogin.getOut
           
        })
    })
})
describe('Verificar acciones de register', ()=>{
    test ('validar register sincronico',()=>{
        const nickname= "melisa"
        const email="melisamendozamogollon@gmail.com" 
        const confirm="12345678"
        const phone="3206675848"
        const registerAction= registerUserSync
         (nickname,email, confirm,phone)
        expect(registerAction).toEqual({
            type:typesLogin.register,
            payload:{
                nickname,
                email, 
                confirm,
                phone
            }
        })
    })
})