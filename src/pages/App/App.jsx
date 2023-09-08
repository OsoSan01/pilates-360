import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Button, Space } from 'antd'; way to have buttons and stuff from ant
import Login from '../LogInPage/LogInPage';
import Register from '../RegisterPage/RegisterPage';

export default function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/> 
        {/* path for www.pilatesblahblah.com/login for instance. This will render whatever the log in is */}
        {/* also, what it's passing inside the element is the actual component */}
        <Route path='/register' element={<Register/>}/>
        {/* path for www.pilatesblahblah.com/register for instance. Will render whatever the register is*/}


      </Routes>
    </div>
  );
}
