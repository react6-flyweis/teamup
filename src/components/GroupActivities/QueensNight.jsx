import React from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion';
import OtherGames from '../Home/OtherGames'
import check from '../../assets/check.svg'
import Footer from '../Footer';
import per from '../../assets/per.svg'
import clock2 from '../../assets/clock2.svg'
import min from '../../assets/min.svg'
import lane from '../../assets/axe5.svg'
import dollar from '../../assets/dollar.svg'
import wheel from '../../assets/wheel.svg'
const queen = '/assets/Doe.svg'
const queenbg = '/assets/queenbg.svg'
const texture = '/assets/texture.svg'
const QueensNight = () => {
    const items = [
        {
            title: '2 X GAMES',
            description: 'Choose from our epic selection adrenaline pumping experiences',
        },
        {
            title: '2 X HOUSE DRINKS PER PERSON',
            description: 'Choose from a single spirit/mixer, house beer, wine or soft drinks!',
        },
        {
            title: 'THE SUPPORT OF OUR EXPERT PARTY PLANING TEAM',
            description: '',
        },
        {
            title: 'QUEENS NIGHT FOR FREE',
            description: 'The Queen goes free when you book this package! It’s only right.',
        },
    ];
    const columnVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };
    return (
        <>
            {/* <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${queenbg})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>


            </div> */}
            <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />

                <div
                    style={{ backgroundImage: `url(${queenbg})` }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                ></div>

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 text-white">
                    {/* Queen Image */}
                    <img
                        src={queen}
                        alt="Queen"
                        className="max-w-[440px] w-full h-auto z-10"
                    />

                    {/* Text, Button and Arrow */}
                    <div className="relative z-20 mt-8 flex flex-col items-center">
                        <h1 className="text-white text-3xl sm:text-[64px] font-bold mb-4 uppercase tracking-tighter">QUEENS NIGHT</h1>
                        <button 
                            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                            className="text-base bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white rounded-full px-8 py-4 mt-8 md:text-[26px] font-bold"
                        >
                            Book Now
                        </button>

                        {/* Bouncing SVG Arrow */}
                        <div className="mt-12 animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>



            </div>
            <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4">
                    <h2 className="text-xl md:text-[36px]  font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        CELEBRATE HER LAST FLING BEFORE <br />THE RING WITH A BOOM
                    </h2>

                    <p className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        Chat to our expert party planners today to plan a hen party full of fizz and fun. What does the price include?
                    </p>

                </section>
                <div className=" p-4 sm:p-6 space-y-6 max-w-[800px] mx-auto mt-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <img src={check} alt="Check" className="w-[40px] h-[40px] mt-4" />
                            <div>
                                <h3 className="text-[#292524] font-bold text-base sm:text-[28px] leading-tight">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-base sm:text-lg text-gray-800 mt-1">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <section className="text-center pt-12 px-4">
                    <h2 className="text-xl md:text-[36px]  font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        HERE’S HOW TO BOOK
                    </h2>

                    <p className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        To book this package, either click here, email us on USA@teamup.com or give us a call on 0207 286 0404.
                        Don’t worry, it’s quick and easy. We promise not to keep you on the phone for hours!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-4">
                        {[
                            { icon: min, heading: 'AGE', value: '18+' },
                            { icon: dollar, heading: 'FROM', value: '$27.50', sub: 'PER PERSON\nMINIMUM 6 PEOPLE PER BOOKING' },
                            { icon: clock2, heading: 'FOR', value: '2–3', sub: 'HOURS' }
                        ].map((box, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col bg-black text-[#00AACB] w-full min-[820px]:w-[280px] text-center p-6"
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={columnVariants}
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={box.icon} alt={box.heading} className="w-auto h-[80px]" />
                                    <div className="space-y-2">
                                        <div className="text-sm min-[820px]:text-base uppercase text-white">{box.heading}</div>
                                        <div className="text-2xl min-[820px]:text-4xl font-extrabold">{box.value}</div>
                                        {box.sub && (
                                            <div className="text-xs min-[820px]:text-sm text-white mt-1 whitespace-pre-line">
                                                {box.sub}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </section>
                <h1 className="text-center text-2xl md:text-[36px] text-[#292524] mt-12 font-bold mb-4">
                    OTHER GAMES
                </h1>
                <OtherGames />
            </div>
            <Footer/>
        </>
    )
}

export default QueensNight