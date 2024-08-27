import React from 'react';
import { Helmet } from 'react-helmet';
import image104 from '../../assets/images/it2.jpeg';
import image105 from '../../assets/images/hamstring1.jpg';
import Banner from '../../assets/images/icon.png'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon, EmailIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex mb-4 space-x-4 mt-4">
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

const ITBandSyndrome = () => {
  const pageUrl = "https://www.runpakistan.com/injury-prevention/it-band-syndrome-runners-guide";
  const pageTitle = "IT Band Syndrome in Runners: A Comprehensive Guide to Prevention and Treatment";  

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover evidence-based strategies for preventing and treating IT band syndrome in runners. Learn about symptoms, causes, and expert-recommended exercises."
        />
        <meta property="og:image" content={Banner} /> 
        <meta
          name="keywords"
          content="IT band syndrome, iliotibial band syndrome, runners knee, lateral knee pain, running injuries, overuse injuries, sports medicine, biomechanics, running form"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="runPAKISTAN" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <div className="container mx-auto px-4 py-8 sm:mt-16 flex flex-wrap">
        <div className="w-full md:w-3/4">
          <div className="max-w-3xl mx-auto">
            <article className="blog-post">
              <h1 className="text-3xl font-bold mb-4">
                {pageTitle}
              </h1>
              <ShareButtons url={pageUrl} title={pageTitle} />        
              <p className="mb-4">
                IT band syndrome (ITBS) is a prevalent overuse injury that affects up to 12% of runners, according to a study published in the British Journal of Sports Medicine [1]. This comprehensive guide will help you understand, prevent, and treat ITBS effectively.
              </p>
              <div className="flex flex-col md:flex-row justify-center">
                <div className="max-w-xs mx-auto mb-4 md:mr-4">
                  <img
                    src={image104}
                    alt="IT Band Anatomy"
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2">IT Band Anatomy</p>
                </div>
                <div className="max-w-xs mx-auto">
                  <img
                    src={image105}
                    alt="IT Band Stretching Exercise"
                    className="rounded-md"
                    style={{ height: '350px' }}
                  />
                  <p className="text-center text-gray-600 mt-2">IT Band Stretching Exercise</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Understanding IT Band Syndrome
              </h2>
              <p className="mb-4">
                The iliotibial band is a thick fascia that runs along the lateral aspect of the thigh, from the iliac crest to the tibia. ITBS occurs when this band becomes irritated or inflamed, often due to repetitive friction against the lateral femoral epicondyle during knee flexion and extension [2].
              </p>

              <h2 className="text-2xl font-bold mb-2">
                Key Symptoms of IT Band Syndrome
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Sharp or burning pain on the lateral aspect of the knee</li>
                <li>Pain that worsens during downhill running or prolonged activity</li>
                <li>Tenderness when pressing on the lateral knee area</li>
                <li>A sensation of snapping or popping on the outside of the knee</li>
              </ul>

              <h2 className="text-2xl font-bold mb-2">
                Biomechanical Factors and Risk Assessment
              </h2>
              <p className="mb-4">
                Research indicates that certain biomechanical factors increase the risk of developing ITBS [3]:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Increased hip adduction during the stance phase of running</li>
                <li>Weak hip abductors, particularly the gluteus medius</li>
                <li>Excessive internal rotation of the tibia</li>
                <li>Varus knee alignment</li>
              </ul>

              <h2 className="text-2xl font-bold mb-2">
                Evidence-Based Prevention Strategies
              </h2>
              <p className="mb-4">
                Implement these research-backed methods to reduce your risk of ITBS:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Strength Training: Focus on hip abductor and external rotator exercises [4]</li>
                <li>Gradual Mileage Progression: Follow the 10% rule for weekly mileage increases [5]</li>
                <li>Proper Footwear: Choose shoes that provide adequate support and fit your foot type [6]</li>
                <li>Run on Even Surfaces: Avoid excessive camber and uneven terrain when possible</li>
                <li>Foam Rolling: Regular self-myofascial release of the IT band and surrounding muscles [7]</li>
              </ol>

              <h2 className="text-2xl font-bold mb-2">
                Treatment Approaches for IT Band Syndrome
              </h2>
              <p className="mb-4">
                If you develop ITBS, consider these evidence-based treatment options:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Rest and Activity Modification: Reduce running volume and avoid aggravating activities</li>
                <li>Ice Therapy: Apply ice for 15-20 minutes every 2-3 hours to reduce inflammation</li>
                <li>Physical Therapy: Targeted exercises and manual therapy techniques [8]</li>
                <li>Gait Retraining: Work with a running coach to optimize your running form [9]</li>
                <li>Orthotic Devices: Custom or over-the-counter orthotics may help in some cases [10]</li>
              </ul>

              <h2 className="text-2xl font-bold mb-2">
                When to Seek Professional Help
              </h2>
              <p className="mb-4">
                Consult a sports medicine physician or physical therapist if:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Pain persists despite conservative treatment</li>
                <li>You experience severe pain or swelling</li>
                <li>You're unable to bear weight on the affected leg</li>
                <li>You need guidance on proper rehabilitation exercises</li>
              </ul>

              <p>
                By understanding the biomechanics of IT band syndrome and implementing these evidence-based strategies, runners can significantly reduce their risk of developing this frustrating injury. Remember, prevention is key, and early intervention can lead to faster recovery and a quicker return to pain-free running.
              </p>

              <div className="mt-8 bg-gray-100 p-4 rounded-md">
                <h3 className="text-xl font-bold mb-2">References:</h3>
                <ol className="list-decimal pl-6">
                  <li>Louw M, Deary C. The biomechanical variables involved in the aetiology of iliotibial band syndrome in distance runners - A systematic review of the literature. Phys Ther Sport. 2014;15(1):64-75.</li>
                  <li>Fredericson M, Weir A. Practical management of iliotibial band friction syndrome in runners. Clin J Sport Med. 2006;16(3):261-268.</li>
                  <li>Noehren B, Davis I, Hamill J. ASB clinical biomechanics award winner 2006 prospective study of the biomechanical factors associated with iliotibial band syndrome. Clin Biomech. 2007;22(9):951-956.</li>
                  <li>Willy RW, Davis IS. The effect of a hip-strengthening program on mechanics during running and during a single-leg squat. J Orthop Sports Phys Ther. 2011;41(9):625-632.</li>
                  <li>Johnston CA, Taunton JE, Lloyd-Smith DR, McKenzie DC. Preventing running injuries. Practical approach for family doctors. Can Fam Physician. 2003;49:1101-1109.</li>
                  <li>Cheung RT, Ng GY, Chen BF. Association of footwear with patellofemoral pain syndrome in runners. Sports Med. 2006;36(3):199-205.</li>
                  <li>Wanich T, Hodgkins C, Columbier JA, Muraski E, Kennedy JG. Cycling injuries of the lower extremity. J Am Acad Orthop Surg. 2007;15(12):748-756.</li>
                  <li>Beers A, Ryan M, Kasubuchi Z, Fraser S, Taunton JE. Effects of Multi-modal Physiotherapy, Including Hip Abductor Strengthening, in Patients with Iliotibial Band Friction Syndrome. Physiother Can. 2008;60(2):180-188.</li>
                  <li>Heiderscheit BC, Chumanov ES, Michalski MP, Wille CM, Ryan MB. Effects of step rate manipulation on joint mechanics during running. Med Sci Sports Exerc. 2011;43(2):296-302.</li>
                  <li>Gross ML, Napoli RC. Treatment of lower extremity injuries with orthotic shoe inserts. An overview. Sports Med. 1993;15(1):66-70.</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITBandSyndrome;