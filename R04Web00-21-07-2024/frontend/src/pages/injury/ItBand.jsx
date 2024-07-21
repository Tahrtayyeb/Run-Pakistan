import React from 'react';
import { Helmet } from 'react-helmet';
import image104 from '../../assets/images/it2.jpeg';
import image105 from '../../assets/images/hamstring.jpg';
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

const ITBandSyndrome = () => {
  const pageUrl = "https://www.runpakistan.com/injury-itband";
  const pageTitle = "Understanding IT Band Syndrome in Runners";  
  <ShareButtons url={pageUrl} title={pageTitle} />        

  return (
    <>
      <Helmet>
        <title>Understanding IT Band Syndrome in Runners</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about IT band syndrome, a common injury among runners, including symptoms, causes, treatment, and prevention strategies."
        />
        <meta property="og:image" content={Banner} /> 
        <meta
          name="keywords"
          content="IT band syndrome, iliotibial band syndrome, runners, knee pain, running injuries, overuse injuries"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="runPAKISTAN" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/injury-itband"
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:mt-16 flex flex-wrap">
        <div className="w-full md:w-3/4">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl font-bold mb-4">
                Understanding IT Band Syndrome in Runners
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <p className="mb-4">
                IT band syndrome, or iliotibial band syndrome, is a common
                injury among runners. It occurs when the IT band, a thick band
                of connective tissue that runs along the outside of the thigh,
                becomes inflamed or tight. Here's what you need to know about IT
                band syndrome:
              </p>
              <div className="flex flex-col md:flex-row justify-center">
                <div className="max-w-xs mx-auto mb-4 md:mr-4">
                  <img
                    src={image104}
                    alt=""
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
                <div className="max-w-xs mx-auto">
                  <img
                    src={image105}
                    alt=""
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2"></p>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Symptoms of IT Band Syndrome
              </h2>
              <p className="mb-4">
                The most common symptom of IT band syndrome is pain on the
                outside of the knee, especially when running or walking
                downhill. Other symptoms may include swelling, tenderness, or a
                clicking sensation in the knee joint.
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Causes of IT Band Syndrome
              </h2>
              <p className="mb-4">
                IT band syndrome is often caused by overuse or repetitive
                motion, such as running long distances or cycling. Other factors
                that may contribute to IT band syndrome include improper
                footwear, muscle imbalances, or running on uneven surfaces.
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Treatment and Prevention
              </h2>
              <p className="mb-4">
                Treatment for IT band syndrome typically involves rest, ice,
                compression, and elevation (RICE). Physical therapy exercises to
                stretch and strengthen the IT band and surrounding muscles may
                also be beneficial. To prevent IT band syndrome, it's essential
                to gradually increase mileage, maintain proper running form, and
                incorporate strength training exercises into your routine.
              </p>

              <p>
                By understanding the symptoms, causes, and treatment options for
                IT band syndrome, runners can take proactive measures to prevent
                and manage this common injury, allowing them to continue
                enjoying the sport with minimal discomfort.
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

export default ITBandSyndrome;
