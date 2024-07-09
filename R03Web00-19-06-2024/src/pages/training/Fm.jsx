import React from 'react';
import { Helmet } from 'react-helmet';
import image37 from '../../assets/images/Marathon12.png';
import image38 from '../../assets/images/Marathon16.png';
import doc7 from '../../assets/docs/Marathon12.pdf';
import doc8 from '../../assets/docs/Marathon16.pdf';

const MarathonTrainingPlan = () => {
  return (
    <>
      <Helmet>
        <title>Marathon Training Plan</title>
        <meta
          name="description"
          content="Discover effective marathon training plans for both beginners and experienced runners. Download 12-week and 16-week marathon training schedules to prepare for your next race."
        />
        <meta
          name="keywords"
          content="marathon training plan, 42.2K training plan, marathon schedule, marathon preparation, long-distance running, marathon training for beginners, marathon training for experienced runners"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/marathon-training-plan"
        />
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        {/* Main Content */}
        <div className="w-full md:w-3/4 sm:mt-12">
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Marathon (42.2KM) Training Plans
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 12 Week Marathon Training Plan */}
              <div className="p-4 bg-white rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  12 Week Marathon Training Plan
                </h2>
                <p className="text-gray-700 mb-4">
                  Designed for experienced runners.
                </p>
                <a href={doc7} download>
                  <img
                    src={image37}
                    alt="12 Week Marathon Training Plan Thumbnail"
                    className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                  />
                </a>
                <p className="text-blue-500 font-semibold">
                  Download 42.2KM Training Plan
                </p>
              </div>

              {/* 16 Week Marathon Training Plan */}
              <div className="p-4 bg-white rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  16 Week Marathon Training Plan
                </h2>
                <p className="text-gray-700 mb-4">
                  To improve speed and time for marathon.
                </p>
                <a href={doc8} download>
                  <img
                    src={image38}
                    alt="16 Week Marathon Training Plan Thumbnail"
                    className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                  />
                </a>
                <p className="text-blue-500 font-semibold">
                  Download Full Marathon Training Plan
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
    </>
  );
};

export default MarathonTrainingPlan;
