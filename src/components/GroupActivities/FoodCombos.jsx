import React from 'react' 
import { useBooking } from '../../hooks/useBooking';
import Navbar from '../Navbar'
import pizza from '../../assets/pizza.svg'
import beer from '../../assets/beer.svg'
import burger from '../../assets/burger.svg'
import glass from '../../assets/glasses.svg'
import pint from '../../assets/pint.svg'
import { motion } from 'framer-motion';
import heart from '../../assets/heart.svg'
import wings from '../../assets/wings.svg'
import burger2 from '../../assets/burger2.svg'
import tube from '../../assets/tube.svg'
import chicken from '../../assets/chicken.svg'
import Footer from '../Footer'
import { FaPizzaSlice, FaBeer, FaHamburger, FaGlassCheers, FaGlassWhiskey } from 'react-icons/fa';
const happy = '/assets/food3.svg'
const texture = '/assets/texture.svg'
const bg = '/assets/bg3.svg'
const arrow = '/assets/arrow2.svg'

const FoodCombos = () => {
  const handleBooking = useBooking();

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



    const combos = [
        {
            title: 'COMBO 1',
            items: [
                'The Buffalo Blaze',
                '2 Bevvies Per Person Cocktail Upgrade Available',
                'Big Boss Burger',
                'Prosecco, Wine, Or Bottled Beer On Arrival',
                'X',
            ],
        },
        {
            title: 'COMBO 2',
            items: [
                'Your Choice (1 pc)',
                '3 Bevvies Per Person Cocktail Upgrade Available',
                'Your Choice (2 pcs)',
                'Prosecco, Wine, Or Bottled Beer On Arrival',
                '1 Shot Per Person',
            ],
        },
        {
            title: 'COMBO 3',
            items: [
                'Your Choice (2 pcs)',
                '4 Bevvies Per Person Cocktail Upgrade Available',
                'Your Choice (4 pcs)',
                'Prosecco, Wine, Or Bottled Beer On Arrival',
                '1 Shot Per Person',
            ],
        },
    ];

    const menuData = [
        {
            icon: heart,
            iconStyle: "top-[-34px] right-[36px]",
            title: "STREET FOOD",

            items: [
                {
                    name: "HALLOUMI FRIES",
                    description: "Candied red chillies, parsley & sweet chill sauce",
                    calories: "515kcal"
                },
                {
                    name: "PARMESAN & TRUFFLE MAC & CHEESE BITES",
                    description: "Vegetarian parmesan, candied red chillies, spring onion & truffle mayonnaise",
                    calories: "545kcal"
                },
                {
                    name: "BATTERED PRAWN STARS",
                    description: "Candied red chillies, spring onion, lemon wedge & sweet chilli sauce",
                    calories: "675kcal"
                },
                {
                    name: "6/9 PIECE CHICKEN TENDERS",
                    description: "Honey, chilli-salt & your choice of dipping sauce",
                    calories: "680kcal/1020kcal"
                }
            ],
            sizeClass: { width: "w-full", height: "h-[426px]" },
            positionStyle: "translate-x-0 translate-y-0",
        },
        {
            icon: arrow,
            iconStyle: "top-[-55px] right-[40px]",
            title: "On The Side",

            items: [
                {
                    name: "Fries (VG,GF)",
                    description: "Salted fries ",
                    calories: "335kcal"
                },
                {
                    name: "Sweet Potato Fries (VG,GF)",
                    description: "Golden syup & Chilli-salt",
                    calories: "410kcal"
                },
                {
                    name: "Tater Tots",
                    description: "Golden syup & Chilli-salt (310kcal)",
                    calories: "310kcal"
                },

            ],
            sizeClass: { width: "w-full", height: "h-72" },
            positionStyle: "translate-x-2 translate-y-[4px]",
        },
        {
            icon: wings,
            iconStyle: "top-[-10px] right-[1px]",
            title: "Wings",
            items: [
                {
                    name: "Chicken Wings (GF)",
                    description: "Honey, chilli-salt & your choice of dipping sauce",
                    calories: "485kcal"
                },
                {
                    name: "Cauli Wings (VG)",
                    description: "pink pickled onions, spring onion, candied red chillies & your choice of dipping sauce",
                    calories: "385kcal"
                },

            ],
            sizeClass: { width: "w-full", height: "h-[250px]" },
            positionStyle: "translate-x-[-5px] translate-y-[15px]",
        },
        {
            icon: tube,
            iconStyle: "top-[-60px] right-[135px] max-sm:right-[32px]",
            title: "Sauces",
            items: [
                {
                    name: "Bull’s Eye BBQ (VG,GF)",
                    tags: "(654kcal)",
                    description: "",
                    calories: "515kcal"
                },
                {
                    name: "Sweet Chilli (VG,GF)",
                    tags: "(80kcal)",
                    description: "",
                    calories: "545kcal"
                },
                {
                    name: "Truffle Mayonnaise (V,GF)",
                    tags: "(260kcal)",
                    description: "",
                    calories: "675kcal"
                },
                {
                    name: "Smokey BACONNASISE (V,GF)",
                    tags: "(198kcal)",
                    description: "",
                    calories: "680kcal/1020kcal"
                },
                {
                    name: "Sticky Korean Barbecue (VG)",
                    tags: "(69kcal)",
                    description: "",
                    calories: "680kcal/1020kcal"
                }
            ],
            sizeClass: { width: "w-full", height: "h-72" },
            positionStyle: "translate-x-3 translate-y-[-14px]",
        },
        {
            icon: burger2,
            iconStyle: "top-[-20px] right-[35px] max-sm:right-[-22px]",
            title: "BURGES",
            items: [
                {
                    name: "Fried Chicken Burger",
                    description: "Brioche bun, sticky Korean barbecue, red gem lettuce & sliced red onion served with fries (1510kcal)",
                    calories: "1510kcal"
                },
                {
                    name: "Fried Cauli Burger (V)",
                    description: "Brioche bun, sticky Korean barbecue, red gem lettuce & sliced red onion served with fries VG OPION AVAILABLE",
                    calories: "1220kcal"
                },

            ],
            sizeClass: { width: "w-full", height: "h-[258px]" },
            positionStyle: "translate-x-[-3px] translate-y-[25px]",
        },
        {
            icon: chicken,
            iconStyle: "top-[-40px] right-[10px] max-sm:right-[-22px]",
            title: "FULLY LOADED FRIES",
            items: [
                {
                    name: "Bacon Parmesan",
                    description: "Smokey baconnaise, bacon bits, crispy fried onions, pickled red onions & parmesan (960kcal)",
                    calories: "960kcal"
                },
                {
                    name: "Chicken Katsu",
                    tag: "Swap chicken for cauli (VG)",
                    description: "Chicken, katsu curry, salt & chilli mix, candied red chillies, pickled red onions & spring onion",
                    calories: "987kcal/847kcal"
                },

            ],
            sizeClass: { width: "w-full h-[300px]" },
            positionStyle: "translate-x-5 translate-y-[24px]",
        },
    ];
    return (
        <>
            <Navbar />
            {/* Banner Section Commented Out */}
            {/* <div className="relative md:h-screen w-full overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${happy})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center md:h-full py-20 text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-[84px] font-semibold mb-8 uppercase tracking-tighter">
                        Food Combos
                    </h1>
                    <div className="mb-8">
                        <button 
                            onClick={handleBooking}
                            className="bg-[#00AACB] hover:bg-cyan-600 text-white font-bold py-3 px-8 text-lg rounded-full uppercase tracking-tighter w-56 transition-all"
                        >
                            BOOK NOW
                        </button>
                    </div>


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
            <div className="w-full bg-fixed bg-cover bg-center pb-8"
                style={{ backgroundImage: `url(${texture})` }}>
                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        Our Street Food
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-5xl mx-auto text-sm md:text-base text-[#292524]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </section>

                {/* <div className="flex justify-center items-start gap-4 p-6 mt-12">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-black text-[#00AACB] w-[280px] h-[500px] p-6 rounded-[40px] flex flex-col gap-8 text-[20px] font-semibold overflow-hidden"
                        style={{ fontFamily: 'Posterama2001W04' }}
                    >
                        {[
                            { icon: pizza, text: 'PIZZA' },
                            { icon: beer, text: 'BEVVIES' },
                            { icon: burger, text: 'BURGER' },
                            { icon: glass, text: 'WELCOME BEVV!', className: 'ps-2' },
                            { icon: pint, text: 'SHOTS!!!' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`flex items-center gap-3 ${item.className || ''}`}
                                variants={slideFromLeft}
                                custom={i}
                            >
                                <img src={item.icon} />
                                {item.text}
                            </motion.div>
                        ))}
                    </motion.div>



                    {combos.map((combo, index) => (
                        <div key={index} className="flex flex-col items-center w-[280px]">

                            <h3 style={{ fontFamily: 'Posterama2001W04' }} className="text-black font-bold mt-[-50px]">{combo.title}</h3>
                            <p style={{ fontFamily: 'Posterama2001W04' }} className="text-black text-sm mb-2">HERE’S WHAT’S INCLUDED</p>
                            <div style={{ fontFamily: 'Noir Semi' }} className="bg-black text-[#00AACB] p-6 rounded-[40px] w-full text-center h-[500px] overflow-y-auto">
                                <motion.ul
                                    className="space-y-10 text-[21px]"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {combo.items.map((item, idx) => (
                                        <motion.li key={idx} variants={slideFromLeft} custom={idx}>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>



                            </div>
                        </div>
                    ))}

                </div> */}
                <div className="flex flex-wrap justify-center lg:justify-center items-start gap-4 p-6 mt-12">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-black text-[#00AACB] w-full max-w-[280px] lg:w-[280px] h-[500px] p-6 rounded-[40px] flex flex-col gap-8 text-[20px] font-semibold overflow-hidden mx-auto lg:mx-0"
                        style={{ fontFamily: 'Posterama2001W04' }}
                    >
                        {[
                            { icon: pizza, text: 'PIZZA' },
                            { icon: beer, text: 'BEVVIES' },
                            { icon: burger, text: 'BURGER' },
                            { icon: glass, text: 'WELCOME BEVV!', className: 'ps-2' },
                            { icon: pint, text: 'SHOTS!!!' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`flex items-center gap-3 ${item.className || ''}`}
                                variants={slideFromLeft}
                                custom={i}
                            >
                                <img src={item.icon} />
                                {item.text}
                            </motion.div>
                        ))}
                    </motion.div>

                    {combos.map((combo, index) => (
                        <div key={index} className="flex flex-col items-center w-full max-w-[280px] lg:w-[280px] mx-auto lg:mx-0">
                            <h3 style={{ fontFamily: 'Posterama2001W04' }} className="text-black font-bold mt-[18px] md:mt-[-50px] text-center">
                                {combo.title}
                            </h3>
                            <p style={{ fontFamily: 'Posterama2001W04' }} className="text-black text-sm mb-2 text-center">
                                HERE’S WHAT’S INCLUDED
                            </p>
                            <div style={{ fontFamily: 'Noir Semi' }} className="bg-black text-[#00AACB] p-6 rounded-[40px] w-full text-center h-[500px] overflow-y-auto">
                                <motion.ul
                                    className="space-y-10 text-[21px]"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {combo.items.map((item, idx) => (
                                        <motion.li key={idx} variants={slideFromLeft} custom={idx}>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    ))}

                </div>
                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                        Explore Our Menu!
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-5xl mx-auto text-sm md:text-base text-[#292524]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </section>

               
                <div className="py-12 px-24 max-sm:py-4 max-sm:px-4 md:py-8 md:px-8 box-border overflow-x-hidden">
                    <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-[1400px]">
                        {menuData.map((card, index) => (
                            <div
                                key={index}
                                className={`relative bg-cover bg-no-repeat bg-center pt-2 px-4 pb-2 custom-drop-shadow w-full max-sm:min-h-[200px] sm:${card.sizeClass.width} sm:${card.sizeClass.height} max-sm:transform-none transform ${card.positionStyle} box-border`}
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                <img
                                    src={card.icon}
                                    alt="icon"
                                    className={`absolute z-10 ${card.iconStyle}  max-sm:w-24 max-sm:top-[10px] max-sm:h-12 max-sm:icon-scaled`}
                                    style={{
                                        '--icon-top': card.iconStyle.match(/top-\[(-?\d+)px\]/)?.[1] + 'px',
                                        '--icon-right': card.iconStyle.match(/right-\[(\d+)px\]/)?.[1] + 'px',
                                    }}
                                />

                                <h2
                                    style={{ fontFamily: 'Posterama2001W04' }}
                                    className="text-[38px] max-sm:text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#292524] ps-10 max-sm:ps-4 sm:ps-8"
                                >
                                    {card.title}
                                </h2>

                                <ul className="space-y-1 text-gray-800 pe-4 ps-10 max-sm:ps-4 max-sm:pe-2 sm:ps-8 sm:pe-3">
                                    {card.items.map((item, idx) => (
                                        <li key={idx}>
                                            <p
                                                style={{ fontFamily: 'Posterama2001W04' }}
                                                className="text-[24px] max-sm:text-[18px] sm:text-[22px] md:text-[24px] font-semibold"
                                            >
                                                {item.name} <span className="text-[12px] max-sm:text-[10px]">{item.tags}</span>
                                            </p>
                                            <p
                                                style={{ fontFamily: 'Posterama2001W04' }}
                                                className="text-[20px] max-sm:text-[14px] sm:text-[18px] text-[#E1017D] font-semibold mb-1"
                                            >
                                                {item.tag}
                                            </p>
                                            {item.description && (
                                                <p
                                                    style={{ fontFamily: 'Noir Pro' }}
                                                    className="text-[19px] max-sm:text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 leading-[1.2]"
                                                >
                                                    <span>{item.description}</span>
                                                    {item.calories && (
                                                        <span className="text-[12px] max-sm:text-[9px] text-gray-600 ps-1 font-normal whitespace-nowrap">
                                                            ({item.calories})
                                                        </span>
                                                    )}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default FoodCombos