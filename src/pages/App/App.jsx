import React from 'react';
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';
import Login from '../../components/LogInForm/LogInForm';
import Register from '../../components/RegisterForm';
import Home from '../HomePage/HomePage';


export default function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <div className='App'>
    < Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<Login/>}/> 
        {/* path for www.pilatesblahblah.com/login for instance. This will render whatever the log in is */}
        {/* also, what it's passing inside the element is the actual component */}
        <Route path='/register' element={<Register/>}/>
        {/* path for www.pilatesblahblah.com/register for instance. Will render whatever the register is*/}
        <Route path='/' element={<Home/>}/>


      </Routes>
    </div>
  );
}
