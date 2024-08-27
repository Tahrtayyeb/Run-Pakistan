import React from 'react';
import { Helmet } from 'react-helmet';
import image64 from '../../../assets/images/kiptumCar.jpeg';
import image65 from '../../../assets/images/kiptumDeath.jpg';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon, EmailIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex mb-4 space-x-4 mt-4 justify-center">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

const KiptumArticle = () => {
  const pageUrl = "https://www.runpakistan.com/kiptum-death";
  const pageTitle = "Kelvin Kiptum: A Running Legend";  

  return (
    <>
      <Helmet>
        <title>Kelvin Kiptum: A Running Legend</title>
        <meta
          name="description"
          content="Learn about Kelvin Kiptum, a remarkable marathon runner whose legacy includes record-breaking performances and a tragic end. Explore his journey from humble beginnings in Chepkorio to international fame, his outstanding achievements in marathons, and the impact of his untimely death on the world of athletics."
        />
        <meta
          name="keywords"
          content="Kelvin Kiptum, marathon runner, world record, Chicago Marathon, London Marathon, Valencia Marathon, running legend, tragic death, athlete tribute, running achievements"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/kiptum-death"
        />
        <meta property="og:image" content={image64} /> 

        <meta name="author" content="runPAKISTAN" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Kelvin Kiptum: A Running Legend",
            "image": [
              "https://www.runpakistan.com/assets/images/kiptumCar.jpeg",
              "https://www.runpakistan.com/assets/images/kiptumDeath.jpg"
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
            "description": "Learn about Kelvin Kiptum, a remarkable marathon runner whose legacy includes record-breaking performances and a tragic end. Explore his journey from humble beginnings in Chepkorio to international fame, his outstanding achievements in marathons, and the impact of his untimely death on the world of athletics."
          })}
        </script>
      </Helmet>
      <div className="container md:ml-10 px-4 mt-2 py-8 flex flex-wrap">
        <div className="w-full md:w-3/4 sm:mt-20">
          <div className="max-w-3xl mx-auto flex flex-col">
            <article className="blog-post">
              <h1 className="text-green-800 text-3xl text-center font-bold mb-4">Kelvin Kiptum: A Legend of Modern Day</h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        

              <p className="mb-4 mt-5">
                According to World Athletics, Kelvin Kiptum was born on December 2nd, 1999. His childhood was spent in the village of Chepkorio, situated at an altitude of 2600 meters. As the only child of his parents, he spent much of his childhood herding family cattle. It was during this time, while he observed trail runners in the forest, that he began to follow them barefoot.
              </p>
              <div className="flex flex-wrap justify-center mb-8">
                <div className="mx-2 mb-4 flex justify-center">
                  <img
                    src={image64}
                    alt="Kelvin Kiptum"
                    className="rounded-md md:w-full shadow-md"                  />
                </div>
              </div>

              <p className="mb-4">
                At the age of 13, he initiated his running career by participating in a half marathon in Kenya, where he finished in 12th place. Over time, he competed in many half marathons and races, culminating in his debut international marathon in December 2022 at Valencia. There, he pulled off an upset by finishing in 2 hours, 1 minute, and 53 seconds, the fourth fastest time ever recorded. Remarkably, he achieved negative splits, breaking the course record by a minute and becoming the third man to break the two-hour, two-minute milestone, a feat previously achieved only by Eliud Kipchoge and Kenenisa Bekele.
              </p>
              <p className="mb-4">
                In April 2023, at the London Marathon, he shattered the course record, completing the marathon in 2 hours, 1 minute, and 25 seconds, a mere 16 seconds slower than the world record at that time.
              </p>
              <p className="mb-4">
                Later that year, at the Chicago Marathon in October 2023, at the age of 23, he ran the fastest marathon ever recorded by any athlete, finishing in just 2 hours and 35 seconds. He smashed the world record by 34 seconds and the course record by 3 minutes, astonishingly achieving negative splits. His performance in the challenging Chicago Marathon sparked hope for a sub-2-hour marathon in the near future.
              </p>
              <h2 className="text-xl font-bold mb-2 text-green-800">Notable Achievements</h2>
              <ul className="list-disc ml-8 mb-4">
                <li>2023 Chicago Marathon - Finished in 2 hours and 35 seconds and made a world record.</li>
                <li>2023 London Marathon - Finished in 2 hours, 1 minute, and 25 seconds.</li>
                <li>2022 Valencia Marathon - Finished in 2 hours, 1 minute, and 53 seconds.</li>
              </ul>

              <p className="mb-4">
                Regarding his training, following his record-breaking performances, his coach provided insight into Kiptum’s regimen, stating that the athlete runs 250 to 280 kilometers (155 to 173 miles) per week, an astounding figure for any athlete. Kiptum ran three of the seven fastest marathons in history.
              </p>
              <p className="mb-4">
                Tragically, Kiptum and his coach were involved in a car accident on February 11th, 2024, while returning home. Four men who had met the athlete four days prior to the accident were later detained during the investigation.
              </p>

              <div className="flex flex-wrap justify-center mb-8">
                <div className="mx-2 mb-4 flex justify-center">
                  <img
                    src={image65}
                    alt="Kelvin Kiptum"
                    className="rounded-md md:w-full shadow-md"
                  />
                </div>
              </div>
              <p className="mb-4">
                World Athletics President Sebastian Coe expressed his deepest condolences, acknowledging Kelvin's remarkable legacy and the impact he had on the world of athletics. Former marathon world record holder Eliud Kipchoge mourned the loss of Kelvin, describing him as a rising star with a promising future.
              </p>
              <p className="mb-4">
                Kiptum, survived by a widow and two children, was laid to rest at his farm in Naiberi.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiptumArticle;
