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
      name: 'OLD FASHIONED',
      desc: 'The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or sometimes brandy.',
    },
    {
      name: 'MARGARITA',
      desc: 'A margarita is a cocktail consisting of tequila, triple sec, and lime juice. Some margarita recipes include simple syrup as well.',
    },
    {
      name: 'MANHATTAN',
      desc: 'A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice.',
    },
    {
      name: 'MARTINI',
      desc: 'The martini is a cocktail made with gin and vermouth, and garnished with an olive, a lemon twist, or both.',
    },
    {
      name: 'NEGRONI',
      desc: 'The negroni is a cocktail, made of equal parts gin, vermouth rosso, and Campari, generally served on the rocks.',
    },
    {
      name: 'DAIQUIRI',
      desc: 'The daiquiri is a cocktail whose main ingredients are rum, citrus juice, and sugar or other sweetener.',
    },
    {
      name: 'ESPRESSO MARTINI',
      desc: 'The espresso martini, also known as a vodka espresso, is a cold caffeinated alcoholic drink made with espresso.',
    },
    {
      name: 'BLOODY MARY',
      desc: 'A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce.',
    },
    {
      name: 'SPRITZ',
      desc: 'A margarita is a cocktail consisting of tequila, triple sec, and lime juice. Some margarita recipes include simple syrup as well.',
    },
  ];
  return (
    <>
      <Navbar />
      {/* <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}></div> */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}>
       <div className="absolute inset-0 flex items-center justify-center">
        <h1 style={{ fontFamily: 'Posterama2001W04' }}  className="text-white text-4xl font-bold">COCKTAILS</h1>
      </div>
      </div>

      <div className="w-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                    Your tagline goes here.
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </section>
        <div className="flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 ps-4 pe-4">
          
          <div
            className="w-full max-w-[1260px] h-auto md:h-[822px] bg-no-repeat bg-cover bg-center p-4 sm:p-6"
            style={{ backgroundImage: `url(${bgImage})`, fontFamily: 'Arial, sans-serif' }}
          >
            <div className="px-4 sm:px-8 md:pl-24 md:pr-14">

              {/* Header with icon */}
              <div style={{ fontFamily: 'Posterama2001W04' }} className="flex flex-col sm:flex-row sm:items-start gap-2 mb-3">
                <h2 className="text-[32px] sm:text-[40px] md:text-[46px] tracking-wide text-[#292524] uppercase">Cocktails</h2>
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
