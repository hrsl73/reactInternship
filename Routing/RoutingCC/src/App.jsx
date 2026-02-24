import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import GetStarted from './components/GetStarted/GetStarted'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/getstarted" element={<GetStarted />}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App