import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import image51 from '../../assets/images/london3.jpg';
import image52 from '../../assets/images/bostonGroup.jpeg';
import image53 from '../../assets/images/jasmin1.jpg';
import image54 from '../../assets/images/geezer.jpg';
import image55 from '../../assets/images/beijing1.jpeg';
import image56 from '../../assets/images/kiptumCar.jpeg';
import image57 from '../../assets/images/pheid2.jpeg';
import image57A from '../../assets/images/runlahore8/00.jpg';
import image57B from '../../assets/images/galiyat2024/galiyat1.webp';
import image57C from '../../assets/images/pearl2024/pearl1.png';
import image57D from '../../assets/images/runlahore9/hiker.jpeg';
import image57E from '../../assets/images/faisalshafi/faisal13.jpeg';
import Banner from '../../assets/images/icon.png';


const newsItems = [
  {
    to: '/blog/faisal-shafi-running-mental-health',
    src: image57E,
    alt: 'Mental Health Awareness ',
    title: 'Mental Health & Its Impact on Running ',
    description: 'Mental Health Awarenes Special with Six Star Finisher Faisal Shafi',
  },
  {
    to: '/events/galiyat-mountain-trail-2024',
    src: image57B,
    alt: 'Highlights & Results of Galiyat Trail Run',
    title: 'Highlights of Galiyat Trail Run',
    description: 'Exclusive Results & Pictures from 3rd Edition of Galiyat Mountain Trail 2024 by Margalla Trail Runners (MTR)',
  },
  {
    to: '/run-lahore-time-trail-9th-edition-hikerpk',
    src: image57D,
    alt: 'Highlights & Results of Run Lahore Time Trial Series 9th Edition',
    title: 'Highlights of Time Trial 9th Edition',
    description: 'Exclusive Results & Pictures from 9th Edition of Run Lahore - Time Trial Series by Hiker.pk',
  },
  {
    to: '/events/pearl-half-marathon-rawalakot-2024',
    src: image57C,
    alt: 'Highlights & Results of Pearl Half Marathon Kashmir',
    title: 'Highlights of Pearl Half Marathon Kashmir',
    description: 'Exclusive Results & Pictures from 1st Edition of Pearl Half Marathon 2024',
  },
  {
    to: '/run-lahore-time-trail-8th-edition-cml',
    src: image57A,
    alt: 'Run Lahore Time Trial',
    title: 'Run Lahore Time Trial Series',
    description: 'Exclusive Results & Pictures from 8th Edition of Run Lahore Time Trial by Critical Mass Lahore (CML) powered by Joma',
  },
  {
    to: '/london-marathon-2024',
    src: image51,
    alt: 'London24',
    title: 'London Marathon 2024 Highlights & Strides of Pakistani Runners',
    description: 'Pakistani runners took part in London Marathon in huge numbers.',
  },
  {
    to: '/boston-marathon-2024',
    src: image52,
    alt: 'Boston24',
    title: 'Boston Marathon Highlights & Pakistani Runner Community',
    description: 'Pakistani runners shining in Boston Marathon.',
  },
  {
    to: '/barkley-jasmin-2024',
    src: image53,
    alt: 'Jasmin Paris',
    title: 'Record Breaking Barkley Marathon',
    description: 'Running over 100 miles with 63,000 ft elevation and tendinitis in one knee',
  },
  {
    to: '/hardest-geezer-africa',
    src: image54,
    alt: 'Hardest Geezer',
    title: 'Hardest Geezer - Iron Man',
    description: 'Russ Cook, the first man, ran the length of Africa. Read how he made 5000km journey',
  },
  {
    to: '/beijing-contro-2024',
    src: image55,
    alt: 'Beijing Marathon',
    title: 'Beijing Marathon 2024',
    description: 'Controversy from the Beijing Half-Marathon 2024.',
  },
  {
    to: '/kiptum-death',
    src: image56,
    alt: 'Kiptum',
    title: 'Kiptum - A Sad Day',
    description: 'Kelvin Kiptum death left running world in shock.',
  },
  {
    to: '/messenger-marathon-pheid',
    src: image57,
    alt: 'Messenger of Marathon',
    title: 'The Messenger from Marathon',
    description: 'History of Marathon distance and its origin.',
  },
];

const NewsHomepage = () => {
  return (
    <>
      <Helmet>
        <title>News Homepage</title>
        <meta
          name="description"
          content="Stay updated with the latest news and highlights from the running world. Explore articles covering marathons, remarkable runners, and extraordinary achievements."
        />
        <meta
          name="keywords"
          content="running news, marathon highlights, Pakistani runners, running community, Barkley Marathon, London Marathon, Boston Marathon, Kelvin Kiptum, Russ Cook, Jasmin Paris"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/news-main-page"
        />
        <meta property="og:image" content={Banner} /> 

        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 mt-2">
          <div className="sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
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
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHomepage;
