import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bg from '../../assets/stepdown2.jpg'
import cocktailIcon from '../../assets/glass3.svg';
const bgImage = '/assets/bg3.svg';
const banner = '/assets/cart2.svg'

const Drinks = () => {
  const cocktails = [
    { name: 'OLD FASHIONED', desc: 'The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or sometimes brandy.' },
    { name: 'MARGARITA', desc: 'A margarita is a cocktail consisting of tequila, triple sec, and lime juice. Some margarita recipes include simple syrup as well.' },
    { name: 'MANHATTAN', desc: 'A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice.' },
    { name: 'MARTINI', desc: 'The martini is a cocktail made with gin and vermouth, and garnished with an olive, a lemon twist, or both.' },
    { name: 'NEGRONI', desc: 'The negroni is a cocktail, made of equal parts gin, vermouth rosso, and Campari, generally served on the rocks.' },
    { name: 'DAIQUIRI', desc: 'The daiquiri is a cocktail whose main ingredients are rum, citrus juice, and sugar or other sweetener.' },
    { name: 'ESPRESSO MARTINI', desc: 'The espresso martini, also known as a vodka espresso, is a cold caffeinated alcoholic drink made with espresso.' },
    { name: 'BLOODY MARY', desc: 'A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce.' },
  ];

  const beers = [
    { name: 'COORS', desc: 'Coors beer is a classic American brew known for its crisp, refreshing taste and smooth finish.' },
    { name: 'GUINNESS', desc: 'Guinness is a legendary Irish stout, world-renowned for its deep ruby color, creamy head, and bold, roasted flavor.' },
    { name: 'HEINEKEN', desc: 'Heineken is a world-famous Dutch lager, celebrated for its crisp, balanced flavor and signature green bottle.' },
    { name: 'BAVARIA', desc: 'Bavaria beer is a premium Dutch brew with a rich brewing heritage dating back to 1719.' },
    { name: 'Budweiser', desc: 'Budweiser is the King of Beers—an iconic American lager known for its smooth, clean taste and timeless appeal.' },
    { name: 'Corona', desc: 'Corona is the ultimate summer beer, known for its light, crisp taste and signature clear bottle crowned with a lime.' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-posterama text-5xl md:text-8xl text-white font-black tracking-tighter uppercase">DRINKS & COCKTAILS</h1>
        </div>
      </div>

      <div className="w-full bg-fixed bg-cover bg-center py-12" style={{ backgroundImage: `url(${bg})` }}>
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col gap-12">
          
          {/* Unified Drinks & Cocktails Section */}
          <div className="w-full bg-no-repeat bg-cover bg-center p-8 md:p-16 relative rounded-[2rem] shadow-2xl" style={{ backgroundImage: `url(${bgImage})` }}>
             <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 border-b border-black/10 pb-6">
                <h2 className="font-posterama text-5xl md:text-7xl text-[#292524] uppercase tracking-tighter leading-none">
                  DRINKS <span className="text-[#00AACB]">&</span> <br className="md:hidden" /> COCKTAILS
                </h2>
                <img src={cocktailIcon} alt="icon" className="w-24 md:w-32 mt-2 md:mt-[-20px] drop-shadow-xl" />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Cocktails Column */}
                <div>
                   <h3 className="font-posterama text-3xl text-[#E1017D] mb-8 uppercase tracking-widest border-l-4 border-[#E1017D] pl-4">Cocktails</h3>
                   <div className="space-y-8">
                      {cocktails.map((item, idx) => (
                          <div key={idx} className="group">
                              <h4 className="font-noir-semi text-xl md:text-2xl font-black text-[#292524] uppercase mb-2 group-hover:text-[#E1017D] transition-colors">{item.name}</h4>
                              <p className="font-noir-pro text-sm md:text-base text-[#292524]/80 leading-relaxed">{item.desc}</p>
                          </div>
                      ))}
                   </div>
                </div>

                {/* Beers Column */}
                <div>
                   <h3 className="font-posterama text-3xl text-[#00AACB] mb-8 uppercase tracking-widest border-l-4 border-[#00AACB] pl-4">Beers & Draught</h3>
                   <div className="space-y-8">
                      {beers.map((item, idx) => (
                          <div key={idx} className="group">
                              <h4 className="font-noir-semi text-xl md:text-2xl font-black text-[#292524] uppercase mb-2 group-hover:text-[#00AACB] transition-colors">{item.name}</h4>
                              <p className="font-noir-pro text-sm md:text-base text-[#292524]/80 leading-relaxed">{item.desc}</p>
                          </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Drinks;
