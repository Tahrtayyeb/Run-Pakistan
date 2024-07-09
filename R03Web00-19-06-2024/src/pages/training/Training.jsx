import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import tCard1Image from '../../assets/images/Tcard1.png';
import tCard2Image from '../../assets/images/Tcard2.png';
import tCard3Image from '../../assets/images/Tcard3.png';
import tCard4Image from '../../assets/images/Tcard4.png';
import tCard5Image from '../../assets/images/Tcard5.png';
import tCard6Image from '../../assets/images/Tcard6.png';

const trainingPlans = [
  {
    to: '/five-training-plan',
    src: tCard1Image,
    alt: '5km Training Plan',
    title: '5km Training Plan',
  },
  {
    to: '/ten-training-plan',
    src: tCard2Image,
    alt: '10km Training Plan',
    title: '10km Training Plan',
  },
  {
    to: '/half-marathon-training-plan',
    src: tCard3Image,
    alt: 'Half Marathon Training Plan',
    title: 'Half Marathon Training Plan',
  },
  {
    to: '/marathon-training-plan',
    src: tCard4Image,
    alt: 'Marathon Training Plan',
    title: 'Marathon Training Plan',
  },
  {
    to: '/vo2-max-for-runners',
    src: tCard5Image,
    alt: 'VO2Max Intervals ',
    title: 'VO2Max Intervals',
  },
  {
    to: '/twenty-rule-for-life',
    src: tCard6Image,
    alt: '80/20 Rule ',
    title: '80/20 Rule of Life',
  },
];

const TrainingHomepage = () => {
  return (
    <>
      <Helmet>
        <title>Training Homepage</title>
        <meta
          name="description"
          content="Discover the best training plans for runners of all levels. Whether you're preparing for a 5km, 10km, half marathon, or full marathon, we have a plan for you."
        />
        <meta
          name="keywords"
          content="running training plans, 5km training, 10km training, half marathon training, marathon training, running workouts, running tips"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/training-homepage"
        />
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 mt-2">
            {/* First Ad Space */}
        {/* Uncomment the following div if you want to display an ad */}
        {/*
        <div className="mb-8 text-center h-28">
          <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
        </div>
        */}
          <div className="sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {trainingPlans.map((plan, index) => (
              <Link to={plan.to} className="news-link" key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={plan.src}
                    alt={plan.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl text-center font-bold mb-2">
                      {plan.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
          {/* Second Ad Space */}
        {/* Uncomment the following div if you want to display an ad */}
        {/*
        <div className="mb-8 text-center h-28">
          <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
        </div>
        */}
      </div>
    </>
  );
};

export default TrainingHomepage;
