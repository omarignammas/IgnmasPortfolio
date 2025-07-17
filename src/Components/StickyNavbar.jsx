import React from "react";
import { motion } from "framer-motion";
import {Nav} from "./index";
import { NavLink } from "react-router-dom";
import { github, Nabd,  Linkedin } from "../Assets";
 
function StickyNavbar() {
 
  return (
    <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }} 
          className='absolute top-4 left-0 right-0 flex justify-between items-center p-4 lg:p-6 z-10'>
        
          {/* Logo */}
          <div className='flex ml-4 gap-2 items-center'>
          <img
                  src={Nabd} 
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#e49aff] shadow-md"
                />
            <h3 className='text-3xl  text-[#e49aff] font-Poppins font-bold leading-none'>Ignmas</h3>
          </div>
           {/* Navbar Desktop */}
           <div className='hidden lg:flex items-center'>
            <Nav />
          </div>
          
          {/* Mobile Controls */}
          <div className='flex items-center gap-3 lg:hidden'>
            <div className='p-2 rounded-full hover:bg-purple-200 backdrop-blur-sm cursor-pointer transition-colors'>
              <svg className='w-5 h-5 text-[#d35cff]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd'/>
              </svg>
            </div>
            
            <NavLink to={'/SignUp'}>
            <div className='flex ml-4 gap-2 items-center'>
                <img
                        src={github} 
                        alt="Profile"
                        className="w-10 h-10 opacity-80 hover:border-[#eab1ff] rounded-full object-cover border-2 border-[#e18fff] shadow-md"
                        loading="lazy"
                      />
            </div>
            </NavLink>
            <NavLink to={'/SignUp'}>
            <div className='flex ml-4 gap-2 items-center'>
                <img
                        src={Linkedin} 
                        alt="Profile"
                        className="w-10 h-10 opacity-80 hover:border-[#eab1ff] rounded-full object-cover border-2 border-[#e18fff] shadow-md"
                        loading="lazy"
                      />
             </div>
            </NavLink>
          </div>
         

          {/* Desktop Controls */}
          <div className='hidden lg:flex items-center gap-4'>
            <div className='p-2 rounded-full hover:bg-blue-100 backdrop-blur-sm cursor-pointer transition-colors'>
              <svg className='w-6 h-6 text-[#d35cff]' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd'/>
              </svg>
            </div>
            
            <NavLink to={'/SignUp'}>
            <div className='flex ml-4 gap-2 items-center'>
                <img
                        src={github} 
                        alt="Profile"
                        className="w-10 h-10 opacity-80 hover:border-[#eab1ff] rounded-full object-cover border-2 border-[#e18fff] shadow-md"
                        loading="lazy"
                      />
            </div>
            </NavLink>
            <NavLink to={'/SignUp'}>
            <div className='flex ml-4 gap-2 items-center'>
                <img
                        src={Linkedin} 
                        alt="Profile"
                        className="w-10 h-10 opacity-80 hover:border-[#eab1ff] rounded-full object-cover border-2 border-[#e18fff] shadow-md"
                        loading="lazy"
                      />
             </div>
            </NavLink>

          </div>
        </motion.div>
        
  );
}
export default StickyNavbar;