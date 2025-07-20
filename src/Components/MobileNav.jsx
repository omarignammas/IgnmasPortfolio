import { github, Linkedin } from "../Assets";
import { useState } from "react";

export default function MobileNav() {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className="relative">
      {/* Navigation principale */}
      <div className='flex flex-1 font-normal backdrop-blur-xl opacity-85 rounded-full shadow-xl p-3 pt-2 pb-2 gap-2 text-md lg:gap-10 bg-white/20 border border-white/3'>
        
        <div className='flex gap-2 items-center'>
          <a
            href="https://github.com/omarignammas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center Z-50"
            style={{ pointerEvents: "auto" }}
          >
            <img
              src={github}
              alt="GitHub Profile"
              className="w-10 h-10 hover:opacity-100 opacity-95 Z-50 hover:border-[#d04fff] hover:shadow-purple-400 rounded-full object-cover ease-in border-2 border-[#dc84fd] shadow-md"
              loading="lazy"
            />
          </a>  
        </div>

        <div className='flex gap-2 items-center'>
          <a
            href="https://www.linkedin.com/in/omar-ignammas-26b62b239/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex ml-4 gap-2 items-center"
          >
            <img
              src={Linkedin}
              alt="LinkedIn Profile"
              className="w-10 h-10 hover:opacity-100 opacity-95 Z-50 hover:border-[#d04fff] hover:shadow-purple-400 rounded-full object-cover ease-in border-2 border-[#dc84fd] shadow-md"
              loading="lazy"
            />
          </a>
        </div>

        <button 
          className='p-2 rounded-full hover:bg-purple-200 backdrop-blur-2xl cursor-pointer transition-colors'
          onClick={() => setToggle((prev) => !prev)}
        >
          {Toggle ? 
            <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 6l12 12M18 6L6 18' />
            </svg> 
            :
            <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          }
        </button>
      </div>

      {/* Menu qui s'affiche en dessous */}
      <div className={`${Toggle ? 'flex' : 'hidden'} absolute top-full mt-2 w-full font-normal backdrop-blur-xl opacity-85 rounded-2xl shadow-xl p-4 bg-white/20 border border-white/3 transition-all duration-300 ease-in-out z-40`}>
        <div className="flex flex-col w-full gap-3">
          <a 
            href="#home" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-200 p-2 rounded-lg transition-all duration-200 ease-in-out"
          >
            Home
          </a>
          <a 
            href="#Stacks" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-200 p-2 rounded-lg transition-all duration-200 ease-in-out"
          >
            Stacks
          </a>
          <a 
            href="#Projects" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-200 p-2 rounded-lg transition-all duration-200 ease-in-out"
          >
            Projects
          </a>
         
          <a 
            href="#contact" 
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-200 p-2 rounded-lg transition-all duration-200 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}