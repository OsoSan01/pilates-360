import React from "react";
import {Alert, Form, Input, Button, Typography} from 'antd' //always rememeber to import whatever will be used from antd
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';




export default function Register () {
    
    //adding a hook for after the registration
    const navigate = useNavigate();
    //connection the api here
    const onFinish = async(values) => {
        try {
            const response = await axios.post('/api/users/register', values);
            if (response.data.success)
            {
                toast.success(response.data.message); //rendering success register message
                toast('Redirecting to Login Page') //rendering redirect message
                navigate('/login'); //redirect to login page after successful register
            }else {
                toast.error(response.data.message); //rendering not success register message
            }
        } catch(error) {
            toast.error('Something went wrong. Please try again.')
        }
    }

    const [form] = Form.useForm();

    return (
      <div className="register">
        <div className="register-form card p-4">
        <img className='brand mb-4' src='https://pilates360.com.au/wp-content/uploads/2021/04/300px-p360-black-no-text.png'/>
            <h1 className="card-title">Nice to meet you!</h1>
          <Form form={form} layout='vertical' autoComplete="off" onFinish={onFinish} name='dependencies'>
            <Form.Item label='Name' name='name' rules={[{ required: true }]}>
                <Input placeholder='Name'  />
            </Form.Item>
            <Form.Item label='Email' name='email' rules={[{ required: true, type: 'email' }]} >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label='Password' name='password' rules={[{ required: true }]} >
                <Input placeholder="Password" type='password' />
            </Form.Item>
            <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input placeholder="Confirm Password" type='password' />
      </Form.Item>
            <div>
            <Button className='primary-button mt-4 mb-3' htmlType="submit" >SIGN UP!</Button>
            <Link className="anchor" to="/login">CLICK HERE TO LOG IN</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  };