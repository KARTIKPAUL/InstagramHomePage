import Signup from './Components/Signup'
import React from 'react'
import {BrowserRouter,Route , Routes} from 'react-router-dom'
import Login from './Components/Login'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
