import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HomeLandingPage ,portofolio, yourturn} from "../Assets/index";
import Devider from "./Devider";
import Logomarquee from "./Logomarquee";

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

// GitHub Icon Component
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// External Link Icon Component
const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

// Tech Stack Icons
const techIcons = {
  React: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 100"><path fill="#61DAFB" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/><path stroke="#61DAFB" stroke-width="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/></svg>'}} />
  ),
  MongoDB: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/><path fill="#6CAC48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/><path fill="#C2BFBF" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/></svg>'}} />
  ),
  Firebase: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#FFA000" d="m61.405 36.118-10 9.311-9.284-18.733 4.796-10.77c1.212-2.15 3.194-2.177 4.407 0z"/><path fill="#F57F17" d="M51.409 45.425 14 80.22l28.126-53.523z"/><path fill="#FFCA28" d="M72.371 21.877c1.792-1.707 3.636-1.131 4.103 1.293l9.725 56.58-32.257 19.364c-1.13.633-4.13.88-4.13.88s-2.729-.332-3.774-.908L14 80.219z"/><path fill="#FFA000" d="M42.126 26.697 14 80.219 26.535 1.99c.47-2.425 1.844-2.672 3.084-.524z"/></svg>'}} />
  ),
  Python: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="url(#a)" d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"/><path fill="url(#b)" d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"/><defs><linearGradient id="a" x1="9.61" x2="59.167" y1="8.948" y2="58.01" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="40.028" x2="93.247" y1="40.453" y2="90.762" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>'}} />
  ),
  Streamlit: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#FF4B4B" d="m50.077 56.453-17.473-9.236-30.33-16.03c-.027-.028-.082-.028-.11-.028-1.108-.526-2.243.582-1.827 1.689L15.79 72.264l.002.008c.017.039.03.078.048.116.634 1.47 2.018 2.378 3.524 2.736.127.028.218.052.371.083.153.034.366.08.548.094l.089.005h.022l.067.006h.03q.03.004.06.003h.037l.066.003a271.7 271.7 0 0 0 58.89 0q.353 0 .687-.034l.21-.025.028-.005q.07-.01.141-.023.104-.013.208-.035c.138-.03.201-.053.389-.118.188-.064.5-.177.695-.271s.33-.184.494-.287a9 9 0 0 0 .59-.404c.083-.064.14-.105.201-.163l-.033-.02z"/><path fill="#7D353B" d="M97.929 31.187H97.9l-30.34 16.03 16.865 25.12 15.416-39.489v-.055c.388-1.163-.803-2.215-1.913-1.606"/><path fill="#BD4043" d="M51.694 23.565c-.776-1.133-2.464-1.133-3.212 0L32.604 47.217l17.473 9.236 33.112 17.5c.208-.204.375-.403.55-.612q.388-.472.687-1.005L67.56 47.216z"/></svg>'}} />
  ),
  SpringBoot: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#6CB52D" d="M91.059 5.746c-1.437 3.493-3.295 6.59-5.35 9.363C76.641 5.87 63.958 0 49.963 0 22.468-.001 0 22.343 0 49.938 0 64.355 6.168 77.335 15.953 86.5l1.858 1.66A49.68 49.68 0 0 0 49.939 99.9c26.257 0 47.882-20.486 49.74-46.347 1.486-12.559-2.328-28.635-8.62-47.808M23.186 86.92c-1.437 1.858-4.112 2.056-5.97.62-1.858-1.437-2.056-4.113-.62-5.97 1.437-1.858 4.113-2.056 5.97-.62 1.76 1.437 2.057 4.112.62 5.97m67.576-14.937C78.5 88.358 52.143 82.81 35.349 83.626c0 0-2.998.199-5.97.62 0 0 1.14-.52 2.576-1.04 11.84-4.113 17.414-4.955 24.622-8.646 13.5-6.91 26.976-22.046 29.676-37.701-5.152 15.036-20.808 28.016-35.026 33.267-9.785 3.617-27.397 7.11-27.397 7.11l-.718-.422c-11.94-5.87-12.361-31.83 9.487-40.178 9.586-3.716 18.653-1.66 29.057-4.112 11.023-2.577 23.805-10.825 28.932-21.626 5.722 17.415 12.733 44.39.174 61.086"/><path fill="#6CB52D" d="M23.186 86.921c-1.437 1.858-4.112 2.056-5.97.62-1.858-1.437-2.056-4.113-.62-5.97 1.437-1.858 4.113-2.056 5.97-.62 1.76 1.437 2.057 4.112.62 5.97"/></svg>'}} />
  ),
  JavaScript: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#F7DF1E" d="M100 0H0v100h100z"/><path fill="#000" d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z"/></svg>'}} />
  ),
  TailwindCSS: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#06B6D4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"/></svg>'}} />
  ),
  ExpressJs: (
    <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#fff" d="M31.015 61.316v-21.88h1.187v3.442q.21-.23.387-.486a5.88 5.88 0 0 1 5.364-3.328c2.706-.08 4.905.92 6.197 3.328a10.7 10.7 0 0 1 .258 9.808c-1.204 2.699-4.177 4.04-7.36 3.547a5.95 5.95 0 0 1-4.751-3.134v8.7zm1.187-14.14.266 2.57c.469 2.923 2.198 4.651 4.912 4.976a5.58 5.58 0 0 0 6.132-3.547 9.52 9.52 0 0 0-.209-7.82 5.47 5.47 0 0 0-5.76-3.184 5.33 5.33 0 0 0-4.759 3.934 27 27 0 0 0-.582 3.07zm37.499 2.974a6.4 6.4 0 0 1-6.254 5.655c-4.977.25-7.312-3.054-7.683-6.867a11 11 0 0 1 .97-6.06 6.76 6.76 0 0 1 7.036-3.773 6.47 6.47 0 0 1 5.736 4.92 33 33 0 0 1 .557 3.636h-13.07c-.242 3.458 1.616 6.238 4.25 6.908 3.28.807 6.083-.614 7.101-3.733.226-.8.638-.913 1.365-.686zm-12.717-3.596h11.69c-.073-3.683-2.366-6.36-5.478-6.39-3.512-.058-6.06 2.512-6.212 6.39m15.133 3.676h1.146a4.6 4.6 0 0 0 2.698 3.96 7.05 7.05 0 0 0 6.124-.162 2.75 2.75 0 0 0 1.616-2.707 2.496 2.496 0 0 0-1.68-2.496c-1.26-.47-2.602-.728-3.886-1.14a28.5 28.5 0 0 1-3.91-1.43c-2.07-1.01-2.198-4.944.145-6.19a8.25 8.25 0 0 1 7.885-.121 4.15 4.15 0 0 1 2.101 4.234h-.982c0-.047-.09-.089-.09-.137-.121-3.133-2.755-4.113-5.582-3.838a7.1 7.1 0 0 0-2.424.735 2.42 2.42 0 0 0-1.405 2.424 2.42 2.42 0 0 0 1.616 2.278c1.234.453 2.544.744 3.821 1.099l3.086.807a3.645 3.645 0 0 1 2.504 3.288 3.89 3.89 0 0 1-2.092 4.04c-2.698 1.527-7.142 1.123-9.122-.807a5.4 5.4 0 0 1-1.566-3.837zm27.323-6.05h-1.075c0-.146-.057-.286-.073-.397a3.51 3.51 0 0 0-2.86-3.377 7.05 7.05 0 0 0-4.532.219 2.75 2.75 0 0 0-1.996 2.626 2.535 2.535 0 0 0 1.939 2.553l4.912 1.26q.796.192 1.566.477a4.05 4.05 0 0 1 2.677 3.686 4.03 4.03 0 0 1-2.468 3.836 9 9 0 0 1-7.271.073 5.04 5.04 0 0 1-3.038-4.896h1.05a5.89 5.89 0 0 0 8.968 3.75 2.89 2.89 0 0 0 1.55-2.699 2.5 2.5 0 0 0-1.704-2.48c-1.261-.47-2.602-.72-3.886-1.14a29 29 0 0 1-3.934-1.414c-2.02-.994-2.182-4.896.121-6.14a8.14 8.14 0 0 1 8.015-.09 4.23 4.23 0 0 1 2.028 4.145zM29.063 55.41a1.85 1.85 0 0 1-2.295-.872L22.59 48.76l-.605-.807-4.848 6.592a1.776 1.776 0 0 1-2.181.857l6.245-8.378-5.81-7.57a1.93 1.93 0 0 1 2.302.806l4.329 5.848 4.355-5.825a1.737 1.737 0 0 1 2.165-.808l-2.255 2.991-3.054 3.976a.807.807 0 0 0 0 1.203l5.817 7.764zm26.516-16.037v1.14a5.86 5.86 0 0 0-6.238 6.051v8.887h-1.155V39.445h1.14v3.28c1.397-2.393 3.554-3.28 6.26-3.345zM.002 46.92l.509-2.513c1.397-4.969 7.094-7.037 11.013-3.959 2.294 1.802 2.867 4.355 2.755 7.231H1.35c-.209 5.139 3.498 8.241 8.24 6.658a4.94 4.94 0 0 0 3.127-3.483c.25-.807.665-.945 1.422-.712a6.56 6.56 0 0 1-3.135 4.792 7.595 7.595 0 0 1-8.847-1.131 7.96 7.96 0 0 1-1.987-4.67c0-.286-.095-.552-.162-.808Q0 47.607 0 46.92zm1.365-.347h11.69c-.072-3.725-2.423-6.367-5.558-6.392-3.49-.047-5.987 2.537-6.14 6.375z"/></svg>'}} />
  )
};


// Projects data
const projects = [
  {
    id: 1,
    name: 'Dikr App',
    description: 'Une application mobile de dhikr avec compteur et rappels spirituels',
    image: HomeLandingPage,
    githubUrl: 'https://github.com/omarignammas/dikr-app',
    liveUrl: 'https://dikr-app-demo.vercel.app',
    techStack: ['React', 'Firebase', 'JavaScript', 'TailwindCSS'],
    category: 'Mobile App'
  },
  {
    id: 2,
    name: 'E-Reservation Platform',
    description: 'Plateforme e-commerce complète avec gestion des commandes et paiements',
    image: yourturn, // Remplacez par votre image
    githubUrl: 'https://github.com/omarignammas/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    techStack: ['React', 'MongoDB', 'SpringBoot', 'TailwindCSS'],
    category: 'Web App'
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'Site portfolio personnel avec animations et design moderne',
    image: portofolio, // Remplacez par votre image
    githubUrl: 'https://github.com/omarignammas/portfolio',
    liveUrl: 'https://portfolio-demo.vercel.app',
    techStack: ['React', 'JavaScript', 'TailwindCSS'],
    category: 'Portfolio'
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

const Project = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="ProjectSection"  className="min-h-screen bg-[#160424] py-20 px-6 pointer-events-none">
      <FloatingDots />
      <Devider/>
      <div className="max-w-7xl mt-28 mx-auto pointer-events-none">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pointer-events-none"
        >
          <p className="nean-effect text-5xl sm:text-6xl font-Poppins text-purple-500 font-medium">
            My Projects Portfolio
          </p>
          <h4 className="text-2xl sm:text-3xl mt-5 font-semibold font-Poppins text-purple-400">
          From ideas to impactful solutions.
          </h4>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-none"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative w-full bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 overflow-hidden pointer-events-auto"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-500/80 backdrop-blur-sm text-white rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-200"
                  >
                    <GitHubIcon />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-200"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl nean-effectv2 font-medium font-Poppins text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <p className="text-purple-300 font-Poppins text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py- rounded-lg text-xs text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
                    >
                      {techIcons[tech] && (
                        <span className="opacity-80">
                          {techIcons[tech]}
                        </span>
                      )}
                      
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center font-Poppins justify-center gap-2 py-2 px-4 bg-gray-600/50 hover:bg-gray-600 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex font-Poppins items-center justify-center gap-2 py-2 px-4 bg-purple-600/50 hover:bg-purple-600 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              {/* Animated border */}
              <div
                    className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(147,51,234,0.1), transparent)"
                    }}
                  />
              </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-300/30">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-purple-300 font-Poppins font-medium">
              Découvrez tous mes projets sur GitHub
            </span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>

      <Logomarquee/>
    </section>
  );
};

export default Project;
