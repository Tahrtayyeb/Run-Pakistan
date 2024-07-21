import React from 'react';
import { Helmet } from 'react-helmet';
import image14 from '../../assets/images/capitalHM.png';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mx-28 md:mx-52 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const CapitalHalfMarathon2025 = () => {
  const pageUrl = "https://www.runpakistan.com/capital-half-marathon-2025";
  const pageTitle = "Capital Half Marathon 2025";
  
  return (
    <>
      <Helmet>
        <title>Capital Half Marathon 2025</title>
        <meta name="description" content="Join the Capital Half Marathon 2025 in Islamabad, Pakistan, a race promoting transparency and integrity in governance through 'Run Against Corruption for Prosperous Pakistan.' Participate in 'Run for Palestine' to show solidarity and spread awareness. Lace up your shoes and get ready for an empowering running experience!" />
        <meta name="keywords" content="Capital Half Marathon 2025, Islamabad Marathon, running event, half marathon, Pakistan, Islamabad, 'Run Against Corruption for Prosperous Pakistan', 'Run for Palestine', solidarity, transparency, integrity, governance, running experience" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/capital-half-marathon-2025" />
        <meta property="og:image" content={image14} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:mt-2">
        <h1 className="sm:mt-16 text-4xl font-bold text-green-600 text-center md:text-left md:mx-16 mb-6">Capital Half Marathon 2025</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        <div className="flex flex-wrap items-stretch">
          <div className="w-full md:w-1/2 md:px-4 md:pr-8 md:order-1">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mt-5 mb-6">The Capital Half Marathon, set in Islamabad, isn't just about the race, it's a platform to "Run Against Corruption for Prosperous Pakistan," participants transcend mere athleticism to champion transparency and integrity in governance. Through "Run for Palestine," runners amplify their voices in solidarity with Palestine, spreading awareness and empathy worldwide.</p>
                <p className="text-lg text-left mb-6">Get ready to lace up your running shoes and mark your calendars! See you all at the starting line! 🏁👟</p>
                <p className="text-lg text-left mt-6">Calendar Year Events for Islamabad Running Club:</p>
                <p className="text-lg text-left text-green-800 mt-3"><strong>IRC 5KM TIME TRIAL - 15 SEP 2024</strong></p>
                <p className="text-lg text-left text-green-800"><strong>IRC 10KM CHALLENGE - 13 OCT 2024</strong></p>
                <p className="text-lg text-left text-green-800"><strong>CAPITAL HALF MARATHON - 24 NOV 2024</strong></p>
              </div>
              <div className="flex justify-center mt-6">
                <a href="https://islamabadrunningclub.com/" target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full inline-block">Visit IRC Website for Details</a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:order-2 flex justify-center">
            <a href="https://islamabadrunningclub.com/" target="_blank" rel="noopener noreferrer">
              <img src={image14} alt="Capital Picture" className=" md:mt-6 rounded-lg h-96" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Ad Space */}
      {/*
      <div className="mb-8 text-center h-28">
        <img src="ad2.jpg" alt="Advertisement 2" className="mx-auto h-full" />
      </div>
      */}
    </>
  );
};

export default CapitalHalfMarathon2025;
