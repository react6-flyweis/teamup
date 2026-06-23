import React from "react";
import golf2 from '../../assets/game7.svg'
import { Link } from "react-router-dom";
const lady = '/assets/game4.svg'
const snooker = '/assets/game8.svg'
const rect = '/assets/game6.svg'
const ball = '/assets/ball.svg'
const karaoke2 = '/assets/gae9.svg'
const archery = '/assets/game5.svg'
const arcade = '/assets/arcade2.svg'
const indoor = '/assets/game2.svg'
const bowling = '/assets/game.svg'
const nexus = '/assets/game3.svg'
const games = [
  {
    title: "Indoor Mini Golf",
    image: indoor,
    link: ""
  },
  {
    title: "Duckpin Bowling",
    image: bowling,
    link: "/headline"
  },
  {
    title: "Axe Throw",
    image: lady,
    link: ""
  },
  {
    title: "AR Archery",
    image: archery,
    link: ""
  },
  {
    title: "AR Darts",
    image: rect,
    link: ""
  },
  {
    title: "Karaoke Dance",
    image: karaoke2,
    link: ""
  },
  {
    title: "Arcade",
    image: arcade,
    link: ""
  },
  // {
  //   title: "Laser Tag/ Gel Blaster",
  //   image: nexus,
  //   link: ""
  // },
  // {
  //   title: "GOLF SIMULATOR",
  //   image: golf2,
  //   link: ""
  // },
  // {
  //   title: "Shuffle board",
  //   image: snooker,
  // },




];

const GameGrid = () => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">

      {games.map((game, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden rounded-md h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer`}
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* <div
      style={{ fontFamily: 'Posterama2001W04' }}
      className="absolute top-0 left-0 right-0 z-10 text-white font-bold text-sm sm:text-lg md:text-[28px] lg:text-[32px] leading-[1.2] bg-black/50 px-4 py-4 md:py-6 rounded"
    >
      {game.title}
    </div> */}
          <div className="absolute top-0 left-0 right-0 z-10 px-4 py-2 flex items-center justify-between backdrop-blur-md bg-black/40 text-white text-xs sm:text-sm md:text-base rounded-t">
            <div className="flex items-center gap-4">
              {/* Date */}
              <span
                style={{ fontFamily: 'Noir Semi' }}
                className="flex items-center gap-1 px-4 py-2 text-sm sm:text-base md:text-[17px] lg:text-[20px]"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3M16 7V3M4 11h16M5 20h14a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1v12a1 1 0 001 1z" />
                </svg>
                March 16 2025
              </span>

              {/* Divider */}
              <div className="w-px h-4 bg-white/60" />

              <span
                style={{ fontFamily: 'Noir Semi' }}
                className="flex items-center gap-1 px-4 py-2 text-sm sm:text-base md:text-[17px] lg:text-[20px]"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                3 min
              </span>

            </div>
          </div>

          {/* <div className="absolute bottom-[-100%] left-0 w-full transition-all duration-500 group-hover:bottom-0 z-10">
            <div className="bg-black bg-opacity-60 w-full py-2 sm:py-3 flex justify-center">
              <Link to={game.link}>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 w-[140px] sm:w-[180px] md:w-[200px] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold rounded">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div> */}
          <div className="absolute bottom-[-100%] left-0 w-full transition-all duration-500 group-hover:bottom-0 z-10">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm w-full px-4 py-6 text-white">
              <h3 style={{ fontFamily: 'Posterama2001W04' }} className="text-lg sm:text-xl md:text-2xl font-bold uppercase">Headline...</h3>
              <p className="text-sm sm:text-base md:text-lg mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
              <div className="mt-4 flex justify-center">
                <Link to={game.link}>
                  <button style={{ fontFamily: 'Posterama2001W04' }} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl text-sm sm:text-base font-semibold">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>


        </div>
      ))}

    </div>

  );
};

export default GameGrid;
