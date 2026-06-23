
// import React, { useState } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
//         import { Link } from 'react-router-dom';

// import digi from '../../assets/digi.svg';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// export default function BookingSection() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedDay, setSelectedDay] = useState(21);
//     const [ticket30, setTicket30] = useState(0);
//     const [ticket60, setTicket60] = useState(0);
//     const [selectedIndex, setSelectedIndex] = useState(0); // 0 = Today by default
//     const [selectedTime, setSelectedTime] = useState('12:00'); // default selection

//     const getStatus = (day) => {
//         if (day === 21) return 'closed';
//         if ([22, 23, 24, 25, 29].includes(day)) return 'space';
//         if (day === 28) return 'fast';
//         if (day === 26) return 'sold';
//         return null;
//     };

//     const statusColors = {
//         closed: 'border-purple-500',
//         space: 'border-green-500',
//         fast: 'border-yellow-500',
//         sold: 'border-red-500',
//     };

//     const total = (ticket30 * 9 + ticket60 * 17).toFixed(2);

//     const days = [
//         { label: 'Today', date: 21 },
//         { label: 'Tue', date: 22 },
//         { label: 'Wed', date: 23 },
//         { label: 'Thu', date: 24 },
//         { label: 'Fri', date: 25 },
//         { label: 'Sat', date: 26 },
//     ];

//     const timeSlots = [
//         { time: '12:00', left: 3 },
//         { time: '13:00', left: 3 },
//         { time: '13:30', left: 3 },
//         { time: '14:00', left: 3 },
//         { time: '14:30', left: 1 },
//         { time: '15:00', left: 1 },
//         // { time: '15:30', left: 3 },
//         // { time: '16:00', left: 3 },
//         // { time: '16:30', left: 1 },
//     ];

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar />

//             {/* Main Content */}
//             <div className="flex-grow">
//                 {/* Hero Section */}
//                 <div
//                     className="h-[400px] max-sm:h-[200px] bg-cover bg-center"
//                     style={{ backgroundImage: `url(${golf})` }}
//                 ></div>

//                 {/* Content Section with Background Texture */}
//                 <div
//                     className="w-full bg-cover bg-center bg-fixed bg-no-repeat"
//                     style={{ backgroundImage: `url(${texture})` }}
//                 >
//                     <div className="relative top-[-200px] max-sm:top-[-100px] max-w-7xl mx-auto px-4 sm:px-4 pt-[-100px] pb-[0px]">
//                         {/* Products and Cart Section */}
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             {/* Products Section */}
//                             <div className="w-full sm:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-4">
//                                 {/* Header */}
//                                 <div className="flex items-start max-sm:flex-col gap-4 mb-6 mt-4">
//                                     <div className="flex-1">
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <button
//                                                 onClick={() => navigate(-1)}
//                                                 className="text-gray-700 hover:text-black transition"
//                                             >
//                                                 <FaArrowLeft className="text-lg" />
//                                             </button>
//                                             <h2
//                                                 style={{ fontFamily: 'Posterama2001W04' }}
//                                                 className="text-2xl sm:text-[39px] text-[#36363A] font-bold"
//                                             >
//                                                 GOLF SIMULATOR
//                                             </h2>
//                                         </div>
//                                         <p style={{ fontFamily: 'Noir Pro' }} className="text-[16px] max-sm:text-sm text-gray-600 mt-12 max-sm:mt-6">
//                                            Vr Arena for up to 8 players per Lane for 55 minutes{' '}
//                                             <span className="text-blue-500 cursor-pointer">Read more</span>
//                                         </p>
//                                     </div>
//                                     <img
//                                         src={golf}
//                                         alt="Bowling"
//                                         className="w-[273px] max-sm:w-[150px] h-auto object-cover rounded-lg max-sm:mt-4"
//                                     />
//                                 </div>

//                                 {/* Date Selection */}
//                                 <div className="mb-6">
//                                     <div className="flex items-center justify-between">
//                                         <label
//                                             style={{ fontFamily: 'Noir Semi' }}
//                                             className="text-lg sm:text-[24px] text-[#36363A] font-semibold mb-1"
//                                         >
//                                             Select a date
//                                         </label>
//                                         <button
//                                             onClick={() => setIsOpen(true)}
//                                             className="p-2 border rounded-md hover:bg-gray-100"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-gray-600"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth="2"
//                                                     d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                                 />
//                                             </svg>
//                                         </button>
//                                     </div>

//                                     <div>
//                                         <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">APR 2025</div>
//                                         <div style={{ fontFamily: 'Noir Semi' }} className="flex items-center gap-2 overflow-x-auto mt-2 touch-auto">
//                                             {days.map((day, idx) => (
//                                                 <div
//                                                     key={idx}
//                                                     onClick={() => setSelectedIndex(idx)}
//                                                     className={`px-3 sm:px-4 py-2 rounded-md min-w-[90px] sm:min-w-[118px] text-center cursor-pointer border ${selectedIndex === idx
//                                                             ? 'bg-[#00AACB] text-white font-semibold'
//                                                             : 'bg-white text-gray-800 hover:bg-gray-100'
//                                                         }`}
//                                                 >
//                                                     <div className="text-xs max-sm:text-[10px]">{day.label}</div>
//                                                     <div className="text-sm max-sm:text-xs font-bold">{day.date}</div>
//                                                 </div>
//                                             ))}
//                                             <button className="p-2 border rounded-md hover:bg-gray-100">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-gray-600"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Time Selection */}
//                                 <div className="mb-4">
//                                     <h3
//                                         style={{ fontFamily: 'Noir Semi' }}
//                                         className="text-[24px] max-sm:text-base text-[#36363A] font-semibold mb-2"
//                                     >
//                                         Select a time
//                                     </h3>
//                                     <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2">
//                                         {timeSlots.map((slot, i) => (
//                                             <div
//                                                 key={i}
//                                                 onClick={() => setSelectedTime(slot.time)}
//                                                 style={{ fontFamily: 'Noir Semi' }}
//                                                 className={`border rounded-md p-2 text-center text-sm max-sm:text-xs font-medium cursor-pointer ${selectedTime === slot.time
//                                                         ? 'bg-[#00AACB] text-white'
//                                                         : 'text-gray-800 bg-white hover:bg-gray-100'
//                                                     }`}
//                                             >
//                                                 <p className="text-xs max-sm:text-[10px] font-normal">{slot.left} left</p>
//                                                 <p>{slot.time}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <p
//                                         style={{ fontFamily: 'Noir' }}
//                                         className="text-[#006DF2] text-sm max-sm:text-xs mt-2 cursor-pointer flex items-center"
//                                     >
//                                         Show more times
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="16"
//                                             height="16"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             className="ml-1"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M19 9l-7 7-7-7"
//                                             />
//                                         </svg>
//                                     </p>

//                                 </div>

//                                 {/* Ticket Selection */}
//                                 <div style={{ fontFamily: 'Noir Semi' }} className="mb-4">
//                                     <h3 className="text-[24px] max-sm:text-base text-[#36363A] font-semibold mb-2">Select the ticket Size</h3>

//                                     {/* 30 Minutes */}
//                                     <div className="flex justify-between items-center mb-3">
//                                         <div>
//                                             <p className="text-[20px] max-sm:text-sm text-[#292524] font-medium">Golf Simulator for 55 minutes (up to 8 players)</p>
//                                             <p className="text-[20px] max-sm:text-sm text-[#292524] font-bold">$40.00</p>
//                                         </div>
//                                         <div className="flex items-center overflow-hidden rounded-xl bg-[#E7E7E7]">
//                                             <button
//                                                 onClick={() => setTicket30(Math.max(0, ticket30 - 1))}
//                                                 className="bg-[#00AACB] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
//                                             >
//                                                 -
//                                             </button>
//                                             <span className="w-12 max-sm:w-10 text-center text-[24px] max-sm:text-base text-gray-700 font-medium">{ticket30}</span>
//                                             <button
//                                                 onClick={() => setTicket30(ticket30 + 1)}
//                                                 className="bg-[#E1017D] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* 60 Minutes */}
//                                     {/* <div className="flex justify-between items-center">
//                                         <div>
//                                             <p className="text-[20px] max-sm:text-sm text-[#292524] font-medium">Duckpin Bowling Lane for 60 minutes</p>
//                                             <p className="text-[20px] max-sm:text-sm text-[#292524] font-bold">$17.00</p>
//                                         </div>
//                                         <div className="flex items-center overflow-hidden rounded-xl bg-[#E7E7E7]">
//                                             <button
//                                                 onClick={() => setTicket60(Math.max(0, ticket60 - 1))}
//                                                 className="bg-[#00AACB] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
//                                             >
//                                                 -
//                                             </button>
//                                             <span className="w-12 max-sm:w-10 text-center text-[24px] max-sm:text-base text-gray-700 font-medium">{ticket60}</span>
//                                             <button
//                                                 onClick={() => setTicket60(ticket60 + 1)}
//                                                 className="bg-[#E1017D] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div> */}
//                                 </div>

//                                 {/* Total & Checkout */}
//                                 <div style={{ fontFamily: 'Noir Semi' }} className="pt-4 border-t">
//                                     <div className="flex justify-between items-center text-[24px] max-sm:text-base text-[#292524] font-bold mb-4">
//                                         <span>Total</span>
//                                         <span>${total}</span>
//                                     </div>
//                                     <Link to={'/cart'}>
//                                     <button className="w-full bg-pink-600 text-white py-3 max-sm:py-2 rounded-lg text-lg max-sm:text-base font-bold">
//                                         CHECK OUT
//                                     </button></Link>
//                                 </div>
//                             </div>

//                             {/* Cart Section */}
//                             <div className="w-full sm:w-1/3 h-auto sm:h-[481px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-start mt-4 sm:mt-0">
//                                 <h2
//                                     style={{ fontFamily: 'Posterama2001W04' }}
//                                     className="text-2xl sm:text-[39px] text-[#36363A] font-bold text-black drop-shadow-md mb-6 sm:mb-10 mt-4"
//                                 >
//                                     YOUR CART
//                                 </h2>
//                                 <div className="flex flex-col items-center justify-center flex-grow">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-12 max-sm:w-10 h-12 max-sm:h-10 text-[#4a70b1] mb-4"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.829 14l.896-2h7.543c.783 0 1.469-.452 1.789-1.163l3.015-6.624A1 1 0 0019.166 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 13.37 5.48 15 7 15h12v-2H7.829z" />
//                                     </svg>
//                                     <p style={{ fontFamily: 'Noir Pro' }} className="text-gray-500 text-center text-xs sm:text-sm">
//                                         Your cart is empty. <br />
//                                         Add some items to get started
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Calendar Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
//                     <div className="bg-white w-full max-w-md max-sm:max-w-[90vw] p-5 max-sm:p-4 rounded-2xl shadow-xl relative">
//                         <div className="flex justify-between items-center mb-5 max-sm:mb-4">
//                             <h3 className="text-lg sm:text-xl font-semibold">APRIL 2025</h3>
//                             <div className="flex gap-2">
//                                 <button className="p-1 border rounded hover:bg-gray-100">◀</button>
//                                 <button className="p-1 border rounded hover:bg-gray-100">▶</button>
//                                 <button
//                                     className="p-1 border rounded hover:bg-gray-100"
//                                     onClick={() => setIsOpen(false)}
//                                 >
//                                     ✕
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-7 gap-2 max-sm:gap-1 text-xs sm:text-sm text-center mb-2">
//                             {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
//                                 <div key={d} className="font-semibold text-gray-700">
//                                     {d}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="grid grid-cols-7 gap-2 max-sm:gap-1 text-xs sm:text-sm text-center">
//                             {Array.from({ length: 30 }).map((_, idx) => {
//                                 const day = idx + 1;
//                                 const isUnavailable = day <= 20;
//                                 const status = getStatus(day);
//                                 const isSelected = selectedDay === day;

//                                 return (
//                                     <div
//                                         key={day}
//                                         onClick={() => {
//                                             if (!isUnavailable) setSelectedDay(day);
//                                         }}
//                                         className={`
//                                             px-2 max-sm:px-1 py-2 max-sm:py-1 rounded-lg cursor-pointer 
//                                             flex items-center justify-center 
//                                             ${isUnavailable ? 'bg-gray-100 text-gray-400' : ''}
//                                             ${!isUnavailable && isSelected ? 'bg-cyan-500 text-white' : 'bg-white'}
//                                             ${!isUnavailable && status ? `border-b-4 ${statusColors[status]}` : ''}
//                                         `}
//                                     >
//                                         {day}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                         <div className="mt-5 max-sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm">
//                             <div className="flex items-center gap-2">
//                                 <div className="w-4 h-1 bg-purple-500" />
//                                 <span>Online sales closed</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <div className="w-4 h-1 bg-green-500" />
//                                 <span>Lots of space</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <div className="w-4 h-1 bg-yellow-500" />
//                                 <span>Filling up fast</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <div className="w-4 h-1 bg-red-500" />
//                                 <span>Sold out</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <div className="w-4 h-1 bg-gray-300" />
//                                 <span>Unavailable</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <Footer />
//         </div>
//     );
// }

import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
        import { Link } from 'react-router-dom';

import digi from '../../assets/digi.svg';
import Navbar from '../Navbar';
import Footer from '../Footer';
// const team = '/assets/team.svg';
// const texture = '/assets/texture.svg';
// const duckpin = '/assets/duck.svg';
// const indoor = '/assets/indoor2.svg';
// const nexus = '/assets/nexus2.svg';
// const axe = '/assets/axe4.svg';
// const darts = '/assets/darts.svg';
// const golf = '/assets/golf5.svg';
// const base = '/assets/base.svg';
// const arcade = '/assets/arcade4.svg';
// const karaoke = '/assets/dance.svg';
// const snooker = '/assets/snooker4.svg';
const team = '/assets/team.svg';
const texture = '/assets/texture.svg';
const duckpin = '/assets/duck.svg';
const indoor = '/assets/indoor2.svg';
const nexus = '/assets/nexus2.svg';
const axe = '/assets/axe4.svg';
const darts = '/assets/darts.svg';
const golf = '/assets/golf5.svg';
const base = '/assets/base.svg';
const arcade = '/assets/arcade4.svg';
const karaoke = '/assets/dance.svg';
const snooker = '/assets/snooker4.svg';

export default function BookingSection() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(21);
    const [ticket30, setTicket30] = useState(0);
    const [ticket60, setTicket60] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0); // 0 = Today by default
    const [selectedTime, setSelectedTime] = useState('12:00'); // default selection

    const getStatus = (day) => {
        if (day === 21) return 'closed';
        if ([22, 23, 24, 25, 29].includes(day)) return 'space';
        if (day === 28) return 'fast';
        if (day === 26) return 'sold';
        return null;
    };

    const statusColors = {
        closed: 'border-purple-500',
        space: 'border-green-500',
        fast: 'border-yellow-500',
        sold: 'border-red-500',
    };

    const total = (ticket30 * 9 + ticket60 * 17).toFixed(2);

    const days = [
        { label: 'Today', date: 21 },
        { label: 'Tue', date: 22 },
        { label: 'Wed', date: 23 },
        { label: 'Thu', date: 24 },
        { label: 'Fri', date: 25 },
        { label: 'Sat', date: 26 },
    ];

    const timeSlots = [
        { time: '12:00', left: 3 },
        { time: '13:00', left: 3 },
        { time: '13:30', left: 3 },
        { time: '14:00', left: 3 },
        { time: '14:30', left: 1 },
        { time: '15:00', left: 1 },
        // { time: '15:30', left: 3 },
        // { time: '16:00', left: 3 },
        // { time: '16:30', left: 1 },
    ];

    return (
       <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-grow">
                        <div
                            className="h-[400px] max-sm:h-[200px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${golf})` }}
                        ></div>
                        <div
                            className="w-full bg-cover bg-center bg-fixed bg-no-repeat"
                            style={{ backgroundImage: `url(${texture})` }}
                        >
                            <div className="relative top-[-200px] max-sm:top-[-100px] max-w-7xl mx-auto px-4 sm:px-4 pt-[-100px] pb-[0px]">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-4">
                                        <div className="flex items-start max-sm:flex-col gap-4 mb-6 mt-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <button
                                                        onClick={() => navigate(-1)}
                                                        className="text-gray-700 hover:text-black transition"
                                                    >
                                                        <FaArrowLeft className="text-lg" />
                                                    </button>
                                                    <h2
                                                        style={{ fontFamily: 'Posterama2001W04' }}
                                                        className="text-2xl sm:text-[39px] text-[#36363A] font-bold"
                                                    >
                                                        golf simulator
                                                    </h2>
                                                </div>
                                                <p style={{ fontFamily: 'Noir Pro' }} className="text-[16px] max-sm:text-sm text-gray-600 mt-12 max-sm:mt-6">
                                                    Vr Arena for up to 8 players per Lane for 55 minutes{' '}
                                                    <span style={{textDecoration:'underline'}} className=" cursor-pointer">Read more</span>
                                                </p>
                                            </div>
                                            <img
                                                src={golf}
                                                alt="Bowling"
                                                className="w-[273px] max-sm:w-[150px] h-auto object-cover rounded-lg max-sm:mt-4"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between">
                                                <label
                                                    style={{ fontFamily: 'Noir Semi' }}
                                                    className="text-lg sm:text-[24px] text-[#36363A] font-semibold mb-1"
                                                >
                                                    Select a date
                                                </label>
                                                <button
                                                    onClick={() => setIsOpen(true)}
                                                    className="p-2 border rounded-md hover:bg-gray-100"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-gray-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div>
                                                <div className="hide-scrollbar text-xs sm:text-sm text-gray-600 font-medium mt-1">APR 2025</div>
                                                <div style={{ fontFamily: 'Noir Semi' }} className="hide-scrollbar flex items-center gap-2 overflow-x-auto mt-2 touch-auto">
                                                    {days.map((day, idx) => (
                                                        <div
                                                            key={idx}
                                                            onClick={() => setSelectedIndex(idx)}
                                                            className={`px-3 sm:px-4 py-2 rounded-md min-w-[90px] sm:min-w-[118px] text-center cursor-pointer border ${selectedIndex === idx
                                                                    ? 'bg-[#00AACB] text-white font-semibold'
                                                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                                                                }`}
                                                        >
                                                            <div className="text-xs max-sm:text-[10px]">{day.label}</div>
                                                            <div className="text-sm max-sm:text-xs font-bold">{day.date}</div>
                                                        </div>
                                                    ))}
                                                    <button className="p-2 border rounded-md hover:bg-gray-100">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-gray-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3
                                                style={{ fontFamily: 'Noir Semi' }}
                                                className="text-[24px] max-sm:text-base text-[#36363A] font-semibold mb-2"
                                            >
                                                Select a time
                                            </h3>
                                            <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2">
                                                {timeSlots.map((slot, i) => (
                                                    <div
                                                        key={i}
                                                        onClick={() => setSelectedTime(slot.time)}
                                                        style={{ fontFamily: 'Noir Semi' }}
                                                        className={`border rounded-md p-2 text-center text-sm max-sm:text-xs font-medium cursor-pointer ${selectedTime === slot.time
                                                                ? 'bg-[#00AACB] text-white'
                                                                : 'text-gray-800 bg-white hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        <p className="text-xs max-sm:text-[10px] font-normal">{slot.left} left</p>
                                                        <p>{slot.time}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p
                                                style={{ fontFamily: 'Noir' }}
                                                className="text-[#006DF2] text-sm max-sm:text-xs mt-2 cursor-pointer flex items-center"
                                            >
                                                Show more times
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="ml-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </p>
                                        </div>
                                        <div style={{ fontFamily: 'Noir Semi' }} className="mb-4">
                                            <h3 className="text-[24px] max-sm:text-base text-[#36363A] font-semibold mb-2">Select the ticket Size</h3>
                                            <div className="flex justify-between items-center mb-3">
                                                <div>
                                                    <p className="text-[20px] max-sm:text-sm text-[#292524] font-medium">Golf Simulator for 55 minutes (up to 8 players)</p>
                                                    <p className="text-[20px] max-sm:text-sm text-[#292524] font-bold">$40.00</p>
                                                </div>
                                                <div className="flex items-center overflow-hidden rounded-xl bg-[#E7E7E7]">
                                                    <button
                                                        onClick={() => setTicket30(Math.max(0, ticket30 - 1))}
                                                        className="bg-[#00AACB] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-12 max-sm:w-10 text-center text-[24px] max-sm:text-base text-gray-700 font-medium">{ticket30}</span>
                                                    <button
                                                        onClick={() => setTicket30(ticket30 + 1)}
                                                        className="bg-[#E1017D] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-[20px] max-sm:text-sm text-[#292524] font-medium">Golf Simulator for 55 minutes (up to 8 players)</p>
                                                    <p className="text-[20px] max-sm:text-sm text-[#292524] font-bold">$40.00</p>
                                                </div>
                                                <div className="flex items-center overflow-hidden rounded-xl bg-[#E7E7E7]">
                                                    <button
                                                        onClick={() => setTicket60(Math.max(0, ticket60 - 1))}
                                                        className="bg-[#00AACB] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-12 max-sm:w-10 text-center text-[24px] max-sm:text-base text-gray-700 font-medium">{ticket60}</span>
                                                    <button
                                                        onClick={() => setTicket60(ticket60 + 1)}
                                                        className="bg-[#E1017D] w-10 max-sm:w-8 h-10 max-sm:h-8 text-white text-lg max-sm:text-base flex items-center justify-center"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div style={{ fontFamily: 'Noir Semi' }} className="pt-4 border-t">
                                            <div className="flex justify-between items-center text-[24px] max-sm:text-base text-[#292524] font-bold mb-4">
                                                <span>Total</span>
                                                <span>${total}</span>
                                            </div>
                                            <Link to={'/cart'}>
                                                <button className="w-full bg-pink-600 text-white py-3 max-sm:py-2 rounded-lg text-lg max-sm:text-base font-bold">
                                                    CHECK OUT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/3 h-auto lg:h-[481px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-start mt-4 lg:mt-0">
                                        <h2
                                            style={{ fontFamily: 'Posterama2001W04' }}
                                            className="text-2xl sm:text-[39px] text-[#36363A] font-bold text-black drop-shadow-md mb-6 sm:mb-10 mt-4"
                                        >
                                            YOUR CART
                                        </h2>
                                        <div className="flex flex-col items-center justify-center flex-grow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 max-sm:w-10 h-12 max-sm:h-10 text-[#4a70b1] mb-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.829 14l.896-2h7.543c.783 0 1.469-.452 1.789-1.163l3.015-6.624A1 1 0 0019.166 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 13.37 5.48 15 7 15h12v-2H7.829z" />
                                            </svg>
                                            <p style={{ fontFamily: 'Noir Pro' }} className="text-gray-500 text-center text-xs sm:text-sm">
                                                Your cart is empty. <br />
                                                Add some items to get started
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="bg-white w-full max-w-md max-sm:max-w-[90vw] p-5 max-sm:p-4 rounded-2xl shadow-xl relative">
                                <div className="flex justify-between items-center mb-5 max-sm:mb-4">
                                    <h3 className="text-lg sm:text-xl font-semibold">APRIL 2025</h3>
                                    <div className="flex gap-2">
                                        <button className="p-1 border rounded hover:bg-gray-100">◀</button>
                                        <button className="p-1 border rounded hover:bg-gray-100">▶</button>
                                        <button
                                            className="p-1 border rounded hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 max-sm:gap-1 text-xs sm:text-sm text-center mb-2">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                                        <div key={d} className="font-semibold text-gray-700">
                                            {d}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-2 max-sm:gap-1 text-xs sm:text-sm text-center">
                                    {Array.from({ length: 30 }).map((_, idx) => {
                                        const day = idx + 1;
                                        const isUnavailable = day <= 20;
                                        const status = getStatus(day);
                                        const isSelected = selectedDay === day;

                                        return (
                                            <div
                                                key={day}
                                                onClick={() => {
                                                    if (!isUnavailable) setSelectedDay(day);
                                                }}
                                                className={`
                                                    px-2 max-sm:px-1 py-2 max-sm:py-1 rounded-lg cursor-pointer 
                                                    flex items-center justify-center 
                                                    ${isUnavailable ? 'bg-gray-100 text-gray-400' : ''}
                                                    ${!isUnavailable && isSelected ? 'bg-cyan-500 text-white' : 'bg-white'}
                                                    ${!isUnavailable && status ? `border-b-4 ${statusColors[status]}` : ''}
                                                `}
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-5 max-sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-1 bg-purple-500" />
                                        <span>Online sales closed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-1 bg-green-500" />
                                        <span>Lots of space</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-1 bg-yellow-500" />
                                        <span>Filling up fast</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-1 bg-red-500" />
                                        <span>Sold out</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-1 bg-gray-300" />
                                        <span>Unavailable</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Footer />
                </div>
    );
}