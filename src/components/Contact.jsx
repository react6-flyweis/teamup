import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from './Footer'
const texture = '/assets/stepdown.svg'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="w-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${texture})` }}>

        <section className="relative text-center pt-12 px-4 bg-cover bg-center">
          {/* Back Arrow */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
            aria-label="Go Back"
          >
            <FiArrowLeft className="text-xl text-black" />
          </button>

          <h2
            style={{ fontFamily: 'Posterama2001W04' }}
            className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide"
          >
            CONTACT US
          </h2>

          <p
            style={{ fontFamily: 'Noir Semi' }}
            className="max-w-4xl mx-auto text-sm md:text-base text-[#292524]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </section>

        <div className=" bg-cover p-4 flex items-center justify-center">
          <div className=" w-full max-w-4xl p-6 rounded">


            <form className="space-y-4">
              {/* Enquiry Type */}
              <div>
                <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Enquiry Type</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>Select your enquiry type...</option>
                  <option>General</option>
                  <option>Support</option>
                  <option>Sales</option>
                </select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">First Name</label>
                  <input type="text" placeholder="Enter your first name..." className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Last Name</label>
                  <input type="text" placeholder="Enter your last name..." className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Email</label>
                  <input type="email" placeholder="Enter your email id..." className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number..." className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
              </div>

              {/* DOB & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Date of Birth</label>
                  <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                  <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Your Location</label>
                  <input type="text" placeholder="Enter your location..." className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
              </div>

              {/* Comment */}
              <div>
                <label style={{ fontFamily: 'Noir Semi' }} className="block font-medium mb-1 text-[#292524]">Enter Your Comment</label>
                <textarea placeholder="Enter your comment..." className="w-full border border-gray-300 rounded px-3 py-2 h-28 resize-none" />
              </div>

              {/* Submit Button */}
              <div style={{ fontFamily: 'Posterama2001W04' }} className="text-right">
                <button type="submit" className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative w-full h-80">
          <iframe 
            title="Team-Up Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105844.757134375!2d-117.63673551351187!3d33.95015525492194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dccd3d052d9a65%3A0xc3317c80f4f9f4d2!2sEastvale%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1715180000000!5m2!1sen!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded p-6 w-[300px]">
            <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-lg font-bold mb-2">DO YOU HAVE REQUEST?</h2>
            <p style={{ fontFamily: 'Posterama2001W04' }} className="text-sm font-medium mb-1 text-black">CALL OR VISIT US.</p>
            <p className="text-orange-500 font-semibold text-lg mb-4">Call: 1800 123 4567</p>

            <p className="text-sm font-semibold text-black">Address:</p>
            <p className="text-sm mb-3 text-black">office address: Lorem is simply dummy text</p>

            <p className="text-sm font-semibold text-black">Opening Hours:</p>
            <p className="text-sm text-black">Mon – Fri: 9:00 am – 4:00 pm</p>
          </div>
        </div>


      </div>



      <Footer />

    </>
  )
}

export default Contact
