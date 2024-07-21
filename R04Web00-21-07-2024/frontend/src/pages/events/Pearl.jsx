import React from 'react';
import { Helmet } from 'react-helmet';
import image12 from '../../assets/images/pearl.jpeg';

const Pearl2024 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pearl Half Marathon 2024</title>
        <meta name="description" content="Embark on an unforgettable adventure along the Galiyat Mountain Trail in the picturesque Abbottabad District of KPK, Pakistan. This scenic trail winds from Thandiyani to Khaira Gali, offering stunning views and gentle dirt paths. Experience the beauty of Pakistan's natural landscapes and the thrill of adventure with the UTMB Index race presented by MTR, featuring challenging 60km and exhilarating 20km routes. Gear up and join us at the starting line for an epic journey like no other!" />
        <meta name="keywords" content="Galiyat Mountain Trail, Abbottabad District, KPK, Pakistan, trail running, mountain trail, adventure race, Thandiyani, Khaira Gali, Miranjani Top, UTMB Index race, MTR, trail runners, hill enthusiasts, natural beauty, adventure, epic journey" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.runpakistan.com/events-pearl-half-marathon-rawalakot-ajk" />
        <meta property="og:image" content={image12} /> 
        <meta name="author" content="runPAKISTAN" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 md:mt-2">
        <h1 className="md:mt-16 text-3xl font-bold text-green-700 text-center md:text-left md:mx-16 mb-6">The Pearl Warriors Half Marathon Rawalakot, Kashmir</h1>
        {/* Content */}
        <div className="flex flex-wrap items-stretch">
          {/* Text */}
          <div className="w-full md:w-1/2 md:px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
              <p className="text-lg text-left mb-6">
                Get ready for an exhilarating experience in the stunning valleys of Rawalakot, Kashmir, with the 21-kilometer "The Pearl Warriors" marathon. Whether you're a seasoned marathoner or a first-timer, this event promises an unforgettable adventure combining the beauty of nature with the joy of fitness. The race will start from Eidgah Football Ground and cover the beautiful city from Chehra, Chak, Khai Gala, Chotagala Cross, and University Road. To make this event memorable, the organizers have arranged special discounts for participants coming from different areas of Pakistan. To get discounts on hotels, you can contact the organizers. Contact numbers are below.
              </p>
                <h2 className="text-2xl font-semibold mb-4">Race Details:</h2>
                <ul className="list-disc list-inside mb-6">
                <li><strong>Date:</strong> July 21, 2024</li>
                <li><strong>Registration Fee:</strong> PKR 500</li>
                <li><strong>Registration Deadline:</strong> July 17, 2024</li>
                <li><strong>Payment:</strong> Send the registration fee via Easypaisa or bank transfer and share the payment screenshot on WhatsApp to confirm your registration.</li>
                <p className="mb-6">Cash prizes will be awarded to the top three finishers.</p>
                </ul>

                
                <h3 className="text-xl font-semibold mb-2">Easypaisa Account:</h3>
                <p className="mb-4">03418007471 (Zain ul Abideen Zafar)</p>

                <h3 className="text-xl font-semibold mb-2">Bank Account:</h3>
                <p className="mb-4">Account Name: Zulkifal Zafar<br/>Bank: Askari Bank Limited<br/>Account Number: 00400320229549</p>

                <h2 className="text-2xl font-semibold mb-4">Organizer Contacts:</h2>
                <ul className="list-disc list-inside mb-6">
                <li>Zain ul Abideen: 03418007471, 03556686691</li>
                <li>Dr. Ghassan Zahid: 03345093453</li>
                <li>Zulfiqar Zafar: 03360197984</li>
                </ul>

                <p className="mb-4 font-bold">Note: Water and refreshments will be provided by the organizing committee along the route.</p>

            </div>
        </div>
      </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={image12} alt="MTR Galiyat Picture" className="md:mt-6 rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pearl2024;
