import React from 'react';
import { Helmet } from 'react-helmet';
import image33 from '../../assets/images/10K8.png';
import image34 from '../../assets/images/10K10.png';
import doc3 from '../../assets/docs/10K8.pdf';
import doc4 from '../../assets/docs/10K10.pdf';
import Banner from '../../assets/images/Tcard2.png';
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

const TenTrainingPlans = () => {
  const pageUrl = "https://www.runpakistan.com/ten-training-plan";
  const pageTitle = "10KM Training Plan";  


  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <title>10KM Training Plan</title>
          <meta
            name="description"
            content="Discover effective 10K training plans for beginners and intermediate runners. Download easy-to-follow plans designed to improve your speed, endurance, and overall performance."
          />
          <meta
            name="keywords"
            content="10K training plan, beginner runners, intermediate runners, running program, speed and endurance, improve performance, download training plan"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.runpakistan.com/ten-training-plan"
          />
          <meta property="og:image" content={Banner} /> 

          <meta name="author" content="runPAKISTAN" />
        </Helmet>

        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 md:mt-12">
            <div className="container mx-auto md:p-6">
              <h1 className="text-3xl font-semibold text-center p-3">
                10KM Training Plan
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <div className="md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Easy 10K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Easy/Begineer 10KM Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Designed for beginners for weight loss and endurance.
                  </p>
                  <a href={doc3} download>
                    <img
                      src={image33}
                      alt="Easy 10K Training Plan"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download Easy 10KM Training Plan
                  </p>
                </div>

                {/* Intermediate 10K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Intermediate 10KM Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For runners aiming to improve speed and endurance.
                  </p>
                  <a href={doc4} download>
                    <img
                      src={image34}
                      alt="Intermediate 10K Training Plan"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download Intermediate 10KM Training Plan
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

export default TenTrainingPlans;
