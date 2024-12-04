import React from 'react'
import ImageApp from './Components/ImageApp'
import CounterApp from './Components/CounterApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/counterapp' element={<CounterApp />} />
          <Route path='/imageapp' element={<ImageApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App