import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
  } from 'antd';
  
  import { useDispatch } from 'react-redux';
  
 
import { registerUserAsync } from '../redux/actiones/actionLogin';
 
 
  const { Option } = Select;
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  export const Register = () => {
    
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const onFinish = (values) => {
     
      console.log('Received values of form: ', values);
      dispatch(registerUserAsync(values.nickname, values.email, values.confirm,values.phone))
     
      
      
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="57">+57</Option>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
   
    
   
    
    
    return (
      <div style={{textAlign:"center", color:"white"}}>
       
       <h1 style={{marginLeft:"15vw",fontFamily:"monospace", color:"white"}}>Fill In Your Details</h1>
      <Form
        {...formItemLayout}
        form={form}
        style={{width:"50vw", marginRight:"auto",marginLeft:"auto",marginTop:"20px"}}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="Correo"
          rules={[
            {
              type: 'email',
              message: 'El correo ingresado no es correcto!',
            },
            {
              required: true,
              message: 'Porfavor ingrese un correo valido!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Porfavor ingrese su contraseña!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="Confirme su contraseña"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Porfavor confirme su contraseña!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('Las contraseñas no son las mismas!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="nickname"
          label="Usuario"
          tooltip="Como será tu apodo?"
          rules={[
            {
              required: true,
              message: 'Porfavor ingrese su nombre de usuario!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="phone"
          label="Número de Telefono"
          rules={[
            {
              required: true,
              message: 'Porfavor ingrese su numero de telefono!',
            },
          ]}
        >
          <Input
           
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
          
  
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los acuerdos')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Leí los <a href="">acuerdos</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        
          <Button type="primary" htmlType="submit" >
            Registrarse
          </Button>
         
        </Form.Item>
      </Form>
      </div>
    );
  };