import React from "react";
import { motion } from "framer-motion";
import { bgPurple, offmenu } from "../Assets";
import StickyNavbar from "./StickyNavbar";
import TrueFocus from "./TrueFocus";
import About from "./About";


const Hero = () => {
  return (
    <div className='w-full min-h-screen relative overflow-x-hidden pointer-events-none'>
      
      {/* Hero Section */}
      <motion.div className='w-full h-screen relative overflow-hidden'>

        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          autoPlay 
          muted 
          loop 
          playsInline 
          id="bgVideo"
        >
          <source src={bgPurple} type="video/mp4" />
          <source src="your-video.webm" type="video/webm" />
          {/* Fallback image if video fails to load */}
          Your browser does not support the video tag.
        </video>
        
        

        {/* Optional: Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <StickyNavbar /> 
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, delay: 1 }} 
          className='absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-8 lg:pl-16 lg:pr-10 pt-20 sm:pt-24 lg:pt-0 z-20'>
          
          <div className='max-w-2xl ml-10 text-center lg:text-left'>
            <TrueFocus 
              sentence="Locked In"
              manualMode={false}
              blurAmount={5}
              borderColor="#e49aff"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            
            <h2 className='text-4xl sm:text-4xl lg:text-4xl font-bold font-Poppins text-[#e49aff] mb-6 mt-4 leading-tight'>
            Beyond Dev Potentiel<br/>
            </h2>
            
            <p className='text-base sm:text-lg font-Poppins font-light text-[#e49aff] mb-4 leading-relaxed'>
               We Don’t Just Code, We Create Impact building experience <br></br> vision realized, dreams alive.
              <span className='text-base nean-effect sm:text-lg text-[#6a2193] ml-2 font-Poppins mb-8 font-medium block sm:inline'>
                Not Just Code—Experiences That Matter.
              </span>
            </p>
            
            <button className='bg-gradient-to-r from-[#e49aff] to-[#a417d7] hover:shadow-purple-400 mt-2  text-white font-light font-Poppins px-6 py-3 sm:px-9 sm:py-2 rounded-full text-base sm:text-lg transition-all duration-200 transform hover:scale-105'>
             Get in touch
            </button>
            
          </div>
          
        </motion.div>

        {/* Planet Earth Image */}
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          animate={{ opacity: 1, translateX: 10 }}
          transition={{ duration: 1, delay: 1.4 }} 
          className='absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-8 lg:pl-[45vw] lg:pr-10 pt-20 sm:pt-24 lg:pt-0 z-20'>

                    
        </motion.div>
      </motion.div>

      

      <About></About>
      
     
    </div>
  );
};

export default Hero;