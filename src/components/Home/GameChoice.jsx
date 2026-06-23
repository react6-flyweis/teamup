import React from 'react';
import OtherGames from './OtherGames';

const GameChoice = () => {
  return (
    <>
      <section className="text-center mt-20 px-4 sm:px-6">
        <h2
          className="font-posterama text-[44px] font-bold text-[#292524] mb-4 uppercase tracking-wide leading-tight"
        >
          CHOOSE YOUR GAME
        </h2>

        <p
          className="font-noir-pro max-w-6xl mx-auto text-xs sm:text-sm md:text-base text-[#292524] mb-4 leading-relaxed"
        >
          Ready to elevate your game night?
          <br />
          Step into The Battleground — where curated chaos meets cutting-edge fun.
          <br />
          Challenge your circle (or spark something new) with Axe Throw, Indoor Mini Golf, AR Darts, Duckpin Bowling, AR Archery, Arcade & more.
          <br />
          Why wait? Lock in your experience. The night won’t play itself. 🎯✨🍸
        </p>
      </section>

      <OtherGames showHeading={false} />
    </>
  );
};

export default GameChoice;
