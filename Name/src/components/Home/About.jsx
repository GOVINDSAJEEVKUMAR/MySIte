import React from 'react'
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <section className="container text-center ">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white !leading-tight">
            Hello, Im <span className="text-primary">GOVIND</span> <br /> MernStack Developer
         </h2>
         <p className="text-white max-w-lg mx-auto text-lg mt-8">FrontEnd Developer</p>

         <div className="flex gap-8 items-center justify-center mt-10">
               <Link to="/project">
            <button className="btn-primary" >
               Recent Works
            </button></Link>
            <button className="btn-secondary" href="#">
               Get My CV
            </button>      
         </div>
      </section>
  )
}
