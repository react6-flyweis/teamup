import React from 'react'
import Navbar from './Navbar'
import duck from '../assets/cookies.svg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const texture = '/assets/texture.svg'

const Waiver = () => {
    return (
        <>
            <div className="relative md:h-screen w-full overflow-hidden">
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${duck})` }}
                    className="absolute top-12 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center md:h-full py-20 text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-[64px] font-semibold mb-4">
                        WAIVER
                    </h1>
                   
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

            <div className="w-full bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${texture})` }}>

                <section className="text-center pt-12 px-4">
                    <h2 style={{ fontFamily: 'Posterama2001W04' }}  className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
                      Liability Waiver
                    </h2>

                    <p style={{ fontFamily: 'Noir Semi' }} className="max-w-5xl mx-auto text-sm md:text-base text-[#292524]">
                      Please read the following liability waiver carefully before participating in any activities. By signing up or participating, you agree to the terms and conditions outlined below.
                    </p>
                </section>

                <div className="text-black px-4 md:px-20 py-10 space-y-8">
                    {/* Top Paragraph */}
                    <p style={{ fontFamily: 'Noir Pro' }} className="text-sm leading-relaxed">
                      Participating in sports and activities at Team-Up involves certain inherent risks. This waiver is designed to inform you of those risks and to obtain your agreement to release Team-Up from liability for any injuries or damages that may occur during your visit.
                    </p>

                    {/* Section 1 */}
                    <div>
                        <h2 style={{ fontFamily: 'Noir Semi' }} className="font-bold text-lg mb-4">Acknowledgment of Risks</h2>
                        <ul style={{ fontFamily: 'Noir Pro' }} className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                            <li>I acknowledge that participating in activities such as Axe Throwing, Darts, and Archery involves risks of physical injury.</li>
                            <li>I understand that I am responsible for following all safety rules and instructions provided by the staff.</li>
                            <li>I agree to use all equipment properly and only for its intended purpose.</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 style={{ fontFamily: 'Noir Semi' }} className="font-bold text-lg mb-4">Release of Liability</h2>
                        <ul style={{ fontFamily: 'Noir Pro' }} className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                            <li>I hereby release and hold harmless Team-Up, its owners, and staff from any and all liability for personal injury, property damage, or wrongful death.</li>
                            <li>This release applies to any negligence on the part of Team-Up, to the fullest extent permitted by law.</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 style={{ fontFamily: 'Noir Semi' }} className="font-bold text-lg mb-4">Consent to Medical Treatment</h2>
                        <p style={{ fontFamily: 'Noir Pro' }} className="text-sm leading-relaxed">
                            In the event of an injury, I consent to receive emergency medical treatment as deemed necessary by medical professionals or Team-Up staff. I understand that I am responsible for any costs associated with such treatment.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Waiver
