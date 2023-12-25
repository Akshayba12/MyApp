import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Contacts from './components/contacts'
import Dashboard from './screen/Dashboard'
import Debounce from './components/Debounce'

const LazyLoad = React.lazy(() => import('./components/About'))

function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Dashboard />}  />
        <Route path="/home" element={<Home />}  />
        <Route path="/about" element={<LazyLoad />}  />
        <Route path="/contact" element={<Contacts />}  />
        <Route path="/deb" element={<Debounce />}  />
       </Routes>
    </BrowserRouter>
  )
}

export default App
