import React from "react";
import {Form, Input, Button} from 'antd' //always rememeber to import whatever will be used from antd
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";



export default function Login() {
  //hook to redirect after succesfull login
    const navigate = useNavigate
    const onFinish = async (values) => {
      try {
        const response = await axios.post('/api/users/login', values);
        if (response.data.success) {
            toast.success(response.data.message); //rendering success register message
            toast('Redirecting to Home Page') //rendering redirect message
            localStorage.setItem('token', response.data.data);
            navigate('/'); //redirect to homepage after successful login
        }else {
            toast.error(response.data.message); //rendering not success register message
        }
    } catch(error) {
      console.log('wtf is happening')
        toast.error('Is this the error??.')
    }
}

    return (
      <div className="register">
        <div className="register-form card p-4">
         <img className='brand mb-4' src='https://pilates360.com.au/wp-content/uploads/2021/04/300px-p360-black-no-text.png'/>
            <h1 className="card-title">WELCOME BACK</h1>
          <Form layout='vertical' autoComplete="on" onFinish={onFinish}>
            <Form.Item label='Email' name='email' rules={[{ required: true, type: 'email' }]} >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label='Password' name='password' rules={[{ required: true }]} >
                <Input placeholder="Password" type='password' />
            </Form.Item>
            <div>
            <Button className='primary-button mt-4 mb-3' htmlType="submit" >LOG IN!</Button>
            <Link className="anchor" to="/register">NOT A MEMEBER? REGISTER HERE!</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  };