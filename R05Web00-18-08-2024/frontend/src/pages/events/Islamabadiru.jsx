import React from 'react';
import { Helmet } from 'react-helmet';
import image15 from '../../assets/images/iru2025.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mx-28 md:mx-56 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

const IslamabadMarathon2025 = () => {
  const pageUrl = "https://www.runpakistan.com/islamabad-marathon-2025";
  const pageTitle = "Islamabad Marathon 2025<";
  return (
    <>
      <Helmet>
        <title>Islamabad Marathon 2025</title>
        <meta name="description" content="Join the Islamabad Marathon 2025, a celebration of unity and athleticism in Pakistan's capital city. Experience the breathtaking scenery and abundance of running routes in Islamabad while promoting health and wellness. From seasoned athletes to recreational runners, participants from all walks of life come together to celebrate fitness and community. Lace up your shoes and join this exhilarating event!" />
        <meta name="keywords" content="Islamabad Marathon 2025, marathon event, Islamabad, Pakistan, unity, athleticism, fitness, community, health, wellness, running, race, Islamabad Marathon website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/islamabad-marathon-2025" />
        <meta property="og:image" content={image15} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:mt-2">
        <h1 className="md:mt-16 text-4xl font-bold text-red-700 text-center md:text-left md:mx-16 mb-6">Islamabad Marathon 2025</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        <div className="flex flex-wrap items-stretch">
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mb-6 mt-5">The Islamabad Marathon stands as a beacon of unity and athleticism in the heart of Pakistan's capital city. With its breathtaking scenery and abundance of running routes, Islamabad provides the perfect backdrop for this exhilarating event. From seasoned athletes to recreational runners, participants from all walks of life come together to celebrate the spirit of fitness and community. The marathon not only showcases the beauty of Islamabad but also serves as a platform to promote health and wellness among its citizens. As the event continues to grow year after year, it cements itself as a cherished tradition, embodying the vitality and vigor of Islamabad's dynamic landscape.</p>
                <p className="text-lg text-left mb-6">Get ready to lace up your running shoes and mark your calendars! See you all at the starting line! 🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://islamabadrunwithus.com/event/category/islamabad-marathon" target="_blank" rel="noopener noreferrer" className="bg-red-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-center inline-block">Visit Islamabad Marathon Website for Details</a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://islamabadrunwithus.com/event/category/islamabad-marathon" target="_blank" rel="noopener noreferrer">
            <img src={image15} alt="Islamabad Picture" className="md:mt-6 rounded-lg w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamabadMarathon2025;
