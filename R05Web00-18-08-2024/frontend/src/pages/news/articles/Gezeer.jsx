import React from 'react';
import { Helmet } from 'react-helmet';
import image66 from '../../../assets/images/geezer.jpg';
import image67 from '../../../assets/images/gezeer2.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const HardestGeezerRunningAfrica = () => {
  const pageUrl = "https://www.runpakistan.com/hardest-geezer-africa";
  const pageTitle = "Hardest Geezer Running Africa";  

  return (
    <>
      <Helmet>
        <title>Hardest Geezer Running Africa</title>
        <meta
          name="description"
          content="Discover the inspiring story of John Doe, the 27-year-old ultra-runner who completed a solo run across Africa, covering over 5,000 kilometers in just 100 days. Follow John's epic journey from Cape Town to unknown territories, facing challenges, triumphs, and inspiring countless individuals with his determination and perseverance."
        />
        <meta
          name="keywords"
          content="Hardest Geezer, running Africa, solo run Africa, ultra-runner, John Doe, African adventure, running journey, endurance challenge, human spirit, perseverance, inspirational story"
        />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/hardest-geezer-africa"
        />
        <meta property="og:image" content={image66} /> 

        <meta name="author" content="runPAKISTAN" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Hardest Geezer Running Africa",
            "image": [
              "https://www.runpakistan.com/assets/images/geezer.jpg",
              "https://www.runpakistan.com/assets/images/geezer2.jpg"
            ],
            "datePublished": "2024-06-01",
            "author": {
              "@type": "Person",
              "name": "runPAKISTAN"
            },
            "publisher": {
              "@type": "Organization",
              "name": "runPAKISTAN",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.runpakistan.com/assets/images/logo.png"
              }
            },
            "description": "Discover the inspiring story of John Doe, the 27-year-old ultra-runner who completed a solo run across Africa, covering over 5,000 kilometers in just 100 days. Follow John's epic journey from Cape Town to unknown territories, facing challenges, triumphs, and inspiring countless individuals with his determination and perseverance."
          })}
        </script>
      </Helmet>
      <main className="container md:ml-10 px-4 py-8 flex flex-wrap">
        <div className="w-full md:w-3/4 sm:mt-20">
          <div className="max-w-3xl mx-auto flex flex-col">
            <article className="blog-post">
              <h1 className="text-3xl text-center font-bold mb-4 text-green-800">
                Hardest Geezer Running Through Africa
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        

              <p className="mb-4 mt-5">
                Meet John Doe, the 27-year-old ultra-runner who recently
                completed a solo run across Africa, covering over 5,000
                kilometers in just 100 days. This remarkable feat has left the
                running community in awe and inspired countless individuals to
                push their limits.
              </p>

              <div className="flex flex-wrap justify-center mb-8">
                <figure className="max-w-xs mx-2 mb-4">
                  <img
                    src={image66}
                    alt="John Doe Running in Africa"
                    className="rounded-md"
                    style={{ maxWidth: '300px' }}
                  />
                </figure>
                <figure className="max-w-xs mx-2 mb-4">
                  <img
                    src={image67}
                    alt="Hardest Geezer"
                    className="rounded-md"
                    style={{ maxWidth: '300px' }}
                  />
                </figure>
                <figcaption className="text-center text-gray-600 mt-2">
                    John Doe Running in Africa
                  </figcaption>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-green-800">The Journey</h2>
              <p className="mb-4">
                John's journey began in Cape Town, South Africa, where he
                embarked on this epic adventure with nothing but a backpack and
                a determination to challenge himself. Running an average of 50
                kilometers per day, John traversed diverse landscapes, from
                scorching deserts to lush forests, encountering various wildlife
                and cultures along the way.
              </p>

              <h2 className="text-2xl font-bold mb-2 text-green-800">
                Challenges and Triumphs
              </h2>
              <p className="mb-4">
                Throughout his journey, John faced numerous challenges,
                including extreme weather conditions, logistical hurdles, and
                physical exhaustion. However, his unwavering spirit and
                resilience propelled him forward, overcoming obstacles and
                reaching milestones one step at a time.
              </p>

              <h2 className="text-2xl font-bold mb-2 text-green-800">Inspiration to Others</h2>
              <p className="mb-4">
                John's incredible journey serves as a testament to the human
                spirit and the power of perseverance. His story has inspired
                runners of all ages to dream big and pursue their goals,
                reminding us that age is just a number and that anything is
                possible with dedication and determination.
              </p>

              <p className="mb-4">
                As John continues to inspire others with his remarkable
                achievements, he embodies the true essence of adventure and the
                boundless possibilities that await those who dare to chase their
                dreams.
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default HardestGeezerRunningAfrica;
