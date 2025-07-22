import React from "react";
import { motion } from "framer-motion";
import {MobileNav, Nav} from "./index";
import { github, Nabd,  Linkedin } from "../Assets";


const navbarAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: 0.6 }
};
 
function StickyNavbar() {
 
  return (
    <motion.div
          {...navbarAnimation}
          className='absolute top-4 left-0 right-0 flex justify-between items-center p-4 lg:p-6 z-10 '>
        
          {/* Logo */}
          <div className="flex ml-4 gap-2 items-center relative z-50">
          <img
                  src={Nabd} 
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#e49aff]"
                />
            <h3 className='text-3xl text-[#e49aff] font-Poppins font-bold '>Ignmas</h3>
          </div>

          
           {/* Navbar Desktop */}
           <div className='hidden lg:flex items-center'>
            <Nav />
          </div>
          
          {/* Mobile Controls */}
          <div className='flex items-center gap-3 lg:hidden'>
            
            <MobileNav/>
          </div>
         

          {/* Desktop Controls */}
          <div className='hidden lg:flex items-center gap-4'>
           
            
            <a
                href="https://github.com/omarignammas"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center Z-50"
                
            >
                <img
                  src={github}
                  alt="GitHub Profile"
                  className="w-10 h-10 hover:opacity-100 opacity-85 Z-50 hover:border-[#d04fff] rounded-full object-cover ease-in border-2 border-[#dc84fd] hover:shadow-[#dc84fd] shadow-md"
                  loading="lazy"
                  decoding="async"
               
                />
          </a>

          <a
            href="https://www.linkedin.com/in/omar-ignammas-26b62b239/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex ml-4 gap-2 items-center"
          >
              <img
                src={Linkedin}
                alt="LinkedIn Profile"
                className="w-10 h-10 hover:opacity-100 opacity-85 Z-50 hover:border-[#d04fff] rounded-full object-cover ease-in border-2 border-[#dc84fd] hover:shadow-[#dc84fd] shadow-md"
                loading="lazy"
                decoding="async"
              />
          </a>


          </div>
        </motion.div>
        
  );
}
export default React.memo(StickyNavbar);