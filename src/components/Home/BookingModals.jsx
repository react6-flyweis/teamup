import React from 'react';

const BookingModals = ({
  showModal,
  setShowModal,
  showModal1,
  setShowModal1,
  showModal2,
  setShowModal2,
  showModal3,
  setShowModal3,
  form,
  setForm,
  bookingDetails,
  acceptedTerms,
  setAcceptedTerms,
  maxChars,
  logo
}) => {
  if (!showModal && !showModal1 && !showModal2 && !showModal3) return null;

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#2C2627] rounded-lg w-[90%] max-w-[500px] min-w-[280px] p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-white text-2xl sm:text-3xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h2 className="text-white font-bold text-lg sm:text-xl">RESERVE NOW</h2>
              <div className="flex items-center gap-2 bg-[#00AACB] px-2 py-1 rounded-xl text-xs sm:text-sm w-fit">
                <div className="flex items-center gap-1 bg-[#00AACB] py-[2px] rounded-full text-white font-semibold">
                  📅 April 19, 2025
                </div>
                <div className="flex items-center gap-1 text-white">👥 4</div>
                <div className="flex items-center gap-1 text-white">🕓 4:00 PM</div>
              </div>
            </div>
            <p className="text-white font-bold mt-4 text-sm sm:text-base">An option is required for this booking</p>
            <div className="bg-[#00AACB] text-white rounded-lg mt-4 mb-4 p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Food & Drinks</h3>
                  <p className="text-xs sm:text-sm">Food & Drink Table</p>
                </div>
                <button className="bg-white font-bold px-4 py-2 text-black rounded text-sm sm:text-base w-full sm:w-auto">
                  Select
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-8 sm:mt-12">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                ← PREVIOUS
              </button>
              <button
                onClick={() => {
                  setShowModal1(true);
                  setShowModal(false);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                NEXT →
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img src={logo} alt="Team Up Logo" className="h-8 sm:h-10" />
            </div>
          </div>
        </div>
      )}

      {showModal1 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#2C2627] rounded-lg w-[90%] max-w-[500px] min-w-[280px] p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-white text-2xl sm:text-3xl"
              onClick={() => setShowModal1(false)}
            >
              ×
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h2 className="text-white font-bold text-lg sm:text-xl">RESERVE NOW</h2>
              <div className="flex items-center gap-2 bg-[#00AACB] px-2 py-1 rounded-lg text-xs sm:text-sm w-fit">
                <div className="flex items-center gap-1 bg-[#00AACB] py-[2px] rounded-full text-white font-semibold">
                  📅 April 19, 2025
                </div>
                <div className="flex items-center gap-1 text-white">👥 4</div>
                <div className="flex items-center gap-1 text-white">🕓 4:00 PM</div>
              </div>
            </div>
            <p className="text-white font-bold mt-4 text-sm sm:text-base">An option is required for this booking</p>
            <p className="font-bold mb-2 text-sm sm:text-base">Contact Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="p-2 rounded text-black text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="p-2 rounded text-black text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="p-2 rounded text-black text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-2 rounded text-black text-sm sm:text-base"
              />
            </div>
            <p className="font-bold mt-3 text-sm sm:text-base">Contact Details</p>
            <textarea
              placeholder="Your message..."
              maxLength={maxChars}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-2 mt-1 rounded text-black text-sm sm:text-base h-20 sm:h-24"
            />
            <p className="text-xs text-gray-300">{maxChars - form.message.length} of {maxChars} characters remaining</p>
            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="checkbox"
                  checked={form.subscribe}
                  onChange={() => setForm({ ...form, subscribe: !form.subscribe })}
                  className="form-checkbox"
                />
                <span>I would like to receive news and offers from <strong>Team UP</strong></span>
              </label>
            </div>
            <div className="flex justify-between mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setShowModal1(false);
                  setShowModal(true);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                ← PREVIOUS
              </button>
              <button
                onClick={() => {
                  setShowModal1(false);
                  setShowModal2(true);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                NEXT →
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img src={logo} alt="Team Up Logo" className="h-8 sm:h-10" />
            </div>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#2C2627] rounded-lg w-[90%] max-w-[500px] min-w-[280px] p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-white text-2xl sm:text-3xl"
              onClick={() => setShowModal2(false)}
            >
              ×
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h2 className="text-white font-bold text-lg sm:text-xl">RESERVE NOW</h2>
              <div className="flex items-center gap-2 bg-[#00AACB] px-2 py-1 rounded-lg text-xs sm:text-sm w-fit">
                <div className="flex items-center gap-1 bg-[#00AACB] py-[2px] rounded-full text-white font-semibold">
                  📅 April 19, 2025
                </div>
                <div className="flex items-center gap-1 text-white">👥 4</div>
                <div className="flex items-center gap-1 text-white">🕓 4:00 PM</div>
              </div>
            </div>
            <p className="font-bold text-white mb-2 text-sm sm:text-base">Confirm Your Details Below</p>
            <div className="space-y-4">
              <div className="rounded-md text-xs sm:text-sm">
                {[
                  ["Date:", bookingDetails.date],
                  ["Time:", bookingDetails.time],
                  ["People:", bookingDetails.people],
                ].map(([label, value], idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center px-4 py-2 ${idx % 2 === 0 ? "bg-[#00AACB]" : "bg-[#00BCD4]"} text-white`}
                  >
                    <span className="font-semibold w-full sm:w-40">{label}</span>
                    <span className="font-bold flex-1">{value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-md text-xs sm:text-sm">
                {[
                  ["First Name:", bookingDetails.firstName],
                  ["Last Name:", bookingDetails.lastName],
                  ["Mobile Number:", bookingDetails.mobile],
                  ["Email Address:", bookingDetails.email],
                ].map(([label, value], idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center px-4 py-2 ${idx % 2 === 0 ? "bg-[#00AACB]" : "bg-[#00BCD4]"} text-white`}
                  >
                    <span className="font-semibold w-full sm:w-40">{label}</span>
                    <span className="font-bold flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-6 mt-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={() => setAcceptedTerms(!acceptedTerms)}
                  className="mt-1"
                />
                <span>
                  I have read and accept the{" "}
                  <a href="#" className="underline text-white font-medium">Booking Terms And Conditions</a> and{" "}
                  <a href="#" className="underline text-white font-medium">Privacy Policy</a>
                </span>
              </label>
            </div>
            <div className="flex justify-between mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setShowModal2(false);
                  setShowModal1(true);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                ← PREVIOUS
              </button>
              <button
                onClick={() => {
                  setShowModal2(false);
                  setShowModal3(true);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                NEXT →
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img src={logo} alt="Team Up Logo" className="h-8 sm:h-10" />
            </div>
          </div>
        </div>
      )}

      {showModal3 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#2C2627] rounded-xl w-[90%] max-w-[500px] min-w-[280px] p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] text-white">
            <button
              className="absolute top-3 right-3 text-white text-2xl sm:text-3xl"
              onClick={() => setShowModal3(false)}
            >
              ×
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h2 className="text-white font-bold text-lg sm:text-xl">RESERVE NOW</h2>
              <div className="flex items-center gap-2 bg-[#00AACB] px-2 py-1 rounded-lg text-xs sm:text-sm w-fit">
                <div className="flex items-center gap-1 bg-[#00AACB] py-[2px] rounded-full text-white font-semibold">
                  📅 April 19, 2025
                </div>
                <div className="flex items-center gap-1 text-white">👥 4</div>
                <div className="flex items-center gap-1 text-white">🕓 4:00 PM</div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2 mt-4">Booking Terms And Conditions</h3>
            <p className="text-xs sm:text-sm mb-6 leading-relaxed text-gray-300">
              Please note we take credit card details to secure your booking for food
              and drinks. We will charge you AED50 per head if you are more than 15
              minutes late, do not turn up or do not cancel within 24 hours of your
              booking time.
            </p>
            <div className="flex justify-between mt-8 sm:mt-12">
              <button
                onClick={() => {
                  setShowModal3(false);
                  setShowModal2(true);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                BACK
              </button>
              <button
                onClick={() => {
                  setShowModal3(false);
                }}
                className="bg-[#F4068E] text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                ACCEPT & CONTINUE
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img src={logo} alt="Team Up Logo" className="h-8 sm:h-10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModals;
