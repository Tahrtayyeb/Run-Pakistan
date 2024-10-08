import React from 'react';
import { Helmet } from 'react-helmet';
import image35 from '../../assets/images/21k10week.png';
import image36 from '../../assets/images/21k12week.png';
import doc5 from '../../assets/docs/21k10week.pdf';
import doc6 from '../../assets/docs/21k12week.pdf';

const HalfMarathonTrainingPlan = () => {
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
          <meta name="author" content="runPAKISTAN" />
        </Helmet>

        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 sm:mt-12">
            <div className="container mx-auto p-6">
              <h1 className="text-3xl font-semibold text-center mb-6">
                Half Marathon (21.1KM) Training Plan
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Ad Section */}
          {/* 
          <div className="w-full md:w-1/4 md:pl-8 flex flex-col items-center">
            <div className="mb-8 w-full">
              <div className="border border-gray-300 p-4 rounded-md bg-white shadow-md h-full flex flex-col justify-center items-center">
                <img src="/dist/images/ad1.jpg" alt="Ad Image 1" className="w-full mb-4" />
                <p>This is an ad. You can place your ad content here.</p>
              </div>
            </div>
            <div className="w-full">
              <div className="border border-gray-300 p-4 rounded-md bg-white shadow-md h-full flex flex-col justify-center items-center">
                <img src="/dist/images/ad2.jpg" alt="Ad Image 2" className="w-full mb-4" />
                <p>This is another ad. You can place your ad content here.</p>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Footer Container */}
        {/* <div id="footer-container"></div> */}
      </div>
    </>
  );
};

export default HalfMarathonTrainingPlan;
