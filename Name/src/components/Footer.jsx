import React from 'react';
import { FaLinkedin,FaGithub,FaInstagram,FaWhatsapp } from "react-icons/fa";

function Footer() {
	return (
		<div className="p-3  text-center text-gray-300 rounded-t-lg bg-[#333333]/90 backdrop-blur-sm shadow  z-50" >
			<a href="#hero" className="block text-xl md:text-2xl font-semibold ">
				GOVIND S KUMAR
			</a>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				govindsajeev2001.com
			</a>
			
			<div className=' flex flex-row gap-96  px-7 items-center  '>
				<FaLinkedin size={36} className='hover:text-blue-500 text-xl font-serif transition-all cursor-pointer'/>
				<FaGithub size={36} className='hover:text-black text-xl font-serif transition-all cursor-pointer'/>
				<FaInstagram size={36} className='hover:text-red-400 text-xl font-serif transition-all cursor-pointer'/>
				<FaWhatsapp size={36} className='hover:text-green-500 text-xl font-serif transition-all cursor-pointer'/>
			</div>
			
			
		</div>
	);
}

export default Footer;
