import { Button, Checkbox, Form, Image, Input } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLoginAsync, GoogleLogin } from '../redux/actiones/actionLogin';

export const SingIn = () => {

    const dispatch = useDispatch()

  const onFinish = (values="") => {
    console.log('Success:', values);
    dispatch(actionLoginAsync(values.email, values.password))
   
  };

  const onFinishFailed = (errorInfo= "") => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div >
      
   
    <Form
      style={{width:"50vw",textAlign:"center", marginRight:"auto",marginLeft:"auto",marginTop:"20%"}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
     
        label="Correo"
        name="email"
       
        rules={[{ required: true, message: 'Porfavor ingrese su correo!' }]}
      >
        <Input />
      </Form.Item >

      <Form.Item
        
        label="Contraseña"
        name="password"
       
        rules={[{ required: true, message: 'Porfavor ingrese su contraseña!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox style={{color:"black"}}>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button   style={{backgroundColor:"#2CE6E5",width:"30vw",borderRadius:"20px",color:"white"}}   htmlType="submit" >
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    <div style={{marginLeft:"52.5vw",}}>
      <Button type="submit" variant="outline-info" style={{ backgroundColor:"#1F233E",contain:"content",borderRadius:"100%",width:"50px",height:"50px"}} onClick={()=> dispatch(GoogleLogin())}  >
        <Image src="https://res.cloudinary.com/danimel/image/upload/v1655397953/google_ywov5r.png" alt="" />
      </Button>

      <Button type="submit" variant="outline-info" style={{ marginLeft:"5px",backgroundColor:"#1F233E",contain:"content",borderRadius:"100%",width:"50px",height:"50px"}}>
        <Image src="https://res.cloudinary.com/danimel/image/upload/v1655397954/facebook_emylt7.png" alt="" />
      </Button>
      <Link to="/register">
      <Button style={{backgroundColor:"#2CE6E5", borderRadius:"20px", color:"white", marginLeft:"50px", }} >Registro</Button>
      </Link>
      </div>
    </div>
  )
}
