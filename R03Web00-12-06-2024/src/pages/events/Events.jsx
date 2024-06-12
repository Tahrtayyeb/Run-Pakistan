import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import galiyatImage from '../../assets/images/galiyat.jpg';
import backyardImage from '../../assets/images/backyard24.jpg';
import capitalImage from '../../assets/images/capitalHM.png';
import karachiImage from '../../assets/images/karachi1.png';
import islamabadImage from '../../assets/images/iru2025.jpg';
import lahoreImage from '../../assets/images/ftc2025.jpg';

const eventItems = [
  {
    to: '/galiyat-mountain-trail-2024',
    src: galiyatImage,
    alt: 'Galiyat Mountain Trail Race 2024',
    title: 'Galiyat Mountain Trail Race 2024',
  },
  {
    to: '/margalla-backyard-ultra-2024',
    src: backyardImage,
    alt: 'Margalla Backyard Ultra 2024',
    title: 'Margalla Backyard Ultra 2024',
  },
  {
    to: '/capital-half-marathon-2025',
    src: capitalImage,
    alt: 'Capital Half Marathon 2025',
    title: 'Capital Half Marathon 2025',
  },
  {
    to: '/karachi-marathon-2025',
    src: karachiImage,
    alt: 'Karachi Marathon 2025',
    title: 'Karachi Marathon 2025',
  },
  {
    to: '/islamabad-marathon-2025',
    src: islamabadImage,
    alt: 'Islamabad Marathon 2025',
    title: 'Islamabad Marathon 2025',
  },
  {
    to: '/lahore-marathon-2025',
    src: lahoreImage,
    alt: 'Lahore Marathon 2025',
    title: 'Lahore Marathon 2025',
  },
];

const EventsHomepage = () => {
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
          href="https://www.runpakistan.com/events-main-page"
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
                  <h2 className="text-l text-center font-bold mb-2">
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

export default EventsHomepage;
