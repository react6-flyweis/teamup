import React from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion';
import Footer from '../Footer';
const team = '/assets/team.svg';
const duckpin = '/assets/duckpin.svg'
const snooker = '/assets/snooker3.svg'
const darts = '/assets/darts6.svg'
const throws = '/assets/throw.svg';
const karaoke3 = '/assets/karaoke6.svg'
const texture = '/assets/texture.svg'
const Teamup = () => {
    return (
        <>
            <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${team})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center md:h-full py-20 text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-[84px] font-semibold mb-8 uppercase tracking-tighter">
                        Team Up Parties
                    </h1>
                    <div className="mb-8">
                        <button 
                            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                            className="bg-[#00AACB] hover:bg-cyan-600 text-white font-bold py-3 px-8 text-lg rounded-full uppercase tracking-tighter w-56 transition-all"
                        >
                            BOOK NOW
                        </button>
                    </div>
                    {/* <div style={{ fontFamily: 'Posterama2001W04' }} className="text-base  p-4 mt-4 md:text-[40px]">
                        2 for 1 cocktails
                    </div> */}

                    <div className="mt-6 animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 md:w-10 md:h-10 text-white"
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
            <div className="w-full bg-fixed bg-cover bg-center py-4"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px]  font-bold text-[#292524] mb-14 uppercase leading-tight tracking-wide">
                        EVENTS & ACTIVITIES MAY 24-26TH
                    </h2>
                </section>

                <div className="flex flex-col md:flex-row items-center justify-center text-white w-full pb-8 px-4 md:px-8 overflow-hidden">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px] mb-0 md:mb-0"
                    >
                        <img
                            src={throws}
                            alt="Game Activity"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col"
                    >
                        <h2
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-lg sm:text-xl md:text-[40px] font-bold mb-2 uppercase"
                        >
                            You got game? Prove it.
                        </h2>
                        <h3
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-[#E1017D] text-[24px] sm:text-[30px] md:text-[36px] font-semibold mb-4 mt-4 sm:mt-6"
                        >
                            All day, everyday.
                        </h3>
                        <p
                            style={{ fontFamily: 'Noir Pro' }}
                            className="text-xs sm:text-sm md:text-[22px] text-white mb-6 leading-snug md:leading-[1.1]"
                        >
                            From Axe Throwing to Shuffleboard and more, test your skills and bring the heat this long weekend!
                            Rally your crew and let the games begin.
                        </p>
                        <button
                            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="bg-[#00AACB] hover:bg-[#E1017D] text-lg sm:text-xl md:text-[26px] text-white font-semibold py-2 px-6 rounded w-max mt-6 md:mt-auto"
                        >
                            BOOK MY BH GAMES
                        </button>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 md:px-8 text-white overflow-hidden shadow-lg">


                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col justify-between"
                    >
                        <div>
                            <h2
                                style={{ fontFamily: 'Posterama2001W04' }}
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                SNOOKER
                            </h2>
                            <p
                                style={{ fontFamily: 'Noir Pro' }}
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                                className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded"
                            >
                                BOOK NOW
                            </button>
                            <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px]"
                    >
                        <img
                            src={snooker}
                            alt="Snooker Game"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center text-white w-full pb-8 px-4 md:px-8 overflow-hidden mt-8">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px] mb-0 md:mb-0"
                    >
                        <img
                            src={darts}
                            alt="Game Activity"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col"
                    >
                        <div>
                            <h2
                                style={{ fontFamily: 'Posterama2001W04' }}
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                Augmented Reality Darts
                            </h2>
                            <p
                                style={{ fontFamily: 'Noir Pro' }}
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 md:mt-24 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                                className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded"
                            >
                                BOOK NOW
                            </button>
                            <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 md:px-8 text-white overflow-hidden shadow-lg">


                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col justify-between"
                    >
                        <div>
                            <h2
                                style={{ fontFamily: 'Posterama2001W04' }}
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                Duckpin Bowling
                            </h2>
                            <p
                                style={{ fontFamily: 'Noir Pro' }}
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                                className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded"
                            >
                                BOOK NOW
                            </button>
                            <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px]"
                    >
                        <img
                            src={duckpin}
                            alt="Snooker Game"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center text-white w-full pb-8 px-4 md:px-8 overflow-hidden mt-8">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px] mb-0 md:mb-0"
                    >
                        <img
                            src={karaoke3}
                            alt="Game Activity"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col"
                    >
                         <div>
                            <h2
                                style={{ fontFamily: 'Posterama2001W04' }}
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                               Karaoke Room
                            </h2>
                            <p
                                style={{ fontFamily: 'Noir Pro' }}
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 md:mt-24 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                                className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded"
                            >
                                BOOK NOW
                            </button>
                            <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
          <Footer/>
        </>
    )
}

export default Teamup