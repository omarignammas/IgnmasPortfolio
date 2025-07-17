import { HashLink } from 'react-router-hash-link';


export default function Nav() {
      return (
        <div className='flex font-normal backdrop-blur-xl opacity-70 rounded-full shadow-xl p-6 pt-5 pb-5  gap-20 text-md lg:gap-20  bg-white/20  border border-white/3'>
          <HashLink>
            <p className='nav_link font-Poppins
             duration-200'>Home</p>
          </HashLink>
          <HashLink to="/#RecitersSection">
            <p className='nav_link font-Poppins 
             duration-200' >Stacks</p>
          </HashLink>
          <HashLink to="/#AboutSection" >
            <p className='nav_link font-Poppins 
             duration-200'>Projects</p>
          </HashLink>
          <HashLink to="/#FooterSection">
            <p className='nav_link font-Poppins 
             duration-200'>Connect</p>
          </HashLink>
        </div>
      );
    }
