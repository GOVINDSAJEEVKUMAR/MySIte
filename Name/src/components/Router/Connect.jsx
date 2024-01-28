import React from 'react'
import Home from '../pages/Home'
import Abouts from '../pages/About'
import { Route,Routes } from 'react-router-dom'

export default function Connect() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/abouts'element={<Abouts/>}/>
      </Routes>
    </div>
  )
}
