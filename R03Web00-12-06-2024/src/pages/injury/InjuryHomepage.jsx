import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import hamstringImage from '../../assets/images/yoga10.jpg';
import preventionImage from '../../assets/images/swim1.jpg';
import itImage from '../../assets/images/it1.jpeg';
import nutritionImage from '../../assets/images/nutrition0.jpg';
import piriformisImage from '../../assets/images/foam1.jpg';
import plantarImage from '../../assets/images/yoga8.jpg';
import recoveryImage from '../../assets/images/swim2.jpg';
import shinImage from '../../assets/images/yoga7.jpg';
import comebackImage from '../../assets/images/squat2.jpeg';
import commonImage from '../../assets/images/knee4.jpeg';
import rehabImage from '../../assets/images/legraise.jpeg';
import overuseImage from '../../assets/images/knee13.jpeg';
import runningBadImage from '../../assets/images/run-1.jpg';
import surfaceImage from '../../assets/images/surface.jpg';
import techniqueImage from '../../assets/images/runner5.jpeg';
import strengthImage from '../../assets/images/squat0.jpg';


const eventItems = [
  {
    to: '/injury-hamstring',
    src: hamstringImage,
    alt: 'Hamstring Injury',
    title: 'Healing Hamstring: Recovery Strategies',
  },
  {
    to: '/injury-knee-running-surface',
    src: surfaceImage,
    alt: 'Running Surface',
    title: 'Running Surface: Impact on Performance',
  },
  {
    to: '/injury-nutrition',
    src: nutritionImage,
    alt: 'Nutrition',
    title: 'Fueling Recovery: Injury and Nutrition',
  },
  {
    to: '/injury-prevention',
    src: preventionImage,
    alt: 'Injury Prevention',
    title: 'Stay Safe: Injury Prevention Secrets',
  },
  {
    to: '/injury-itband',
    src: itImage,
    alt: 'IT Band',
    title: 'Overcoming IT Band Pain Quick',
  },
  {
    to: '/injury-piriformis',
    src: piriformisImage,
    alt: 'Piriformis Pain',
    title: 'Piriformis Pain: Relief Techniques',
  },
  {
    to: '/injury-plantar',
    src: plantarImage,
    alt: 'Plantar',
    title: 'Fix You Plantar Fasciitis Pain Fast',
  },
  {
    to: '/injury-recovery',
    src: recoveryImage,
    alt: 'Recovery',
    title: 'Bounce Back: Injury Recovery Guide',
  },
  {
    to: '/injury-shin',
    src: shinImage,
    alt: 'Shin Pain',
    title: 'Easing Shin Pain for Runners',
  },
  
  {
    to: '/injury-knee-comeback',
    src: comebackImage,
    alt: 'Comeback Strong',
    title: 'Overcoming Knee Injuries: A Guide',
  },
  {
    to: '/injury-knee-common-injury',
    src: commonImage,
    alt: 'Common Injuries',
    title: 'Runners Knee: Common Injuries',
  },
  {
    to: '/injury-knee-common-rehab',
    src: rehabImage,
    alt: 'Knee Rehab',
    title: 'Effective Knee Injury Rehab - A Guide',
  },
  {
    to: '/injury-knee-over-use',
    src: overuseImage,
    alt: 'Overuse',
    title: 'Preventing Overuse Knee Injuries',
  },
  {
    to: '/injury-knee-running-bad',
    src: runningBadImage,
    alt: 'Running Bad For Knee',
    title: 'Is Running Harmful to Knees?',
  },
  {
    to: '/injury-knee-running-technique',
    src: techniqueImage,
    alt: 'Running Technique',
    title: 'Run Smart: Injury-Free Techniques',
  },
  {
    to: '/injury-knee-strength',
    src: strengthImage,
    alt: 'Knee Strength Training',
    title: 'Strength Training for Knee Protection',
  }
];

const InjuryHomepage = () => {
  return (
    <>
      <Helmet>
        <title>Events Homepage</title>
        <meta
          name="description"
          content="Stay updated with the latest events and highlights from the running world. Explore upcoming races, marathons, and running events."
        />
        <meta
          name="keywords"
          content="running events, marathons, Pakistani runners, running community, trail races, city marathons"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/injury-homepage"
        />
        <meta name="author" content="runPAKISTAN" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
        crossorigin="anonymous"></script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-2">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventItems.map((item, index) => (
            <Link to={item.to} className="news-link" key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default InjuryHomepage;
