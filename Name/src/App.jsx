import React from 'react'
import Navbar from './components/Navbar'
import Page from "./components/Home/Mypage"
import About from './components/Home/About'
import Portfolio from './components/Home/Portfolio'
import Skills from './components/Home/Skills'
import Footer from './components/Footer'
import Connect from './components/Router/Connect'
import Abouts from './components/About/Abouts'
import Project from "./components/ProjectPage/Project"
import Contact from './components/Contact/contact'
// import { Route } from 'react-router-dom'
import Home from './components/pages/Home'
import { Route,Routes,Router } from 'react-router-dom'
// import Mypage from './components/Home/Mypage'


const App = () => {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route  path=''element={<Home/>}/>
      <Route path='/abouts'element={<Abouts/>}/>
      <Route path='/project'element={<Project/>}/>
      <Route path="/contact"element={<Contact/>}/>
    </Routes>
   
  </div>
    
   
    
  )
}

export default App
