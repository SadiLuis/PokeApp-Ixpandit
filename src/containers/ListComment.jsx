import { ClearOutlined, EditOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { actionLogoutAsyn } from '../redux/actiones/actionLogin';
import { deleteCommentAsync, listCommentAsync } from '../redux/actiones/pokemonComment';
import { Edit } from './Edit';

export const ListComment = () => {
  const dispatch=useDispatch()
  const [datos, setDatos] = useState([])
  const [modal, setModal] = useState(false)
 
      const {commentData } = useSelector(store => store.pokemonCommentStore)
      
      useEffect(()=>{
        dispatch(listCommentAsync())
    },[dispatch])
    const handleDelete = (id)=>{
      alert('vamos a eliminar el comentario')
      dispatch(deleteCommentAsync(id))

  }
  const handlerEditar=(id)=>{
    setDatos(id)
    setModal(true)
}
  return (
    <div>  
      <NavBar/>
         <List
    itemLayout="horizontal"
    dataSource={commentData}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={<a href="https://ant.design">{item.name}</a>}
        description={<article>{item.comment}</article>}
        />
        <Button onClick={()=>handleDelete(item.id)}><ClearOutlined/></Button>
       <Button onClick={()=>handlerEditar(item.id)}><EditOutlined /></Button> 
      </List.Item>
     )}
     />
   
     {
                modal === true ? <Edit data={datos} /> : ''
            }
    </div>
  )
}
