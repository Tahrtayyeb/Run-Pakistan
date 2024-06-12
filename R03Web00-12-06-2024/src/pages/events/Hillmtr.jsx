import React from 'react';
import { Helmet } from 'react-helmet';
import image13 from '../../assets/images/mtrhill2025.jpg';

const InterClubHillHalfMarathon2025 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inter Club Hill Half Marathon 2025</title>
        <meta name="description" content="Join Margalla Trail Runners (MTR) for the Inter-Club Margalla Hill Half Marathon 2025, a friendly yet competitive running event aimed at promoting running clubs and the running culture in Pakistan. Open to individuals, running clubs, teams, and the entire running community, this event fosters camaraderie and healthy competition. Lace up your running shoes and get ready for an exhilarating race experience!" />
        <meta name="keywords" content="Inter Club Hill Half Marathon, Margalla Trail Runners, MTR, running event, friendly competition, running clubs, running culture, Pakistan, running community, camaraderie, healthy competition, Margalla Hill, 2025" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/inter-club-hill-half-marathon-2025" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
        crossorigin="anonymous"></script>
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-2">
        {/* First Ad Space */}
        {/*
        <div className="mb-8 text-center h-28">
          <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
        </div>
        */}

        <h1 className="mt-16 text-3xl font-bold text-cyan-800 text-left mx-12 mb-6">Inter Club Hill Half Marathon 2025</h1>

        {/* Content */}
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mb-6">Margalla Trail Runners (MTR) is bringing yet another exciting and unique project. MTR is presenting a friendly running competition, Inter-Club Margalla Hill Half Marathon. The Race is in a spirit of fun, as well as being quite competitive. The objective of the race is to promote running clubs and running culture in Pakistan. So, it does not need to have any limiting factors or damaging running spirit. The Inter-Club Margalla Hill Half Marathon will be a once-a-year opportunity to socialize with your top competitors. Running clubs, teams, groups, individuals, and the entire running and athletics community are invited to join and represent their club, team, group, community, city, country, etc. The event is open to all, including club members as well as non-club members.</p>
                <p className="text-lg text-left mb-6">Get ready to lace up your running shoes and mark your calendars! See you all at the starting line! 🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://margallatrailrunners.com/inter-club-hill-half-marathon/" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-block">Visit Margalla Trail Runners Website for Details</a>
              </div>
            </div>
          </div>
          
          {/* Lahore Pictures */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://margallatrailrunners.com/inter-club-hill-half-marathon/" target="_blank" rel="noopener noreferrer">
            <img src={image13} alt="MTR Hill Picture" className="rounded-lg w-full h-full object-fit" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Ad Space */}
      {/*
      <div className="mb-8 text-center h-28">
        <img src="ad2.jpg" alt="Advertisement 2" className="mx-auto h-full" />
      </div>
      */}
    </>
  );
};

export default InterClubHillHalfMarathon2025;
