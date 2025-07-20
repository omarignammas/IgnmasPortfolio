import React from "react";
import { motion } from "framer-motion";
import {Footer, Logomarquee, NewsletterForm, NexusOrbSup} from "../Components/index";


const Contact = () => {
  return (
    <footer id="ContactSection"  className=" bg-[#160424] pointer-events-none  pt-10">
      {/* Bloc principal avec l'image et la newsletter */}
      {/* Left Content */}
      <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 ,delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-8xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center pointer-events-auto"
             >
      
        {/* Image de gauche */}
        <div className="relative backdrop-blur-sm  shadow-xl rounded-lg overflow-hidden border-purple-500   p-4  border border-white/30">
        
         <NexusOrbSup/>
        </div>
        
        
        {/* Bloc newsletter */}
        <NewsletterForm/>


        </motion.div> 

      {/* Liens en bas */}
      <Footer/>
    </footer>
  );
};

export default Contact;
