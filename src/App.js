import React from 'react';
import './index.css';
import { AnimatePresence } from 'framer-motion';
import { Route,Routes } from 'react-router-dom';
import {Hero} from './Components/index';


function App() {
  return (
    <AnimatePresence mode="wait">
     
        <Routes>

          <Route path="/*" element={<Hero />} />

        </Routes>

       
    </AnimatePresence>
  );
}

export default App;