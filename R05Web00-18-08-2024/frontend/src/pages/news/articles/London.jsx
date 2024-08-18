import React from 'react';
import { Helmet } from 'react-helmet';

import image74 from '../../../assets/images/londonmen2.jpeg';
import image75 from '../../../assets/images/londonwomen2.jpeg';
import image76 from '../../../assets/images/london1.jpg';
import image77 from '../../../assets/images/london2.jpg';
import image78 from '../../../assets/images/london3.jpg';
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

const LondonMarathon2024 = () => {
  const pageUrl = "https://www.runpakistan.com/london-marathon-2024";
  const pageTitle = " London Marathon 2024: A Day of Records and Pakistani Excellence";  

  const menResults = [
    {
      position: '1',
      athlete: 'Alexander Mutiso',
      nationality: 'Kenya',
      time: '02:04:01',
    },
    {
      position: '2',
      athlete: 'Kenenisa Bekele',
      nationality: 'Ethiopia',
      time: '02:04:15',
    },
    {
      position: '3',
      athlete: 'Emile Cairess',
      nationality: 'United Kingdom',
      time: '02:06:46',
    },
    {
      position: '4',
      athlete: 'Mahamed Mahamed',
      nationality: 'United Kingdom',
      time: '02:07:05',
    },
    {
      position: '5',
      athlete: 'Hassan Chahdi',
      nationality: 'France',
      time: '02:07:30',
    },
    {
      position: '6',
      athlete: 'Henok Tesfay',
      nationality: 'Eritrea',
      time: '02:09:22',
    },
    {
      position: '7',
      athlete: 'Hendrik Pfeiffer',
      nationality: 'Germany',
      time: '02:10:00',
    },
    {
      position: '8',
      athlete: 'Kinde Atanaw',
      nationality: 'Ethiopia',
      time: '02:10:03',
    },
    {
      position: '9',
      athlete: 'Johannes Motschmann',
      nationality: 'Germany',
      time: '02:10:39',
    },
    {
      position: '10',
      athlete: 'Brian Shrader',
      nationality: 'United States',
      time: '02:10:50',
    },
  ];

  const womenResults = [
    {
      position: '1',
      athlete: 'Peres Jepchirchir',
      nationality: 'Kenya',
      time: '02:16:16',
    },
    {
      position: '2',
      athlete: 'Tigst Assefa',
      nationality: 'Ethiopia',
      time: '02:16:23',
    },
    {
      position: '3',
      athlete: 'Joyciline Jepkosgei',
      nationality: 'Kenya',
      time: '02:16:24',
    },
    {
      position: '4',
      athlete: 'Megertu Alemu',
      nationality: 'Ethiopia',
      time: '02:16:34',
    },
    {
      position: '5',
      athlete: 'Brigid Kosgei',
      nationality: 'Kenya',
      time: '02:19:02',
    },
    {
      position: '6',
      athlete: 'Sheila Chepkirui',
      nationality: 'Kenya',
      time: '02:19:31',
    },
    {
      position: '7',
      athlete: 'Tigist Ketema',
      nationality: 'Ethiopia',
      time: '02:23:21',
    },
    {
      position: '8',
      athlete: 'Yalemzref Yehualaw',
      nationality: 'Ethiopia',
      time: '02:23:26',
    },
    {
      position: '9',
      athlete: 'Ruth Chepngetich',
      nationality: 'Kenya',
      time: '02:24:36',
    },
    {
      position: '10',
      athlete: 'Tsige Haileslase',
      nationality: 'Ethiopia',
      time: '02:25:03',
    },
  ];

  const pakistaniRunners = [
    { name: 'Usman Muhammad', time: '2:59:25' },
    { name: 'Aisha Qamar', time: '2:59:58' },
    { name: 'Miqdad Mohammed', time: '3:15:46' },
    { name: 'Bilal Ehsan', time: '3:18:37' },
    { name: 'Sara Lodhi', time: '3:22:20' },
    { name: 'Shah Faisal Khan', time: '3:29:26' },
    { name: 'Hira Diwan', time: '3:30:29' },
    { name: 'Ammar Mumtaz', time: '3:32:24' },
    { name: 'Raees Ebrahim', time: '3:33:08' },
    { name: 'Fawad Karim', time: '3:33:55' },
    { name: 'Yawar Siddiqui', time: '3:35:21' },
    { name: 'Bacha Hussain', time: '3:38:18' },
    { name: 'Babar Ghias', time: '3:38:45' },
    { name: 'Muhammad Babar', time: '3:43:41' },
    { name: 'Rehman Azhar', time: '3:46:36' },
    { name: 'Nada Anwar', time: '3:50:59' },
    { name: 'Shariq Samad', time: '3:53:16' },
    { name: 'Uzma Abid', time: '3:59:19' },
    { name: 'Zohair Agha', time: '3:59:20' },
    { name: 'Nida Yawar', time: '4:11:25' },
    { name: 'Zohaib Moinuddin', time: '4:15:03' },
    { name: 'Muhammad Ali', time: '4:23:29' },
    { name: 'Jevi Majid', time: '4:27:37' },
    { name: 'Faisal Shafi Sr.', time: '4:46:04' },
    { name: 'Nazkat Ali', time: '4:49:45' },
    { name: 'Abdul Sami', time: '4:59:56' },
    { name: 'Ahmed Zubair', time: '5:39:03' },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          London Marathon 2024: A Day of Records and Pakistani Excellence
        </title>
        <meta
          name="description"
          content="Discover the highlights of the 2024 London Marathon, featuring record-breaking performances and Pakistani athletes' exceptional achievements. Learn about the top finishers in the men's and women's races, as well as the remarkable performance of Pakistani runners, showcasing their talent on the global stage."
        />
        <meta
          name="keywords"
          content="London Marathon 2024, record-breaking performances, Pakistani runners, Alexander Mutiso, Peres Jepchirchir, Usman Muhammad, Aisha Qamar, Miqdad Mohammed, Bilal Ehsan, Sara Lodhi, marathon highlights, running event, sportsmanship, human spirit"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/london-marathon-2024"
        />
        <meta property="og:image" content={image74} /> 

        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container md:ml-10 px-4 py-8 mt-2 flex flex-wrap">
        <div className="w-full md:w-3/4 sm:mt-20">
          <div className="max-w-3xl mx-auto flex flex-col">
            <article className="blog-post">
              <h1 className="text-3xl text-center font-bold mb-4 text-green-800">
                London Marathon 2024: A Day of Records and Pakistani Excellence
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <p className="mb-4 mt-5">
                London Marathon 2024:
                The London Marathon 2024 took center organize on 21st April
                morning, changing the bustling roads of London into a worldwide
                field of physicality and human soul. In 2024, a staggering
                578,374 individuals applied to participate in the marathon
                through a ballot system, marking a historic milestone. This
                achievement was duly recognized by the Guinness World Records,
                making it the highest number of ballot entries ever recorded for
                a marathon event. Furthermore, the 2024 marathon saw an
                impressive turnout, with over 53,700 participants crossing the
                finish line. Looking ahead to the 2025 event, the anticipation
                only continues to grow, with a remarkable 840,318 applicants
                vying for a chance to take part in the marathon. <br />
                This year's version of the famous race was not only as it were
                checked by extraordinary athletic accomplishments but also
                highlighted the exceptional execution of Pakistani runners who
                showcased greatness and assurance on the worldwide organize.
              </p>

              <div className="flex flex-wrap justify-center mb-8">
                <div className="max-w-xs mx-2 mb-4">
                  <img
                    src={image74}
                    alt="Alexander Mutiso"
                    className="rounded-md"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                  <p className="text-center text-sm mt-2">
                  Alexander Mutiso at Finish Line
                  </p>
                </div>
                <div className="max-w-xs mx-2 mb-4">
                  <img
                    src={image75}
                    alt="Peres Jepchirchir"
                    className="rounded-md"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                  <p className="text-center text-sm mt-2">Peres Jepchirchir at Finish Line</p>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-green-800">
                  Men's Race Results
                </h2>
                <p className="mb-4">
                  In the men's category, it was a fierce battle for the top
                  spot. Alexander Mutiso from Kenya emerged victorious with an
                  impressive time of 2 hours, 4 minutes, and 1 second, closely
                  followed by Ethiopia's Kenenisa Bekele, who finished just 14
                  seconds behind. Emile Cairess of Great Britain secured third
                  place, crossing the finish line in 2 hours, 6 minutes, and 46
                  seconds.
                </p>
                <table className="w-full mb-8">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                      <th className="border px-4 py-2">Athlete</th>
                      <th className="border px-4 py-2">Nationality</th>
                      <th className="border px-4 py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menResults.map((result, index) => (
                      <tr key={index}>
                        <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                        <td className="border text-center px-4 py-2">{result.athlete}</td>
                        <td className="border text-center px-4 py-2">
                          {result.nationality}
                        </td>
                        <td className="border px-4 text-center py-2">{result.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h2 className="text-2xl font-bold mb-2 text-green-800">
                  Women's Race Results
                </h2>
                <p className="mb-4">
                  The women's race witnessed history in the making as Peres
                  Jepchirchir of Kenya shattered records with a phenomenal time
                  of 2 hours, 16 minutes, and 16 seconds, setting a new women's
                  only world record. Tigst Assefa from Ethiopia claimed second
                  place, followed closely by Joyciline Jepkosgei of Kenya in
                  third.
                </p>
                <table className="w-full mb-8">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 hidden md:table-cell">Position</th>
                      <th className="border px-4 py-2">Athlete</th>
                      <th className="border px-4 py-2">Nationality</th>
                      <th className="border px-4 py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenResults.map((result, index) => (
                      <tr key={index}>
                        <td className="border text-center px-4 py-2 hidden md:table-cell">{result.position}</td>
                        <td className="border text-center px-4 py-2">{result.athlete}</td>
                        <td className="border text-center px-4 py-2">
                          {result.nationality}
                        </td>
                        <td className="border text-center px-4 py-2">{result.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="max-w-xs mx-2 mb-4">
                  <img
                    src={image78}
                    alt="Pakistan Group"
                    className="rounded-md w-auto"
                  />
                  <p className="text-center text-sm mt-2">Pakistani Runners at London Marathon 2024</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-green-800">
                Pakistani Runners Results
              </h2>
              <p className="mb-4">
                Amidst the international competition, Pakistani runners
                showcased their talent and determination, making their mark on
                the London Marathon stage. Usman Muhammad led the pack with a
                commendable time of 2 hours, 59 minutes, and 25 seconds,
                followed by Aisha Qamar, representing both the USA and Pakistan,
                finishing just shy of the three-hour mark. Miqdad Mohammed,
                Bilal Ehsan, Sara Lodhi, and several others displayed
                exceptional performance, demonstrating the growing presence of
                Pakistani athletes in the global running community.
              </p>
              <table className="w-full mb-8">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Runner</th>
                    <th className="border px-4 py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {pakistaniRunners.map((runner, index) => (
                    <tr key={index}>
                      <td className="border px-4 text-center py-2">{runner.name}</td>
                      <td className="border px-4 text-center py-2">{runner.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-2xl font-bold mb-2">Celebrating Success:</h2>
              <p className="mb-4">
                As the sun set on the bustling streets of London, the spirit of
                camaraderie and sportsmanship prevailed. The London Marathon
                2024 was not just about breaking records but also about
                celebrating the human spirit and the triumph of perseverance.
                From elite athletes to amateur runners, each participant
                contributed to the vibrancy of this iconic event.
              </p>
              <p className="mb-4">
                London Marathon 2024 was not fair a race but a celebration of
                differing qualities, diligence, and fabulousness. Pakistani
                competitors cleared out an permanent stamp on the occasion,
                exhibiting their ability and assurance on the worldwide
                organize. Their accomplishments serve as a guide of motivation
                for competitors all over, illustrating the transformative power
                of sports in breaking obstructions and cultivating solidarity.
                The London Marathon 2024 will be recalled not as it were for the
                records broken and the decorations won but moreover for the
                momentous stories of Pakistani brilliance that enlightened its
                way.
              </p>
              {/* Lower Middle Images Container */}
              <div className="flex flex-wrap justify-center mb-8">
                <div className="max-w-xs mx-2 mb-4">
                  <img
                    src={image77}
                    alt="Victory Celebration"
                    className="rounded-md"
                    style={{ maxWidth: '300px' }}
                  />
                  <p className="text-center text-gray-600 mt-2">
                    Yawar & Rehman at London Marathon
                  </p>
                </div>
                <div className="max-w-xs mx-2 mb-4">
                  <img
                    src={image76}
                    alt="Post-Race Reflection"
                    className="rounded-md"
                    style={{ maxWidth: '300px' }}
                  />
                  <p className="text-center text-gray-600 mt-2">
                    Muhammad Usman at London Marathon
                  </p>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Looking Ahead:</h2>
              <p className="mb-4">
                As the echoes of the London Marathon fade into memory, let us
                carry forward the spirit of determination and unity that defines
                this iconic event. Whether on the streets of London or in the
                hearts of runners worldwide, the legacy of the marathon lives
                on, inspiring generations to come. Until we meet again on the
                starting line, keep running, keep dreaming, and keep pushing the
                boundaries of what is possible.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default LondonMarathon2024;