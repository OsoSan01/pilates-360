import React from "react";
import {Alert, Form, Input, Button, Typography} from 'antd' //always rememeber to import whatever will be used from antd
import { Link } from "react-router-dom";


export default function Login () {

    const onFinish = (values) => {
        console.log('Received values of form', values)
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