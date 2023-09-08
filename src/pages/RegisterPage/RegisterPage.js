import React from "react";
import {Form, Input, Button} from 'antd' //always rememeber to import whatever will be used from antd
import { Component } from 'react';
// import { signUp } from '../../utilities/users-service';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const {name, email, password} = this.state;
//       const formData = {name, email, password};
//       // The promise returned by the signUp service
//       // method will resolve to the user object included
//       // in the payload of the JSON Web Token (JWT)
//       const user = await signUp(formData);
//       this.props.setUser(user);
//     } catch {
//       // An error occurred
//       // Probably due to a duplicate email
//       this.setState({ error: 'Sign Up Failed - Try Again' });
//     }
//   };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="register">
        <div className="register-form card p-2">
            <h1 className="card-title">Nice to meet you!</h1>
          <Form layout='vertical' autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Item label='Name' name='name' >
                <Input placeholder='Name' value={this.state.name} onChange={this.handleChange} required />
            </Form.Item>
            <Form.Item label='Email' name='email' >
                <Input placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            </Form.Item>
            <Form.Item label='Password' name='password' >
                <Input placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            </Form.Item>
            <Form.Item label='Confirm' name='confirm' >
                <Input placeholder="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </Form.Item>
            <div>
            <Button type="submit" disabled={disable}>SIGN UP</Button>
            </div>
          </Form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}