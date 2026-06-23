import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCompass } from 'react-icons/fi';
import bgImage from '../assets/bg.svg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden font-noir-pro">
      <Navbar />

      {/* Main 404 Container */}
      <div
        className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Neon Cyber Glow Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E1017D]/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00AACB]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl w-full text-center">
          {/* Compass/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 shadow-inner"
          >
            <FiCompass className="text-4xl text-[#00AACB] animate-pulse" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-block bg-[#E1017D] text-white px-6 py-1.5 font-noir font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 transform -rotate-1 shadow-[0_0_15px_rgba(225,1,125,0.4)]">
              Error Code: 404
            </span>

            <h1 className="font-posterama text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              OUT OF <span className="text-[#00AACB]">BOUNDS</span>
            </h1>

            <p className="font-noir-pro text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-12">
              Whoops! You've wandered outside the playing field. The page you are looking for has either been moved, deleted, or never existed in the first place.
            </p>
          </motion.div>

          {/* Back Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto bg-[#00AACB] hover:bg-[#E1017D] text-white font-bold px-8 py-4 rounded-lg tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,170,203,0.3)] hover:shadow-[0_4px_20px_rgba(225,1,125,0.4)] flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="text-lg" /> Return to Lobby
            </button>

            {/* <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-lg tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              Report Issue
            </button> */}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
