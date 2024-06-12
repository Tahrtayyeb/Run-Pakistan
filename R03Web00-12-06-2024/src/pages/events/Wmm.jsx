import React from 'react';
import { Helmet } from 'react-helmet';
import image18 from '../../assets/images/bostonLogo.jpeg';
import image19 from '../../assets/images/london.png';
import image20 from '../../assets/images/berlin.png';
import image21 from '../../assets/images/chicago.png';
import image22 from '../../assets/images/nyc.png';
import image23 from '../../assets/images/tokyo.png';

const AbbottWorldMarathonMajors = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abbott World Marathon Majors</title>
        <meta name="description" content="Explore the Abbott World Marathon Majors, a series of six renowned marathons attracting elite athletes and running enthusiasts worldwide. Learn about iconic races like the Boston Marathon, London Marathon, Berlin Marathon, Chicago Marathon, New York City Marathon, and Tokyo Marathon." />
        <meta name="keywords" content="Abbott World Marathon Majors, marathon, Boston Marathon, London Marathon, Berlin Marathon, Chicago Marathon, New York City Marathon, Tokyo Marathon, elite athletes, running, running enthusiasts" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/abbot-world-major-marathons" />
        <meta name="author" content="runPAKISTAN" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
        crossorigin="anonymous"></script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-2 flex flex-wrap">
        {/* Main Content */}
        <div className="w-full md:w-3/4 mt-16">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl font-bold mb-4">Abbott World Marathon Majors</h1>
              <p className="mb-4">The Abbott World Marathon Majors (AbbottWMM) is a series consisting of six of the largest and most renowned marathons in the world. These races attract elite athletes, avid runners, and spectators from across the globe. Here's an overview of the six major marathons:</p>
              
              {/* Boston Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image18} alt="Boston Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">Boston Marathon</h2>
                  <p className="mb-2">Location: Boston, Massachusetts, USA</p>
                  <p className="mb-2">Date: Typically held on the third Monday in April</p>
                  <p className="mb-4">The Boston Marathon is one of the oldest and most prestigious marathons in the world. It is known for its challenging course, including the infamous Heartbreak Hill, and its rich history.</p>
                </div>
              </div>
              
              {/* London Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image19} alt="London Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">London Marathon</h2>
                  <p className="mb-2">Location: London, UK</p>
                  <p className="mb-2">Date: Typically held in April</p>
                  <p className="mb-4">The London Marathon is one of the largest and most iconic marathons in the world, known for its scenic route through the historic streets of London and its festive atmosphere.</p>
                </div>
              </div>

              {/* Berlin Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image20} alt="Berlin Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">Berlin Marathon</h2>
                  <p className="mb-2">Location: Berlin, Germany</p>
                  <p className="mb-2">Date: Typically held in September</p>
                  <p className="mb-4">The Berlin Marathon is known for its fast and flat course, making it a favorite among elite and recreational runners looking to set personal records. The race takes participants through the historic streets of Berlin.</p>
                </div>
              </div>
              
              {/* Chicago Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image21} alt="Chicago Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">Chicago Marathon</h2>
                  <p className="mb-2">Location: Chicago, Illinois, USA</p>
                  <p className="mb-2">Date: Usually held in October</p>
                  <p className="mb-4">The Chicago Marathon is renowned for its fast and flat course, which winds through the streets of downtown Chicago and showcases the city's iconic skyline. The race attracts thousands of runners from around the world.</p>
                </div>
              </div>
              
              {/* New York City Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image22} alt="New York Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">New York City Marathon</h2>
                  <p className="mb-2">Location: New York City, USA</p>
                  <p className="mb-2">Date: Typically held on the first Sunday in November</p>
                  <p className="mb-4">The New York City Marathon is the largest marathon in the world, with a diverse and challenging course that takes runners through all five boroughs of New York City. The event is known for its incredible crowd support and electric atmosphere.</p>
                </div>
              </div>

              {/* Tokyo Marathon */}
              <div className="mb-8 flex items-center flex-wrap">
                <div className="w-full md:w-1/2">
                  <img src={image23} alt="Tokyo Marathon" className="w-full mb-2 rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <h2 className="text-xl font-semibold mb-2">Tokyo Marathon</h2>
                  <p className="mb-2">Location: Tokyo, Japan</p>
                  <p className="mb-2">Date: Usually held in March</p>
                  <p className="mb-4">The Tokyo Marathon is known for its incredible organization, enthusiastic crowd support, and scenic route through the heart of Tokyo. Runners pass by iconic landmarks such as the Imperial Palace and Tokyo Tower.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Ad Section */}
        {/* You can add ad sections here if needed */}
      </div>
    </>
  );
};

export default AbbottWorldMarathonMajors;
