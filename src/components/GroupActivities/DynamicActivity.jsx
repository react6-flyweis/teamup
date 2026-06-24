import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMenuItem } from '../../hooks/useMenuItems';
import { useBooking } from '../../hooks/useBooking';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OtherGames from '../Home/OtherGames';
import { motion } from 'framer-motion';

const defaultHero = 'https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/04/BOOM-Birthdays-Web-Hero-Banner-1905x805-3.jpg.webp';
const defaultTexture = '/assets/texture.svg';

const DynamicActivity = () => {
  const { slug } = useParams();
  const handleBooking = useBooking();
  const { data: activity, isLoading, error } = useMenuItem(slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h2 className="text-2xl mb-4 font-bold">Activity Not Found</h2>
        <Link to="/" className="bg-[#E1017D] px-6 py-2 rounded-full text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  // Group details into standard packages info, bundle options, or booking instructions
  const bookingInfo = activity.details?.find(
    (d) => d.label?.toLowerCase() === 'how to book' || d.value?.toLowerCase()?.includes('how to book')
  );
  
  const dontWorryInfo = activity.details?.find(
    (d) => d.label?.toLowerCase() === 'dont worry' || d.note?.toLowerCase()?.includes("don't worry")
  );

  const bundleOptions = activity.details?.filter(
    (d) => d.label?.toLowerCase()?.includes('bundle option') || d.label?.toLowerCase() === 'game' || d.label?.toLowerCase() === 'feature'
  ) || [];

  const mainDetails = activity.details?.filter(
    (d) =>
      d !== bookingInfo &&
      d !== dontWorryInfo &&
      !bundleOptions.includes(d)
  ) || [];

  return (
    <div className="min-h-screen font-noir-pro text-white bg-black">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${activity.heroImageUrl || activity.imageUrl || defaultHero})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 px-4 mt-20 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Posterama2001W04' }}
            className="text-4xl md:text-7xl lg:text-[90px] font-black text-white mb-4 uppercase tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
          >
            {activity.title}
          </motion.h1>
          
          {activity.description && (
            <p className="text-lg md:text-2xl font-semibold mb-8 uppercase tracking-widest text-[#00AACB]">
              {activity.description}
            </p>
          )}

          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handleBooking}
              style={{ fontFamily: 'Posterama2001W04' }}
              className="bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 text-white font-bold py-4 px-10 text-xl rounded-full uppercase tracking-tighter transition-all duration-300 shadow-lg"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Main Details & Content Section */}
      <div
        className="bg-fixed bg-cover bg-center py-20 text-black"
        style={{ backgroundImage: `url(https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/03/BG-Steel2.jpg)` }}
      >
        <section className="max-w-6xl mx-auto px-4 text-center">
          {activity.tagline && (
            <h2 className="font-posterama text-3xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
              {activity.tagline}
            </h2>
          )}

          {activity.taglineDescription && (
            <p className="font-noir-pro text-lg md:text-xl text-black font-bold mb-16 max-w-4xl mx-auto leading-tight">
              {activity.taglineDescription}
            </p>
          )}

          {/* Main package inclusions */}
          {mainDetails.length > 0 && (
            <div className="max-w-3xl mx-auto space-y-8 text-left mb-20">
              {mainDetails.map((detail, index) => (
                <motion.div
                  key={detail._id || index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-sm"
                >
                  {detail.iconUrl ? (
                    <img src={detail.iconUrl} alt={detail.label} className="w-8 h-8 md:w-10 md:h-10 mt-1 object-contain" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#E1017D] flex items-center justify-center text-white font-bold">✓</div>
                  )}
                  <div>
                    <h3 className="font-posterama text-xl md:text-2xl text-black font-bold uppercase leading-tight">
                      {detail.value || detail.label}
                    </h3>
                    {detail.note && (
                      <p className="text-gray-800 italic font-medium text-sm md:text-base mt-1">
                        {detail.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bundle Options or Sub-activities (Grid view) */}
          {bundleOptions.length > 0 && (
            <div className="mb-20">
              <h3 style={{ fontFamily: 'Posterama2001W04' }} className="text-3xl md:text-4xl font-black text-black mb-10 uppercase">
                Choose Your Vibe
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {bundleOptions.map((opt, index) => (
                  <motion.div
                    key={opt._id || index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-black text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-between items-center text-center border border-gray-800 hover:border-[#E1017D] transition-all duration-300"
                  >
                    {opt.iconUrl && (
                      <img src={opt.iconUrl} alt={opt.value || opt.label} className="h-28 w-auto mb-4 object-contain" />
                    )}
                    <div>
                      <h4 style={{ fontFamily: 'Posterama2001W04' }} className="text-lg font-bold text-[#00AACB] mb-2 uppercase">
                        {opt.value || opt.label}
                      </h4>
                      {opt.note && (
                        <p className="text-xs text-gray-400 font-noir-pro">{opt.note}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* How to Book Section */}
          {(bookingInfo || dontWorryInfo) && (
            <div className="border-t-2 border-black/10 pt-16 max-w-4xl mx-auto text-center">
              {bookingInfo && (
                <>
                  <h2 className="font-posterama text-3xl md:text-4xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
                    {bookingInfo.value || "HERE'S HOW TO BOOK"}
                  </h2>
                  <p className="font-noir-pro text-lg text-black font-semibold mb-8 px-4">
                    {bookingInfo.note}
                  </p>
                </>
              )}
              {dontWorryInfo && (
                <p className="font-noir-pro text-base text-black font-bold italic">
                  {dontWorryInfo.note}
                </p>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Games Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-posterama text-4xl md:text-6xl font-black text-black text-center mb-16 tracking-tighter uppercase leading-none">
            CHOOSE YOUR GAMES
          </h2>
          <OtherGames showHeading={false} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicActivity;
