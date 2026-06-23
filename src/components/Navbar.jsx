

//       import React, { useState, useRef, useEffect } from 'react';
//         import { useNavigate } from 'react-router-dom';

//         import bgImage from '../assets/bg.svg';
//         import strike from '../assets/strike2.svg';
//         import golf from '../assets/whacky.svg';
//         import blaster from '../assets/Traced.svg';
//         import axe from '../assets/Vector (42).svg';
//         import target from '../assets/target2.svg';
//         import dart from '../assets/Vector (43).svg';
//         import golf2 from '../assets/golfd.svg';
//         import arcade from '../assets/Vector (46).svg';
//         import karaoke from '../assets/Vector (45).svg';
//         import pool from '../assets/shuffles.svg';
//         import hour from '../assets/Traced Image (1).svg';
//         import confetti from '../assets/Vector (47).svg';
//         import crown from '../assets/Vector (48).svg';
//         import King from '../assets/Vector (49).svg';
//         import food from '../assets/Vector (50).svg';
//         import birds from '../assets/date3.svg';
//         import live from '../assets/Vector (51).svg';
//         import wine from '../assets/Vector (52).svg';
//         import glass from '../assets/Vector (53).svg';
//         import combo from '../assets/Vector (54).svg';
//         import cart from '../assets/cart.svg';
//         import twitter from '../assets/twitter.svg';
//         import insta from '../assets/insta.svg';
//         import fb3 from '../assets/fb3.svg';
//         import insta2 from '../assets/insta2.svg';
//         import google from '../assets/google.svg';
//         import { Link } from 'react-router-dom';
//         import arrow from '../assets/arrow.svg';
//         import fb from '../assets/fb.svg';
//         import link from '../assets/fb.svg';

//         const Navbar = () => {
//             const locations = [
//                 { city: "Folsom", state: "CA" },
//                 { city: "Citrus Heights", state: "CA" },
//             ];

//             const [selected, setSelected] = useState(locations[1]);
//             const [isOpen, setIsOpen] = useState(false);
//             const [isOpen2, setIsOpen2] = useState(false);
//             const [isOpen3, setIsOpen3] = useState(false);
//             const [showOtpModal, setShowOtpModal] = useState(false);
//             const [showOtpModal2, setShowOtpModal2] = useState(false);
//             const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//             const [hoveredMenu, setHoveredMenu] = useState(null);
//             const timeoutRef = useRef(null);
//             const navigate = useNavigate();

//             const handleSelect = (location) => {
//                 setSelected(location);
//                 setIsOpen(false);
//             };


//   const handleClick = () => {
//     navigate('/#booking-section');
//   };
//             const menuItems = {
//                 "Choose Game": [
//                     { name: "Duckpin Bowling", icon: strike, link: '/duckpin' },
//                     { name: "Indoor Mini Golf", icon: golf, link: '/indoor' },
//                     { name: "Laser Tag/ Gel Blaster", icon: blaster, link: '/nexus' },
//                     { name: "Axe Throw", icon: axe, link: '/axethrow' },
//                    { name: "AR Darts", icon: dart, link: '/darts' },
//                     { name: "AR Archery", icon: target, link: '/digi' },
//                     { name: "Golf Simulator", icon: golf2, link: '/golf' },
//                     { name: "Shuffle Board", icon: pool, link: '/snooker' },
//                     { name: "Karaoke Dance Floor", icon: karaoke, link: '/dance' },
//                     // { name: "Base Ball Simulator", icon: baseball, link: '/base' },
//                     { name: "Arcade", icon: arcade, link: '/arcade' },


//                 ],
//                 "Group Activities": [
//                     { name: "Happy Hour", icon: hour, link: '/happy' },
//                     { name: "Team Up Parties", icon: confetti, link: '/team' },
//                     { name: "Queens Night", icon: crown, link: '/queen' },
//                     { name: "Kings Night", icon: King, link: '/king' },
//                     { name: "Fully Loaded Lunch Times", icon: food, link: '/food' },
//                     { name: "Date Night", icon: birds, link: '/date' },
//                     { name: "Live Sports", icon: live, link: '/live' },
//                 ],
//                 "Bites & Drinks": [
//                     { name: "Cocktails", icon: wine,link:'/cocktails' },
//                     { name: "Beers", icon: glass,link:'/beers' },
//                     { name: "Food Combos", icon: combo,link:'/food' },
//                 ],
//                 "Corporates": [],
//             };

//             const handleMenuEnter = (menu) => {
//                 if (timeoutRef.current) clearTimeout(timeoutRef.current);
//                 setHoveredMenu(menu);
//             };

//             const handleMenuLeave = () => {
//                 timeoutRef.current = setTimeout(() => setHoveredMenu(null), 300);
//             };

//             const handleSubmenuEnter = () => {
//                 if (timeoutRef.current) clearTimeout(timeoutRef.current);
//             };

//             const handleSubmenuLeave = () => {
//                 timeoutRef.current = setTimeout(() => setHoveredMenu(null), 300);
//             };

//             const toggleMobileMenu = () => {
//                 setIsMobileMenuOpen(!isMobileMenuOpen);
//             };

//             return (
//                 <>
//                     <div className="w-full relative z-50">
//                         {/* Topbar */}
//                         <div style={{ fontFamily: 'Noir Pro' }} className="bg-[#292524] text-white text-[14px] font-normal text-xs px-4 sm:px-12 py-1 flex flex-col sm:flex-row justify-between items-center flex-wrap">
//                             <div className="mb-1 sm:mb-0 text-center sm:text-left">
//                                 Company Address: ABC Road, City, State, Country, Zip Code
//                             </div>
//                             <div className="flex items-center gap-3 text-white text-xs">
//                                 <img src={fb} alt="Facebook" />
//                                 <img src={twitter} alt="Twitter" />
//                                 <img src={link} alt="LinkedIn" />
//                                 <img src={insta} alt="Instagram" />
//                                 <Link to={'/cart'}><img src={cart} alt="Cart" /></Link>
//                                 <button onClick={() => setIsOpen2(true)} className="bg-[#E1017D] px-2 py-1 rounded text-white text-xs">Log In</button>
//                                 <button onClick={() => setIsOpen3(true)} className="bg-[#E1017D] px-2 py-1 rounded text-white text-xs">Sign Up</button>
//                             </div>
//                         </div>

//                         {isOpen2 && (
//                             <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-0">
//                                 <div
//                                     style={{ backgroundImage: `url(${texture})` }}
//                                     className="bg-cover bg-center text-center text-black w-full max-w-[600px] max-h-screen sm:h-[600px] p-4 sm:p-6 rounded shadow-lg relative overflow-y-auto"
//                                 >
//                                     <button
//                                         onClick={() => setIsOpen2(false)}
//                                         className="absolute top-3 right-4 text-black text-xl font-bold"
//                                     >
//                                         ✕
//                                     </button>

//                                     <h2
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="text-[24px] sm:text-[34px] text-[#292524] font-bold mb-2 mt-16 sm:mt-14"
//                                     >
//                                         WELCOME BACK!
//                                     </h2>

//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] leading-[1.4] text-[#292524] mb-6"
//                                     >
//                                         Log in to unlock epic games, good vibes, and unforgettable nights at Team UP!
//                                     </p>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="mb-6 text-left"
//                                     >
//                                         <label className="text-[16px] sm:text-[18px] block mb-2 text-[#292524]">
//                                             Enter your email address/phone number
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
//                                         />
//                                     </div>

//                                     <p style={{ fontFamily: 'Noir Semi' }} className="text-sm text-left mb-2 flex items-center gap-3 mb-8">
//                                         <span className="text-[18px] font-semibold text-[#292524]">Log in with social media.</span>
//                                         <div className="flex items-center gap-2">
//                                             <img src={google} alt="Google" className="w-6 h-6 rounded-full" />
//                                             <img src={insta2} alt="Instagram" className="w-6 h-6 rounded-full bg-white p-1" />
//                                             <img src={fb3} alt="Facebook" className="w-6 h-6 rounded-full" />
//                                         </div>
//                                     </p>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="flex items-start sm:items-center text-left mb-6"
//                                     >
//                                         <input type="checkbox" className="mr-2 mt-1 sm:mt-0" />
//                                         <label className="text-[16px] sm:text-[18px] text-white">
//                                             I have read and accept the{' '}
//                                             <span className="font-semibold underline text-[#292524]">
//                                                 Terms and Conditions
//                                             </span>
//                                         </label>
//                                     </div>

//                                     <button
//                                         onClick={() => {
//                                             setShowOtpModal(true);
//                                             setIsOpen2(false);
//                                         }}
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="w-full bg-[#E1017D] text-[16px] sm:text-[18px] md:mt-24 text-white py-3 rounded font-semibold"
//                                     >
//                                         NEXT
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         {isOpen3 && (
//                             <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
//                                 <div
//                                     style={{ backgroundImage: `url(${texture})` }}
//                                     className="bg-cover bg-center text-center text-black w-full max-w-[600px] h-[600px] sm:h-auto sm:rounded sm:p-6 p-4 rounded-md shadow-lg relative overflow-y-auto"
//                                 >
//                                     <button
//                                         onClick={() => setIsOpen3(false)}
//                                         className="absolute top-3 right-4 text-black text-xl font-bold"
//                                     >
//                                         ✕
//                                     </button>

//                                     <h2
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="text-[28px] sm:text-[34px] text-[#292524] font-bold mb-1 mt-10 sm:mt-8"
//                                     >
//                                         SIGN UP WITH TEAM UP
//                                     </h2>

//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] mt-4 leading-[1.3] text-[#292524] mb-4"
//                                     >
//                                         Sign up now to book parties, play epic games, and be part of the ultimate nightlife experience at Team UP!
//                                     </p>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="mt-10 sm:mt-12 mb-4 text-left"
//                                     >
//                                         <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">Full Name</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
//                                         />
//                                     </div>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="mb-4 text-left"
//                                     >
//                                         <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">Enter your email address/phone number</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
//                                         />
//                                     </div>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="mb-4 text-left"
//                                     >
//                                         <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">Enter your date of birth (optional)</label>
//                                         <input
//                                             type="text"
//                                             className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
//                                         />
//                                     </div>

//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-left mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
//                                     >
//                                         <span className="text-[16px] sm:text-[18px] font-semibold text-[#292524]">Sign up with social media.</span>
//                                         <div className="flex items-center gap-2">
//                                             <img src={google} alt="Google" className="w-6 h-6 rounded-full" />
//                                             <img src={insta2} alt="Instagram" className="w-6 h-6 rounded-full bg-white p-1" />
//                                             <img src={fb3} alt="Facebook" className="w-6 h-6 rounded-full" />
//                                         </div>
//                                     </p>

//                                     <div
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="flex items-start sm:items-center text-left mb-4 mt-10 sm:mt-14"
//                                     >
//                                         <input type="checkbox" className="mr-2 mt-1 sm:mt-0" />
//                                         <label className="text-[16px] sm:text-[18px] text-white">
//                                             I have read and accept the <span className="font-semibold underline text-[#292524]">Terms and Conditions</span>
//                                         </label>
//                                     </div>

//                                     <button
//                                         onClick={() => {
//                                             setShowOtpModal2(true);
//                                             setIsOpen3(false);
//                                         }}
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="w-full bg-[#E1017D] text-[16px] sm:text-[18px] mt-6 sm:mt-8 text-white py-3 sm:py-4 rounded font-semibold"
//                                     >
//                                         NEXT
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                         {showOtpModal && (
//                             <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
//                                 <div
//                                     style={{ backgroundImage: `url(${texture})` }}
//                                     className="bg-cover bg-center w-full max-w-[600px] h-auto sm:h-[600px] rounded-lg p-4 sm:p-6 text-center relative"
//                                 >
//                                     <button
//                                         className="absolute top-4 left-4 text-black text-xl font-bold"
//                                         onClick={() => {
//                                             setShowOtpModal(false);
//                                             setIsOpen2(true);
//                                         }}
//                                     >
//                                         <img className="w-6 sm:w-8" src={arrow} alt="Back" />
//                                     </button>
//                                     <button
//                                         className="absolute top-4 right-4 text-black text-xl font-bold"
//                                         onClick={() => setShowOtpModal(false)}
//                                     >
//                                         ✕
//                                     </button>

//                                     <h2
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="text-[24px] sm:text-[34px] mt-20 sm:mt-24 text-[#292524] font-bold mb-2"
//                                     >
//                                         ENTER ONE TIME PASSWORD
//                                     </h2>
//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] leading-[1.1] text-[#292524] mb-4 mt-4 sm:mt-6"
//                                     >
//                                         Check your mail messages for a code. Codes requested via EMAIL may take up to a minute to appear.
//                                     </p>

//                                     <div className="flex justify-center gap-2 sm:gap-3 mb-4">
//                                         {[...Array(4)].map((_, i) => (
//                                             <input
//                                                 key={i}
//                                                 maxLength={1}
//                                                 className="w-12 h-12 sm:w-20 sm:h-12 text-center border border-gray-300 rounded-lg bg-white text-black text-lg font-bold mt-4"
//                                                 type="text"
//                                             />
//                                         ))}
//                                     </div>

//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] mb-4 text-[#292524]"
//                                     >
//                                         Did not receive a code{' '}
//                                         <button className="text-[#292524] font-semibold underline">Send Again</button>
//                                     </p>

//                                     <button
//                                         onClick={() => setShowOtpModal(false)}
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="bg-[#E1017D] text-white w-full p-3 sm:p-4 text-[16px] sm:text-[18px] rounded font-semibold mt-8 sm:mt-32"
//                                     >
//                                         LOG IN
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                         {showOtpModal2 && (
//                             <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
//                                 <div
//                                     style={{ backgroundImage: `url(${texture})` }}
//                                     className="bg-cover bg-center w-full max-w-[600px] h-auto sm:h-[600px] rounded-lg p-4 sm:p-6 text-center relative"
//                                 >
//                                     <button
//                                         className="absolute top-4 left-4 text-black text-xl font-bold"
//                                         onClick={() => {
//                                             setShowOtpModal2(false);
//                                             setIsOpen3(true);
//                                         }}
//                                     >
//                                         <img className="w-6 sm:w-8" src={arrow} alt="Back" />
//                                     </button>
//                                     <button
//                                         className="absolute top-4 right-4 text-black text-xl font-bold"
//                                         onClick={() => setShowOtpModal2(false)}
//                                     >
//                                         ✕
//                                     </button>

//                                     <h2
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="text-[24px] sm:text-[34px] mt-20 sm:mt-24 text-[#292524] font-bold mb-2"
//                                     >
//                                         ENTER ONE TIME PASSWORD
//                                     </h2>
//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] leading-[1.1] text-[#292524] mb-4 mt-4 sm:mt-6"
//                                     >
//                                         Check your mail messages for a code. Codes requested via EMAIL may take up to a minute to appear.
//                                     </p>

//                                     <div className="flex justify-center gap-2 sm:gap-3 mb-4">
//                                         {[...Array(4)].map((_, i) => (
//                                             <input
//                                                 key={i}
//                                                 maxLength={1}
//                                                 className="w-12 h-12 sm:w-20 sm:h-12 text-center border border-gray-300 rounded-lg bg-white text-black text-lg font-bold mt-4"
//                                                 type="text"
//                                             />
//                                         ))}
//                                     </div>

//                                     <p
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[16px] sm:text-[20px] mb-4 text-[#292524]"
//                                     >
//                                         Did not receive a code{' '}
//                                         <button className="text-[#292524] font-semibold underline">Send Again</button>
//                                     </p>

//                                     <button
//                                         onClick={() => setShowOtpModal2(false)}
//                                         style={{ fontFamily: 'Posterama2001W04' }}
//                                         className="bg-[#E1017D] text-white w-full p-3 sm:p-4 text-[16px] sm:text-[18px] rounded font-semibold mt-8 sm:mt-32"
//                                     >
//                                         Sign Up
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         {/* Navbar */}
//                         <div className="bg-cover bg-center text-white relative" style={{ backgroundImage: `url(${bgImage})` }}>
//                             <div className="relative">
//                                 {/* Main Menu */}
//                                 <div className="mx-auto flex flex-wrap items-center justify-between px-4 sm:px-12 py-3 gap-2 relative z-20">
//                                     {/* Logo */}
//                                     <Link to={'/'} className="flex items-center gap-2">
//                                         <img src={logo} alt="Team Up" className="w-32 sm:w-48" />
//                                     </Link>

//                                     {/* Hamburger Icon */}
//                                     <button className="sm:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                                         </svg>
//                                     </button>

//                                     {/* Desktop Menu */}
//                                     <div className="hidden sm:flex flex-wrap items-center gap-8 sm:gap-16">
//                                         <div className="relative inline-block w-40 text-white text-sm font-normal">
//                                             <div
//                                                 onClick={() => setIsOpen(!isOpen)}
//                                                 className="border border-[#8B8B8B] rounded-md px-3 py-2 bg-black/40 flex items-center justify-between cursor-pointer"
//                                             >
//                                                 <div className="flex items-start space-x-2">
//                                                     <img src="https://flagcdn.com/us.svg" alt="flag" className="w-4 h-4 mt-1" />
//                                                     <div>
//                                                         <div>{selected.city},</div>
//                                                         <div>{selected.state}</div>
//                                                     </div>
//                                                 </div>
//                                                 <svg className={`w-4 h-4 text-white transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                                 </svg>
//                                             </div>
//                                             {isOpen && (
//                                                 <div className="absolute mt-1 bg-black border border-gray-400 rounded shadow-md w-full z-10">
//                                                     {locations.map((loc, idx) => (
//                                                         <div
//                                                             key={idx}
//                                                             onClick={() => handleSelect(loc)}
//                                                             className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
//                                                         >
//                                                             {loc.city}, {loc.state}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className="flex flex-wrap items-center gap-4 text-[16px] abyssinica-sil-regular">
//                                             {Object.keys(menuItems).map((menu, idx) => {
//                                                 const hasSubMenu = Array.isArray(menuItems[menu]) && menuItems[menu].length > 0;
//                                                     const isDirectLink = !hasSubMenu && menu === "Corporates";

//                                                 return (
//                                                     <div
//                                                         key={idx}
//                                                         className="relative group flex items-center gap-1 cursor-pointer"
//                                                         onMouseEnter={() => hasSubMenu && handleMenuEnter(menu)}
//                                                         onMouseLeave={() => hasSubMenu && handleMenuLeave()}
//                                                          onClick={() => {
//               if (isDirectLink) {
//                 navigate('/corporate');
//               }
//             }}

//                                                     >
//                                                         <span className={`transition-colors duration-200 ${hoveredMenu === menu ? "text-[#E1017D]" : "text-white"}`}>
//                                                             {menu}
//                                                         </span>
//                                                         {hasSubMenu && (
//                                                             <svg className={`w-4 h-4 transform transition-transform duration-300 ${hoveredMenu === menu ? "rotate-180 text-[#E1017D]" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                                             </svg>
//                                                         )}
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     </div>

//                                     {/* Desktop Booking Buttons */}
//                                     <div style={{ fontFamily: 'Noir' }} className="hidden sm:flex gap-2">
//                                         <button onClick={() => {
//                                             setIsMobileMenuOpen(false);
//                                             navigate('/bookgames');
//                                         }} className="bg-[#E1017D] hover:bg-pink-600 text-white py-1 w-20 items-center rounded text-xs">
//                                             BOOK <br />GAMES
//                                         </button>
//                                         <button       onClick={handleClick}
//  className="bg-[#00AACB] hover:bg-cyan-500 text-white py-1 w-20 rounded text-xs">
//                                             BOOK <br />TABLES
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Desktop Dropdown */}
//                                 {hoveredMenu && !isMobileMenuOpen && (
//                                     <div
//                                         className="hidden sm:block w-full z-20 pb-4 pt-6"
//                                         style={{
//                                             backgroundImage: `url(${bgImage})`,
//                                             backgroundSize: 'cover',
//                                             backgroundPosition: 'center',
//                                         }}
//                                         onMouseEnter={handleSubmenuEnter}
//                                         onMouseLeave={handleSubmenuLeave}
//                                     >
//                                         <div className="max-w-screen-xl mx-auto">
//                                             {(hoveredMenu === "Choose Game" || hoveredMenu === "Group Activities" || hoveredMenu === "Bites & Drinks") && (
//                                                 <div className="grid grid-cols-3 sm:grid-cols-7 gap-6">
//                                                     {menuItems[hoveredMenu].map((item, index) => {
//                                                         const content = (
//                                                             <div className="flex flex-col items-center gap-2 text-white hover:bg-gray-700/50 rounded-lg ps-4 pe-4">
//                                                                 <img src={item.icon} alt={item.name} className="w-full h-[78px]" />
//                                                                 <span style={{ fontFamily: 'Noir' }} className="text-[18px] text-center">{item.name}</span>
//                                                             </div>
//                                                         );
//                                                         return item.link ? (
//                                                             <Link to={item.link} key={index}>{content}</Link>
//                                                         ) : (
//                                                             <div key={index}>{content}</div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Tipsy Thrills Section - Always Visible, Positioned Below Dropdown */}
//                                 {/* <div className="w-full  text-white py-2 px-4 text-center animated-stripes relative z-10">
//                                     <Link to="/tipsy">
//                                         <span style={{ fontFamily: 'Noir' }} className="text-[16px] sm:text-[18px] uppercase">
//                                             Tipsy Thrills - Sips & Thrills Fri 15th Aug
//                                         </span>
//                                     </Link>
//                                 </div> */}
//                              <div className="w-full py-2 px-4 text-center text-white animated-stripes-container animated-stripes">
//   <div className="stripes-content">
//     <Link to="/brunchcart">
//       <span style={{ fontFamily: 'Noir' }} className="text-[16px] sm:text-[18px] uppercase">
//         Tipsy Thrills - Sips & Thrills Fri 15th Aug
//       </span>
//     </Link>
//   </div>
// </div>


//                             </div>

//                             {/* Mobile Menu */}
//                             {isMobileMenuOpen && (
//                                 <div className="sm:hidden bg-black/90 w-full px-4 py-4 relative z-20">
//                                     <div className="flex flex-col gap-4">
//                                         <div className="relative inline-block w-full text-white text-sm font-normal">
//                                             <div
//                                                 onClick={() => setIsOpen(!isOpen)}
//                                                 className="border border-[#8B8B8B] rounded-md px-3 py-2 bg-black/40 flex items-center justify-between cursor-pointer"
//                                             >
//                                                 <div className="flex items-start space-x-2">
//                                                     <img src="https://flagcdn.com/us.svg" alt="flag" className="w-4 h-4 mt-1" />
//                                                     <div>
//                                                         <div>{selected.city},</div>
//                                                         <div>{selected.state}</div>
//                                                     </div>
//                                                 </div>
//                                                 <svg className={`w-4 h-4 text-white transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                                 </svg>
//                                             </div>
//                                             {isOpen && (
//                                                 <div className="absolute mt-1 bg-black border border-gray-400 rounded shadow-md w-full z-10">
//                                                     {locations.map((loc, idx) => (
//                                                         <div
//                                                             key={idx}
//                                                             onClick={() => handleSelect(loc)}
//                                                             className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
//                                                         >
//                                                             {loc.city}, {loc.state}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                         {Object.keys(menuItems).map((menu, idx) => (
//                                             <div key={idx} className="flex flex-col">
//                                                 <div
//                                                     className="text-white text-[16px] py-2 cursor-pointer flex items-center justify-between"
//                                                     onClick={() => setHoveredMenu(hoveredMenu === menu ? null : menu)}
//                                                 >
//                                                     <span>{menu}</span>
//                                                     {Array.isArray(menuItems[menu]) && menuItems[menu].length > 0 && (
//                                                         <svg className={`w-4 h-4 transform transition-transform ${hoveredMenu === menu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                                         </svg>
//                                                     )}
//                                                 </div>
//                                                 {hoveredMenu === menu && Array.isArray(menuItems[menu]) && menuItems[menu].length > 0 && (
//                                                     <div className="pl-4 flex flex-col gap-2">
//                                                         {menuItems[menu].map((item, index) => (
//                                                             item.link ? (
//                                                                 <Link
//                                                                     to={item.link}
//                                                                     key={index}
//                                                                     className="flex items-center gap-2 text-white hover:text-[#E1017D]"
//                                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                                 >
//                                                                     <img src={item.icon} alt={item.name} className="w-6 h-6" />
//                                                                     <span className="text-sm">{item.name}</span>
//                                                                 </Link>
//                                                             ) : (
//                                                                 <div key={index} className="flex items-center gap-2 text-white hover:text-[#E1017D]">
//                                                                     <img src={item.icon} alt={item.name} className="w-6 h-6" />
//                                                                     <span className="text-sm">{item.name}</span>
//                                                                 </div>
//                                                             )
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                         <div style={{ fontFamily: 'Noir' }} className="flex gap-2">
//                                             <button className="bg-[#E1017D] hover:bg-pink-600 text-white py-1 w-1/2 rounded text-xs" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 BOOK GAMES
//                                             </button>
//                                             <button className="bg-[#00AACB] hover:bg-cyan-500 text-white py-1 w-1/2 rounded text-xs" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 BOOK TABLES
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </>
//             );
//         };

//         export default Navbar;

import React, { useState, useRef } from 'react';
import { useLocationContext } from '../context/LocationContext';
import LocationSelector from './LocationSelector';
import { useBooking } from '../hooks/useBooking';

import { useNavigate, Link } from 'react-router-dom';
import bgImage from '../assets/bg.svg';
import strike from '../assets/strike2.svg';
import golf from '../assets/whacky.svg';
import axe from '../assets/Vector (42).svg';
import target from '../assets/target2.svg';
import dart from '../assets/Vector (43).svg';
import karaoke from '../assets/Vector (45).svg';
import hour from '../assets/Traced Image (1).svg';
import confetti from '../assets/Vector (47).svg';
import crown from '../assets/Vector (48).svg';
import King from '../assets/Vector (49).svg';
import food from '../assets/Vector (50).svg';
import birds from '../assets/date3.svg';
import combo from '../assets/Vector (54).svg';
import fb3 from '../assets/fb3.svg';
import insta2 from '../assets/insta2.svg';
import google from '../assets/google.svg';
import arrow from '../assets/arrow.svg';
// import blaster from '../assets/Traced.svg';
// import golf2 from '../assets/golfd.svg';
// import arcade from '../assets/Vector (46).svg';
// import pool from '../assets/shuffles.svg';
// import live from '../assets/Vector (51).svg';
// import wine from '../assets/Vector (52).svg';
// import glass from '../assets/Vector (53).svg';
// import cart from '../assets/cart.svg';
// import twitter from '../assets/twitter.svg';
// import insta from '../assets/insta.svg';
// import fb from '../assets/fb.svg';
// import link from '../assets/fb.svg';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import drinks_cocktails from '../assets/drinks_cocktails.svg';
import { useGames } from '../hooks/useGames';

const logo = '/assets/logo.svg';
const baseball = '/assets/ball.svg';
const texture = '/assets/texture.svg';

const gameAssetMap = {
  'indoor-mini-golf': { icon: golf, link: '/indoor' },
  'duckpin-bowling': { icon: strike, link: '/duckpin' },
  'axe-throw': { icon: axe, link: '/axethrow' },
  'ar-archery': { icon: target, link: '/digi' },
  'ar-darts': { icon: dart, link: '/darts' },
  'karaoke-dance': { icon: karaoke, link: '/dance' }
};

const Navbar = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showOtpModal2, setShowOtpModal2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const handleBooking = useBooking();

  const { data: gamesData } = useGames();
  const apiGames = gamesData?.games || [];

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setHoveredMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = () => {
    setIsMobileMenuOpen(false);
    handleBooking();
  };

  const chooseGameItems = apiGames
    .filter(game => game.isActive !== false)
    .map(game => {
      const mapping = gameAssetMap[game.slug] || {};
      return {
        name: game.name,
        icon: game.imageUrl || mapping.icon || strike,
        link: `/games/${game.slug}`,
      };
    });


  const menuItems = {
    'Choose Game': chooseGameItems,
    'Group Activities': [
      { name: 'Birthday Parties', icon: confetti, link: '/birthday' },
      { name: 'Team Up Parties', icon: confetti, link: '/team' },
      { name: 'Boom Bundle', icon: combo, link: '/boom-bundles' },
      { name: 'Queen Nights', icon: crown, link: '/queen' },
      { name: 'King Nights', icon: King, link: '/king' },
      { name: 'Date Night', icon: birds, link: '/date' },
      { name: 'Happy Hour', icon: hour, link: '/happy' },
      // { name: 'Fully Loaded Lunch Times', icon: food, link: '/food' },
      // { name: 'Live Sports', icon: live, link: '/live' },
    ],
    'Bites & Drinks': [
      { name: 'Drinks and Cocktails', icon: drinks_cocktails, link: '/cocktails' },
      { name: 'Street Food', icon: food, link: '/food' },
    ],
    Corporates: [],
  };

  const handleMenuClick = (menu) => {
    if (menu === 'Corporates') {
      navigate('/corporate');
      setHoveredMenu(null);
      setIsMobileMenuOpen(false);
    } else {
      setHoveredMenu(prev => (prev === menu ? null : menu));
    }
  };

  const handleSubItemClick = () => {
    setHoveredMenu(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <style>
        {`
          @media (min-width: 850px) {
            .mobile-only { display: none; }
            .desktop-only { display: flex; }
          }
          @media (max-width: 849px) {
            .mobile-only { display: block; }
            .desktop-only { display: none; }
          }
        `}
      </style>
      <div ref={navbarRef} className="w-full relative z-50">
        {/* Topbar */}
        <div
          style={{ fontFamily: 'Noir Pro' }}
          className="bg-[#292524] text-white text-[14px] font-normal text-xs px-4 sm:px-12 py-1 flex flex-col sm:flex-row justify-between items-center flex-wrap"
        >
          <div className="mb-1 sm:mb-0 text-center sm:text-left">
          </div>
          <div className="flex items-center gap-4 text-white">
            {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-sm" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-sm" /></a> */}
            {/* <button
              onClick={() => setIsOpen2(true)}
              className="bg-[#E1017D] px-2 py-1 rounded text-white text-xs"
            >
              Log In
            </button>
            <button
              onClick={() => setIsOpen3(true)}
              className="bg-[#E1017D] px-2 py-1 rounded text-white text-xs"
            >
              Sign Up
            </button> */}
          </div>
        </div>

        {/* Login Modal */}
        {isOpen2 && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-0">
            <div
              style={{ backgroundImage: `url(${texture})` }}
              className="bg-cover bg-center text-center text-black w-full max-w-[600px] max-h-screen sm:h-[600px] p-4 sm:p-6 rounded shadow-lg relative overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen2(false)}
                className="absolute top-3 right-4 text-black text-xl font-bold"
              >
                ✕
              </button>
              <h2
                style={{ fontFamily: 'Posterama2001W04' }}
                className="text-[24px] sm:text-[34px] text-[#292524] font-bold mb-2 mt-16 sm:mt-14"
              >
                WELCOME BACK!
              </h2>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] leading-[1.4] text-[#292524] mb-6"
              >
                Log in to unlock epic games, good vibes, and unforgettable nights at Team UP!
              </p>
              <div style={{ fontFamily: 'Noir Semi' }} className="mb-6 text-left">
                <label className="text-[16px] sm:text-[18px] block mb-2 text-[#292524]">
                  Enter your email address/phone number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
                />
              </div>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-sm text-left mb-2 flex items-center gap-3 mb-8"
              >
                <span className="text-[18px] font-semibold text-[#292524]">
                  Log in with social media.
                </span>
                <div className="flex items-center gap-2">
                  <img src={google} alt="Google" className="w-6 h-6 rounded-full" />
                  <img
                    src={insta2}
                    alt="Instagram"
                    className="w-6 h-6 rounded-full bg-white p-1"
                  />
                  <img src={fb3} alt="Facebook" className="w-6 h-6 rounded-full" />
                </div>
              </p>
              <div
                style={{ fontFamily: 'Noir Semi' }}
                className="flex items-start sm:items-center text-left mb-6"
              >
                <input type="checkbox" className="mr-2 mt-1 sm:mt-0" />
                <label className="text-[16px] sm:text-[18px] text-white">
                  I have read and accept the{' '}
                  <span className="font-semibold underline text-[#292524]">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <button
                onClick={() => {
                  setShowOtpModal(true);
                  setIsOpen2(false);
                }}
                style={{ fontFamily: 'Posterama2001W04' }}
                className="w-full bg-[#E1017D] text-[16px] sm:text-[18px] md:mt-24 text-white py-3 rounded font-semibold"
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* Sign Up Modal */}
        {isOpen3 && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div
              style={{ backgroundImage: `url(${texture})` }}
              className="bg-cover bg-center text-center text-black w-full max-w-[600px] h-[600px] sm:h-auto sm:rounded sm:p-6 p-4 rounded-md shadow-lg relative overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen3(false)}
                className="absolute top-3 right-4 text-black text-xl font-bold"
              >
                ✕
              </button>
              <h2
                style={{ fontFamily: 'Posterama2001W04' }}
                className="text-[28px] sm:text-[34px] text-[#292524] font-bold mb-1 mt-10 sm:mt-8"
              >
                SIGN UP WITH TEAM UP
              </h2>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] mt-4 leading-[1.3] text-[#292524] mb-4"
              >
                Sign up now to book parties, play epic games, and be part of the ultimate nightlife experience at Team UP!
              </p>
              <div style={{ fontFamily: 'Noir Semi' }} className="mt-10 sm:mt-12 mb-4 text-left">
                <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
                />
              </div>
              <div style={{ fontFamily: 'Noir Semi' }} className="mb-4 text-left">
                <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">
                  Enter your email address/phone number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
                />
              </div>
              <div style={{ fontFamily: 'Noir Semi' }} className="mb-4 text-left">
                <label className="text-[16px] sm:text-[18px] block mb-1 text-[#292524]">
                  Enter your date of birth (optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none"
                />
              </div>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-left mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
              >
                <span className="text-[16px] sm:text-[18px] font-semibold text-[#292524]">
                  Sign up with social media.
                </span>
                <div className="flex items-center gap-2">
                  <img src={google} alt="Google" className="w-6 h-6 rounded-full" />
                  <img
                    src={insta2}
                    alt="Instagram"
                    className="w-6 h-6 rounded-full bg-white p-1"
                  />
                  <img src={fb3} alt="Facebook" className="w-6 h-6 rounded-full" />
                </div>
              </p>
              <div
                style={{ fontFamily: 'Noir Semi' }}
                className="flex items-start sm:items-center text-left mb-4 mt-10 sm:mt-14"
              >
                <input type="checkbox" className="mr-2 mt-1 sm:mt-0" />
                <label className="text-[16px] sm:text-[18px] text-white">
                  I have read and accept the{' '}
                  <span className="font-semibold underline text-[#292524]">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <button
                onClick={() => {
                  setShowOtpModal2(true);
                  setIsOpen3(false);
                }}
                style={{ fontFamily: 'Posterama2001W04' }}
                className="w-full bg-[#E1017D] text-[16px] sm:text-[18px] mt-6 sm:mt-8 text-white py-3 sm:py-4 rounded font-semibold"
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* OTP Modal for Login */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div
              style={{ backgroundImage: `url(${texture})` }}
              className="bg-cover bg-center w-full max-w-[600px] h-auto sm:h-[600px] rounded-lg p-4 sm:p-6 text-center relative"
            >
              <button
                className="absolute top-4 left-4 text-black text-xl font-bold"
                onClick={() => {
                  setShowOtpModal(false);
                  setIsOpen2(true);
                }}
              >
                <img className="w-6 sm:w-8" src={arrow} alt="Back" />
              </button>
              <button
                className="absolute top-4 right-4 text-black text-xl font-bold"
                onClick={() => setShowOtpModal(false)}
              >
                ✕
              </button>
              <h2
                style={{ fontFamily: 'Posterama2001W04' }}
                className="text-[24px] sm:text-[34px] mt-20 sm:mt-24 text-[#292524] font-bold mb-2"
              >
                ENTER ONE TIME PASSWORD
              </h2>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] leading-[1.1] text-[#292524] mb-4 mt-4 sm:mt-6"
              >
                Check your mail messages for a code. Codes requested via EMAIL may take up to a minute to appear.
              </p>
              <div className="flex justify-center gap-2 sm:gap-3 mb-4">
                {[...Array(4)].map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-12 h-12 sm:w-20 sm:h-12 text-center border border-gray-300 rounded-lg bg-white text-black text-lg font-bold mt-4"
                    type="text"
                  />
                ))}
              </div>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] mb-4 text-[#292524]"
              >
                Did not receive a code{' '}
                <button className="text-[#292524] font-semibold underline">Send Again</button>
              </p>
              <button
                onClick={() => setShowOtpModal(false)}
                style={{ fontFamily: 'Posterama2001W04' }}
                className="bg-[#E1017D] text-white w-full p-3 sm:p-4 text-[16px] sm:text-[18px] rounded font-semibold mt-8 sm:mt-32"
              >
                LOG IN
              </button>
            </div>
          </div>
        )}

        {/* OTP Modal for Sign Up */}
        {showOtpModal2 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div
              style={{ backgroundImage: `url(${texture})` }}
              className="bg-cover bg-center w-full max-w-[600px] h-auto sm:h-[600px] rounded-lg p-4 sm:p-6 text-center relative"
            >
              <button
                className="absolute top-4 left-4 text-black text-xl font-bold"
                onClick={() => {
                  setShowOtpModal2(false);
                  setIsOpen3(true);
                }}
              >
                <img className="w-6 sm:w-8" src={arrow} alt="Back" />
              </button>
              <button
                className="absolute top-4 right-4 text-black text-xl font-bold"
                onClick={() => setShowOtpModal2(false)}
              >
                ✕
              </button>
              <h2
                style={{ fontFamily: 'Posterama2001W04' }}
                className="text-[24px] sm:text-[34px] mt-20 sm:mt-24 text-[#292524] font-bold mb-2"
              >
                ENTER ONE TIME PASSWORD
              </h2>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] leading-[1.1] text-[#292524] mb-4 mt-4 sm:mt-6"
              >
                Check your mail messages for a code. Codes requested via EMAIL may take up to a minute to appear.
              </p>
              <div className="flex justify-center gap-2 sm:gap-3 mb-4">
                {[...Array(4)].map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-12 h-12 sm:w-20 sm:h-12 text-center border border-gray-300 rounded-lg bg-white text-black text-lg font-bold mt-4"
                    type="text"
                  />
                ))}
              </div>
              <p
                style={{ fontFamily: 'Noir Semi' }}
                className="text-[16px] sm:text-[20px] mb-4 text-[#292524]"
              >
                Did not receive a code{' '}
                <button className="text-[#292524] font-semibold underline">Send Again</button>
              </p>
              <button
                onClick={() => setShowOtpModal2(false)}
                style={{ fontFamily: 'Posterama2001W04' }}
                className="bg-[#E1017D] text-white w-full p-3 sm:p-4 text-[16px] sm:text-[18px] rounded font-semibold mt-8 sm:mt-32"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {/* Navbar */}
        <div className="bg-cover bg-center text-white relative" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="relative">
            {/* Main Menu */}
            <div className="mx-auto flex flex-wrap items-center justify-between px-4 sm:px-12 py-3 gap-2 relative z-20">
              {/* Logo */}
              <Link to={'/'} className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="Team Up" className="w-32 sm:w-48" />
              </Link>

              {/* Hamburger Icon */}
              <button className="mobile-only text-white focus:outline-none" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>

              {/* Desktop Menu */}
              <div className="desktop-only flex-wrap items-center gap-8 sm:gap-16">
                <LocationSelector />
                <div className="flex flex-wrap items-center gap-4 text-[16px] abyssinica-sil-regular">
                  {Object.keys(menuItems).map((menu, idx) => {
                    const hasSubMenu = Array.isArray(menuItems[menu]) && menuItems[menu].length > 0;
                    const isDirectLink = !hasSubMenu && menu === 'Corporates';

                    return (
                      <div
                        key={idx}
                        className="relative group flex items-center gap-1 cursor-pointer"
                        onClick={() => handleMenuClick(menu)}
                      >
                        <span
                          className={`transition-colors duration-200 ${hoveredMenu === menu ? 'text-[#E1017D]' : 'text-white'
                            }`}
                        >
                          {menu}
                        </span>
                        {hasSubMenu && (
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${hoveredMenu === menu ? 'rotate-180 text-[#E1017D]' : 'text-white'
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Desktop Booking Buttons */}
              <div style={{ fontFamily: 'Noir' }} className="desktop-only flex gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleBooking();
                  }}
                  className="bg-[#E1017D] hover:bg-pink-600 text-white py-1 w-20 items-center rounded text-xs"
                >
                  BOOK <br />GAMES
                </button>
                <button
                  onClick={() => {
                    handleBooking();
                  }}
                  className="bg-[#00AACB] hover:bg-cyan-500 text-white py-1 w-20 rounded text-xs"
                >
                  BOOK <br />EVENTS
                </button>
              </div>
            </div>

            {/* Desktop Dropdown */}
            {hoveredMenu && !isMobileMenuOpen && (
              <div
                className="desktop-only w-full z-20 pb-4 pt-6 animate-dropdown"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-screen-xl mx-auto">
                  {(hoveredMenu === 'Choose Game' || hoveredMenu === 'Group Activities' || hoveredMenu === 'Bites & Drinks') && (
                    <div className="grid grid-cols-3 sm:grid-cols-7 gap-6">
                      {menuItems[hoveredMenu].map((item, index) => {
                        const content = (
                          <div className="flex flex-col items-center gap-2 text-white hover:bg-gray-700/50 rounded-lg ps-4 pe-4">
                            <img src={item.icon} alt={item.name} className="w-full h-[78px]" />
                            <span style={{ fontFamily: 'Noir' }} className="text-[18px] text-center">
                              {item.name}
                            </span>
                          </div>
                        );
                        return item.link ? (
                          <Link to={item.link} key={index} onClick={handleSubItemClick}>
                            {content}
                          </Link>
                        ) : (
                          <div key={index}>{content}</div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mobile-only bg-black/90 w-full px-4 py-4 relative z-20 animate-mobile-dropdown">
                <div className="flex flex-col gap-4">
                  <LocationSelector isMobile onSelect={() => setIsMobileMenuOpen(false)} />
                  {Object.keys(menuItems).map((menu, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div
                        className="text-white text-[16px] py-2 cursor-pointer flex items-center justify-between"
                        onClick={() => handleMenuClick(menu)}
                      >
                        <span>{menu}</span>
                        {Array.isArray(menuItems[menu]) && menuItems[menu].length > 0 && (
                          <svg
                            className={`w-4 h-4 transform transition-transform ${hoveredMenu === menu ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                      {hoveredMenu === menu && Array.isArray(menuItems[menu]) && menuItems[menu].length > 0 && (
                        <div className="pl-4 flex flex-col gap-2 animate-mobile-dropdown">
                          {menuItems[menu].map((item, index) => (
                            item.link ? (
                              <Link
                                to={item.link}
                                key={index}
                                className="flex items-center gap-2 text-white hover:text-[#E1017D]"
                                onClick={handleSubItemClick}
                              >
                                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ) : (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-white hover:text-[#E1017D]"
                              >
                                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                                <span className="text-sm">{item.name}</span>
                              </div>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div style={{ fontFamily: 'Noir' }} className="flex gap-2">
                    <button
                      className="bg-[#E1017D] hover:bg-pink-600 text-white py-1 w-1/2 rounded text-xs"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleBooking();
                      }}
                    >
                      BOOK GAMES
                    </button>
                    <button
                      className="bg-[#00AACB] hover:bg-cyan-500 text-white py-1 w-1/2 rounded text-xs"
                      onClick={handleClick}
                    >
                      BOOK TABLES
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tipsy Thrills Section */}
            <div className="w-full py-2 px-4 text-center text-white animated-stripes-container animated-stripes">
              <div className="stripes-content">
                <Link to="/brunchcart">
                  <span style={{ fontFamily: 'Noir' }} className="text-[16px] sm:text-[18px] uppercase">
                    Tipsy Thrills - Sips & Thrills Fri 15th Aug
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;