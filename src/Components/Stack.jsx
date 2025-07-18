import React from "react";
import { motion } from "framer-motion";
import { GitexAfrica,SmatrbinCompetition } from "../Assets/index";
import { useState,useEffect } from "react";

const About = () => {
 
    function FloatingDots() {
        const [dots, setDots] = useState([]);
      
        useEffect(() => {
          const generateDots = () => {
            const newDots = [];
            for (let i = 0; i < 20; i++) {
              newDots.push({
                id: i,
                size: Math.random() * 5 + 2,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 5,
                duration: Math.random() * 6 + 6,
                opacity: Math.random() * 0.6 + 0.5,
              });
            }
            setDots(newDots);
          };
      
          generateDots();
        }, []);
      
        return (
          <div className="absolute inset-0 overflow-hidden">
            {dots.map((dot) => (
              <div
                key={dot.id}
                className="absolute rounded-full bg-gradient-to-tr from-purple-800 via-purple-600 to-purple-400 cursor-pointer transition-all duration-300 ease-out hover:scale-[2] hover:opacity-100 hover:z-50 hover:brightness-150 hover:saturate-150"
                style={{
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                  opacity: dot.opacity,
                  animation: `floatDot ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
                  boxShadow: `0px 2px 10px 3px #8B5CF6`,
                  filter: 'brightness(1) saturate(1)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.animationPlayState = 'paused';
                  e.target.style.boxShadow = `
                    0 0 30px rgba(139, 92, 246, 0.8), 
                    0 0 60px rgba(139, 92, 246, 0.4),
                    0 0 90px rgba(139, 92, 246, 0.2)
                  `;
                  e.target.style.filter = 'brightness(2) saturate(2) drop-shadow(0 0 15px rgba(139, 92, 246, 0.8))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.animationPlayState = 'running';
                  e.target.style.boxShadow = `0 2px 8px rgba(139, 92, 246, 0.2)`;
                  e.target.style.filter = 'brightness(1) saturate(1)';
                }}
              />
            ))}
      
            <style jsx>{`
              @keyframes floatDot {
                0%, 100% {
                  transform: translateY(0px) translateX(0px) scale(1);
                }
                25% {
                  transform: translateY(-30px) translateX(25px) scale(1.2);
                }
                50% {
                  transform: translateY(-15px) translateX(-25px) scale(0.8);
                }
                75% {
                  transform: translateY(-40px) translateX(17px) scale(1.1);
                }
              }
            `}</style>
          </div>
        );
      } 
  

    return(
        <section id="AboutSection" className='relative min-h-[94vh] py-20 bg-[#160424] px-4 sm:px-8 lg:px-16 overflow-hidden'>
            <FloatingDots></FloatingDots>
            <div className='relative z-10 max-w-7xl mx-auto h-full flex flex-col'>
                {/* Main Content - Layout côte à côte */}
                <div className="flex-1 flex items-center">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* Texte - Côté gauche */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Header */}
                            <div className="text-center lg:text-left">
                                <h2 className='nean-effect text-6xl sm:text-7xl lg:text-8xl font-bold font-Poppins text-purple-500 mb-4'>
                                    Me
                                </h2>
                                <p className='text-lg text-purple-500 ml-2 font-Poppins font-medium'>
                                    AI for Water Sustainability – GITEX AFRICA 2024"
                                </p>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-6">
                               
                                
                                <h4 className='text-2xl sm:text-3xl font-semibold font-Poppins text-purple-400'>
                                 "Driving Water Sustainability with AI – GITEX AFRICA Awarded"
                                </h4>
                                
                                <p className='text-lg text-purple-700 font-Inter leading-relaxed max-w-2xl'>
                                We proudly secured 2nd place at the AI for Water Sustainability Challenge during GITEX AFRICA. Our project Ghayt, <span className="nean-effect">an AI-driven mobile app</span>, tackles water scarcity by optimizing consumption and promoting sustainable practices across Africa.

                                 <span className="nean-effect">This achievement reflects our commitment to leveraging technology for social impact</span>, presenting our solution on a global stage among leading innovators.   </p>

                                {/* Call to action */}
                                <div className="pt-4">
                                    <button className=' bg-gradient-to-r from-[#cc89ff] to-[#9a15ff] hover:from-[#cc89ff] hover:to-[#cc89ff] text-white font-Kodchasan px-5 py-2 rounded-full text-md transition-all duration-200 hover:shadow-2xl transform hover:scale-105'>
                                        Global Stage, Local Impact
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image - Côté droit */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative w-full"
                        >
                            <div className="shadow-cards relative w-full bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 overflow-hidden">
                                {/* purple shadow at top of image */}
                                <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-purple-500/30 to-transparent rounded-t-xl"></div>
                                
                                {/* Image covering full space and extending to section bottom */}
                                <img
                                    src={GitexAfrica}
                                    alt="GitexAfricaImage"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg border-purple-200 border-2"
                                    loading="lazy"
                                />
                                
                                {/* White gradient overlay - clear top, opaque bottom */}
                                
                                {/* Additional gradient for smooth blending with section background */}
                                <div className="absolute  left-0 right-0 h-10 bg-gradient-to-t from-purple-200 via-purple-300/80 to-transparent"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        
                        {/* Image - Côté droit */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative w-full"
                        >
                            <div className="shadow-cards relative w-full bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 overflow-hidden">
                                {/* purple shadow at top of image */}
                                <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-purple-500/30 to-transparent rounded-t-xl"></div>
                                
                                {/* Image covering full space and extending to section bottom */}
                                <img
                                    src={SmatrbinCompetition}
                                    alt="Dikr Playlist Interface"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg border-purple-200 border-2"
                                    loading="lazy"
                                />
                                
                                {/* White gradient overlay - clear top, opaque bottom */}
                                
                                {/* Additional gradient for smooth blending with section background */}
                                <div className="absolute  left-0 right-0 h-10 bg-gradient-to-t from-purple-200 via-purple-300/80 to-transparent"></div>
                            </div>
                        </motion.div>
                        {/* Texte - Côté gauche */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Header */}
                            <div className="text-center lg:text-left">
                               
                                <p className='text-lg text-purple-500 ml-2 font-Poppins font-medium'>
                                  AI2SD 2025 Hackathon - Tangier
                                </p>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-6">
                               
                                
                                <h4 className='text-2xl sm:text-3xl font-semibold font-Poppins text-purple-400'>
                                 "AI-Powered Waste Revolution – National Hackathon"
                                </h4>
                                
                                <p className='text-lg text-purple-700 font-Inter leading-relaxed max-w-2xl'>
                                Our team proudly represented ENSA Kenitra and secured <span className="nean-effect">first place at the prestigious AI2SD (Artificial Intelligence and Sustainable Development) Hackathon held in Tangier.</span>This event brought together top innovators to develop impactful
                                 AI-driven solutions for sustainability.
                                 Goal: Reduce human error, improve recycling efficiency, and protect the environment. </p>

                                {/* Call to action */}
                                <div className="pt-4">
                                    <button className=' bg-gradient-to-r from-[#cc89ff] to-[#9a15ff] hover:from-[#cc89ff] hover:to-[#cc89ff] text-white font-Kodchasan px-5 py-2 rounded-full text-md transition-all duration-200 hover:shadow-2xl transform hover:scale-105'>
                                        National Hackathon, SmartBin
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;