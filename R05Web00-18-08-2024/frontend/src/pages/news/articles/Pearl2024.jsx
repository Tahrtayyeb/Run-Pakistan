import React from 'react';
import { Helmet } from 'react-helmet';
import startLine from '../../../assets/images/pearl2024/pearl6.jpg';
import scenicRoute from '../../../assets/images/pearl2024/pearl2.jpg';
import winner from '../../../assets/images/pearl2024/pearl4.jpg';
import podium from '../../../assets/images/pearl2024/pearl7.jpg';
import winner1 from '../../../assets/images/pearl2024/pearl5.jpg';
import podium1 from '../../../assets/images/pearl2024/pearl8.jpg';
import raceCrowd from '../../../assets/images/pearl2024/pearl3.jpg';
import Banner from '../../../assets/images/pearl2024/pearl1.png';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mt-4 mb-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

const men60Results = [
  {
    position: '1',
    athlete: 'Arslan Raj',
    city: 'Dadyal',
    time: '1:32:10',
  },
  {
    position: '2',
    athlete: 'Faisal',
    city: 'Mirpur',
    time: '1:32:15',
  },
  {
    position: '3',
    athlete: 'Hassan',
    city: 'Rawalakot',
    time: '1:37:00',
  },
];
  

const PageMeta = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.runpakistan.com';
  const bannerUrl = `${baseUrl}/assets/images/pearl2024/pearl1.png`;
  return (
    <Helmet>
      <title>Pearl Half Marathon 2024: Conquer the Scenic Valleys of Rawalakot, Kashmir</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Experience the thrill of the Pearl Half Marathon in Rawalakot, Kashmir. A 21km journey through breathtaking landscapes, challenging all levels of runners. Discover race highlights, winner stories, and the beauty of Kashmir." />
      <meta name="keywords" content="Pearl Half Marathon, Rawalakot, Kashmir, trail running, mountain race, fitness event, scenic run, adventure tourism" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.runpakistan.com/events/pearl-half-marathon-rawalakot-2024" />
      <meta property="og:title" content="Pearl Half Marathon 2024: Conquer the Scenic Valleys of Rawalakot, Kashmir" />
      <meta property="og:description" content="Experience the thrill of the Pearl Half Marathon in Rawalakot, Kashmir. A 21km journey through breathtaking landscapes, challenging all levels of runners." />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:url" content="https://www.runpakistan.com/events/pearl-half-marathon-rawalakot-2024" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pearl Half Marathon 2024: Conquer the Scenic Valleys of Rawalakot, Kashmir" />
      <meta name="twitter:description" content="Experience the thrill of the Pearl Half Marathon in Rawalakot, Kashmir. A 21km journey through breathtaking landscapes, challenging all levels of runners." />
      <meta name="twitter:image" content={bannerUrl} />
      <meta name="author" content="runPAKISTAN" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "Pearl Half Marathon 2024",
            "description": "A 21km half marathon through the scenic valleys of Rawalakot, Kashmir",
            "startDate": "2024-04-15T07:00",
            "endDate": "2024-04-15T12:00",
            "location": {
              "@type": "Place",
              "name": "Rawalakot",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rawalakot",
                "addressRegion": "Azad Kashmir",
                "addressCountry": "Pakistan"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Pearl Warriors",
              "url": "https://www.pearlwarriors.com"
            },
            "competitor": [
              {
                "@type": "Person",
                "name": "Arslan Raj"
              },
              {
                "@type": "Person",
                "name": "Faisal"
              },
              {
                "@type": "Person",
                "name": "Faraz"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

const PearlHalfMarathon2024 = () => {
  const pageUrl = "https://www.runpakistan.com/events/pearl-half-marathon-rawalakot-2024";
  const pageTitle = "Pearl Half Marathon 2024: Conquer the Scenic Valleys of Rawalakot, Kashmir";

  return (
    <>
      <PageMeta />
      <div className="container mx-auto px-4 py-8 mt-2 md:mt-16">
        <article className="max-w-4xl mx-auto">
          <img src={Banner} alt="Pearl Half Marathon 2024 Banner" className="w-full h-auto rounded-lg shadow-lg mb-8" />
          <h1 className="text-4xl font-bold mb-6 text-green-800">Pearl Half Marathon 2024</h1>
          <ShareButtons url={pageUrl} title={pageTitle} />

          <section className="mb-12">
            <p className="mb-4">
              On July 21, 2024, the serene valleys of Rawalakot, Kashmir, came alive with the thunderous footsteps and spirited cheers of runners 
              participating in the Pearl Half Marathon, over 300 participants showed for the event. This 21-kilometer race, aptly named "The Pearl 
              Warriors," offered an exhilarating blend of natural beauty and physical challenge, attracting both seasoned marathoners and enthusiastic 
              first-timers.
            </p>
            <p className="mb-4">
              The race course, starting from the Eidgah Football Ground, took participants on a journey through the heart of Rawalakot. Runners traversed 
              the picturesque city, passing through Chehra, Chak, Khai Gala, Chotagala Cross, and University Road, each turn revealing new breathtaking 
              vistas of Kashmir's renowned landscapes.
            </p>
            <img src={scenicRoute} alt="Scenic route of Pearl Half Marathon in Rawalakot" className="w-full h-auto rounded-lg shadow-md mb-4" />

          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">A Community United by Sport</h2>
            <p className="mb-4">
              The Pearl Half Marathon was more than just a race; it was a celebration of community spirit and the promotion of health and fitness. 
              Participants from all corners of Pakistan converged in Rawalakot, bringing with them a diversity of experiences and a shared passion for running.
            </p>
            <img src={raceCrowd} alt="Enthusiastic crowd at the Pearl Half Marathon" className="w-full h-auto rounded-lg shadow-md mb-4" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Race Highlights and Top Performers</h2>
            <p className="mb-4">
              The race saw fierce competition among the top runners, pushing each other to their limits. Arslan Raj emerged as the champion, crossing the 
              finish line with an impressive time of 1 hour, 32 minutes, and 10 seconds. His performance set a high bar for future editions of the Pearl Half Marathon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <img src={winner} alt="Arslan Raj crossing the finish line" className="w-full h-auto rounded-lg shadow-md" />
              <img src={podium} alt="Podium celebration with top three finishers" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <p className="mb-4">
              Hot on his heels was Faisal, who secured second place with a time of 1 hour, 32 minutes, and 15 seconds – a mere 5 seconds behind the winner. 
              The nail-biting finish had spectators on the edge of their seats. Faraz rounded out the top three with a strong performance, clocking in at 1 
              hour and 37 minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <img src={winner1} alt="Arslan Raj crossing the finish line" className="w-full h-auto rounded-lg shadow-md" />
              <img src={podium1} alt="Podium celebration with top three finishers" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </section>
          <section className="race-results">
                <h1 className="text-2xl font-bold text-center mt-4 mb-4">Men Category Results</h1>
                <div className="overflow-x-auto">
                    <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                        <th className="border px-4 py-2">Athlete</th>
                        <th className="border px-4 py-2">City</th>
                        <th className="border px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {men60Results.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                            <td className="border text-center px-4 py-2">{result.athlete}</td>
                            <td className="border text-center px-4 py-2">{result.city}</td>
                            <td className="border px-4 text-center py-2">{result.time}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Impact on Local Tourism and Economy</h2>
            <p className="mb-4">
              The Pearl Half Marathon has quickly established itself as a significant event in Pakistan's sports calendar, 
              bringing attention to the natural beauty and hospitality of Rawalakot. The influx of participants and spectators 
              provided a boost to local businesses, from hotels to restaurants and shops.
            </p>
            <p className="mb-4">
              To make the event accessible to all, organizers arranged special discounts for participants traveling from different areas of Pakistan. This 
              thoughtful gesture not only increased participation but also promoted tourism in the beautiful region of Azad Kashmir.
            </p>
            <p className="mb-4">
              This event not only promoted fitness and community spirit but also showcased Rawalakot as a prime destination for sports tourism. The success 
              of the Pearl Half Marathon paves the way for future sporting events in the region, potentially transforming Rawalakot into a hub for adventure 
              and endurance sports.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Looking Ahead: The Future of Pearl Half Marathon</h2>
            <img src={startLine} alt="Runners at the start line of Pearl Half Marathon" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <p className="mb-4">
              With the resounding success of this year's event, organizers are already looking forward to the next edition of the Pearl Half Marathon. 
              Plans are underway to expand the event, potentially including additional race categories to cater to a wider range of runners.
            </p>
            <p className="mb-4">
              The organizers expressed their commitment to maintaining the event's focus on promoting health, community engagement, and sustainable tourism. 
              They aim to work closely with local authorities and businesses to ensure that future races continue to benefit the region while providing an 
              unforgettable experience for participants.
            </p>
            <p>
              As the sun set on this memorable day, participants, organizers, and spectators alike reflected on an event that not only challenged physical limits but also brought people together in one of Pakistan's most stunning locations. The Pearl Half Marathon has set a new standard for running events in the region, leaving participants inspired and eagerly anticipating next year's race through the pearl of Kashmir – Rawalakot.
            </p>
          </section>
        </article>
      </div>
    </>
  );
};

export default PearlHalfMarathon2024;