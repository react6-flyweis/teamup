import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';

const BookingSection = ({
  pro,
  calendar,
  clock,
  setShowModal,
}) => {
  const handleBooking = useBooking();
  return (
    <div id="booking-section" className="flex flex-col md:flex-row justify-center items-center md:h-[300px] gap-0.5 px-2 py-6 custom-ipad-mini-margin mt-12">
      <div className="w-full flex flex-col justify-center lg:flex-row gap-2 px-4 md:mt-24 md:mb-0 lg:px-0">
        {/* First Section: Text Content */}
        <div className="w-full lg:w-[623px] bg-[#2f2f2f] text-white py-6 rounded-lg flex flex-col justify-evenly">
          <div>
            <h3
              className="font-posterama text-[28px] lg:text-[36px] text-center font-bold mb-3"
            >
              WANT TO BOOK A TABLE?
            </h3>
            <p
              className="font-noir-pro text-[16px] lg:text-[20px] text-center px-4 lg:px-12 mb-2 leading-[1.4]"
            >
              Online table bookings are for up to 12 people*. If your group is more than 12 people, please{' '}
              <span className="text-[#FF3366]">contact us</span> for options. Left it last minute? We’ve been there. We have a
              limited number of first come, first served tables available for walk-ins.
            </p>
          </div>
          <p
            className="font-noir-pro text-[13px] lg:text-[15px] px-4 lg:px-12 text-center leading-[1.4]"
          >
            *Please note, we take credit card details to secure your table booking.<br /> We will charge £10 per person if you
            don’t turn up or do not<br /> cancel within 24 hours of your booking.
          </p>
        </div>

        {/* Second Section: Form Inputs */}
        <div
          className="font-noir w-full lg:w-[400px] bg-[#2f2f2f] text-white px-6 py-8 rounded-lg flex flex-col"
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="relative">
              <input
                type="number"
                defaultValue="4"
                className="w-full h-[40px] bg-white text-black ps-3 text-[14px] rounded pr-10"
              />
              <img src={pro} alt="People" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <div className="relative">
              <input
                type="text"
                defaultValue="April 19, 2025"
                className="w-full h-[40px] bg-white text-black ps-3 text-[14px] rounded pr-10"
              />
              <img src={calendar} alt="Calendar" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <div className="relative">
              <input
                type="text"
                defaultValue="4:00 PM"
                className="w-full h-[40px] bg-white text-black ps-3 text-[14px] rounded pr-10"
              />
              <img src={clock} alt="Clock" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
          </div>
          <button
            className="font-posterama bg-[#00AACB] w-full lg:w-[150px] h-[40px] text-[16px] hover:bg-cyan-600 text-black font-bold rounded mt-6 self-center"
            onClick={handleBooking}
          >
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
