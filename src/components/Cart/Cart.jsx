import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bg from '../../assets/stepdown2.jpg'
const team = '/assets/cart2.svg'
const CheckoutPage = () => {
    const [accepted, setAccepted] = useState(false);

    const handleCheckbox = () => {
        setAccepted(!accepted);
    };
    return (
        <>
            <Navbar />
            {/* <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}></div> */}
            <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${team})` }}>
      {/* Centered CART text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 style={{ fontFamily: 'Posterama2001W04' }}  className="text-white text-4xl font-bold">CART</h1>
      </div>
    </div>
            <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}>

                <div className="bg-fixed bg-cover bg-center p-4 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center">

                    {/* Checkout Form */}
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
                        <h2 style={{ fontFamily: 'Posterama2001W04' }}  className="text-xl md:text-2xl font-bold mb-4">ENTER YOUR DETAILS TO CHECKOUT</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Enter your first name..."
                                className="bg-black text-white placeholder-gray-400 rounded px-4 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Enter your last name..."
                                className="bg-black text-white placeholder-gray-400 rounded px-4 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email id..."
                                className="bg-black text-white placeholder-gray-400 rounded px-4 py-2"
                            />
                            <input
                                type="tel"
                                placeholder="Enter your number..."
                                className="bg-black text-white placeholder-gray-400 rounded px-4 py-2"
                            />
                        </div>

                        <h3 className="text-lg font-bold mb-2 mt-4">APPLY A DISCOUNT</h3>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter here..."
                                className="bg-black text-white placeholder-gray-400 rounded px-4 py-2 w-full"
                            />
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded font-semibold">
                                APPLY
                            </button>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[460px]">
                        <h2 style={{ fontFamily: 'Posterama2001W04' }}  className="text-xl font-bold mb-4">YOUR CART</h2>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded">
                                Apr, Tue 15 2025
                            </span>
                            <span className="bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded">
                                12:00, 30min
                            </span>
                        </div>
                        <div className="flex gap-3 items-start mb-4">
                            <img
                                src="https://img.freepik.com/free-photo/bowling-ball-falling-bowling-pins-close-up-generated-by-ai_188544-9662.jpg"
                                alt="Duckpin"
                                className="w-16 h-16 rounded object-cover"
                            />
                            <div className="text-sm">
                                <p className="font-bold">Duckpin Bowling Lane for 30 minutes</p>
                                <p className="text-gray-600 line-through text-xs">$99.00</p>
                            </div>
                        </div>

                        <div className="text-sm text-gray-700 mb-2">
                            <p>Subtotal <span className="float-right">$28.00</span></p>
                            <p>Total Tax <span className="float-right">$5.00</span></p>
                        </div>

                        <div className="font-bold text-lg text-black border-t pt-2">
                            Total <span className="float-right">$28.00</span>
                        </div>
                        <p className="text-xs text-gray-500">(inc. tax)</p>
                    </div>

                </div>
                <div className="ps-12 pe-12 pb-12 rounded-md">
                    {/* Checkbox with label */}
                    <label className="flex items-center space-x-2 mb-4 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={handleCheckbox}
                            className="w-4 h-4"
                        />
                        <span className="text-sm">
                            <span className="text-orange-500 font-semibold">I have read and accept the </span>
                            <span className="font-bold text-black underline">Terms and Conditions</span>
                        </span>
                    </label>

                    {/* Checkout button */}
                    <button style={{ fontFamily: 'Posterama2001W04' }} 
                        disabled={!accepted}
                        className={`w-full py-3 rounded-md text-white font-bold text-lg transition ${accepted ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-700 cursor-not-allowed'
                            }`}
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckoutPage;
