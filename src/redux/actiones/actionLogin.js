import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../fireBase/fireBaseConfig"
import { typesLogin } from "../types/types"

export const actionLoginSync=(email,password)=>{
    return{
        type:typesLogin.login,
        payload:{email,password}
    }
}
export const actionLoginAsync = (email,password) =>{
    return (dispatch) =>{
       

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email,password)
        .then(({user})=>{
            dispatch(actionLoginSync(email,password))
            console.log(user.displayName, 'Bienvenido usuario encontrado')
            sessionStorage.setItem('name',user.displayName)
            sessionStorage.setItem('email',email)
        })
        .catch(error=>{
           alert("Usuario y/o contraseña incorrectos")
        })

    }
}
export const GoogleLogin = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            console.log(user, user.displayName, user.email, "Usuario Autorizado")
            // dispatch(registerUserSync(user.displayName, user.email ))
            sessionStorage.setItem('name',user.displayName,)
        })
        .catch((error)=>{
            console.warn(error)

        })
    }
}

export const actionLogoutAsyn = ()=>{
   return (dispatch)=>{
       const auth = getAuth();
       signOut(auth)
       .then(({user})=>{
           dispatch(actionLogoutSyn())
           console.log(user,'Chao')
       })
       .catch((error)=>{console.warn(error, '')});
   }
}


export const actionLogoutSyn = ()=>{
   return {
       type: typesLogin.getOut
   }
}

export const registerUserAsync = (nickname, email,confirm,phone)=>{
    return (dispatch)=>{
        const auth = getAuth()
        
        console.log(auth)
        createUserWithEmailAndPassword( auth, email,confirm)
        .then(async({user})=> {
            await updateProfile(auth.currentUser, {displayName: nickname},{phoneNumber: phone})
            dispatch(registerUserSync(nickname, email,confirm,phone))
            console.log(user, 'Usuario Agregado')
        })
        .catch(error =>console.warn(error))

    }
}


export const registerUserSync = (nickname, email,confirm,phone) => {
 return {
    type: typesLogin.register,
    payload: {
        nickname, email,confirm,phone
   }
}
}