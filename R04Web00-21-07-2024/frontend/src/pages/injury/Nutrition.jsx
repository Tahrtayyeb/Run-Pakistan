import React from 'react';
import { Helmet } from 'react-helmet';
import image106 from '../../assets/images/nutrition1.jpg';
import image107 from '../../assets/images/nutriton3.jpg';
import image108 from '../../assets/images/nutrition2.jpg';
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

const NutritionForRunners = () => {
  const pageUrl = "https://www.runpakistan.com//injury-nutrition";
  const pageTitle = "Nutrition for Runners";  

  return (
    <>
      <Helmet>
        <title>Nutrition for Runners</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about the importance of nutrition for runners, including guidelines for performance, recovery, and overall well-being."
        />
        <meta property="og:image" content={Banner} /> 
        <meta
          name="keywords"
          content="nutrition for runners, running nutrition, performance nutrition, recovery nutrition, balanced diet for runners"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/injury-nutrition"
        />
        <meta name="author" content="runPAKISTAN" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:mt-16 flex flex-wrap">
        <div className="w-full md:w-3/4">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl font-bold mb-4">
                The Importance of Nutrition for Runners
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        

              <p className="mb-4">
                Proper nutrition plays a crucial role in the performance,
                recovery, and overall health of runners. Here's why nutrition is
                important for runners and some key guidelines to follow:
              </p>

              <div className="flex justify-center mt-8">
                <div className="w-1/2 mr-4">
                  <img
                    src={image106}
                    alt="Image 1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-1/2 ml-4">
                  <img
                    src={image107}
                    alt="Image 2"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              <h2 className="text-2xl mt-5 font-bold mb-2">
                Nutrition for Performance
              </h2>
              <p className="mb-4">
                Fueling your body with the right nutrients before, during, and
                after runs can enhance performance and endurance. Carbohydrates
                provide energy for running, while protein supports muscle repair
                and growth. Hydration is also essential to maintain optimal
                performance.
              </p>

              <h2 className="text-2xl font-bold mb-2">Recovery Nutrition</h2>
              <p className="mb-4">
                After a run, it's crucial to replenish glycogen stores and
                repair muscle tissue. Consuming a combination of carbohydrates
                and protein within the first 30 minutes to an hour post-run can
                promote faster recovery and reduce muscle soreness.
              </p>

              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-1/2 md:pr-4">
                  <p className="mb-4">
                    Including nutrient-dense foods such as bananas, yogurt, and whole-grain toast can provide the necessary carbohydrates. Pairing these with a good protein source like eggs, lean meats, or protein shakes will help repair muscle fibers. Hydration is equally important, so drinking plenty of water or electrolyte-rich beverages can restore fluid balance and prevent dehydration. Proper post-run nutrition not only aids in immediate recovery but also enhances performance in subsequent runs, keeping you energized and ready to hit the track again.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-4 text-center">
                  <img
                    src={image108}
                    alt="Nutrition Image 2"
                    className="mx-auto rounded-md mb-4"
                    style={{ height: '300px' }}
                  />
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Key Nutrition Guidelines for Runners
              </h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Eat a balanced diet rich in fruits, vegetables, whole grains,
                  lean proteins, and healthy fats.
                </li>
                <li>
                  Stay hydrated by drinking water throughout the day and during
                  runs.
                </li>
                <li>
                  Consume carbohydrates before long runs or races to fuel your
                  muscles.
                </li>
                <li>
                  Incorporate protein-rich foods like lean meats, eggs, beans,
                  and tofu to support muscle repair.
                </li>
                <li>
                  Include healthy fats from sources like nuts, seeds, avocados,
                  and olive oil for sustained energy.
                </li>
                <li>
                  Listen to your body's hunger and fullness cues to avoid
                  overeating or undereating.
                </li>
              </ul>

              <p>
                By prioritizing proper nutrition, runners can optimize their
                performance, support their training goals, and improve their
                overall well-being.
              </p>
            </article>
          </div>
        </div>

        {/* Ads Container */}
        {/* <div className="w-full md:w-1/4 md:pl-8 flex flex-col">
          <div className="mb-8">
            <div className="border border-gray-300 p-4 rounded-md bg-white shadow-md flex flex-col justify-center items-center">
              <img src="#" alt="Ad Image 1" className="w-full mb-4">
              <p>This is an ad. You can place your ad content here.</p>
            </div>
          </div>
          <div>
            <div className="border border-gray-300 p-4 rounded-md bg-white shadow-md flex flex-col justify-center items-center">
              <img src="#" alt="Ad Image 2" className="w-full mb-4">
              <p>This is another ad. You can place your ad content here.</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NutritionForRunners;
