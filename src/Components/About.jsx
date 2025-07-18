import React from "react";
import { motion } from "framer-motion";
import { Aboutimage, GitexAfrica } from "../Assets/index";

const About = () => {
    return(
        <section id="AboutSection" className='relative min-h-[94vh] py-20 bg-[#160424] px-4 sm:px-8 lg:px-16 overflow-hidden'>
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
                                    alt="Dikr Playlist Interface"
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
            </div>
        </section>
    )
}

export default About;