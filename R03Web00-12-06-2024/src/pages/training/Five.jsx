import React from 'react';
import { Helmet } from 'react-helmet';
import image31 from '../../assets/images/5KM6.png';
import image32 from '../../assets/images/5KM8.png';
import doc1 from '../../assets/docs/5KM6.pdf';
import doc2 from '../../assets/docs/5KM8.pdf';

const FiveTrainingPlans = () => {
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
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.runpakistan.com/five-training-plan" />
          <meta name="author" content="runPAKISTAN" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
     crossorigin="anonymous"></script>
        </Helmet>
        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          {/* Main Content */}
          <div className="w-full md:w-3/4 mt-10">
            <div className="container mx-auto p-6">
              <h1 className="text-3xl font-semibold text-center mb-6">
                5KM Training Plans
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Ad Section (commented out) */}
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

export default FiveTrainingPlans;
