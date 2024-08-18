import React from 'react';
import { Helmet } from 'react-helmet';
import image1A from '../../../assets/images/runlahore8/3.jpg';
import image1B from '../../../assets/images/runlahore8/1.jpg';
import image1C from '../../../assets/images/runlahore8/2.jpg';
import image1D from '../../../assets/images/runlahore8/4.jpg';
import image1E from '../../../assets/images/runlahore8/5.jpg';
import image2A from '../../../assets/images/runlahore8/05.jpg';
import image2B from '../../../assets/images/runlahore8/06.jpg';
import image2C from '../../../assets/images/runlahore8/04.jpeg';
import image3A from '../../../assets/images/runlahore8/G1.jpg';
import image3B from '../../../assets/images/runlahore8/G2.jpg';
import image3C from '../../../assets/images/runlahore8/ftc.jpg';
import image3D from '../../../assets/images/runlahore8/hiker.jpeg';
import Banner from '../../../assets/images/runlahore8/00.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex ml-28 md:ml-0 space-x-8 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};


const menResults = [
  {
    position: '1',
    athlete: 'Adnan',
    club: 'Pakistan Road Runners',
    time: '15:32',
  },
  {
    position: '2',
    athlete: 'Shakir Usman',
    club: 'Pakistan Road Runners',
    time: '15:40',
  },
  {
    position: '3',
    athlete: 'Kamil',
    club: 'Lahore Runners',
    time: '16:13',
  },
];
  
const womenResults = [
  {
    position: '1',
    athlete: 'Kashaf',
    club: 'LCWU',
    time: '22:13',
  },
  {
    position: '2',
    athlete: 'Khadija Afia',
    club: 'LCWU',
    time: '23:05',
  },
  {
    position: '3',
    athlete: 'Hamna Anwar',
    club: 'Pakistan Road Runner',
    time: '23:10',
  },
];
  
const PageMeta = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.runpakistan.com';
  const bannerUrl = `${baseUrl}/assets/images/runlahore8/00.jpg`;
  return(
    <Helmet>
      <title>runPAKISTAN - Running Events, News, Training Plans, and Recovery Tips</title>
      <meta name="description" content="Discover the latest running events, news, cml, run lahore time trail 8th edition, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
      <meta name="keywords" content="Run Pakistan, running events, running news, training plans, recovery tips, marathons in Pakistan, Pakistani runners" />
      <meta name="author" content="Run Pakistan Team" />
      <meta property="og:title" content="Run Pakistan - Running Events, News, Training Plans, and Recovery Tips" />
      <meta property="og:description" content="Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:url" content="https://www.runpakistan.com/run-lahore-time-trail-8th-edition-cml" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Run Pakistan - Running Events, News, Training Plans, and Recovery Tips" />
      <meta name="twitter:description" content="Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
      <meta name="twitter:image" content={bannerUrl} />
      <link rel="canonical" href="https://www.runpakistan.com" />
    </Helmet>
  )
}
const RunLahore8 = () => {
  const pageUrl = "https://www.runpakistan.com/run-lahore-time-trail-8th-edition-cml";
  const pageTitle = "Run Lahore Time Trail Series -8th Edition by CML";  
  
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
              Run Lahore Time Trial Series 8th Edition by CML
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <p className="mb-4 mt-5">
              The 8th edition of the Run Lahore Time Trial Series, organized by Critical Mass Lahore (CML), 
              took place on June 30, 2024. Despite the sweltering summer heat, this event was a grand success, 
              over 300 participant registered for the first event of this season. All running clubs from Lahore
              and surrounding area showed great interest by bringing together running enthusiasts 
              . The event was not just a race but a celebration of community, health, and sportsmanship.
              </p>

              <div className="flex flex-wrap justify-center mb-8">
                <div className="mx-2 mb-4">
                  <img
                    src={image1B}
                    alt="Start Line at Jinnah Bagh"
                    className="rounded-md"
                  />
                  <p className="text-center text-sm mt-2">
                  Start Line at Lawrence Garden Lahore
                  </p>
                </div>
                <div>
                <h2 className="text-2xl font-bold text-center mb-2 text-green-800">
                  The Excitement of Race Day
                </h2>
                <p className="mb-4">
                As the first light of dawn broke over the city, participants gathered at Lawrence Garden in Lahore, 
                buzzing with anticipation. Despite the hot summer days, on race day it was cloudy, which helped the 
                runners a little, promising a challenging race ahead. Nevertheless, the runners, driven by determination 
                and a love for the sport, prepared to give their best.
                </p>
                </div>
                <div className='flex flex-wrap justify-center'>
                <h2 className="text-2xl mt-5 text-center font-bold mb-2 text-green-800">
                  Men's Race Results
                </h2>
                <div className="flex justify-center flex-wrap">
                  <div className="max-w-xs m-2">
                    <img
                      src={image1C}
                      alt="Adnan Crossing The Finish Line"
                      className="rounded-md md:h-50"
                    />
                    <p className="text-center text-sm mt-2">Adnan Crossing The Finish Line</p>
                  </div>
                  <div className="max-w-xs m-2">
                    <img
                      src={image1D}
                      alt="Shakir Crossing The Finish Line"
                      className="rounded-md md:h-82 md:mt-12"
                    />
                    <p className="text-center text-sm mt-2">Shakir Crossing The Finish Line</p>
                  </div>
                </div>
                <p className="mt-5 mb-4">
                In the men's section, the competition was fierce. Among the participants, two names
                stood out: Adnan and Shakir. The race began with a burst of energy as the runners took off, 
                their feet pounding the pavement in unison. Adnan quickly took the lead, setting a blistering pace. His strides 
                were long and powerful, each one bringing him closer to the finish line. In a stunning display of athleticism, Adnan crossed the finish 
                line with a time of 15 minutes 32 seconds, securing his victory. The crowd erupted in applause, celebrating
                his remarkable achievement. Just 8 seconds later, Shakir crossed the finish line, having given 
                everything he had. His time was only a few moments behind Adnan, showcasing the incredible talent 
                and dedication of both runners. On third spot Kamil finished the race with 16 minutes 13 seconds.
                </p>
                <div className="max-w-xl m-2">
                    <img
                      src={image1E}
                      alt="Kamil Receiving Prize"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Kamil Receiving the Prize</p>
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
                        alt="Kashaf Receiving Prize"
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm mt-2">Kashaf Receiving Prize</p>
                  </div>
                  <div className="flex flex-col items-center max-w-xs m-2 w-full sm:w-auto">
                    <div className="h-96 overflow-hidden w-full">
                      <img
                        src={image2B}
                        alt="Khadija Receiving Prize"
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm mt-2">Khadija Receiving Prize</p>
                  </div>
                </div>

                <p className="mb-4">
                The women's race was equally thrilling, with a group of talented athletes ready 
                to take on the challenge. As the race began, Kashaf surged 
                to the front, her pace steady and confident. She moved with a grace that belied 
                the effort she was putting in, her eyes focused on the road ahead. Khadija, 
                not far behind, matched her stride for stride. The two runners were neck and neck 
                for much of the race, pushing each other to new heights. In the final moments of the race, 
                Kashaf pulled ahead, she crossed the finish line with a time 22 minutes and 13 seconds, 
                her victory well-earned. Khadija followed shortly after with a time 23 minutes and 05 seconds , her performance equally commendable. 
                The close finish highlighted the incredible talent and competitive spirit of the women in the race.
                Hamna Anwar following them crossed the finished line in 23 mintues 10 seconds, securing 3rd position.
                </p>
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
              The Run Lahore Time Trial Series was more than just a race; it was a celebration of community, 
              health, and the joy of running. People from all walks of life came together to participate, 
              support, and cheer for the runners. The event showcased the vibrant running culture in Lahore 
              and the surrounding areas, emphasizing the importance of staying active and healthy. Critical 
              Mass Lahore, the organizers of the event, played a crucial role in making the race a success. 
              Their dedication to promoting health and fitness in the community was evident in every aspect 
              of the event, from the meticulous planning to the enthusiastic support for all participants.
              </p>
              <div className="flex justify-center flex-wrap">
                  <div className="max-w-xs m-2">
                    <img
                      src={image3A}
                      alt="PRR"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Pakistan Road Runners Group</p>
                  </div>
                  <div className="max-w-xs m-2">
                    <img
                      src={image3B}
                      alt="Lahore runners"
                      className="rounded-md"
                    />
                    <p className="text-center text-sm mt-2">Lahore Runners Group</p>
                  </div>
                  </div>

              <p className="mt-5 mb-4">
              Events like the Run Lahore Time Trial Series are essential for promoting a healthy lifestyle and 
              fostering a sense of community. Running is a fantastic way to stay fit, and participating in races 
              can be incredibly motivating. The sense of accomplishment that comes from crossing the finish line, 
              whether first or last, is unparalleled. We encourage everyone to take part in such activities.
              </p>
              <div className="flex flex-wrap justify-center md:flex-row flex-col">
                <div className="w-full max-w-xs m-2">
                  <img
                    src={image3C}
                    alt="PRR"
                    className="rounded-md w-full h-56 object-cover"
                  />
                  <p className="text-center text-sm mt-2">FTC Group</p>
                </div>
                <div className="w-full max-w-xs m-2">
                  <img
                    src={image3D}
                    alt="Lahore runners"
                    className="rounded-md w-full h-56 object-cover"
                  />
                  <p className="text-center text-sm mt-2">Hiker.pk Group</p>
                </div>
               </div>

                {/* Lower Middle Images Container */}
                <h2 className="text-2xl font-bold text-center text-green-800 mb-2 mt-5">Special Thanks to CML and Joma</h2>
                <p className="mb-4">
                We extend our heartfelt thanks to Critical Mass Lahore for organizing such a fantastic event. 
                Their commitment to promoting health and fitness is commendable, and their efforts have made a 
                significant impact on the community. We also want to express our gratitude to Joma, the event's 
                sponsor. Their support was crucial in making the Run Lahore Time Trial Series a reality. Joma's 
                dedication to sports and fitness is evident, and their sponsorship of this event is a testament 
                to their commitment to promoting a healthy lifestyle.
                </p>
                <p>The 8th edition of the Run Lahore Time Trial Series was a resounding success, showcasing the 
                talent, determination, and community spirit of all participants. Despite the challenging weather 
                conditions, the runners gave their best, inspiring everyone with their performances. We look forward 
                to many more such events in the future and encourage everyone to join in. Whether you are running for 
                fitness, competition, or fun, there is something for everyone in the world of running. Let's keep the 
                spirit of health, fitness, and community alive by participating in events like the Run Lahore Time Trial Series.</p>
              </article>
            </div>
          </div>
        </div>
    </>
  );
};

export default RunLahore8;
