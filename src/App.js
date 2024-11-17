import React from 'react'
import Home from './Home/Home.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Game from './Game/Game.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>  
    </Routes>
    </BrowserRouter>
  )
}

export default App