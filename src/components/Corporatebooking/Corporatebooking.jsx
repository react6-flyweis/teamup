import React from 'react'
import Navbar from '../Navbar'
import pizza from '../../assets/akar-icons_clock.svg'
import beer from '../../assets/beer.svg'
import burger from '../../assets/burger.svg'
import { useNavigate } from 'react-router-dom';
import glass from '../../assets/glasses.svg'
import pint from '../../assets/pint.svg'
import { motion } from 'framer-motion';
import Cards from '../Home/Cards'
import heart from '../../assets/heart.svg'
import wings from '../../assets/wings.svg'
import dollar from '../../assets/dollar2.svg'
import burger2 from '../../assets/burger2.svg'
import tube from '../../assets/tube.svg'
import chicken from '../../assets/chicken.svg'
import Footer from '../Footer'
import { FaPizzaSlice, FaBeer, FaHamburger, FaGlassCheers, FaGlassWhiskey } from 'react-icons/fa';
const happy = '/assets/corporate.svg'
const texture = '/assets/texture.svg'
const online = '/assets/online.svg'
const private2 = '/assets/private.svg'
const bg = '/assets/bg3.svg'
const arrow = '/assets/arrow2.svg'
const partyBanner = '/assets/party.svg'

const Corporatebooking = () => {

    const slideFromLeft = {
        hidden: { x: '-100vw', opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: 'easeOut',
            },
        }),
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${partyBanner})` }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                ></div>

                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 h-full text-white">
                    {/* Text, Button and Arrow */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20 flex flex-col items-center"
                    >
                        <h1 className="text-white text-4xl sm:text-[80px] font-bold mb-6 uppercase tracking-tighter leading-none drop-shadow-2xl">
                            CORPORATE <br className="md:hidden" /> BOOKING
                        </h1>
                        <p className="text-lg md:text-2xl font-semibold mb-8 max-w-2xl drop-shadow-lg">
                            The Ultimate Team Building Experience
                        </p>
                        <button 
                            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                            className="text-lg bg-[#00AACB] hover:bg-[#E1017D] hover:scale-110 transition-all duration-300 text-white rounded-full px-12 py-5 md:text-[28px] font-extrabold uppercase shadow-[0_0_20px_rgba(0,170,203,0.5)]"
                        >
                            Book Now
                        </button>

                        {/* Bouncing SVG Arrow */}
                        <div className="mt-16 animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-white opacity-80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full bg-fixed bg-cover bg-center pb-8"
                style={{ backgroundImage: `url(${texture})` }}>
                
                <section className="text-center pt-12 px-4">
                    <h2 className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        CORPORATE PARTY PACKAGES
                    </h2>

                    <p className="max-w-5xl mx-auto text-sm md:text-base text-[#292524]">
                        These are our most popular packages which allow your whole group to enjoy all that BOOM has to offer but we are (if we do say so ourselves) the ULTIMATE party planners and we can work to most group sizes, requests and budgets. So if these packages aren’t what you’re looking for, get in touch so we can create you something bespoke!
                    </p>
                </section>

                {/* Simplified Pricing Boxes */}
                <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-12">
                    {[
                        { 
                            icon: pint, 
                            heading: 'PINTS & PAYOFFS', 
                            value: '$45', 
                            sub: '2 HOURS OF GAMES\n2 BEVVIES PER PERSON\nCOCKTAIL UPGRADE AVAILABLE' 
                        },
                        { 
                            icon: beer, 
                            heading: 'BULLSTYLES & BEVVIES', 
                            value: '$72.50', 
                            sub: '2 HOURS OF GAMES\n3 BEVVIES + STREET FOOD\n1 SHOT PER PERSON' 
                        },
                        { 
                            icon: glass, 
                            heading: 'COCKTAILS & COMPLETION', 
                            value: '$89.50', 
                            sub: 'YOUR CHOICE (2 PCS)\n4 BEVVIES + STREET FOOD\n1 SHOT PER PERSON' 
                        }
                    ].map((box, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col bg-black text-[#00AACB] w-full min-[820px]:w-[320px] text-center p-8 rounded-2xl shadow-xl"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: i => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
                                })
                            }}
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img src={box.icon} alt={box.heading} className="w-auto h-[80px]" />
                                <div className="space-y-4">
                                    <div className="text-base min-[820px]:text-lg uppercase text-white font-bold tracking-tight">{box.heading}</div>
                                    <div className="text-3xl min-[820px]:text-5xl font-extrabold">{box.value}</div>
                                    <div className="text-white text-opacity-60 font-semibold text-sm">PER PERSON</div>
                                    {box.sub && (
                                        <div className="text-xs min-[820px]:text-sm text-white mt-4 whitespace-pre-line leading-relaxed">
                                            {box.sub}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                        className="bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white rounded-full px-12 py-4 text-xl font-bold uppercase shadow-lg"
                    >
                        BOOK NOW
                    </button>
                </div>

                <section className="text-center pt-12 px-4 mb-12">
                    <p className="max-w-6xl mx-auto text-sm font-semibold md:text-[20px] text-[#292524] italic">
                        Budget a bit tight? Still get in touch, we’ve got flexible, scalable options available for off-peak times to keep the fun going without breaking the bank!
                    </p>
                </section>

                {/* Booking & Private Hire Sections */}
                <div className="flex flex-col md:flex-row items-center justify-center text-white w-full py-12 px-4 md:px-8 overflow-hidden">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px]"
                    >
                        <img
                            src={online}
                            alt="Book Online"
                            className="w-full h-full object-cover rounded-l-3xl md:rounded-l-none"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-8 md:p-12 bg-black text-white flex flex-col justify-center"
                    >
                        <h2 className="text-2xl md:text-[40px] font-bold mb-6 uppercase tracking-tighter">BOOK ONLINE</h2>
                        <p className="text-base md:text-[20px] leading-relaxed text-gray-300 mb-8">
                            Ready to secure your corporate battleground? Our online booking system is quick, easy, and lets you choose the perfect time for your team to shine. Whether it's a small team outing or a larger department celebration, getting started is just a few clicks away.
                        </p>
                        <button 
                            onClick={() => window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank")}
                            className="bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 transition-all duration-300 text-white rounded-full px-8 py-3 text-lg font-bold w-max uppercase"
                        >
                            BOOK NOW
                        </button>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center justify-center text-white w-full py-12 px-4 md:px-8 overflow-hidden">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px] h-64 sm:h-80 md:h-[500px]"
                    >
                        <img
                            src={private2}
                            alt="Private Hire"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-full md:w-[660px] md:h-[500px] p-8 md:p-12 bg-black text-white flex flex-col justify-center"
                    >
                        <h2 className="text-2xl md:text-[40px] font-bold mb-6 uppercase tracking-tighter">PRIVATE HIRE</h2>
                        <p className="text-base md:text-[20px] leading-relaxed text-gray-300 mb-8">
                            Looking for something truly exclusive? Our venue is available for full or partial private hire, giving your organization the ultimate playground for networking, team building, or celebrating major milestones in style.
                        </p>
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-[#E1017D] hover:bg-[#00AACB] hover:scale-105 transition-all duration-300 text-white rounded-full px-8 py-3 text-lg font-bold w-max uppercase"
                        >
                            CONTACT US
                        </button>
                    </motion.div>
                </div>

                <h1 className="text-center text-2xl md:text-[44px] text-[#292524] mt-24 font-bold mb-8 uppercase tracking-tight">
                    OTHER GAMES
                </h1>
                <Cards />
            </div>
            <Footer />
        </>
    );
};

export default Corporatebooking;