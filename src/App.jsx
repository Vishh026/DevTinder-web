import { BrowserRouter, Outlet } from 'react-router-dom'
import MainRoutes from './components/MainRoutes'
import Navbar from './components/Navbar'
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
  )
}

export default App
