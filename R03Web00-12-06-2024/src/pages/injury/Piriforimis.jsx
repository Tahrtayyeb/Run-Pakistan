import React from 'react';
import { Helmet } from 'react-helmet';
import image109 from '../../assets/images/piriforimis1.jpeg';
import image110 from '../../assets/images/hip1.jpeg';


const PiriformisSyndrome = () => {
  return (
    <>
      <Helmet>
        <title>Piriformis Syndrome</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about Piriformis Syndrome in runners: symptoms, treatment, and prevention strategies. Understand how to manage this painful condition effectively."
        />
        <meta
          name="keywords"
          content="Piriformis Syndrome, runners, symptoms, treatment, prevention, muscle, pain, buttocks, stretching, exercises, physical therapy, flexibility, overuse injuries, running form, footwear"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/injury-piriformis"
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
                Understanding Piriformis Syndrome in Runners
              </h1>
              <p className="mb-4">
                Piriformis syndrome is a painful condition that affects the
                piriformis muscle, which is located deep within the buttocks.
                Runners may experience piriformis syndrome due to overuse,
                muscle imbalances, or anatomical variations. Here's what runners
                need to know about piriformis syndrome:
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Symptoms of Piriformis Syndrome
              </h2>
              <p className="mb-4">
                The primary symptom of piriformis syndrome is pain in the
                buttocks that may radiate down the back of the leg. Runners with
                piriformis syndrome may experience:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Sharp or stabbing pain in the buttocks</li>
                <li>Pain that worsens with prolonged sitting or running</li>
                <li>Numbness or tingling along the back of the leg</li>
                <li>Difficulty walking or running</li>
              </ul>

              <div className="flex flex-col md:flex-row justify-center">
                <div className="max-w-xs mx-auto mb-4 md:mr-4">
                  <img
                    src={image109}
                    alt=""
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
                <div className="max-w-xs mx-auto">
                  <img
                    src={image110}
                    alt=""
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Treatment and Prevention
              </h2>
              <p className="mb-4">
                Treatment for piriformis syndrome typically involves rest,
                stretching exercises, and physical therapy to reduce pain and
                improve flexibility. Runners can prevent piriformis syndrome by:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Incorporating regular stretching and foam rolling to maintain
                  flexibility
                </li>
                <li>
                  Strengthening the hip muscles to support proper alignment and
                  stability
                </li>
                <li>
                  Gradually increasing mileage and intensity to avoid overuse
                  injuries
                </li>
                <li>Using proper running form and footwear</li>
              </ul>

              <p>
                By understanding the symptoms, treatment options, and prevention
                strategies for piriformis syndrome, runners can minimize their
                risk of experiencing this painful condition and continue to
                enjoy their sport.
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

export default PiriformisSyndrome;
