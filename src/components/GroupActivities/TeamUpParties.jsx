import React from 'react'; 
import { useBooking } from '../../hooks/useBooking';
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

const TeamUpParties = () => {
  const handleBooking = useBooking();
  return (
    <div className="min-h-screen font-noir-pro">
      <Navbar />

      <div 
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Hero Section */}
        <section className="relative py-20 min-h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
            <div className="inline-block bg-[#00AACB] text-white px-8 py-2 font-bold text-xl md:text-2xl mb-8 transform rotate-1 shadow-[0_0_20px_rgba(0,170,203,0.6)]">
              THE ULTIMATE CREW HANGOUT
            </div>

            <h1 className="font-posterama text-6xl md:text-9xl font-black mb-12 tracking-tighter drop-shadow-2xl">
              TEAM UP PARTIES
            </h1>

            <p className="font-noir-pro text-lg md:text-2xl max-w-3xl mx-auto font-bold leading-tight mb-12">
              Get the whole squad together for the ultimate competitive night out. No excuses, just pure games and vibes.
            </p>

            <div className="flex justify-center items-center">
              <button 
                onClick={handleBooking}
                className="bg-[#00AACB] hover:bg-cyan-600 text-white font-bold py-3 px-8 text-lg rounded-full uppercase tracking-tighter w-56 transition-all"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-black/80 p-8 md:p-12 border-t-4 border-[#00AACB] shadow-2xl">
              <h2 className="font-posterama text-4xl text-white mb-8 tracking-tighter uppercase">Why Team Up with us?</h2>
              <ul className="space-y-6">
                <li className="flex items-center text-white text-xl font-bold">{checkIcon} Group-sized game bookings</li>
                <li className="flex items-center text-white text-xl font-bold">{checkIcon} Competitive leaderboards for your crew</li>
                <li className="flex items-center text-white text-xl font-bold">{checkIcon} Drink buckets & sharing platters</li>
                <li className="flex items-center text-white text-xl font-bold">{checkIcon} The best urban atmosphere in Eastvale</li>
              </ul>

              <div className="mt-12">
                <button 
                  onClick={handleBooking}
                  className="bg-[#E1017D] hover:bg-[#00AACB] text-white font-bold py-4 px-12 transition-all duration-300 text-xl tracking-widest uppercase rounded shadow-[0_0_15px_rgba(225,1,125,0.4)] hover:shadow-[0_0_20px_rgba(0,170,203,0.6)]"
                >
                  Book Our Team Party
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TeamUpParties;
