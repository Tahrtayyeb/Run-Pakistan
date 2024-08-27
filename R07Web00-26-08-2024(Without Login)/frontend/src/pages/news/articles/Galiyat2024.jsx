import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import image1A from '../../../assets/images/galiyat2024/galiyat5.jpeg';
import image2 from '../../../assets/images/galiyat2024/galiyat2.jpeg';
import image2A from '../../../assets/images/galiyat2024/galiyat2A.jpeg';
import image1D from '../../../assets/images/galiyat2024/galiyat3.jpeg';
import image2B from '../../../assets/images/galiyat2024/galiyat4.jpeg';
import image3B from '../../../assets/images/galiyat2024/galiyat7.jpeg';
import Banner from '../../../assets/images/galiyat2024/galiyat01.jpg';
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

const men60Results = [
  {
    position: '1',
    athlete: 'Muzammil Shahzad',
    club: 'Islamabad Running Club',
    time: '6:55',
  },
  {
    position: '2',
    athlete: 'Athar Akhtar',
    club: 'Islamabad Running Club',
    time: '7:11',
  },
  {
    position: '3',
    athlete: 'Hassan Habib',
    club: 'Margalla Trail Runners',
    time: '7:51',
  },
];
  
const women60Results = [
  {
    position: '1',
    athlete: 'Christina Weiser',
    club: 'Margalla Trail Runners',
    time: '7:40',
  },
  {
    position: '2',
    athlete: 'Sadia Maqbool',
    club: 'Travelgirl',
    time: '13:23',
  },
  {
    position: '3',
    athlete: 'Zaira Syed',
    club: 'Hiker.pk',
    time: '14:55',
  },
];

const menResults = [
    {
      position: '1',
      athlete: 'Saad Sikandar',
      club: 'Islamabad Running Club',
      time: '1:55',
    },
    {
      position: '2',
      athlete: 'Will Reynolds',
      club: 'United Kingdom',
      time: '1:59',
    },
    {
      position: '3',
      athlete: 'Pablo Samper',
      club: 'Spain',
      time: '2:10',
    },
  ];
    

    
const womenResults = [
  {
    position: '1',
    athlete: 'Anja Myrtveit',
    club: 'Norway',
    time: '2:24',
  },
  {
    position: '2',
    athlete: 'Emily Vooris',
    club: 'United States of America',
    time: '2:44',
  },
  {
    position: '3',
    athlete: 'Jessie Beham',
    club: 'United Kingdom',
    time: '2:51',
  },
];
  
const ResultsSection = () => {
const navigate = useNavigate();}

const PageMeta = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.runpakistan.com';
  const bannerUrl = `${baseUrl}/assets/images/galiyat2024/galiyat01.jpg`;
  return (
    <Helmet>
      <title>Galiyat Mountain Trail 2024: Epic Adventure in Pakistan's Scenic Highlands</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Experience the thrill of Galiyat Mountain Trail 2024, a UTMB Index race through Pakistan's breathtaking landscapes. From Thandiyani to Khaira Gali, runners conquered challenging 60km and 20km routes. Discover highlights, results, and the spirit of trail running in the heart of KPK." />
      <meta name="keywords" content="Galiyat Mountain Trail 2024, UTMB Index race, trail running Pakistan, Thandiyani, Khaira Gali, ultra-trail running, mountain race, KPK tourism, outdoor adventure, endurance sports" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.runpakistan.com/events/galiyat-mountain-trail-2024" />
      <meta property="og:title" content="Galiyat Mountain Trail 2024: Epic Adventure in Pakistan's Scenic Highlands" />
      <meta property="og:description" content="Experience the thrill of Galiyat Mountain Trail 2024, a UTMB Index race through Pakistan's breathtaking landscapes. Discover highlights and results from this epic mountain running event." />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:url" content="https://www.runpakistan.com/events/galiyat-mountain-trail-2024" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Galiyat Mountain Trail 2024: Epic Adventure in Pakistan's Scenic Highlands" />
      <meta name="twitter:description" content="Experience the thrill of Galiyat Mountain Trail 2024, a UTMB Index race through Pakistan's breathtaking landscapes. Discover highlights and results from this epic mountain running event." />
      <meta name="twitter:image" content={bannerUrl} />
      <meta name="author" content="runPAKISTAN" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "Galiyat Mountain Trail 2024",
            "description": "A UTMB Index trail running race through the scenic highlands of Galiyat, Pakistan",
            "startDate": "2024-07-21",
            "endDate": "2024-07-21",
            "location": {
              "@type": "Place",
              "name": "Galiyat, Khyber Pakhtunkhwa",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abbottabad",
                "addressRegion": "Khyber Pakhtunkhwa",
                "addressCountry": "Pakistan"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Margalla Trail Runners",
              "url": "https://www.margallatrailrunners.com"
            },
            "sponsor": {
              "@type": "Organization",
              "name": "UTMB",
              "url": "https://utmb.world"
            },
            "competitor": [
              {
                "@type": "Person",
                "name": "Muzammil"
              },
              {
                "@type": "Person",
                "name": "Christina"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

const Galiyat2024 = () => {
  const pageUrl = "https://www.runpakistan.com/events/galiyat-mountain-trail-2024";
  const pageTitle = "Galiyat Mountain Trail 2024: Epic Adventure in Pakistan's Scenic Highlands";
 
    const handleNavigate = () => {
      // Open the link in a new tab
      window.open('https://margallatrailrunners.com/galiyatmountaintrail/', '_blank');
    };
  return (
    <>
      <PageMeta />
      <div className="container mx-auto px-4 py-8 mt-2 md:mt-16">
        <article className="max-w-4xl mx-auto">
          <img src={Banner} alt="Galiyat Mountain Trail 2024 Banner" className="image" />
          <h1 className="text-3xl text-center font-bold mb-6 text-green-800">Galiyat Mountain Trail 2024</h1>
          <ShareButtons url={pageUrl} title={pageTitle} />

          <section className="mb-12">
            <p className="mb-4">
              As the first light of dawn painted the majestic peaks of Galiyat in hues of gold, an electric atmosphere enveloped Thandiyani. 
              The Galiyat Mountain Trail 2024, a UTMB Index race, was about to begin, promising an exhilarating journey through some of Pakistan's 
              most breathtaking landscapes.
            </p>
            <p className="mb-4">
              Runners from across Pakistan and beyond gathered at the starting line, their excitement palpable in the crisp mountain air. The event, 
              featuring challenging 60km and 20km routes, was set to test the limits of human endurance against the backdrop of the region's stunning natural 
              beauty.
            </p>
            <p className="mb-4">
              For the 60km ultra-runners, the course included an ascent to Miranjani Top, the highest peak in the Galiyat range, presenting both a physical 
              challenge and a reward of unparalleled vistas. The 20km route, while shorter, was no less spectacular, offering a taste of trail running in 
              one of Pakistan's most picturesque regions.
            </p>
            <p className="mb-4">
              The Galiyat Mountain Trail offered runners a diverse and challenging course. Starting from Thandiyani, participants traversed through dense 
              pine forests, across alpine meadows, and along ridgelines offering panoramic views of the surrounding peaks. The route to Khaira Gali showcased 
              the raw beauty of the Galiyat region, with its mix of gentle dirt paths and technical rocky sections.
            </p>
            <img src={image1A} alt="Runners at the start line in Thandiyani" className="image" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Race Highlights and Standout Performances</h2>
            <h3 className="text-2xl font-semibold mb-3 text-green-600">60km Ultra-Trail Men Category</h3>           
            <p className="mb-4">
              In the grueling 60km race, Muzammil emerged as the champion, conquering the course in an impressive 6 hours, 55 minutes. 
              His performance was a masterclass in ultra-running strategy and endurance. Athar secured second place with a time of 7:10, 
              while Zain rounded out the podium at 7:51.
            </p>
            <section className="race-results">
                <h1 className="text-2xl font-bold text-center mt-4 mb-4">60km Men Category Results</h1>
                <div className="overflow-x-auto">
                    <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                        <th className="border px-4 py-2">Athlete</th>
                        <th className="border px-4 py-2">Club</th>
                        <th className="border px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {men60Results.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                            <td className="border text-center px-4 py-2">{result.athlete}</td>
                            <td className="border text-center px-4 py-2">{result.club}</td>
                            <td className="border px-4 text-center py-2">{result.time}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </section>
                <h3 className="text-2xl font-semibold mb-3 text-green-600">60km Ultra-Trail Women Category</h3>           
            <p className="mb-4">
              The women's 60km category saw Christina claim victory with a remarkable time of 7:40, showcasing exceptional strength and determination throughout the challenging course. Sadia and Zaira completed the second and third with finishing at 13:23 and 14:55 respectively, their performances inspiring a new generation of female trail runners in Pakistan.
            </p>
            <section className="race-results">
                <h1 className="text-2xl font-bold text-center mt-4 mb-4">60km Women Category Results</h1>
                <div className="overflow-x-auto">
                    <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                        <th className="border px-4 py-2">Athlete</th>
                        <th className="border px-4 py-2">Club</th>
                        <th className="border px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {women60Results.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                            <td className="border text-center px-4 py-2">{result.athlete}</td>
                            <td className="border text-center px-4 py-2">{result.club}</td>
                            <td className="border px-4 text-center py-2">{result.time}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <img src={image2} alt="Men's 20km winner sprinting to the finish" className="w-full h-auto rounded-lg shadow-md" />
              <img src={image2A} alt="Women's 20km podium celebration" className="w-full h-auto rounded-lg shadow-md" />
            </div> 
            </section>
                    
           
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-green-600">20km Trail Race Category</h3>
            <p className="mb-4">
              The 20km race provided thrilling competition, with Saad securing victory in a blistering 1:55. Will followed closely, finishing just 4 minutes behind with 1:59 finish time, while Pablo claimed third with a time of 2:10.
            </p>
            <section className="race-results">
                <h1 className="text-2xl text-center font-bold mb-4">20km Men Category Results</h1>
                <div className="overflow-x-auto">
                    <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                        <th className="border px-4 py-2">Athlete</th>
                        <th className="border px-4 py-2">Club/Country</th>
                        <th className="border px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menResults.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                            <td className="border text-center px-4 py-2">{result.athlete}</td>
                            <td className="border text-center px-4 py-2">{result.club}</td>
                            <td className="border px-4 text-center py-2">{result.time}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </section>
                
            <p className="mb-4">
              In the women's 20km event, Anja Myrtveit set her personal best with her winning time of 2:24. Emily Vooris and Jessie Beham completed the podium with finishing at 2:44 and 2:51 respectively, their performances highlighting the depth of talent in Pakistan's trail running community.
            </p>
            <section className="race-results">
                <h1 className="text-2xl text-center font-bold mb-4">20km Women Category Results</h1>
                <div className="overflow-x-auto">
                    <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                        <th className="border px-4 py-2">Athlete</th>
                        <th className="border px-4 py-2">Country</th>
                        <th className="border px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {womenResults.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                            <td className="border text-center px-4 py-2">{result.athlete}</td>
                            <td className="border text-center px-4 py-2">{result.club}</td>
                            <td className="border px-4 text-center py-2">{result.time}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <img src={image1D} alt="Men's 20km winner sprinting to the finish" className="w-full h-auto rounded-lg shadow-md" />
              <img src={image2B} alt="Women's 20km podium celebration" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </section>
          <div className="mt-8 mb-12 text-center">
            <p className="text-lg mb-4">
              For complete details of results, please check the following link:
            </p>
            <button
              onClick={handleNavigate}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              View Full Results
            </button>
          </div>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Community Spirit and Environmental Stewardship</h2>
            <p className="mb-4">
              The Galiyat Mountain Trail 2024 was more than just a race; it was a celebration of community, environmental awareness, and the spirit of adventure. Local communities along the route provided enthusiastic support, with volunteers staffing aid stations and ensuring the safety and comfort of all participants.
            </p>
            <p className="mb-4">
              Organizers emphasized the importance of environmental conservation, implementing a strict "leave no trace" policy and educating participants about the fragile mountain ecosystem. This commitment to sustainability set a positive example for future events in the region.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-green-700">The Future of Trail Running in Pakistan</h2>
            <img src={image3B} alt="Volunteers and supporters cheering runners" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <p className="mb-4">
              The success of the Galiyat Mountain Trail 2024 marks a significant milestone in Pakistan's growing trail running scene. As a UTMB Index race, the event has put Galiyat on the international ultra-running map, attracting attention from runners worldwide.
            </p>
            <p>
              The Galiyat Mountain Trail has not only showcased the natural beauty of Pakistan's northern areas but also demonstrated the country's potential as a destination for adventure tourism. As the event grows, it promises to bring economic benefits to local communities while promoting health, outdoor recreation, and environmental awareness.
            </p>
            <p>
              As the sun set on Galiyat, painting the sky in vibrant hues, runners, organizers, and spectators alike reflected on a day filled with challenges, achievements, and the pure joy of running in nature. The Galiyat Mountain Trail has set a new standard for ultra-running events in Pakistan, leaving participants inspired and already looking forward to next year's adventure in the majestic mountains of Khyber Pakhtunkhwa.
            </p>
          </section>
        </article>
      </div>
    </>
  );
};

export default Galiyat2024;

