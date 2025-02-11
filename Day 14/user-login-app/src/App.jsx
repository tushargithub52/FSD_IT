import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import MainLayout from './components/MainLayout'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'

const App = () => {

  const [data, setData] = useState()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route path='/login' element={<Login regLogin={data} />} />
            <Route path='/register' element={<Register regData={setData} />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard regDash={data} />} />
          <Route path='/logout' element={<Logout regLogout={setData} />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App