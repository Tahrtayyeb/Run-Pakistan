import React from 'react';
import { Helmet } from 'react-helmet';
import image1A from '../../../assets/images/runlahore9/hiker.jpeg';
import image1C from '../../../assets/images/runlahore9/men1.jpeg';
import image1D from '../../../assets/images/runlahore9/men2.jpeg';
import image1E from '../../../assets/images/runlahore9/men3.jpeg';
import image2A from '../../../assets/images/runlahore9/women1.jpeg';
import image2B from '../../../assets/images/runlahore9/women2.jpeg';
import image2C from '../../../assets/images/runlahore9/women3.jpeg';
import image3A from '../../../assets/images/runlahore9/lahorerunner.jpeg';
import image3B from '../../../assets/images/runlahore9/ftc.jpeg';
import Banner from '../../../assets/images/runlahore9/hiker.jpeg';
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


const menResults = [
  {
    position: '1',
    athlete: 'Ahmed Chaudhry',
    club: 'Lahore Runners',
    time: '16:45',
  },
  {
    position: '2',
    athlete: 'Ali Hassan',
    club: 'Lahore Runners',
    time: '17:18',
  },
  {
    position: '3',
    athlete: 'Abdullah Khan',
    club: 'Lahore Runners',
    time: '18:16',
  },
];
  
const womenResults = [
  {
    position: '1',
    athlete: 'Rimsha',
    club: 'Pakistan Road Runners',
    time: '28:47',
  },
  {
    position: '1',
    athlete: 'Anoushay',
    club: '',
    time: '28:47',
  },
  {
    position: '2',
    athlete: 'Laiba',
    club: 'Pakistan Road Runners',
    time: '30:03',
  },
  {
    position: '3',
    athlete: 'Hamna',
    club: 'Pakistan Road Runners',
    time: '30:21',
  },
];
  
const PageMeta = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.runpakistan.com';
  const bannerUrl = `${baseUrl}/assets/images/runlahore9/hiker.jpeg`;
  return (
    <Helmet>
      <title>Run Lahore Time Trial Series - 9th Edition by Hiker.pk</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Discover the highlights of the Run Lahore Time Trial Series 9th Edition, organized by Hiker.pk. Read about the top performers and the community spirit of Lahore's running scene." />
      <meta name="keywords" content="Run Lahore, Time Trial Series, Hiker.pk, running events, Lahore runners, community run" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.runpakistan.com/run-lahore-time-trail-9th-edition-hikerpk" />
      <meta property="og:title" content="Run Lahore Time Trial Series - 9th Edition by Hiker.pk" />
      <meta property="og:description" content="Discover the highlights of the Run Lahore Time Trial Series 9th Edition, organized by Hiker.pk. Read about the top performers and the community spirit of Lahore's running scene." />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:url" content="https://www.runpakistan.com/stories/run-lahore-time-trial-9th-edition" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Run Lahore Time Trial Series - 9th Edition by Hiker.pk" />
      <meta name="twitter:description" content="Discover the highlights of the Run Lahore Time Trial Series 9th Edition, organized by Hiker.pk. Read about the top performers and the community spirit of Lahore's running scene." />
      <meta name="twitter:image" content={bannerUrl} />
      <meta name="author" content="runPAKISTAN" />
    </Helmet>
  );
};

const RunLahore9 = () => {
  const pageUrl = "https://www.runpakistan.com/stories/run-lahore-time-trial-9th-edition";
  const pageTitle = "Run Lahore Time Trial Series - 9th Edition by Hiker.pk";

  return (
    <>
      <PageMeta />
      <div className="container md:ml-10 px-4 py-8 mt-2 flex flex-wrap">
        <div className="w-full md:w-3/4 md:mt-20">
          <div className="max-w-3xl mx-auto flex flex-col">
            <article className="blog-post">
            <div className="justify-center mb-4">
                    <img src={image1A} alt="Start Line" className="mb-4 rounded-md" />
                </div>
              <h1 className="text-3xl text-center md:text-left font-bold mb-4 text-green-800">
              Run Lahore Time Trial Series - 9th Edition by Hiker.pk              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <p className="mb-4 mt-5">
              The running community of Lahore once again came together for the highly anticipated 9th edition of the Run Lahore Time Trial Series. This time, the event was skillfully organized by Hiker.pk, showcasing their commitment to promoting fitness and outdoor activities in the city.
              </p>

              <div className="flex flex-wrap justify-center mb-8">
                <div>
                <p className="mb-4">
                Despite the challenging humid conditions, runners showed up in full force, ready to test their limits and compete against the clock. The weather added an extra layer of difficulty to the race, but it didn't dampen the spirits of the participants who were eager to give their best performance.</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                <h2 className="text-2xl mt-5 text-center font-bold mb-2 text-green-800">
                  Men's Race Results
                </h2>
                <div className="flex justify-center flex-wrap">
                  <div className="max-w-xs m-2">
                    <img
                      src={image1C}
                      alt="Ahmed Receiving Prize"
                      className="rounded-md md:h-50"
                    />
                    <p className="text-center text-sm mt-2">Ahmed Receiving Prize</p>
                  </div>
                  <div className="max-w-xs m-2">
                    <img
                      src={image1D}
                      alt="Shakir Crossing The Finish Line"
                      className="rounded-md md:h-82 md:mt-12"
                    />
                    <p className="text-center text-sm mt-2">Ali Hassan Receiving Prize</p>
                  </div>
                </div>
                <p className="mt-5 mb-4">
                Ahmed's stellar performance earned him the top spot with a time of 16 minutes and 45 seconds. Ali Hassan followed closely, crossing the finish line at 17 minutes and 18 seconds. Abdullah secured the third position with a commendable time of 18 minutes and 16 seconds. 
                The men's category saw some impressive times, with the top three finishers pushing themselves to the limit:</p>
                <div className="max-w-xl m-2">
                    <img
                      src={image1E}
                      alt="Abdullah Receiving Prize"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Abdullah Receiving the Prize</p>
                  </div>
                <table className="w-full mt-5 mb-8">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                      <th className="border px-4 py-2">Athlete</th>
                      <th className="border px-4 py-2">Club</th>
                      <th className="border px-4 py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menResults.map((result, index) => (
                      <tr key={index}>
                        <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                        <td className="border text-center px-4 py-2">{result.athlete}</td>
                        <td className="border text-center px-4 py-2">
                          {result.club}
                        </td>
                        <td className="border px-4 text-center py-2">{result.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <h2 className="text-2xl  font-bold mb-2 text-green-800">
                  Women's Race Results
                </h2>
                <div className="flex flex-wrap justify-center">
                  <div className="flex flex-col items-center max-w-xs m-2 w-full sm:w-auto">
                    <div className="h-96 overflow-hidden w-full">
                      <img
                        src={image2A}
                        alt="Laiba Receiving Prize"
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm mt-2">Rimsha & Anoushay Celebrating</p>
                  </div>
                  <div className="flex flex-col items-center max-w-xs m-2 w-full sm:w-auto">
                    <div className="h-96 overflow-hidden w-full">
                      <img
                        src={image2B}
                        alt="Laiba Receiving Prize"
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm mt-2">Laiba Receiving Prize</p>
                  </div>
                </div>

                <p className="mb-4">
                In a thrilling conclusion to the women's race, Rimsha and Anoushay crossed the finish line simultaneously, both clocking in at 28 minutes and 47 seconds. This rare occurrence added an extra layer of excitement to the event. Liaba secured the second position with a time of 30 minutes and 3 seconds, while Hamna rounded out the top three, finishing in 30 minutes and 21 seconds. The women's race was nothing short of exciting results.</p>
                <div className="max-w-xl m-2">
                    <img
                      src={image2C}
                      alt="Hamna Receiving Prize"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Hamna Receiving the Prize</p>
                  </div>
                <table className="mt-5 w-full md:mb-2">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                      <th className="border px-4 py-2">Athlete</th>
                      <th className="border px-4 py-2">Club</th>
                      <th className="border px-4 py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenResults.map((result, index) => (
                      <tr key={index}>
                        <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                        <td className="border text-center px-4 py-2">{result.athlete}</td>
                        <td className="border text-center px-4 py-2">
                          {result.club}
                        </td>
                        <td className="border text-center px-4 py-2">{result.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                
                </div>

              <h2 className="text-2xl font-bold mb-2 text-center text-green-800">
              A Celebration of Community and Health
              </h2>
              <p className="mb-4">
              The 9th edition of the Run Lahore Time Trial Series once again highlighted the vibrant running community in Lahore. Participants from various backgrounds came together, united by their passion for running and personal improvement.</p>
              <div className="flex justify-center flex-wrap">
                  <div className="max-w-xs m-2">
                    <img
                      src={image3A}
                      alt="PRR"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Lahore Runners Group at 9th Edition</p>
                  </div>
                  <div className="max-w-xs m-2">
                    <img
                      src={image3B}
                      alt="Lahore runners"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">FTC at 9th Edition Run Lahore</p>
                  </div>
                  </div>

              <p className="mt-5 mb-4">
              A special mention goes to Hiker.pk for organizing this successful event. Known for their dedication to promoting outdoor activities and adventures, Hiker.pk has now shown their ability to bring the running community together through this well-executed time trial series.</p>
                {/* Lower Middle Images Container */}
                <h2 className="text-2xl font-bold text-center text-green-800 mb-2 mt-5">Special Thanks to Hiker.pk</h2>
                <p className="mb-4">
                As the Run Lahore Time Trial Series continues to grow and evolve, it's clear that the running culture in Lahore is thriving. Events like these not only provide a platform for competitive runners but also encourage newcomers to join the running community.
We look forward to the next edition of the series and hope to see even more participants pushing their limits and achieving their personal bests.
Remember, whether you're aiming for a podium finish or simply looking to improve your own time, events like the Run Lahore Time Trial Series offer something for everyone. Keep running, Lahore!</p>
              </article>
            </div>
          </div>
        </div>
    </>
  );
};

export default RunLahore9;
