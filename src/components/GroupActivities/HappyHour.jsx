import React from 'react' 
import { useBooking } from '../../hooks/useBooking';
import Navbar from '../Navbar'
import { motion } from 'framer-motion';
import Footer from '../Footer';
const happy = '/assets/happy.svg'
const texture = '/assets/texture.svg'
const cocktail = '/assets/cocktail.svg'
const HappyHour = () => {
  const handleBooking = useBooking();
    return (
        <>
            <div className="relative md:h-[80vh] w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${happy})` }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                ></div>

                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full pt-20 text-center px-4 text-white">
                    <h1 className="font-posterama text-4xl md:text-[60px] font-black mb-4 uppercase tracking-tighter drop-shadow-lg leading-none">
                        HAPPY HOUR
                    </h1>
                    <div className="font-posterama text-xl md:text-[32px] font-black text-[#00AACB] uppercase tracking-tight drop-shadow-md mb-8">
                        2 FOR 1 COCKTAILS
                    </div>

                    <button 
                        onClick={handleBooking}
                        className="px-10 py-3 bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 text-white font-black rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(0,170,203,0.4)] uppercase tracking-widest"
                    >
                        Book Now
                    </button>

                    <div className="mt-12 animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-white opacity-80"
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
            <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px]  font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        IT’S HAPPY HOUR IN TEAM-UP! AND<br /> WE’RE NOT LIMITING VIBES TO JUST AN<br /> HOUR
                    </h2>

                    <p style={{ fontFamily: 'Noir Pro' }} className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        We know every hour spent vibing with us is a happy one, but we’re always looking for ways to make those good times bigger and BOOMER.  Introducing our happy hour – but it’s not limited to an hour round here. Our BOOM HAPPY HOUR deals are available Monday – Thursday 4pm – 7pm. So if you’re rallying the squad for a round, recharging after a hectic  day or just fancy a bevvy with no excuse needed; our happy hour is the  place to go. No booking required!
                    </p>
                    <p
                        style={{ fontFamily: 'Noir Semi' }}
                        className="text-xs sm:text-sm md:text-base leading-snug mt-4"
                    >
                        <span style={{ fontFamily: 'Noir' }} className="text-[#E1017D] font-bold">
                            PLEASE NOTE:
                        </span>{' '}
                        Discounts and timings are subject to change and cannot be used in conjunction with other promotions.
                    </p>
                </section>

                {/* <div className="flex flex-col justify-center md:flex-row text-white pb-8 mt-8">
              
                    <motion.div
                        className="md:w-[400px] md:h-[400px]"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img src={cocktail} alt="Cocktails" className="w-full object-contain" />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-[540px] md:h-[508px] p-4 md:p-4 flex flex-col bg-[#1E1E1E]"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-xl md:text-[30px] font-bold uppercase mb-4 pt-8 ps-2 pe-2"
                        >
                            2 For 1 Cocktails In Team-Up
                        </h2>
                        <p
                            style={{ fontFamily: 'Noir Pro' }}
                            className="mb-4 text-sm md:text-[22px] leading-[1.2] text-white pt-4 ps-2 pe-2"
                        >
                            We know sometimes less is more. But let’s be honest, with cocktails – more is more.
                            Especially when they look and taste this good. So double up on your favourite happy
                            hour cocktails without worrying about your budget.
                        </p>
                        <p
                            style={{ fontFamily: 'Noir Pro' }}
                            className="mb-6 text-sm md:text-[22px] leading-[1.2] text-white ps-2 pe-2 pt-4"
                        >
                            From classic mojitos and fruity daiquiris to our signature BOOM creations, there’s a
                            cocktail to suit every taste available during our BOOM HAPPY HOUR. Now that’s one for
                            the group chat.
                        </p>
                        <p
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-[#E1017D] font-semibold text-base md:text-[22px] uppercase ps-2 pe-2"
                        >
                            No Booking Required!
                        </p>
                    </motion.div>
                </div> */}
                {/* <div className="flex flex-col  justify-center md:flex-row text-white pb-8 mt-8 px-4 md:px-0">
                    <motion.div
                        className="w-full md:w-[400px] md:h-[400px] md:mb-0"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img src={cocktail} alt="Cocktails" className="w-full h-auto object-contain" />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-[540px] md:h-[508px] p-4 md:p-4 flex flex-col bg-[#1E1E1E]"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-xl md:text-[30px] font-bold uppercase mb-4 pt-8 ps-2 pe-2"
                        >
                            2 For 1 Cocktails In Team-Up
                        </h2>
                        <p
                            style={{ fontFamily: 'Noir Pro' }}
                            className="mb-4 text-sm md:text-[22px] leading-[1.2] text-white pt-4 ps-2 pe-2"
                        >
                            We know sometimes less is more. But let’s be honest, with cocktails – more is more.
                            Especially when they look and taste this good. So double up on your favourite happy
                            hour cocktails without worrying about your budget.
                        </p>
                        <p
                            style={{ fontFamily: 'Noir Pro' }}
                            className="mb-6 text-sm md:text-[22px] leading-[1.2] text-white ps-2 pe-2 pt-4"
                        >
                            From classic mojitos and fruity daiquiris to our signature BOOM creations, there’s a
                            cocktail to suit every taste available during our BOOM HAPPY HOUR. Now that’s one for
                            the group chat.
                        </p>
                        <p
                            style={{ fontFamily: 'Posterama2001W04' }}
                            className="text-[#E1017D] font-semibold text-base md:text-[22px] uppercase ps-2 pe-2"
                        >
                            No Booking Required!
                        </p>
                    </motion.div>
                </div> */}
                <div className="flex flex-col justify-center items-center md:flex-row text-white gap-8 px-4 max-w-7xl mx-auto pb-20 mt-12">
    <motion.div
        className="w-full md:w-1/2 max-w-[400px]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
    >
        <img src={cocktail} alt="Cocktails" className="w-full h-auto object-contain rounded-3xl shadow-2xl" />
    </motion.div>

    <motion.div
        className="w-full md:w-1/2 max-w-[600px] p-8 md:p-12 flex flex-col bg-black/90 rounded-3xl shadow-2xl"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
    >
        <h2 className="font-posterama text-3xl lg:text-4xl font-black uppercase mb-6 text-white leading-none">
            2 For 1 Cocktails In Team-Up
        </h2>
        <div className="space-y-6 text-left">
            <p className="font-noir-pro text-lg lg:text-xl text-gray-200 leading-snug font-semibold">
                We know sometimes less is more. But let’s be honest, with cocktails – more is more. Especially when they look and taste this good. So double up on your favourite happy hour cocktails without worrying about your budget.
            </p>
            <p className="font-noir-pro text-lg lg:text-xl text-gray-200 leading-snug font-semibold">
                From classic mojitos and fruity daiquiris to our signature BOOM creations, there’s a cocktail to suit every taste available during our BOOM HAPPY HOUR. Now that’s one for the group chat.
            </p>
            <div className="pt-4">
                <p className="font-posterama text-xl lg:text-2xl text-[#E1017D] font-black uppercase tracking-tight mb-6">
                    No Booking Required!
                </p>
                <button 
                    onClick={handleBooking}
                    className="bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 text-white font-black px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg uppercase tracking-widest"
                >
                    Explore Menu
                </button>
            </div>
        </div>
    </motion.div>
</div>
                
            </div>
            <Footer />
        </>
    )
}

export default HappyHour