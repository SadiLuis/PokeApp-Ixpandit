import React from 'react'
import { Breadcrumb } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { FooterH } from '../styles/CardStyles';
import { DatabaseOutlined } from '@ant-design/icons';
import { actionLogoutAsyn } from '../redux/actiones/actionLogin';
import { useDispatch } from 'react-redux';

export const FooterHome = () => {
  const navigate = useNavigate()
  const handleReturn =()=>{
    navigate(-1)

}
const dispatch=useDispatch()
  return (
    <FooterH>
      <Breadcrumb  style={{alignItems:"center",textAlign:"center",justifyContent:"center"}}>
        <Link to="/" style={{marginLeft:"15px"}}>
        <Breadcrumb.Item  href="">
          <img style={{width:"4em"}} src="https://th.bing.com/th/id/OIP.fG4YBTceGoFjihGnSytQXwHaD4?pid=ImgDet&rs=1" alt="" srcset="" />
        </Breadcrumb.Item>
        </Link>
        <Link to="/search" style={{marginLeft:"15px"}}>
        <Breadcrumb.Item href="">
         <img style={{width:"2em"}} src="https://th.bing.com/th/id/R.34f3f3420bb165594ebd7a83dc769905?rik=IblMZKG7qdPC2g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_588.png&ehk=AtPYPfnEvR%2fGMFfZ2RTWlKqLtTjS7CNEJmA3y8QMjyU%3d&risl=&pid=ImgRaw&r=0"/>
        </Breadcrumb.Item>
        </Link>
        <Link to=""  onClick={handleReturn} style={{marginLeft:"15px"}}>
        <Breadcrumb.Item  >
        <img style={{width:"2em"}} src="https://th.bing.com/th/id/OIP.wugtefsag8dDPmn25JxDZQHaGb?pid=ImgDet&rs=1"/>
        </Breadcrumb.Item>
        </Link>
        <Link to="/comments">
        <Breadcrumb.Item> 
           <DatabaseOutlined style={{marginLeft:"20px"}} />
          </Breadcrumb.Item>
        </Link>
        <Link onClick={() => dispatch(actionLogoutAsyn())} style={{marginLeft:"15px"}}>
        <Breadcrumb.Item>
        <img style={{width:"2em"}} src="https://th.bing.com/th/id/OIP.Ntcbhg46KfXZ6u5KNFqgqwHaHa?pid=ImgDet&rs=1"/>
        </Breadcrumb.Item>
        </Link>
      </Breadcrumb>
      </FooterH>
  )
}