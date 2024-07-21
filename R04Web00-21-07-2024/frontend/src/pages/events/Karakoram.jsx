import React from 'react';
import { Helmet } from 'react-helmet';
import image1 from '../../assets/images/kark.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 ml-28 md:ml-0 mt-4 mb-6">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const PageMeta = () => {
  const bannerUrl = "https://www.runpakistan.com/assets/kark1-BjwRuBBm.jpg";
  
  return (
    <Helmet>
      <title>Karakoram Challenge 2024: High Altitude Half Marathon in Hunza | runPAKISTAN</title>
      <meta name="description" content="Join the historic Karakoram Challenge 2024 - Pakistan's first high-altitude half marathon along the breathtaking Karakoram Highway in Hunza. Register now for early bird discounts!" />
      <meta name="keywords" content="Karakoram Challenge, High Altitude Marathon, Hunza, Pakistan Marathon, Islamabad Running Club, NorthBound, Karakoram Highway" />
      <meta property="og:title" content="Karakoram Challenge 2024: High Altitude Half Marathon in Hunza | runPAKISTAN" />
      <meta property="og:description" content="Be part of history! Join Pakistan's first high-altitude half marathon along the stunning Karakoram Highway in Hunza. Early bird registration open until July 20, 2024." />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:url" content="https://www.runpakistan.com/karakoram-half-marathon-2024" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Karakoram Challenge 2024: High Altitude Half Marathon in Hunza" />
      <meta name="twitter:description" content="Join Pakistan's first high-altitude half marathon along the Karakoram Highway. Early bird registration open!" />
      <meta name="twitter:image" content={bannerUrl} />
      <link rel="canonical" href="https://www.runpakistan.com/karakoram-half-marathon-2024" />
    </Helmet>
  );
};

const Karakoram2024 = () => {
  const pageUrl = "https://www.runpakistan.com/karakoram-half-marathon-2024";
  const pageTitle = "Karakoram Challenge 2024: High Altitude Half Marathon in Hunza | runPAKISTAN";  

  return (
    <>
      <PageMeta />
      <div className="container mx-auto px-4 py-8 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center md:text-left mb-6">Karakoram Challenge 2024: High Altitude Half Marathon</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        <div className="flex flex-wrap items-stretch">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience Pakistan's First High-Altitude Half Marathon</h2>
                <p className="text-lg mb-4">For the first time in the history of Pakistan, Hunza awaits the local and global community
                to join the Karakoram Challenge - a high-altitude half marathon at the breathtaking Karakoram Highway in Gojal, Hunza. 
                This unique event, organized by the Islamabad Running Club (IRC) in collaboration with Northbound, offers a journey as 
                beautiful as its destination. Participants will have the opportunity to explore the stunning beauty of the mountains, 
                making it more than just a race – it’s an adventure..<br/> This is the first race of its kind in Pakistan, promising an 
                unparalleled experience for runners and nature enthusiasts alike.</p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Join the Karakoram Challenge?</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Run at high altitudes surrounded by majestic peaks</li>
                  <li>Be part of Pakistan's first high-altitude half marathon</li>
                  <li>Explore the beauty of Hunza and the Karakoram range</li>
                  <li>Join a community of adventurers and athletes</li>
                </ul>
                <p lassName="text-lg mb-4">So, lace up your running shoes, mark your calendars 1 September 2024, and join us at the starting line. See you at the Karakoram Challenge! 🏁👟</p>
                <p className="text-lg font-semibold text-green-600 mt-4 mb-4">Early Bird Discount: Register before July 20, 2024, for special rates!</p>
              </div>
              <div className="mt-3">
                <a href="https://intralaps.com/KKHlocals" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full inline-block text-lg text-center transition duration-300 ease-in-out transform hover:scale-105">Register Now for Early Bird Discount!</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://intralaps.com/KKHlocals" target="_blank" rel="noopener noreferrer">
              <img src={image1} alt="Stunning view of Karakoram Highway and mountains" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Karakoram2024;