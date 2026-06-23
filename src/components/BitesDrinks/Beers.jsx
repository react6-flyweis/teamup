import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bg from '../../assets/stepdown2.jpg'
import cocktailIcon from '../../assets/glass3.svg';
const bgImage = '/assets/bg3.svg';
const team = '/assets/cart2.svg'
const CheckoutPage = () => {
  const [accepted, setAccepted] = useState(false);

  const handleCheckbox = () => {
    setAccepted(!accepted);
  };
  const cocktails = [
    {
      name: 'COORS',
      desc: 'Coors beer is a classic American brew known for its crisp, refreshing taste and smooth finish.',
    },
    {
      name: 'GUINNESS',
      desc: 'Guinness is a legendary Irish stout, world-renowned for its deep ruby color, creamy head, and bold, roasted flavor.',
    },
    {
      name: 'HEINEKEN',
      desc: 'Heineken is a world-famous Dutch lager, celebrated for its crisp, balanced flavor and signature green bottle.',
    },
    {
      name: 'BAVARIA',
      desc: 'Bavaria beer is a premium Dutch brew with a rich brewing heritage dating back to 1719.',
    },
    {
      name: 'Budweiser',
      desc: 'Budweiser is the King of Beers—an iconic American lager known for its smooth, clean taste and timeless appeal.',
    },
    {
      name: 'Bud Light',
      desc: 'Bud Light is a refreshing American light lager known for its easy-drinking taste and smooth finish.',
    },
    {
      name: 'Corona',
      desc: 'Corona is the ultimate summer beer, known for its light, crisp taste and signature clear bottle crowned with a lime.',
    },
   
  ];
  return (
    <>
      <Navbar />
      {/* <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}></div> */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}>
       <div className="absolute inset-0 flex items-center justify-center">
        <h1 style={{ fontFamily: 'Posterama2001W04' }}  className="text-white text-4xl font-bold">BEERS</h1>
      </div>
      </div>

      <div className="w-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 ps-4 pe-4">

          <div
            className="w-full max-w-[1260px] h-auto md:h-[622px] bg-no-repeat bg-cover bg-center p-4 sm:p-6"
            style={{ backgroundImage: `url(${bgImage})`, fontFamily: 'Arial, sans-serif' }}
          >
            <div className="px-4 sm:px-8 md:pl-24 md:pr-14">

              {/* Header with icon */}
              <div style={{ fontFamily: 'Posterama2001W04' }} className="flex flex-col sm:flex-row sm:items-start gap-2 mb-3">
                <h2 className="text-[32px] sm:text-[40px] md:text-[46px] tracking-wide text-[#292524] uppercase">Beers</h2>
                <img
                  src={cocktailIcon}
                  alt="Cocktail Icon"
                  className="w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[104px] md:h-[137px] sm:mt-[-32px] md:mt-[-64px]"
                />
              </div>

              {/* Cocktail items */}
              {cocktails.map((item, index) => (
                <div key={index} className="mb-3">
                  <h3
                    style={{ fontFamily: 'Noir Semi' }}
                    className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#292524] uppercase leading-tight"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'Noir Pro' }}
                    className="text-[16px] sm:text-[18px] md:text-[20px] text-[#292524] leading-tight"
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
