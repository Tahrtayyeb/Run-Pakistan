import React from 'react';
import { Helmet } from 'react-helmet';
import image16 from '../../assets/images/karachi2025.png';
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

const KarachiMarathon2025 = () => {
  const pageUrl = "https://www.runpakistan.com/karachi-marathon-2025";
  const pageTitle = "Karachi Marathon 2025";  
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Karachi Marathon 2025</title>
        <meta name="description" content="Join the Karachi Marathon 2025 organized by Seaview Running Club, Pakistan's premier racing event held in the vibrant City of Lights. With its World Athletics certification, the Karachi Marathon offers athletes a gateway to international acclaim and qualification for prestigious races. From seasoned athletes to first-time participants, this marathon celebrates Karachi's resilience and diversity. Scheduled for January 2025, mark your calendars and prepare to chase your dreams at the Karachi Marathon!" />
        <meta name="keywords" content="Karachi Marathon, Seaview Running Club, racing event, Karachi, City of Lights, World Athletics certification, six-star races, Abbott World Major Marathons, athletes, diversity, resilience, Karachi Marathon 2025" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/karachi-marathon-2025" />
        <meta property="og:image" content={image16} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:mt-2">
        <h1 className="text-4xl md:mt-16 font-bold text-red-800 text-center md:text-left md:mx-16 mb-6">Karachi Marathon 2025</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />        
        {/* Content */}
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mt-5 mb-6">The Karachi Marathon, organized by Seaview Running Club, stands as Pakistan's premier racing event, The Karachi Marathon isn't just an ordinary race, it's a grand celebration with the colors of City of Lights. With its World Athletics certification, it's a beacon for athletes aspiring to international acclaim, offering a gateway to coveted six-star races, as the only race in Pakistan to offer qualification for the prestigious Abbott World Major Marathons. From the seasoned athlete to the first-time participant, the Karachi Marathon welcomes all. It's more than just a race, it's a testament to Karachi's resilience, a showcase of its diversity. Scheduled for 05 January 2025 Seaview Karachi, stands ready to host this monumental event, a stage set for greatness, where dreams will be chased and victories savored.</p>
                <p className="text-lg text-left mb-6">So, lace up your running shoes, mark your calendars 5 January 2025, and join us at the starting line. See you at the Karachi Marathon! 🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://intralaps.com/km/karachimarathon" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-block">For registration click here</a>
              </div>
            </div>
          </div>
          
          {/* Karachi Pictures */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://karachimarathon.org/about-us/" target="_blank" rel="noopener noreferrer">
            <img src={image16} alt="Karachi Picture" className="rounded-lg md:mt-6 w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default KarachiMarathon2025;
