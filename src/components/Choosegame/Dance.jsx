import React from 'react'
import Navbar from '../Navbar'
import per from '../../assets/per.svg'
import clock2 from '../../assets/clock2.svg'
import { Link } from 'react-router-dom';
import min from '../../assets/min.svg'
import lane from '../../assets/sing.svg'
import { motion } from 'framer-motion';
import Footer from '../Footer'
import dollar from '../../assets/dollar.svg'
import wheel from '../../assets/wheel.svg'
import Cards from '../Home/Cards'
const duck = '/assets/dance.svg'
const texture = '/assets/texture.svg'
const Dance = () => {
    const cards = [
        {
            icon: per,
            heading: 'HOW MANY',
            value: '1-2 PERSON',
            sub: 'PER MACHINE',
        },
        {
            icon: clock2,
            heading: 'HOW MANY LANES',
            value: '8 LANES',
        },
        {
            icon: min,
            heading: 'TIME',
            value: '30 OR 60',
            sub: 'MINUTES',
        },
        {
            icon: lane,
            heading: 'PRICE',
            value: '9 TO 17',
            sub: 'PER PERSON',
        },
        {
            icon: lane,
            heading: 'MINIMUM AGE',
            value: 'ALL ALLOWED',
        },
        {
            icon: lane,
            heading: 'WHEELCHAIR ACCESS',
            value: 'YES',
            sub: 'CALL THE PROVIDER',
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
            {/* <Navbar /> */}
            {/* <div className="relative h-screen w-full overflow-hidden">

              
                <div
                    style={{ backgroundImage: `url(${duck})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                >
                </div>

             
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-[64px] font-semibold mb-4">
                        Duckpin Bowling
                    </h1>
                    <button style={{ fontFamily: 'Posterama2001W04' }} className="text-base bg-[#00AACB] rounded-xl p-4 mt-14 md:text-[26px]">
                        Book Now
                    </button>
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
            </div> */}
            <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${duck})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center md:h-full py-20 text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-[64px] font-semibold mb-4 leading-snug">
                       Karaoke Dance
                    </h1>
                    <button 
                        onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                        style={{ fontFamily: 'Posterama2001W04' }} 
                        className="text-base bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white rounded-full px-8 py-4 mt-14 md:text-[26px]"
                    >
                        Book Now
                    </button>

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

            {/* <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${texture})` }}>
                <section className=" text-center pt-12">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-2xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-[1.1] tracking-wide">
                        Live the Pro Athlete Dream with our Sports Simulator!
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        A sports simulator lets you experience your favorite sports  virtually, offering exciting, realistic gameplay. It’s perfect for  friendly competition and a fun, immersive way to test your skills in  various sports!
                    </p>

                </section>
                <div className="flex flex-col md:flex-row justify-center gap-2 p-4 mt-4">
                    <motion.div
                        className="flex flex-col gap-2"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-70 h-36 p-4">
                            <div className="flex items-center gap-3">
                                <img src={per} alt="user" className="w-auto h-[110px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">How Many</div>
                                    <div className="text-[20px] font-bold mb-3">1-2 Person</div>
                                    <div className="text-[15px] uppercase">Per Machine</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black text-[#00AACB] w-70 h-36 p-4">
                            <div className="flex items-center gap-3">
                                <img src={lane} alt="bowling" className="w-auto h-[100px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">How Many Lanes</div>
                                    <div className="text-[20px] font-bold">8 Lanes</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-2"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-70 h-36 p-4">
                            <div className="flex items-center gap-3">
                                <img src={clock2} alt="clock" className="w-auto h-[100px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">Time</div>
                                    <div className="text-[20px] font-bold mb-3">30 or 60</div>
                                    <div className="text-[15px] uppercase">Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black text-[#00AACB] w-64 h-36 p-4">
                            <div className="flex items-center gap-8">
                                <img src={dollar} alt="dollar" className="w-auto h-[100px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">Price</div>
                                    <div className="text-[20px] font-bold mb-3">9 to 17</div>
                                    <div className="text-[15px] uppercase">Per Person</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-2"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-70 h-36 p-4">
                            <div className="flex items-center gap-3">
                                <img src={min} alt="group" className="w-auto h-[100px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">Minimum Age</div>
                                    <div className="text-[20px] font-bold">All Allowed</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black text-[#00AACB] w-70 h-36 p-4">
                            <div className="flex items-center gap-3">
                                <img src={wheel} alt="wheelchair" className="w-auto h-[100px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className='leading-[1.4]'>
                                    <div className="text-[15px] uppercase">Wheelchair Access</div>
                                    <div className="text-[20px] font-bold mb-3">Yes</div>
                                    <div className="text-[15px] uppercase">Call the provider</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className="flex justify-center mt-12">
                    <button
                        style={{ fontFamily: 'Posterama2001W04' }}
                        className="bg-[#00AACB] w-[130px] h-[50px] text-[17px] hover:bg-[#E1017D] hover:text-white text-white font-bold py-2 px-4 rounded transition"
                    >
                        BOOK NOW
                    </button>
                </div>
                <h1 style={{ fontFamily: 'Posterama2001W04' }} className='text-center text-[44px] text-[#292524] mt-12 font-bold mb-4'>OTHER GAMES</h1>
            </div> */}
            <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                    Your tagline goes here.
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </section>

                {/* <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-4">
                    <motion.div
                        className="flex flex-col"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-full md:w-[280px] p-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <img src={per} alt="user" className="w-auto h-[90px] md:h-[110px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">How Many</div>
                                    <div className="text-lg md:text-xl font-bold mb-2">1-2 Person</div>
                                    <div className="text-xs md:text-sm uppercase">Per Machine</div>
                                </div>
                            </div>

                            <div className="border-b border-[#00AACB] mx-2"></div>

                            <div className="flex items-center gap-3">
                                <img src={lane} alt="bowling" className="w-auto h-[90px] md:h-[105px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">How Many Lanes</div>
                                    <div className="text-lg md:text-xl font-bold">8 Lanes</div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="flex flex-col"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-full md:w-[280px] p-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <img src={clock2} alt="clock" className="w-auto h-[90px] md:h-[110px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">Time</div>
                                    <div className="text-lg md:text-xl font-bold mb-2">30 or 60</div>
                                    <div className="text-xs md:text-sm uppercase">Minutes</div>
                                </div>
                            </div>
                            <div className="border-b border-[#00AACB]"></div>
                            <div className="flex items-center gap-6">
                                <img src={dollar} alt="dollar" className="w-auto h-[90px] md:h-[105px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">Price</div>
                                    <div className="text-lg md:text-xl font-bold mb-2">9 to 17</div>
                                    <div className="text-xs md:text-sm uppercase">Per Person</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


        
                    <motion.div
                        className="flex flex-col"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={columnVariants}
                    >
                        <div className="bg-black text-[#00AACB] w-full md:w-[280px] p-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <img src={min} alt="group" className="w-auto h-[90px] md:h-[110px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">Minimum Age</div>
                                    <div className="text-lg md:text-xl font-bold">All Allowed</div>
                                </div>
                            </div>
                            <div className="border-b border-[#00AACB]"></div>
                            <div className="flex items-center gap-3">
                                <img src={wheel} alt="wheelchair" className="w-auto h-[90px] md:h-[105px]" />
                                <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
                                    <div className="text-xs md:text-sm uppercase">Wheelchair Access</div>
                                    <div className="text-lg md:text-xl font-bold mb-2">Yes</div>
                                    <div className="text-xs md:text-sm uppercase">Call the provider</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div> */}
                <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-4">
  <motion.div
    className="flex flex-col"
    custom={0}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={columnVariants}
  >
    <div className="bg-black text-[#00AACB] w-full min-[820px]:w-[280px] p-4 space-y-4">
      <div className="flex items-center gap-3">
        <img src={per} alt="user" className="w-auto h-[90px] min-[820px]:h-[110px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">How Many</div>
          <div className="text-lg min-[820px]:text-xl font-bold mb-2">1-2 Person</div>
          <div className="text-xs min-[820px]:text-sm uppercase">Per Machine</div>
        </div>
      </div>
      <div className="border-b border-[#00AACB] mx-2"></div>
      <div className="flex items-center gap-3">
        <img src={lane} alt="bowling" className="w-auto h-[90px] min-[820px]:h-[105px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">How Many Rooms</div>
          <div className="text-lg min-[820px]:text-xl font-bold">4 ROOMS</div>
        </div>
      </div>
    </div>
  </motion.div>

  <motion.div
    className="flex flex-col"
    custom={1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={columnVariants}
  >
    <div className="bg-black text-[#00AACB] w-full min-[820px]:w-[280px] p-4 space-y-4">
      <div className="flex items-center gap-3">
        <img src={clock2} alt="clock" className="w-auto h-[90px] min-[820px]:h-[110px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">Time</div>
          <div className="text-lg min-[820px]:text-xl font-bold mb-2">30 or 60</div>
          <div className="text-xs min-[820px]:text-sm uppercase">Minutes</div>
        </div>
      </div>
      <div className="border-b border-[#00AACB]"></div>
      <div className="flex items-center gap-6">
        <img src={dollar} alt="dollar" className="w-auto h-[90px] min-[820px]:h-[105px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">Price</div>
          <div className="text-lg min-[820px]:text-xl font-bold mb-2">9 to 17</div>
          <div className="text-xs min-[820px]:text-sm uppercase">Per Person</div>
        </div>
      </div>
    </div>
  </motion.div>

  <motion.div
    className="flex flex-col"
    custom={2}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={columnVariants}
  >
    <div className="bg-black text-[#00AACB] w-full min-[820px]:w-[280px] p-4 space-y-4">
      <div className="flex items-center gap-3">
        <img src={min} alt="group" className="w-auto h-[90px] min-[820px]:h-[110px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">Minimum Age</div>
          <div className="text-lg min-[820px]:text-xl font-bold">All Allowed</div>
        </div>
      </div>
      <div className="border-b border-[#00AACB]"></div>
      <div className="flex items-center gap-3">
        <img src={wheel} alt="wheelchair" className="w-auto h-[90px] min-[820px]:h-[105px]" />
        <div style={{ fontFamily: 'Posterama2001W04' }} className="leading-[1.4]">
          <div className="text-xs min-[820px]:text-sm uppercase">Wheelchair Access</div>
          <div className="text-lg min-[820px]:text-xl font-bold mb-2">Yes</div>
          <div className="text-xs min-[820px]:text-sm uppercase">Call the provider</div>
        </div>
      </div>
    </div>
  </motion.div>
</div>
                <div className="flex justify-center mt-8">
                    <button
                        style={{ fontFamily: 'Posterama2001W04' }}
                        onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                        className="bg-[#00AACB] w-[180px] h-[60px] text-[15px] md:text-[17px] hover:bg-[#E1017D] hover:text-white text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        BOOK NOW
                    </button>
                </div>

                <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-center text-2xl md:text-[44px] text-[#292524] mt-12 font-bold mb-4">
                    OTHER GAMES
                </h1>
                <Cards />
            </div>



            <Footer />

        </>
    )
}

export default Dance