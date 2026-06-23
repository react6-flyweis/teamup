import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import heroBg from '../../assets/stepdown2.jpg';

const checkIcon = (
  <img 
    src="https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/2/2022/04/TICK2.svg" 
    alt="tick" 
    className="w-8 h-8 mr-3" 
  />
);

const steps = [
  {
    num: "01",
    title: "PICK YOUR BUNDLE",
    desc: "Choose from our epic range of games including Axe Throwing, Darts, and Mini Golf."
  },
  {
    num: "02",
    title: "ADD YOUR DRINKS",
    desc: "Each bundle includes 2 premium drinks. Cocktails, beers, or mocktails - you decide!"
  },
  {
    num: "03",
    title: "EAT STREET FOOD",
    desc: "Finish off with 2 plates of our signature street food. Burgers, wings, and more."
  }
];

const bundles = [
  {
    title: "INDOOR MINI GOLF BUNDLE",
    image: "/assets/boomBundle/miniIndoorGolf.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/indoor"
  },
  {
    title: "DUCKPIN BOWLING BUNDLE",
    image: "/assets/boomBundle/DUCKPIN.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/duckpin"
  },
  {
    title: "AXE THROW BUNDLE",
    image: "/assets/boomBundle/axeThrow.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/axethrow"
  },
  {
    title: "AR ARCHERY BUNDLE",
    image: "/assets/boomBundle/archery.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/digi"
  },
  {
    title: "AR DARTS BUNDLE",
    image: "/assets/boomBundle/dart.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/darts"
  },
  {
    title: "KARAOKE DANCE BUNDLE",
    image: "/assets/boomBundle/karokaDance.png",
    link: "https://ecom.roller.app/altitudemanteca/buyapass/en-us/home",
    gameLink: "/dance"
  },
];

const BoomBundle = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-noir-pro">
      <Navbar />

      <div 
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/03/BG-Steel2.jpg)` }}
      >
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Neon Banner */}
            <div className="inline-block bg-[#E1017D] text-white px-8 py-2 font-bold text-xl md:text-2xl mb-8 transform -rotate-1 shadow-[0_0_20px_rgba(225,1,125,0.6)]">
              MORE BOOM FOR YOUR BUCK! BUNDLES FROM $27.50PP
            </div>

            <h1 className="font-posterama text-6xl md:text-9xl font-black text-black mb-6 tracking-tighter drop-shadow-[0_2px_5px_rgba(255,255,255,0.5)]">
              BOOM BUNDLES
            </h1>

            <p className="font-noir-pro text-sm md:text-lg text-black max-w-4xl mx-auto mb-10 font-bold leading-tight">
              Get more BOOM for your buck with our all-inclusive activity package. Available all week in Eastvale, each BOOM BUNDLE includes:
            </p>

            {/* Inclusions */}
            <div className="max-w-3xl mx-auto space-y-12 text-left mb-20">
              <div className="flex items-start gap-6">
                {checkIcon}
                <div>
                  <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">1 X FULL LENGTH GAME</h3>
                  <p className="text-black italic font-bold text-sm mt-1">Choose from our epic range of games including Axe Throwing, Darts, and Mini Golf.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                {checkIcon}
                <div>
                  <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">2 PREMIUM DRINKS</h3>
                  <p className="text-black italic font-bold text-sm mt-1">Yep, including cocktails! Choose from cocktails, beers, or mocktails.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                {checkIcon}
                <div>
                  <h3 className="font-posterama text-3xl text-black font-bold uppercase leading-none">2 STREET FOOD PLATES OR A BURGER</h3>
                  <p className="text-black italic font-bold text-sm mt-1">Finish off with our signature street food. Burgers, wings, and more.</p>
                </div>
              </div>
            </div>

            {/* Boring But Important */}
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-[#E1017D] font-bold mb-2 uppercase tracking-tight text-lg md:text-xl">BORING BUT IMPORTANT:</h3>
              <p className="text-sm md:text-lg text-black font-bold leading-tight mb-2">
                After 7pm, it's over-18s only. Before then, under 18s are welcome when accompanied by an adult.
              </p>
              <p className="text-[10px] md:text-xs text-black font-bold italic uppercase">
                Minimum 2 people per booking Sun-Weds and 4 people Fri-Sat.
              </p>
            </div>
          </div>
        </section>

        {/* Bundles Grid */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-black overflow-hidden flex flex-col h-full shadow-2xl border-2 border-white/10"
                >
                  {/* Jagged Image Border Effect */}
                  <div className="relative h-80 overflow-hidden">
                     <div className="absolute inset-0 z-10 border-[12px] border-black pointer-events-none"></div>
                     <img 
                      src={bundle.image} 
                      alt={bundle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    {/* Neon Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E1017D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className=" text-2xl md:text-3xl text-white mb-8 tracking-tighter leading-none text-center">
                      {bundle.title}
                    </h2>
                    
                    <div className="mt-auto flex gap-2">
                      <button 
                        onClick={() => window.open(bundle.link, "_blank")}
                        className="flex-1 bg-[#00AACB] hover:bg-[#E1017D] text-white font-bold py-4 transition-colors duration-300 text-sm tracking-widest uppercase"
                      >
                        Book Now
                      </button>
                      <button 
                        onClick={() => navigate(bundle.gameLink)}
                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 transition-colors duration-300 text-sm tracking-widest uppercase"
                      >
                        Game Info
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BoomBundle;
