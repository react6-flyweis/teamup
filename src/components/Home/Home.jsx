import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import vid from '../../videos/vid.mp4';
import bg from '../../assets/stepdown2.jpg';
import pro from '../../assets/pro.svg';
import calendar from '../../assets/calender.svg';
import clock from '../../assets/clock.svg';
import marker from '../../assets/marker.png.svg';
import pin from '../../assets/pin.svg';
import Footer from '../Footer';
import PromoModal from './PromoModal';

// Extracted Sections
import Hero from './Hero';
import PartyCarousel from './PartyCarousel';
import FindUs from './FindUs';
import GameChoice from './GameChoice';
import MenuSection from './MenuSection';
import BookingSection from './BookingSection';
import BookingModals from './BookingModals';
import EventsSection from './EventsSection';
import SignupSection from './SignupSection';


const logo = '/assets/logo.svg';
const party = '/assets/party.svg';
const bg2 = '/assets/bg2.svg';
const queenbg = '/assets/queenbg.svg';
const king = '/assets/Stud.svg';
const queen = '/assets/Doe.svg';
const map = '/assets/usa_map.png';
const karaoke3 = '/assets/party5.svg';
const coke = '/assets/party2.svg';
const glass = '/assets/party3.svg';
const enochs = '/assets/party4.svg';
const enochs2 = '/assets/enochs.svg';
const party6 = '/assets/party6.svg';
const party7 = '/assets/party7.svg';
const bits = '/assets/bits.svg';
const drinks = '/assets/drink.svg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookingDetails = {
    date: 'April 19, 2025',
    time: '4:00 PM',
    people: 4,
    firstName: 'Alfonso',
    lastName: 'Kenter',
    mobile: '778 9874 369',
    email: 'email@example.com',
  };

  // const partyData = [
  //   {
  //     image: karaoke3,
  //     title: 'Book A Karaoke Room Near You',
  //     description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  //   },
  //   {
  //     image: coke,
  //     title: 'Book For Cocktails, Beer, Food combos, near you.',
  //     description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  //   },
  //   {
  //     image: glass,
  //     title: 'Play Various Games, Like Beer Pong, Axe Throwing etc. ',
  //     description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  //   },
  // ];
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % partyData.length);
  //   }, 4000); // 4 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // const currentItem = partyData[current];
  const partyData = useMemo(() => [
    {
      image: 'https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/10/BOOM-BOX-PROMO-Desktop.jpg',
      title: 'GIVE IT SOME BOOM',
      description: 'Drinking your fave cocktails and screeching those iconic Karaoke hits. What’s not to love about that? Book your private Karaoke room now, no-one else needs to hear that.',
    },
    {
      image: 'https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2022/02/Pool_Boom-Games-sq.jpg',
      title: 'AMERICAN POOL',
      description: 'Whether you’re a shark or a beginner, our American Pool tables are the perfect place to show off your skills (or lack of).',
    },
    {
      image: 'https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2026/03/BBB_Brunch_Disco_Web_Promo_Desktop_1440x495-1.png',
      title: 'DISCO BRUNCH',
      description: 'Get ready for the ultimate disco vibes with our bottomless brunch. Delicious food, flowing drinks, and the best disco tracks to keep you grooving.',
    },
    {
      image: 'https://s40091.pcdn.co/uk/london-oxford-street/wp-content/uploads/sites/30/2026/02/BOOM_bundles_desktop_promo.jpg',
      title: 'BOOM BUNDLES',
      description: 'Maximize your fun with our Boom Bundles. Combining the best games, food, and drinks into one epic package for you and your crew.',
    },
  ], []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partyData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [partyData.length]);

  const handleClick = () => {
    window.open("https://ecom.roller.app/altitudemanteca/buyapass/en-us/home", "_blank");
  };

  const currentItem = partyData[current];
  const maxChars = 2000;

  return (
    <>
      <Hero vid={vid} handleClick={handleClick} />

      {/* <div
        className="w-full bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-5xl mx-auto pb-36">
          <div className="relative w-full">
            <img src={party} alt="Party" className="w-full h-auto object-cover" />
            <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 bg-[#2f2f2f] text-white p-4 md:p-4 w-[90%] md:w-[400px] h-[400px] shadow-lg rounded">
              <h2 className="font-posterama text-lg md:text-[30px] font-bold mb-4 mt-4">
                PLAY, EAT & STAY BOOZE!
              </h2>
              <p className="font-noir-pro text-xs md:text-[18px] mb-4 leading-[1.1]">
                Step into a world where fun never stops – challenge your friends to
                axe throwing, Indoor Mini Golf, AR darts, and more; indulge in
                mouthwatering food and drinks; and keep the energy high all night
                long. Whether you're planning a birthday bash, a corporate event, or
                a spontaneous night out, Team UP delivers the ultimate party
                playground where unforgettable memories are made, one game and one
                drink at a time.
              </p>
              <div className='flex justify-center'>
                <button className="font-posterama bg-[#00AACB] w-[130px] h-[50px] text-[17px] hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-400 h-screen'>

      </div> */}

      <div
        className="w-full bg-fixed bg-cover bg-center pt-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <PartyCarousel
          currentItem={currentItem}
          partyData={partyData}
          current={current}
          setCurrent={setCurrent}
        />

        <FindUs />


        <GameChoice />

        <MenuSection bits={bits} drinks={drinks} />

        {/* <BookingSection
          pro={pro}
          calendar={calendar}
          clock={clock}
          setShowModal={setShowModal}
        /> */}

        <BookingModals
          showModal={showModal}
          setShowModal={setShowModal}
          showModal1={showModal1}
          setShowModal1={setShowModal1}
          showModal2={showModal2}
          setShowModal2={setShowModal2}
          showModal3={showModal3}
          setShowModal3={setShowModal3}
          form={form}
          setForm={setForm}
          bookingDetails={bookingDetails}
          acceptedTerms={acceptedTerms}
          setAcceptedTerms={setAcceptedTerms}
          maxChars={maxChars}
          logo={logo}
        />

        <EventsSection bg2={queenbg} queen={queen} king={king} />

        <SignupSection enochs2={enochs2} />

        <PromoModal />
      </div>

      <Footer />
    </>
  );
};

export default Home;