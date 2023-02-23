import './App.css'
import Login from './components/login';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import Userpage from './Userpage';
import Signup from './components/signup';

function App() {
  // const [login, setState] = useState[false]

  return (  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<Userpage/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
