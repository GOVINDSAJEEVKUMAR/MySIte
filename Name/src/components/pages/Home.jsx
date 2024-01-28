import React from 'react'
import About from "../Home/About"
import Mypage from '../Home/Mypage'
import Portfolio from '../ProjectPage/Project'
import Skills from '../Home/Skills'


export default function Home() {
  return (
    <div>
     <Mypage/>
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  )
}
