import React from 'react' 
import { useBooking } from '../../hooks/useBooking';
import Navbar from '../Navbar'
import { motion } from 'framer-motion';
import OtherGames from '../Home/OtherGames'
import Footer from '../Footer';
import per from '../../assets/per.svg'
import clock2 from '../../assets/clock2.svg'
import dollar from '../../assets/dollar.svg'

const team = '/assets/date.svg';
const duckpin = '/assets/duckpin.svg'
const shack = '/assets/shack.svg'
const darts = '/assets/love3.svg'
const throws = '/assets/love.svg';
const karaoke3 = '/assets/karaoke6.svg'
const texture = '/assets/texture.svg'
const queen = '/assets/Doe.svg'
const king = '/assets/Stud.svg'
const queenbg = '/assets/queenbg.svg'
const DateNight = () => {
  const handleBooking = useBooking();

    return (
        <>
            <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />

                <div
                    style={{ backgroundImage: `url(${queenbg})` }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                ></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-20">
                    {/* Character Container - Adjusted spacing to avoid text overlap */}
                    <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none mb-16 md:mb-28">
                        <div className="flex items-end justify-between w-full h-full px-2 lg:px-4 overflow-hidden">
                            {/* Queen (Left) */}
                            <div className="relative">
                                <img
                                    src={queen}
                                    alt="Queen"
                                    className="h-[280px] sm:h-[450px] lg:h-[700px] object-contain"
                                />
                            </div>

                            {/* King (Right) */}
                            <div className="relative">
                                <img
                                    src={king}
                                    alt="King"
                                    className="h-[280px] sm:h-[450px] lg:h-[700px] object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content (Center) */}
                    <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-20">
                        <h1 className="font-posterama text-3xl sm:text-4xl lg:text-[54px] font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] leading-none mb-4">
                            DATE NIGHT
                        </h1>
                        
                        <p className="font-posterama text-base sm:text-lg lg:text-lg font-bold text-white uppercase tracking-tight mb-6 drop-shadow-md">
                            USA'S BEST DATE NIGHT!
                        </p>

                        <p className="font-noir-pro text-[10px] sm:text-xs lg:text-sm text-gray-100 max-w-lg mb-8 drop-shadow-sm font-semibold uppercase leading-tight">
                            From Birthdays and Team Socials to Kings & Queens Dos, we’ve got your night covered with epic games, food, and drinks.
                        </p>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button 
                                onClick={handleBooking}
                                className="font-posterama bg-[#00AACB] hover:bg-[#E1017D] hover:scale-110 transition-all duration-300 text-white rounded-full px-10 py-3 text-lg md:text-xl font-black uppercase shadow-[0_0_20px_rgba(0,170,203,0.4)]"
                            >
                                Book Now
                            </button>

                            {/* Bouncing SVG Arrow */}
                            <div className="animate-bounce">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-white opacity-80"
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
            </div>
            <div className="w-full bg-fixed bg-cover bg-center py-4"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4 mb-12">
                    <h2 className="text-xl md:text-[44px]  font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        USA’S BEST DATE NIGHT!
                    </h2>
                    <p className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        Boring dates? Not round here. Inject some BOOM into your Date Night. We’ve got something for every couple (mates welcome too). Let your vibe pick your night.
                    </p>
                    <p className="max-w-4xl mx-auto text-sm md:text-base text-[#292524] mt-4">
                        These packages are available to book every Monday to Thursday.
                    </p>
                </section>

                <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-4">
                    {[
                        { icon: dollar, heading: 'LOVE SHACK', value: '100 AED', sub: 'GOLF + COCKTAIL\nMINIMUM 2 PEOPLE' },
                        { icon: per, heading: 'GAMES NIGHT', value: '125 AED', sub: '3x GAME SLOTS\n30 MINS EACH' },
                        { icon: clock2, heading: 'ULTIMATE', value: '225 AED', sub: '3 GAMES + FOOD\n+ COCKTAIL' }
                    ].map((box, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col bg-black text-[#00AACB] w-full min-[820px]:w-[280px] text-center p-6"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: i => ({
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
                                })
                            }}
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

                <div className="flex flex-col md:flex-row items-center justify-center text-white w-full py-12 px-4 md:px-8 overflow-hidden">
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
                            love shack
                        </h2>
                        {/* <h3
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-[#E1017D] text-[24px] sm:text-[30px] md:text-[36px] font-semibold mb-4 mt-4 sm:mt-6"
                        >
                            All day, everyday.
                        </h3> */}
                        <p
                            className="text-xs sm:text-sm md:text-[22px] text-white mb-6 leading-snug md:leading-[1.1] mt-12"
                        >
                            Take your date or mate to the course for a round of our Crazier Golf. The love shack package includes a trip around our Crazier Golf course for 2 and a delicious cocktail for you both!
                            <br /><br />
                            100 AED per person. Minimum of 2 people per booking, larger groups welcome unchanged.
                        </p>
                        <button
                            onClick={handleBooking}
                            className="bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-lg sm:text-xl md:text-[26px] text-white font-semibold py-2 px-6 rounded-full w-max mt-6 md:mt-auto uppercase"
                        >
                            BOOK Now
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
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                GAMES NIGHT
                            </h2>
                            <p
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                Unleash your competitive streak! Find your date or mate and take them on an epic games night. This package includes 3x game slots, each one is 30 minutes long. Everyone plays golf and your other 2 slots, well that’s a surprise! They’ll be allocated for you but don’t worry, you’ll love them all.
                                <br /><br />
                                125 AED per person. Minimum of 2 people per booking, larger groups welcome
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={handleBooking}
                                className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-full uppercase"
                            >
                                BOOK NOW
                            </button>
                            {/* <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button> */}
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
                            src={shack}
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
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                THE ULTIMATE PACKAGE
                            </h2>
                            <p
                                className="text-sm sm:text-base md:text-[22px] leading-snug text-gray-300 mt-4 sm:mt-8"
                            >
                                This is for the ones who like to go BIG, and who doesn’t? This epic package includes a delicious welcome cocktail, a street food feast and 3 epic 30 minute game slots. This really is the ultimate package.
                                <br /><br /><br />
                                225 AED per person. Minimum of 2 people per booking, larger groups welcome.
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-12 md:mt-24 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={handleBooking}
                                className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-full uppercase"
                            >
                                BOOK NOW
                            </button>
                            {/* <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button> */}
                        </div>
                    </motion.div>
                </div>
                {/* <div className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 md:px-8 text-white overflow-hidden shadow-lg">


                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-4 sm:p-6 md:p-12 bg-black text-white flex flex-col justify-between"
                    >
                        <div>
                            <h2
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                                Duckpin Bowling
                            </h2>
                            <p
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
                            <button className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded">
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
                                className="text-xl sm:text-2xl md:text-[40px] font-bold mb-4"
                            >
                               Karaoke Room
                            </h2>
                            <p
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
                            <button className="bg-[#E1017D] text-base sm:text-lg md:text-[26px] hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded">
                                BOOK NOW
                            </button>
                            <button className="bg-[#00AACB] text-base sm:text-lg md:text-[26px] hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded">
                                LEARN MORE
                            </button>
                        </div>
                    </motion.div>
                </div> */}
                <section className="text-center mt-24 px-4 sm:px-6">
                    <h2
                        className=" text-[44px] font-bold text-[#292524] mb-4 uppercase tracking-wide leading-tight"
                    >
                        CHOOSE YOUR GAME
                    </h2>

                    <p
                        className="max-w-5xl mx-auto text-xs sm:text-sm md:text-base text-[#292524] mb-4 leading-relaxed"
                    >
                        Pucker up Buttercup! Are you ready to FEEL THE BOOM™? Get set for the time of your life,
                        the Battleground has arrived! Battle it out with a mate or a date with our selection of
                        games including Augmented Reality Axe Throwing, American Pool, Augmented Reality Darts,
                        Beer Pong, Shuffleboard & much more! Why are you still reading this? It’s time to get booking.
                    </p>

                    <p
                        className="text-xs sm:text-sm md:text-base leading-snug"
                    >
                        <span className="text-[#E1017D] font-bold">
                            PLEASE NOTE:
                        </span>{' '}
                        We are strictly an over 18’s venue after 9pm.
                    </p>
                </section>
                <OtherGames showHeading={false} />
            </div>
            <Footer />
        </>
    )
}

export default DateNight