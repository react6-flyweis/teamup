import React from "react";
import snooker from '../../assets/shuffle.svg'
import { Link } from "react-router-dom";
const lady = '/assets/lady.svg'
const rect = '/assets/rect.svg'
const ball = '/assets/ball.svg'
const karaoke2 = '/assets/karaoke2.svg'
const archery = '/assets/archery.svg'
const golf2 = '/assets/golf3.svg'
const arcade = '/assets/arcade2.svg'
const indoor = '/assets/indoor.svg'
const bowling = '/assets/bowling.svg'
const nexus = '/assets/nexus.svg'
const games = [
  {
    title: "Indoor Mini Golf",
    image: indoor,
    link: "/indoor"
  },
  {
    title: "Duckpin Bowling",
    image: bowling,
    link: "/duckpin"
  },
  {
    title: "Axe Throw",
    image: lady,
    link: "/axethrow"
  },
  {
    title: "AR Archery",
    image: archery,
    link: "/digi"
  },
  {
    title: "AR Darts",
    image: rect,
    link: "/darts"
  },
  {
    title: "Karaoke Dance",
    image: karaoke2,
    link: "/dance"
  },
  // {
  //   title: "Arcade",
  //   image: arcade,
  //   link: "/arcadecart"
  // },
  // {
  //   title: "Laser Tag/ Gel Blaster",
  //   image: nexus,
  //   link: "/lasercart"
  // },
  // {
  //   title: "GOLF SIMULATOR",
  //   image: golf2,
  //   link: "/golfsimulatorcart"
  // },
  // {
  //   title: "Shuffle board",
  //   image: snooker,
  //   link: "/shufflecart"
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
      loading="lazy"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute bottom-0 left-0 w-full z-10">
      <div className="bg-black/80 w-full pt-6 pb-4 px-4 flex flex-col items-center">
        <h3 className="font-posterama text-white font-bold text-[18px] md:text-[24px] lg:text-[28px] uppercase tracking-tighter text-center mb-4 leading-none drop-shadow-lg">
          {game.title}
        </h3>
        <div className="w-full flex flex-row items-center gap-3">
          <button 
            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
            className="flex-1 bg-[#00AACB] hover:bg-cyan-600 text-white py-3 text-[14px] md:text-[16px] font-bold rounded uppercase tracking-tighter"
          >
            BOOK NOW
          </button>
          <Link 
            to={game.link}
            className="flex-1 bg-[#292524] hover:bg-black text-white py-3 text-[14px] md:text-[16px] font-bold rounded text-center uppercase tracking-tighter border border-white/20"
          >
            LEARN MORE
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
