import React from 'react';
import { Helmet } from 'react-helmet';
import image102 from '../../assets/images/runform1.jpg';
import image103 from '../../assets/images/swim1.jpg';
import Banner from '../../assets/images/icon.png'
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex mb-4 space-x-4 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const InjuryPrevention = () => {
  const pageUrl = "https://www.runpakistan.com/injury-prevention";
  const pageTitle = "Injury Prevention Tips for Runners";  

  return (
    <>
      <Helmet>
        <title>Injury Prevention</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn essential injury prevention tips for runners to avoid common injuries and ensure a safe and enjoyable running experience." />
        <meta name="keywords" content="injury prevention, running tips, running injuries, cross-training, proper footwear, gradual progression" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content={Banner} /> 
        <meta name="author" content="runPAKISTAN" />
        <link rel="canonical" href="https://www.runpakistan.com/injury-prevention" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:mt-16 flex flex-wrap">
        <div className="w-full md:w-3/4">
          <article className="blog-post">
            <h1 className="text-3xl font-bold mb-4">Injury Prevention Tips for Runners</h1>
            <ShareButtons url={pageUrl} title={pageTitle} />        
            <p className="mb-6">Running is a fantastic form of exercise, but it can also lead to various injuries if not approached with care. Here are some essential injury prevention tips for runners:</p>

            <div className="flex flex-wrap items-center mb-8">
              <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                <h2 className="text-xl font-bold mb-2">1. Gradual Progression</h2>
                <p className="mb-4">Avoid sudden increases in mileage or intensity. Gradually build up your mileage and pace to allow your body to adapt and reduce the risk of overuse injuries.</p>

                <h2 className="text-xl font-bold mb-2">2. Proper Footwear</h2>
                <p className="mb-4">Invest in good-quality running shoes that provide adequate support and cushioning for your foot type and running style. Replace your shoes regularly to prevent wear and tear.</p>

                <h2 className="text-xl font-bold mb-2">3. Cross-Training</h2>
                <p className="mb-4">Incorporate cross-training activities like swimming, cycling, or yoga into your routine to improve overall fitness, strengthen different muscle groups, and reduce the risk of overuse injuries.</p>

                <h2 className="text-xl font-bold mb-2">4. Listen to Your Body</h2>
                <p className="mb-4">Pay attention to any warning signs of injury, such as persistent pain, discomfort, or fatigue. Rest when needed, and don't push through pain during workouts.</p>

                <h2 className="text-xl font-bold mb-2">5. Proper Nutrition and Hydration</h2>
                <p className="mb-4">Fuel your body with a balanced diet rich in nutrients to support your training and recovery. Stay hydrated before, during, and after your runs to maintain optimal performance and prevent cramps.</p>

                <p>By incorporating these injury prevention tips into your running routine, you can enjoy the many benefits of running while minimizing the risk of injuries. Remember to prioritize safety and listen to your body to ensure a long and fulfilling running journey.</p>
              </div>

              <div className="w-full md:w-1/2 justify-center md:justify-end">
                <div className="max-w-xs mx-auto">
                  <img src={image102} alt="" className="rounded-md" style={{ height: '350px' }} />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
                <div className="max-w-xs mx-auto mt-10">
                  <img src={image103} alt="" className="rounded-md" style={{ height: '350px' }} />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default InjuryPrevention;
