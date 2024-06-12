import React from 'react';
import { Helmet } from 'react-helmet';
import image106 from '../../assets/images/grunner6.jpeg';
import image107 from '../../assets/images/nutrition3.jpeg';
import image108 from '../../assets/images/nutrition2.jpeg';

const NutritionForRunners = () => {
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
        crossorigin="anonymous"></script>
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-wrap">
        <div className="w-full md:w-3/4">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl font-bold mb-4">
                The Importance of Nutrition for Runners
              </h1>
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

              <h2 className="text-2xl font-bold mb-2">
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
                    After a run, it's crucial to replenish glycogen stores and
                    repair muscle tissue. Consuming a combination of
                    carbohydrates and protein within the first 30 minutes to an
                    hour post-run can promote faster recovery and reduce muscle
                    soreness.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-4 text-center">
                  <img
                    src={image108}
                    alt="Nutrition Image 2"
                    className="mx-auto mb-4"
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
