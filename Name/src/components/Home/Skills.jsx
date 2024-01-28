import React from 'react'

export default function Skills() {

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
        
    ]
  return (
    <section className="container relative">
         <h2 className="mb-10 section-text">My Skills</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {skills.map((skill) => (
               <div key={skill.id} className="p-6 bg-[#333333] rounded-lg hover:ring-2 hover:ring-blue-500 transition ease-in-out duration-300">
                  <img className="w-14 mb-4" src={skill.image} />
                  <h3 className="text-white text-2xl font-medium">{skill.title}</h3>
                  <p className="text-gray-400 mt-4">{skill.desc}</p>
               </div>
            ))}
         </div>

         <div className="relative w-full max-w-lg mx-auto -z-10 ">
            <div className="absolute top-8 -left-4 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl animate-blob opacity-30 animation-delay-3000"></div>
            <div className="absolute top-0 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob opacity-30"></div>
            <div className="absolute top-16 -right-4  w-56 h-56  bg-pink-400 rounded-full filter blur-3xl animate-blob opacity-30 animation-delay-5000"></div>
         </div>
      </section>
  )
}
