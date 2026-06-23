import React from 'react';

const SignupSection = ({ enochs2 }) => {
  return (
    <div
      className="relative w-full min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden py-24 mt-20"
      style={{ backgroundImage: `url(${enochs2})` }}
    >
      {/* Dark Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        <h1 className="font-posterama text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
          SIGN UP OR SHUFF UP
        </h1>

        <p className="font-noir-pro text-white mb-10 text-base md:text-[22px] max-w-4xl mx-auto leading-relaxed uppercase">
          No FOMO needed. Be the first to receive news and updates about <span className="font-bold">BOOM BATTLE BAR OXFORD STREET</span>.
        </p>

        <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address*"
            className="w-full px-6 py-4 text-white bg-black border-2 border-[#8B8B8B] focus:outline-none transition-all duration-300 text-lg placeholder:text-gray-400 text-center"
          />
          <button className="bg-[#00AACB] hover:bg-[#E1017D] text-[#292524] font-bold px-16 py-4 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg uppercase tracking-widest min-w-[200px]">
            SIGN UP
          </button>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <p className="font-noir-pro text-[11px] md:text-[13px] text-white italic leading-relaxed">
            By signing up you will be added to our mailing list and receive news, offers and promotions from 
            <span className="font-bold"> BOOM BATTLE BAR</span> and our sister brand <span className="font-bold">Escape Hunt</span> by email & SMS. 
            Your information will be used in accordance with our <span className="underline cursor-pointer font-bold italic">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
