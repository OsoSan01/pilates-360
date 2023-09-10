import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from '../HomePage/HomePage';
import Login from '../LogInPage/LogInPage';
import Register from '../RegisterPage/RegisterPage';

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
        {/* path for home page after login */}


      </Routes>
    </div>
  );
}
