import React from 'react';
import { Helmet } from 'react-helmet';
import image17 from '../../assets/images/ftclahore2025.jpg';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon, EmailIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex mb-4 space-x-4 mt-4 justify-center">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

const LahoreMarathon2025 = () => {
  const pageUrl = "https://www.runpakistan.com/lahore-marathon-2025";
  const pageTitle = "Lahore Marathon 2025";
    
  return (
    <>
      <Helmet>
        <title>Lahore Marathon 2025</title>
        <meta name="description" content="Discover the Lahore Marathon 2025, a premier annual running event in Lahore, Pakistan, featuring various categories including full marathon, half marathon, 10 km, and 5 km dashes. Join participants from around the world on February 16, 2025, for an exhilarating running experience." />
        <meta name="keywords" content="Lahore Marathon 2025, Lahore Marathon, running event, marathon race, long-distance running, half marathon, 10 km race, 5 km race, Lahore, Pakistan, sporting event" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/lahore-marathon-2025" />
        <meta property="og:image" content={image17} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-2">
        <h1 className="text-4xl font-bold text-green-600 text-center md:mx-16 mb-6 sm:mt-16">Lahore Marathon 2025!</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mb-6 mt-5">The Lahore Marathon stands as a prominent annual sporting spectacle in Lahore, Pakistan. This long-distance running extravaganza draws participants from across the globe, spanning various age groups and skill levels. The event showcases a diverse range of categories, including the challenging full marathon (42.195 km), the exhilarating half marathon (21.0975 km), and shorter races like the 10 km and 5 km dashes.</p>
                <p className="text-lg text-left mb-6">Prepare to don your running gear and save the date! The eagerly awaited Lahore Marathon is scheduled for February 16, 2025.🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://www.lahore-marathon.com/" target="_blank" rel="noopener noreferrer" className="bg-green-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block">Visit Lahore Marathon Website for Details</a>
              </div>
            </div>
          </div>

          {/* Lahore Pictures */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://www.lahore-marathon.com/" target="_blank" rel="noopener noreferrer">
            <img src={image17} alt="Lahore Picture" className="rounded-lg w-full h-full object-fit" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LahoreMarathon2025;
