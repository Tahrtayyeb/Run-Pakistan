import React from 'react';
import { Helmet } from 'react-helmet';
import image35 from '../../assets/images/21k10week.png';
import image36 from '../../assets/images/21k12week.png';
import doc5 from '../../assets/docs/21k10week.pdf';
import doc6 from '../../assets/docs/21k12week.pdf';
import Banner from '../../assets/images/Tcard3.png';
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

const HalfMarathonTrainingPlan = () => {
  const pageUrl = "https://www.runpakistan.com/half-marathon-training-plan";
  const pageTitle = "Half Marathon Training Plan";  
  

  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <title>Half Marathon Training Plan</title>
          <meta
            name="description"
            content="Explore effective half marathon training plans for beginners and intermediate runners. Download 10-week and 12-week half marathon training schedules to prepare for your next race."
          />
          <meta
            name="keywords"
            content="half marathon training plan, 21.1K training plan, half marathon schedule, half marathon preparation, long-distance running, half marathon training for beginners, half marathon training for intermediate runners"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.runpakistan.com/half-marathon-training-plan"
          />
          <meta property="og:image" content={Banner} /> 

          <meta name="author" content="runPAKISTAN" />
        </Helmet>

        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 md:mt-12">
            <div className="container mx-auto md:p-6">
              <h1 className="text-3xl font-semibold text-center">
                Half Marathon Training Plan
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <div className="md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Easy 21.1K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Easy Half Marathon Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Designed for beginners aiming to run long distance.
                  </p>
                  <a href={doc5} download>
                    <img
                      src={image35}
                      alt="Easy 21.1K Training Plan Thumbnail"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download 21.1K Training Plan
                  </p>
                </div>

                {/* Intermediate 21.1K Training Plan */}
                <div className="p-4 bg-white rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    Intermediate Half Marathon Training Plan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For runners aiming to improve speed and endurance.
                  </p>
                  <a href={doc6} download>
                    <img
                      src={image36}
                      alt="Intermediate 21.1K Training Plan Thumbnail"
                      className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                    />
                  </a>
                  <p className="text-blue-500 font-semibold">
                    Download 21.1KM Training Plan
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

export default HalfMarathonTrainingPlan;
