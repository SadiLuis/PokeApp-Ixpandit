import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { pokemonComments } from "../../fireBase/fireBaseConfig"
import { typePokemon } from "../types/types"


export const addCommentAsync = (formValue) => {
    return async (dispatch)=>{
        addDoc(collection(pokemonComments, "pokemon"), formValue)
        .then(resp => dispatch(addCommentSync(formValue)))
        .catch(error => console.warn(error))

    }
}
export const addCommentSync = (formValue)=> {
    return {
        type: typePokemon,
        payload: formValue
    }
}


export const listCommentAsync =() => {
    return async (dispatch)=>{

        const collectionListar = await getDocs(collection(pokemonComments, "pokemon"))
        console.log(collectionListar)
        const commentA = []
        collectionListar.forEach(listar => {
            commentA.push(
                {
                    ...listar.data()
                }
            )
            
        })
       dispatch(listCommentSync(commentA)) 
    }
}

export const listCommentSync = (comments)=>{
       return {
        type: typePokemon.list,
        payload: comments
    }
}

export const deleteCommentAsync = (id)=>{
    return async (dispatch)=>{
        const collectionComments = collection(pokemonComments, "pokemon")
        const q = query(collectionComments, where("id", "==", id))

        const datosQ = await getDocs(q)
        

        datosQ.forEach(docu =>{
            deleteDoc(doc(pokemonComments, "pokemon", docu.id))
        })
        dispatch(DeleteCommentSync(id))

  
}}

export const DeleteCommentSync = (id) => {
    return {
        type: typePokemon.delete,
        payload:id
    }
}

export const editCommentAsync = (newComment)=>{
    return async (dispatch)=>{
        const collectionComments = collection(pokemonComments, "pokemon")
        const q = query(collectionComments, where("name", "==", newComment.name))
        const datosQ = await getDocs(q)
        let id = ''

        datosQ.forEach(async(docu)=>{
            id = docu.id
        })

        console.log(id)

        const docRef = doc(pokemonComments, "pokemon", id)

        await updateDoc(docRef, newComment)
        .then(resp =>{
            dispatch(editCommentSync(newComment))
            dispatch(listCommentSync())
        
        })
        .catch(error => console.log(error))

       
    }
}
export const editCommentSync = (newComment)=>{
    return {
        type: typePokemon.edit,
        payload: {newComment}

    }
}