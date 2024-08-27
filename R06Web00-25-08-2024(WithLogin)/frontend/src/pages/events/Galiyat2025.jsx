import React from 'react';
import { Helmet } from 'react-helmet';
import image12 from '../../assets/images/galiyat2025.jpg';
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

const GaliyatMountainTrail2025 = () => {
  const pageUrl = "https://www.runpakistan.com/galiyat-mountain-trail-2025";
  const pageTitle = "Galiyat Mountain Trail 2025";
    
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Galiyat Mountain Trail 2025</title>
        <meta name="description" content="Embark on an unforgettable adventure along the Galiyat Mountain Trail in the picturesque Abbottabad District of KPK, Pakistan. This scenic trail winds from Thandiyani to Khaira Gali, offering stunning views and gentle dirt paths. Experience the beauty of Pakistan's natural landscapes and the thrill of adventure with the UTMB Index race presented by MTR, featuring challenging 60km and exhilarating 20km routes. Gear up and join us at the starting line for an epic journey like no other!" />
        <meta name="keywords" content="Galiyat Mountain Trail, Abbottabad District, KPK, Pakistan, trail running, mountain trail, adventure race, Thandiyani, Khaira Gali, Miranjani Top, UTMB Index race, MTR, trail runners, hill enthusiasts, natural beauty, adventure, epic journey" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/galiyat-mountain-trail-2025" />
        <meta property="og:image" content={image12} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:mt-2">
        <h1 className="md:mt-16 text-4xl font-bold text-green-700 text-center md:mx-16 mb-6">Galiyat Mountain Trail 2024</h1>
        <ShareButtons url={pageUrl} title={pageTitle} />
        {/* Content */}
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-lg text-left mb-6 mt-5">Prepare your running gear and circle your calendars! Get set for an unforgettable adventure along the breathtaking Galiyat Mountain Trail. This interconnected pathway winds its way through the picturesque Abbottabad District of KPK, Pakistan, offering a mesmerizing journey from Thandiyani to Khaira Gali. Nestled in the majestic hills, this trail boasts stunning scenery and gentle dirt paths, making it a prime choice for trail runners and hill enthusiasts alike. At an impressive altitude of 2955 meters, the Miranjani Top stands as the pinnacle of the Galiyat experience. Galiyat Mountain Trail represents a testament to Pakistan's natural beauty and the spirit of adventure. MTR presents the UTMB Index race, featuring both a challenging 60km and an exhilarating 20km route.</p>
                <p className="text-lg text-left mb-6">So, gear up, rally your fellow adventurers, and join us at the starting line for an epic journey like no other! 🏁👟</p>
              </div>
              <div className="flex justify-center">
                <a href="https://margallatrailrunners.com/galiyatmountaintrail/" target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 rounded-full inline-block">Visit Margalla Trail Runners Website for Details</a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <a href="https://margallatrailrunners.com/galiyatmountaintrail/" target="_blank" rel="noopener noreferrer">
            <img src={image12} alt="MTR Galiyat Picture" className="md:mt-6 rounded-lg w-full max-h-96" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GaliyatMountainTrail2025;