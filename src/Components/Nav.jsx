import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { instagram, profile } from '../Assets';


export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);



  return (
    <div 
      className={`
        flex font-normal backdrop-blur-xl opacity-70 rounded-full shadow-sm
        p-6 pt-5 pb-5 text-md bg-white/20 transition-all duration-700 ease-in-out
        ${isExpanded
          ? 'gap-24 lg:gap-14 border border-[#e8a7ff] shadow-[#e8a7ff]'
          : 'gap-20 lg:gap-11 border border-white/30'
        }
        relative z-[1000]    /* <-- sécurité interne */
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Image gauche */}
      <div
        className={`
          flex items-center transition-all duration-1000 ease-in-out
          ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
        `}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-7 h-7 rounded-full object-cover border-2 border-[#e8a7ff] shadow-md"
        />
      </div>

      {/* Links */}
      <HashLink smooth to="/#HomeSection">
        <p className="nav_link font-Poppins duration-200 hover:text-purple-600 cursor-pointer">
          Home
        </p>
      </HashLink>

      <HashLink smooth to="/#StackSection">
        <p className="nav_link font-Poppins duration-200 hover:text-purple-600 cursor-pointer">
          Stacks
        </p>
      </HashLink>

      <HashLink smooth to="/#ProjectSection">
        <p className="nav_link font-Poppins duration-200 hover:text-purple-600 cursor-pointer">
          Projects
        </p>
      </HashLink>

      <HashLink smooth to="/#ContactSection">
        <p className="nav_link font-Poppins duration-200 hover:text-purple-600 cursor-pointer">
          Connect
        </p>
      </HashLink>

      {/* Instagram droite */}
      <div
        className={`
          flex items-center transition-all duration-1000 ease-in-out
          ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
        `}
      >
        <img
          src={instagram}
          alt="Instagram"
          className="w-7 h-7 rounded-full object-cover border-2 border-[#e8a7ff] shadow-md"
        />
      </div>
    </div>
  );
}
