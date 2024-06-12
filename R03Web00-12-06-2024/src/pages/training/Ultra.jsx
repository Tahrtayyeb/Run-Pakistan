import React from 'react';
import { Helmet } from 'react-helmet';

const UltraMarathonTrainingPlan = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Helmet>
          <title>Ultra Marathon Training Plan</title>
          <meta
            name="description"
            content="Stay tuned for the upcoming ultra marathon training plan. Prepare yourself for the ultimate endurance challenge with expert guidance and tips."
          />
          <meta
            name="keywords"
            content="ultra marathon training plan, ultra marathon preparation, endurance running, ultra marathon tips, long-distance running, ultra marathon schedule"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.runpakistan.com/ultra-marathon-training-plan"
          />
          <meta name="author" content="runPAKISTAN" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
     crossorigin="anonymous"></script>
        </Helmet>

        {/* First Ad Space */}
        {/*
        <div className="mb-8 text-center h-28 mt-20">
          <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
        </div>
        */}

        <div className="flex justify-center items-center h-screen">
          <h1 className="text-center text-6xl font-bold text-green-700">
            Coming Soon
          </h1>
        </div>

        {/* Second Ad Space */}
        {/*
        <div className="mb-8 text-center h-28 mt-20">
          <img src="ad2.jpg" alt="Advertisement 2" className="mx-auto h-full" />
        </div>
        */}
      </div>
    </>
  );
};

export default UltraMarathonTrainingPlan;
