import React from 'react';
import { Helmet } from 'react-helmet';
import image33 from '../../assets/images/10K8.png';
import image34 from '../../assets/images/10K10.png';
import doc3 from '../../assets/docs/10K8.pdf';
import doc4 from '../../assets/docs/10K10.pdf';

const TenTrainingPlans = () => {
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
          <meta name="author" content="runPAKISTAN" />
        </Helmet>

        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 sm:mt-12">
            <div className="container mx-auto p-6">
              <h1 className="text-3xl font-semibold text-center mb-6">
                10KM Training Plan
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>
    </>
  );
};

export default TenTrainingPlans;
