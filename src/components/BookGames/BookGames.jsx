
// import React, { useState } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import digi from '../../assets/digi.svg';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// const products = [
//   {
//     title: 'DUCKPIN BOWLING',
//     description: 'Sports Simulator for up to 2 players per machine for 30 or 60',
//     image: duckpin,
//   },
//   {
//     title: 'INDOOR MINI GOLF',
//     description: 'Hard Golf up to 6 players per lane for 45 minutes.',
//     image: indoor,
//   },
//   {
//     title: 'NEXUS GEL BLASTER',
//     description: 'Nexus Gel Blaster for up to 8 players per lane for 55 minutes.',
//     image: nexus,
//   },
//   {
//     title: 'DIGI AXE THROWING',
//     description: 'Axe Throwing for up to 6 players per lane for 30 or 60 minutes.',
//     image: axe,
//   },
//   {
//     title: 'DIGI ARCHERY',
//     description: 'Drone Soccer for up to 8 players per Lane for 55 minutes.',
//     image: digi,
//   },
//   {
//     title: 'AR DARTS',
//     description: 'Ar Darts for up to 6 players per lane for 55 minutes.',
//     image: darts,
//   },
//   {
//     title: 'GOLF SIMULATOR',
//     description: 'Vr Arena for up to 8 players per Lane for  55 minutes.',
//     image: golf,
//   },
//   {
//     title: 'Base ball simulator',
//     description: 'Beer Pong for up to 6 players per table for 30 or 60 minutes.',
//     image: base,
//   },
//   {
//     title: 'Arcade',
//     description: 'Arcade for up to 2 players per machine for 30 or 60 minutes.',
//     image: arcade,
//   },
//   {
//     title: 'Karaoke dance floor',
//     description: 'Karaoke Room for up to 6 players per room for 30 or 60 minutes.',
//     image: karaoke,
//   },
//   {
//     title: 'Snooker',
//     description: 'Shuffleboard for up to 6 players per table for 25 or 50 minutes.',
//     image: snooker,
//   },
// ];

// export default function BookingSection() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(21);

//   const getStatus = (day) => {
//     if (day === 21) return 'closed';
//     if ([22, 23, 24, 25, 29].includes(day)) return 'space';
//     if (day === 28) return 'fast';
//     if (day === 26) return 'sold';
//     return null;
//   };

//   const statusColors = {
//     closed: 'border-purple-500',
//     space: 'border-green-500',
//     fast: 'border-yellow-500',
//     sold: 'border-red-500',
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex-grow">
//         {/* Hero Section */}
//         <div className="h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}></div>

//         {/* Content Section with Background Texture */}
//         <div
//           className="w-full bg-cover bg-center bg-fixed bg-no-repeat"
//           style={{ backgroundImage: `url(${texture})` }}
//         >
//           <div className="relative top-[-200px]  max-w-7xl mx-auto px-4 pt-[-100px] pb-[0px]">
//             {/* Products and Cart Section */}
//             <div className="flex gap-4">
//               {/* Products Section */}
//               <div className="w-2/3 bg-white rounded-xl shadow-lg p-4">
//                 <div className="mb-4">
//                   <div className="flex items-center gap-3 mb-4">
//                     <button
//                       onClick={() => navigate(-1)}
//                       className="text-gray-700 hover:text-black transition"
//                     >
//                       <FaArrowLeft className="text-lg" />
//                     </button>
//                     <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-[39px] text-[#36363A] font-bold">
//                       PRODUCTS
//                     </h2>
//                   </div>

//                   <div className="bg-pink-100 border border-pink-300 text-sm text-black rounded-md p-4 mb-4">
//                     <p className="mb-2">
//                       We are a strictly over-21s venue. Alcohol cannot be consumed before or during our Axe Throwing sessions.
//                     </p>
//                     <p className="mb-2">
//                       If you plan to book Axes, make sure to book it as your first activity (so you can have a drink after).
//                     </p>
//                     <p>
//                       When building your games journey, make sure your sessions don’t overlap!
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <div className="flex items-center justify-between">
//                     <label
//                       style={{ fontFamily: 'Noir Pro' }}
//                       className="text-[24px] font-semibold mb-1"
//                     >
//                       When are you attending?
//                     </label>
//                     <button
//                       onClick={() => setIsOpen(true)}
//                       className="p-2 border rounded-md hover:bg-gray-100"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-5 h-5 text-gray-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   <div className="text-sm text-gray-600 font-medium mt-1">APR 2025</div>

//                   <div className="flex items-center gap-2 overflow-x-auto mt-2">
//                     {[
//                       { label: 'Today', date: 21, active: true },
//                       { label: 'Tue', date: 22 },
//                       { label: 'Wed', date: 23 },
//                       { label: 'Thu', date: 24 },
//                       { label: 'Fri', date: 25 },
//                       { label: 'Sat', date: 26 },
//                     ].map((day, idx) => (
//                       <div
//                         key={idx}
//                         className={`px-4 py-2 rounded-md min-w-[118px] text-center cursor-pointer border ${
//                           day.active
//                             ? 'bg-[#00bcd4] text-white font-semibold'
//                             : 'bg-white text-gray-800 hover:bg-gray-100'
//                         }`}
//                       >
//                         <div className="text-xs">{day.label}</div>
//                         <div className="text-sm font-bold">{day.date}</div>
//                       </div>
//                     ))}
//                     <button className="p-2 border rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-4 h-4 text-gray-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   {products.map((product, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-start justify-between gap-6 pb-4"
//                     >
//                       <div className="flex-1">
//                         <h3 style={{ fontFamily: 'Posterama2001W04' }} className="text-[32px] font-bold text-black mb-1">
//                           {product.title}
//                         </h3>
//                         <p style={{ fontFamily: 'Noir Pro' }} className="text-[18px] text-gray-700 mt-12">
//                           {product.description}{' '}
//                           <span className="text-blue-600 underline cursor-pointer">
//                             Read more
//                           </span>
//                         </p>
//                       </div>
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-[228px] h-[144px] rounded-md object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Cart Section */}
//               <div className="w-1/3 h-[481px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start">
//                 <h2
//                   style={{ fontFamily: 'Posterama2001W04' }}
//                   className="text-[39px] text-[#36363A] font-bold text-black drop-shadow-md mb-10"
//                 >
//                   YOUR CART
//                 </h2>
//                 <div className="flex flex-col items-center justify-center flex-grow">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-12 h-12 text-[#4a70b1] mb-4"
//                     fill 참="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.829 14l.896-2h7.543c.783 0 1.469-.452 1.789-1.163l3.015-6.624A1 1 0 0019.166 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 13.37 5.48 15 7 15h12v-2H7.829z" />
//                   </svg>
//                   <p className="text-gray-500 text-center text-sm">
//                     Your cart is empty. <br />
//                     Add some items to get started
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Calendar Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
//           <div className="bg-white w-full max-w-md p-5 rounded-2xl shadow-xl relative">
//             <div className="flex justify-between items-center mb-5">
//               <h3 className="text-xl font-semibold">APRIL 2025</h3>
//               <div className="flex gap-2">
//                 <button className="p-1 border rounded hover:bg-gray-100">◀</button>
//                 <button className="p-1 border rounded hover:bg-gray-100">▶</button>
//                 <button
//                   className="p-1 border rounded hover:bg-gray-100"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//             <div className="grid grid-cols-7 gap-2 text-sm text-center mb-2">
//               {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
//                 <div key={d} className="font-semibold text-gray-700">
//                   {d}
//                 </div>
//               ))}
//             </div>
//             <div className="grid grid-cols-7 gap-2 text-sm text-center">
//               {Array.from({ length: 30 }).map((_, idx) => {
//                 const day = idx + 1;
//                 const isUnavailable = day <= 20;
//                 const status = getStatus(day);
//                 const isSelected = selectedDay === day;

//                 return (
//                   <div
//                     key={day}
//                     onClick={() => {
//                       if (!isUnavailable) setSelectedDay(day);
//                     }}
//                     className={`
//                       px-2 py-2 rounded-lg cursor-pointer 
//                       flex items-center justify-center 
//                       ${isUnavailable ? 'bg-gray-100 text-gray-400' : ''}
//                       ${!isUnavailable && isSelected ? 'bg-cyan-500 text-white' : 'bg-white'}
//                       ${!isUnavailable && status ? `border-b-4 ${statusColors[status]}` : ''}
//                     `}
//                   >
//                     {day}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-1 bg-purple-500" />
//                 <span>Online sales closed</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-1 bg-green-500" />
//                 <span>Lots of space</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-1 bg-yellow-500" />
//                 <span>Filling up fast</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-1 bg-red-500" />
//                 <span>Sold out</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-1 bg-gray-300" />
//                 <span>Unavailable</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

const products = [
  {
    title: 'INDOOR MINI GOLF',
    description: 'Hard Golf up to 6 players per lane for 45 minutes.',
    image: indoor,
  },
  {
    title: 'DUCKPIN BOWLING',
    description: 'Sports Simulator for up to 2 players per machine for 30 or 60',
    image: duckpin,
  },
  {
    title: 'AXE THROW',
    description: 'Axe Throwing for up to 6 players per lane for 30 or 60 minutes.',
    image: axe,
  },
  {
    title: 'AR ARCHERY',
    description: 'Drone Soccer for up to 8 players per Lane for 55 minutes.',
    image: digi,
  },
  {
    title: 'AR DARTS',
    description: 'Ar Darts for up to 6 players per lane for 55 minutes.',
    image: darts,
  },
  {
    title: 'KARAOKE DANCE',
    description: 'Karaoke Room for up to 6 players per room for 30 or 60 minutes.',
    image: karaoke,
  },
  {
    title: 'ARCADE',
    description: 'Arcade for up to 2 players per machine for 30 or 60 minutes.',
    image: arcade,
  },
  // {
  //   title: 'NEXUS GEL BLASTER',
  //   description: 'Nexus Gel Blaster for up to 8 players per lane for 55 minutes.',
  //   image: nexus,
  // },
  // {
  //   title: 'GOLF SIMULATOR',
  //   description: 'Vr Arena for up to 8 players per Lane for  55 minutes.',
  //   image: golf,
  // },
  // {
  //   title: 'Base ball simulator',
  //   description: 'Beer Pong for up to 6 players per table for 30 or 60 minutes.',
  //   image: base,
  // },
  // {
  //   title: 'Snooker',
  //   description: 'Shuffleboard for up to 6 players per table for 25 or 50 minutes.',
  //   image: snooker,
  // },
];

export default function BookingSection() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(21);

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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="h-[400px] bg-cover bg-center sm:h-[400px]" style={{ backgroundImage: `url(${team})` }}></div>

        {/* Content Section with Background Texture */}
        <div
          className="w-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <div className="relative top-[-200px] max-w-7xl mx-auto px-4 pt-[-100px] pb-[0px]">
            {/* Products and Cart Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Products Section */}
              <div className="w-full sm:w-2/3 bg-white rounded-xl shadow-lg p-4">
                <div className="mb-4">
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
                      PRODUCTS
                    </h2>
                  </div>

                  <div className="bg-pink-100 border border-pink-300 text-xs sm:text-sm text-black rounded-md p-4 mb-4">
                    <p className="mb-2">
                      We are a strictly over-21s venue. Alcohol cannot be consumed before or during our Axe Throwing sessions.
                    </p>
                    <p className="mb-2">
                      If you plan to book Axes, make sure to book it as your first activity (so you can have a drink after).
                    </p>
                    <p>
                      When building your games journey, make sure your sessions don’t overlap!
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <label
                      style={{ fontFamily: 'Noir Pro' }}
                      className="text-lg sm:text-[24px] font-semibold mb-1"
                    >
                      When are you attending?
                    </label>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="p-2 border rounded-md hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
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

                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">APR 2025</div>

                  <div className="flex items-center gap-2 overflow-x-auto mt-2 touch-auto">
                    {[
                      { label: 'Today', date: 21, active: true },
                      { label: 'Tue', date: 22 },
                      { label: 'Wed', date: 23 },
                      { label: 'Thu', date: 24 },
                      { label: 'Fri', date: 25 },
                      { label: 'Sat', date: 26 },
                    ].map((day, idx) => (
                      <div
                        key={idx}
                        className={`px-3 sm:px-4 py-2 rounded-md min-w-[90px] sm:min-w-[118px] text-center cursor-pointer border ${day.active
                          ? 'bg-[#00bcd4] text-white font-semibold'
                          : 'bg-white text-gray-800 hover:bg-gray-100'
                          }`}
                      >
                        <div className="text-xs">{day.label}</div>
                        <div className="text-sm font-bold">{day.date}</div>
                      </div>
                    ))}
                    <button className="p-2 border rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 pb-4"
                    >
                      <div className="flex-1">
                        <h3
                          style={{ fontFamily: 'Posterama2001W04' }}
                          className="text-xl sm:text-[32px] font-bold text-black mb-1"
                        >
                          {product.title}
                        </h3>
                        <p
                          style={{ fontFamily: 'Noir Pro' }}
                          className="text-sm sm:text-[18px] text-gray-700 mt-4 sm:mt-12"
                        >
                          {product.description}{' '}
                          <span className="text-blue-600 underline cursor-pointer">
                            Read more
                          </span>
                        </p>
                      </div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full sm:w-[228px] h-[144px] rounded-md object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Section */}
              <div className="w-full sm:w-1/3 h-auto sm:h-[481px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-start mt-4 sm:mt-0">
                <h2
                  style={{ fontFamily: 'Posterama2001W04' }}
                  className="text-2xl sm:text-[39px] text-[#36363A] font-bold text-black drop-shadow-md mb-6 sm:mb-10"
                >
                  YOUR CART
                </h2>
                <div className="flex flex-col items-center justify-center flex-grow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-[#4a70b1] mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.829 14l.896-2h7.543c.783 0 1.469-.452 1.789-1.163l3.015-6.624A1 1 0 0019.166 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 13.37 5.48 15 7 15h12v-2H7.829z" />
                  </svg>
                  <p className="text-gray-500 text-center text-xs sm:text-sm">
                    Your cart is empty. <br />
                    Add some items to get started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-5 rounded-2xl shadow-xl relative">
            <div className="flex justify-between items-center mb-5">
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
            <div className="grid grid-cols-7 gap-2 text-xs sm:text-sm text-center mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                <div key={d} className="font-semibold text-gray-700">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-xs sm:text-sm text-center">
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
                      px-2 py-2 rounded-lg cursor-pointer 
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
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}