import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram,FaWhatsapp } from "react-icons/fa";



export default function Abouts() {
   const skills = [
      {
         title: "Web Developer",
         image: "https://cdn-icons-png.flaticon.com/128/13540/13540845.png",
         desc: "Handle both front-end and back-end development to create end-to-end solutions.",
      },
      {
         title: "Mobile Web Developer",
         image: "https://cdn-icons-png.flaticon.com/128/9495/9495803.png",
         desc: "Familiarize yourself with the developer tools provided by mobile browsers for debugging and optimizing your websites.",
      },
      // {
      //    title: "Web Designer",
      //    image: "https://cdn-icons-png.flaticon.com/128/11524/11524065.png",
      //    desc: "At vero eos accusaus dignisimos ducimuse qui blanditiis praesentium voluptatue",
      // },
  ]
  return (
   <div className='Abouts'>
    <div className="container h-screen flex items-center justify-center mt-24 md:mt-0">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img className=' py-16 px-10 h-3/4' src="https://i.ibb.co/7gFkfHt/folio.jpg" alt="" />
            <div>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white !leading-tight">Govind S Kumar</h1>
               <p className="text-white mt-8 tracking-wide text-lg leading-relaxed">
                  Hello, my name is Govind S Kumar, I am a Front End Developer and UI Designer, I am used to making projects with React JS and Tailwind CSS, I use git as version control and github to store my project source code.
               </p>
               <p className="text-white mt-4 tracking-wide text-lg leading-relaxed">I'm a graduate of Software Developemnt and System Administarrtion  and I`m looking for a job as a Front End Developer in a company.</p>

               <div className=' py-16 flex flex-row gap-32'>
               {/* <div className=' flex flex-row gap-96  px-7 items-center  '> */}
				<FaLinkedin size={36} className='hover:text-gray-500 text-xl font-serif transition-all cursor-pointer'/>
				<FaGithub size={36} className='hover:text-gray-500 text-xl font-serif transition-all cursor-pointer'/>
				<FaInstagram size={36} className='hover:text-gray-500 text-xl font-serif transition-all cursor-pointer'/>
				<FaWhatsapp size={36} className='hover:text-gray-500 text-xl font-serif transition-all cursor-pointer'/>
			
               </div>
            </div>
         </div>
      </div>

     

      </div>
  )
}
