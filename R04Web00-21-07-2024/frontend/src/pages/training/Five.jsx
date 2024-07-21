import React from 'react';
import { Helmet } from 'react-helmet';
import image31 from '../../assets/images/5KM6.png';
import image32 from '../../assets/images/5KM8.png';
import doc1 from '../../assets/docs/5KM6.pdf';
import doc2 from '../../assets/docs/5KM8.pdf';
import Banner from '../../assets/images/Tcard1.png';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const FiveTrainingPlans = () => {
  const pageUrl = "https://www.runpakistan.com/five-training-plan";
  const pageTitle = "5K Training Plan";  
  <ShareButtons url={pageUrl} title={pageTitle} />        

  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <title>5K Training Plan</title>
          <meta
            name="description"
            content="Discover effective 5K training plans for beginners and intermediate runners. Download easy-to-follow plans designed to improve your speed, endurance, and overall performance."
          />
          <meta
            name="keywords"
            content="5K training plan, beginner runners, intermediate runners, running program, speed and endurance, improve performance, download training plan"
          />
         <meta property="og:image" content={Banner} /> 

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.runpakistan.com/five-training-plan" />
          <meta name="author" content="runPAKISTAN" />
        </Helmet>
        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 md:mt-10">
            <div className="container mx-auto md:p-6">
              <h1 className="text-3xl font-semibold text-center p-2">
                5KM Training Plans
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Easy 5K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Easy 5KM Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Designed for beginners for introduction to running.
                  </p>
                  <a href={doc1} download>
                    <img
                      src={image31}
                      alt="Easy 5KM Training Plan Thumbnail"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download Easy 5KM Training Plan
                  </p>
                </div>

                {/* Intermediate 5K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Intermediate 5KM Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For runners aiming to improve speed and endurance.
                  </p>
                  <a href={doc2} download>
                    <img
                      src={image32}
                      alt="Intermediate 5KM Training Plan Thumbnail"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download Intermediate 5KM Training Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveTrainingPlans;
