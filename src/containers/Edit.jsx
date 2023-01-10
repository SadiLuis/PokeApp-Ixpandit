import React, { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea';
import { editCommentAsync } from '../redux/actiones/pokemonComment';
import { useDispatch,useSelector } from 'react-redux'
import { Modal } from 'antd';
export const Edit = ({data}) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value,setValue]=useState()
    const dispatch=useDispatch()
    const {commentData } = useSelector(store => store.pokemonCommentStore)
    const handleCancel = () => {
        setIsModalVisible(false);
    };
   
    
    const handleInputChange = (target) => {
        console.log(target.target.defaultValue)
      setValue(target.target.defaultValue)  
       }
    console.log(data)
  const dataDetail=commentData.find((l)=>l.id==data)
  console.log(dataDetail)
    const formValue = {
      id:dataDetail.id,
      name:dataDetail.name,
      color:dataDetail.color,
      generation:dataDetail.generation,
      comment:value,
      image:dataDetail.image
     }
    console.log(formValue)
     const handleOk = () => {
      dispatch (editCommentAsync(formValue))
      setIsModalVisible(false);
     
  };
  
  return (
   
    <div>
         <>
      
      <Modal style={{textAlign:"center"}} title="Evoluciona!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Editar comentario</p>
        
     
        <TextArea rows={4} placeholder="100 caracteres maximo!" maxLength={100} onChange={handleInputChange} />
        
      </Modal>
    </>
    </div>
  )
}
