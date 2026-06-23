import React from 'react';
import OtherGames from '../Home/OtherGames';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import heroBg from '../../assets/stepdown2.jpg';

const checkIcon = (
  <img 
    src="https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/2/2022/04/TICK2.svg" 
    alt="tick" 
    className="w-10 h-10 mt-[-5px]" 
  />
);

const BirthdayParties = () => {
  const birthdayHero = "https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/04/BOOM-Birthdays-Web-Hero-Banner-1905x805-3.jpg.webp";
  
  return (
    <div className="min-h-screen font-noir-pro">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${birthdayHero})` }}
      >
        <div className="relative z-10 px-4 mt-20">
          <h1 className="font-posterama text-7xl md:text-[120px] font-black text-white mb-2 tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            BOOM BIRTHDAYS
          </h1>
          <h2 className="font-posterama text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 drop-shadow-md">
            EASTVALE
          </h2>
          
          <div className="flex justify-center items-center">
            <button 
              onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
              className="bg-[#00AACB] hover:bg-cyan-600 text-white font-bold py-3 px-8 text-lg rounded-full uppercase tracking-tighter w-56 transition-all"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Details Section with Metallic Texture */}
      <div 
        className="bg-fixed bg-cover bg-center py-20"
        style={{ backgroundImage: `url(https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/03/BG-Steel2.jpg)` }}
      >
        <section className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-posterama text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
            BATTLE IT OUT FOR A BIRTHDAY YOU <br /> WON'T FORGET
          </h2>
          
          <p className="font-noir-pro text-lg md:text-xl text-black font-bold mb-16 max-w-4xl mx-auto leading-tight">
            Chat to our expert party planners today to plan the ultimate birthday get together. What does the price include?
          </p>

          <div className="max-w-3xl mx-auto space-y-12 text-left mb-20">
            <div className="flex items-start gap-6">
              {checkIcon}
              <div>
                <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">2 X GAMES</h3>
                <p className="text-black italic font-bold text-sm mt-1">Choose from our epic selection of adrenaline pumping experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              {checkIcon}
              <div>
                <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">2 X HOUSE DRINKS PER PERSON</h3>
                <p className="text-black italic font-bold text-sm mt-1">Choose from a single spirit/mixer, house beer, wine or soft drinks!</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              {checkIcon}
              <div>
                <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">THE SUPPORT OF OUR EXPERT <br /> PARTY PLANNING TEAM</h3>
              </div>
            </div>

            <div className="flex items-start gap-6">
              {checkIcon}
              <div>
                <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">BIRTHDAY PERSON BATTLES FREE</h3>
                <p className="text-black italic font-bold text-sm mt-1">The birthday person goes free when you book this package! It's only right.</p>
              </div>
            </div>
          </div>

          {/* How to Book Section */}
          <div className="border-t-2 border-black/10 pt-16">
            <h2 className="font-posterama text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
              HERE'S HOW TO BOOK
            </h2>
            <p className="font-noir-pro text-lg text-black font-bold mb-8">
              To book this package, either <span className="underline cursor-pointer">click here</span>, email us on <span className="underline cursor-pointer font-black">sales.consumer@boombattlebar.com</span> or give us a call on <span className="underline cursor-pointer font-black">0207 286 0404</span>.
            </p>
            <p className="font-noir-pro text-base text-black font-bold italic">
              Don't worry, it's quick and easy. We promise not to keep you on the phone for hours!
            </p>
          </div>
        </section>
      </div>

      {/* Games Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-posterama text-4xl md:text-6xl font-black text-black text-center mb-16 tracking-tighter uppercase leading-none">
            CHOOSE YOUR GAMES
          </h2>
          <OtherGames showHeading={false} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirthdayParties;
