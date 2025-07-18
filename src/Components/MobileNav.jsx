import { NavLink } from "react-router-dom";
import { github ,Linkedin } from "../Assets";


export default function MobileNav() {
      return (
        <div className='flex font-normal backdrop-blur-xl opacity-85 rounded-full shadow-xl p-3 pt-2 pb-2  gap-2 text-md lg:gap-10  bg-white/20  border border-white/3'>
     
            <div className='flex gap-2 items-center'>
            <a
                href="https://github.com/omarignammas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center Z-50"
                style={{ pointerEvents: "auto" }} // ✅ Assure que le clic marche
            >
                <img
                  src={github}
                  alt="GitHub Profile"
                  className="w-10 h-10 hover:opacity-100 opacity-85 Z-50 hover:border-[#d04fff] rounded-full object-cover ease-in border-2 border-[#dc84fd] shadow-md"
                  loading="lazy"
               
                />
            </a>  
            </div>

            
            <div className='flex  gap-2 items-center'>
            <a
            href="https://www.linkedin.com/in/omar-ignammas-26b62b239/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex ml-4 gap-2 items-center"
             >
              <img
                src={Linkedin}
                alt="LinkedIn Profile"
                className="w-10 h-10 hover:opacity-100 opacity-85 Z-50 hover:border-[#d04fff] rounded-full object-cover ease-in border-2 border-[#dc84fd] shadow-md"
                loading="lazy"
              />
             </a>

              </div>


            <button  className='p-2 rounded-full hover:bg-purple-200 backdrop-blur-2xl cursor-pointer transition-colors'>
              <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
        </div>
      );
    }
