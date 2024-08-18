import React from 'react';
import { Helmet } from 'react-helmet';
import image11 from '../../assets/images/backyard24.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mx-28 md:mx-64 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const MargallaBackyardUltra2024 = () => {
  const pageUrl = "https://www.runpakistan.com/margalla-backyard-ultra-2024";
  const pageTitle = "Margalla Backyard Ultra 2024";
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Margalla Backyard Ultra 2024</title>
        <meta name="description" content="Experience the thrill of Margalla Backyard Ultra (MBU), Pakistan's first-ever Backyard Ultra event, set in F9 Park, Islamabad. Organized by Margalla Trail Runners, this annual event challenges runners to test their endurance and spirit on 07 December 2024. Embrace the challenge and join us at the starting line for an unforgettable adventure!" />
        <meta name="keywords" content="Margalla Backyard Ultra, MBU, Backyard Ultra, F9 Park, Islamabad, Pakistan, Margalla Trail Runners, endurance, spirit, running event, adventure race, trail running, ultra running, December 2024" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/margalla-backyard-ultra-2024" />
        <meta name="author" content="runPAKISTAN" />
        <meta property="og:image" content={image11} /> 
      </Helmet>

      <div className="container mx-auto px-4 py-8">
         <h1 className="md:mt-16 text-4xl font-bold text-green-800 text-center md:text-left md:mx-16 mb-6">Margalla Backyard Ultra 2024</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        {/* Content */}
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mt-5 mb-6">Margalla Backyard Ultra (MBU), making history as Pakistan's first-ever Backyard Ultra event. Proudly affiliated with the international association and pioneers of Backyard Ultras worldwide, MBU promises an exhilarating experience like no other. Set in F9 Park in Islamabad, Pakistan, this annual event will take place on 07 December 2024, inviting runners to test their endurance and spirit. MBU is a project by Margalla Trail Runners.</p>
                <p className="text-lg text-left mb-6">So, get ready to embrace the challenge, rally your fellow enthusiasts, and meet us at the starting line for an unforgettable adventure! 🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://margallatrailrunners.com/margallabackyardultra/" target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center inline-block">Visit Margalla Trail Runners Website for Details</a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://margallatrailrunners.com/margallabackyardultra/" target="_blank" rel="noopener noreferrer">
            <img src={image11} alt="MTR Backyard Picture" className="rounded-lg md:mt-6 w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Ad Space */}
      {/* Uncomment the following div if you want to display an ad */}
      {/*
      <div className="mb-8 text-center h-28">
        <img src="ad2.jpg" alt="Advertisement 2" className="mx-auto h-full" />
      </div>
      */}
    </>
  );
};

export default MargallaBackyardUltra2024;
