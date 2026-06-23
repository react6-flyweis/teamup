import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { useContentPage } from '../hooks/useContentPage';
import { parseHtmlToReact } from '../utils/htmlParser';

const duck = '/assets/privacy.svg'
const texture = '/assets/texture.svg'

const Duckpin = () => {
  const { data, isLoading } = useContentPage('privacy-policy');
  const content = data?.page?.content;

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
            PRIVACY POLICY
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
          <h2 style={{ fontFamily: 'Posterama2001W04' }} className="text-xl md:text-[44px] font-bold text-[#292524] mb-4 uppercase leading-tight tracking-wide">
            About This privacy policy
          </h2>
        </section>

        <div className="text-black px-4 md:px-20 py-10 max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : content ? (
            <div style={{ fontFamily: 'Noir Pro' }} className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2 [&_li]:list-item [&_p]:leading-relaxed [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-4 [&_h3]:mb-2">
              {parseHtmlToReact(content)}
            </div>
          ) : null}
        </div>
      </div>



      <Footer />

    </>
  )
}

export default Duckpin