import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <section className="container">
         <h2 className="section-text mb-10">My Portfolio</h2>

         <div className="grid gap-8">
            
               <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-auto px-10">
                  <img className="w-full h-full rounded-3xl " src="https://i.pinimg.com/originals/76/6d/59/766d596c4baa6e13e2b8d8fab27941d2.gif" alt="" />
                  <div className="absolute bg-gradient-to-t from-black inset-0 flex flex-col p-6 md:p-10 items-start justify-end opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                     <h3 className="text-white font-semibold text-2xl md:text-4xl">HELLO</h3>
                     <p className="text-white mt-4">GOOD mORNING</p>
                  </div>
               </div>
           
         </div>
         <div className="flex justify-center">
            <button className="btn-primary mt-10" href="../componets/About/Abouts">
               Read More
            </button>
         </div>
      </section>
  )
}
