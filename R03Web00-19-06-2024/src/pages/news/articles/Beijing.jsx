import React from 'react';
import { Helmet } from 'react-helmet';
import image60 from '../../../assets/images/beijing1.jpeg';

const BeijingMarathonArticle = () => {
  return (
    <>
      <Helmet>
        <title>Beijing Half Marathon 2024 Controversy</title>
        <meta
          name="description"
          content="Read about the controversy surrounding the Beijing Half Marathon 2024, where allegations arose regarding African athletes deliberately allowing China's star runner to win. Get insights into the investigation, statements from involved parties, and reactions from both local and international communities."
        />
        <meta
          name="keywords"
          content="Beijing Half Marathon, Beijing Half Marathon controversy, Beijing Marathon 2024, Chinese athletics, African athletes, He Jie, Robert Keter, Willy Mnangat, Dejene Hailu, marathon sportsmanship, sports ethics"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.runpakistan.com/beijing-contro-2024"
        />
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <main className="container mx-auto mt-2 px-4 py-8 flex flex-wrap">
        <div className="w-full md:w-3/4 sm:mt-20">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl text-center font-bold mb-4 text-green-800">
                Controversial Finish: Allegations in Beijing Half Marathon 2024
              </h1>
              <div className="flex justify-center mb-4">
                <img
                  src={image60}
                  alt="Beijing Half Marathon 2024"
                  className="rounded-lg mr-4"
                />
              </div>
              <p className="mb-4">
                The Beijing half marathon, an event marked by athleticism and
                competition, now faces scrutiny over allegations that three
                African athletes deliberately allowed China's star runner He Jie
                to win Sunday's race.
              </p>
              <p className="mb-4">
                Footage surfaced appearing to show Kenya's Robert Keter and
                Willy Mnangat, along with Ethiopia's Dejene Hailu, pointing to
                the line and slowing down before waving past He, 25.
              </p>
              <p className="mb-4">
                Mnangat has stated that the trio ran as pacemakers, contracted
                to help He break the Chinese half-marathon record of one hour
                two minutes 33 seconds.
              </p>
              <p className="mb-4">
                However, He missed out on the record with a time of 1:03:44, one
                second ahead of the trio, who tied for second place.
              </p>
              <p className="mb-4">
                A spokesperson at the Beijing Sports Bureau told AFP they were
                investigating the incident, adding: "We will announce the
                results to the public once they are available."
              </p>
              <p className="mb-4">
                Xstep, a Chinese sports brand who sponsored the event and have a
                contract with He, stated: "The situation is still being
                confirmed and verified by multiple parties. Further information
                will be communicated as soon as possible."
              </p>
              <p className="mb-4">
                China's He won marathon gold at the 2023 Asian Games in
                Hangzhou and is his country's record holder for the full
                marathon.
              </p>
              <p className="mb-4">
                A statement from World Athletics to BBC Sport said: "We are
                aware of the footage circulating online from the Beijing half
                marathon this weekend and understand an investigation is
                currently being conducted by the relevant local authorities."
              </p>
              <p className="mb-4">
                Users of Chinese social media site Weibo have posted about the
                race, with a comment saying "this is no doubt the most
                embarrassing title of He Jie's career" receiving more than 1,000
                likes.
              </p>
              <p className="mb-4">
                Another post added: "With such a major organiser and such a
                well-known event, this really pushes sportsmanship to the ground
                in shame."
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default BeijingMarathonArticle;
