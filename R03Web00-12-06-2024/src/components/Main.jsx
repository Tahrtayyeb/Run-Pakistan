import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import image1 from '../assets/images/galiyat22.png';
import image2 from '../assets/images/jasmin2.jpg'
{/* Importing for News */}
import londonImage from '../assets/images/london3.jpg';
import bostonImage from '../assets/images/bostonGroup.jpeg';
import geezerImage from '../assets/images/geezer.jpg';
import kiptumImage from '../assets/images/kiptumCar.jpeg';
import beijingImage from '../assets/images/beijing2.jpeg';
import jasminImage from '../assets/images/jasmin2.jpg';
{/* Importing for Events */}
import galiyatImage from '../assets/images/galiyat.jpg';
import backyardImage from '../assets/images/backyard24.jpg';
import capitalImage from '../assets/images/capitalHM.png';
import karachiImage from '../assets/images/karachi1.png';
import islamabadImage from '../assets/images/iru2025.jpg';
import lahoreImage from '../assets/images/ftc2025.jpg';
{/* Importing for Training */}
import tCard1Image from '../assets/images/Tcard1.png';
import tCard2Image from '../assets/images/Tcard2.png';
import tCard3Image from '../assets/images/Tcard3.png';
import tCard4Image from '../assets/images/Tcard4.png';
{/* Importing for Recovery */}
import yogaImage from '../assets/images/yoga8.jpeg';
import nutritionImage from '../assets/images/nutrition3.jpeg';
import runImage from '../assets/images/run-1.jpg';
import squatImage from '../assets/images/squat7.jpeg';

const newsItems = [
    { image: londonImage, heading: "London Marathon 2024 & Strides of Pakistani Runners", link: "/london-marathon-2024" },
    { image: bostonImage, heading: "Highlights of Boston Marathon 2024 & Pakistani Running Community", link: "/boston-marathon-2024" },
    { image: geezerImage, heading: "Hardest Geezer Running Through Africa", link: "/hardest-geezer-africa" },
    { image: kiptumImage, heading: "Kiptun Sad Demise Left Running World in Shock", link: "/kiptum-death" },
    { image: beijingImage, heading: "Huge Controversy at Beijing Half Marathon left Spectators Stunned", link: "/beijing-contro-2024" },
    { image: jasminImage, heading: "Jasmin Paris Makes History at Barkley Marathon", link: "/barkley-jasmin-2024" }
];


const upcomingEvents = [
    { title: "Galiyat Mountain Trail 2024", date: "21 July 2024", location: "Nathia Gali Club", organiser: "Margalla Trail Runners", link: "/galiyat-mountain-trail-2024", image: galiyatImage },
    { title: "Margalla Backyard Ultra 2024", date: "07 Dec 2024", location: "Fatima Jinnah Park Islamabad", organiser: "Margalla Trail Runners", link: "/margalla-backyard-ultra-2024", image: backyardImage },
    { title: "Capital Half Marathon 2024", date: "24 Nov 2024", location: "Islamabad City", organiser: "Islamabad Running Club", link: "/capital-half-marathon-2025", image: capitalImage },
    { title: "Karachi Marathon 2025", date: "04 Jan 2024", location: "Sea View Karachi", organiser: "Sea View Running Club", link: "/karachi-marathon-2025", image: karachiImage },
    { title: "Islamabad Marathon 2025", date: "26 Jan 2025", location: "Islamabad City", organiser: "Islamabad Run With Us", link: "/islamabad-marathon-2025", image: islamabadImage },
    { title: "Lahore Marathon 2025", date: "16 Feb 2025", location: "Lahore City", organiser: "Falcon Triathlon Club", link: "/lahore-marathon-2025", image: lahoreImage },
];

const trainingPlans = [
    { type: "", duration: "6 weeks", description: "Get ready to run your first 5k with this 6-week training plan.", link: "/five-training-plan", image: tCard1Image },
    { type: "", duration: "8 weeks", description: "Train for a 10k race with this 8-week training plan designed for beginners.", link: "/ten-training-plan", image: tCard2Image },
    { type: "", duration: "12 weeks", description: "Prepare yourself for a half marathon with this 12-week training plan suitable for all levels.", link: "/half-marathon-training-plan", image: tCard3Image },
    { type: "", duration: "16 weeks", description: "Conquer the full marathon distance with this comprehensive 16-week training plan.", link: "/marathon-training-plan", image: tCard4Image }
];

const healthAndInjuriesData = [
    { title: "Injury Prevention", description: "Learn how to prevent running injuries.", image: yogaImage, link: "/injury-prevention" },
    { title: "Nutrition For Athletes", description: "Explore the importance of nutrition for runners.", image: nutritionImage, link: "/injury-nutrition" },
    { title: "Is Running Bad For Knees", description: "Let's find what science says about running is good or bad for knees", image: runImage, link: "/injury-knee-running-bad" },
    { title: "Recovery Techniques", description: "Discover effective recovery techniques for runners.", image: squatImage, link: "/injury-recovery" }
];

const NewsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                    <Link to={news.link} target="_blank" className="block">
                        <img src={news.image} alt="News Image" className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{news.heading}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

const EventsSection = () => {
    return (
        <div className="flex">
            {upcomingEvents.map((event, index) => (
                <Link key={index} to={event.link} target="_blank" className="bg-white p-6 rounded-md shadow-md mx-2">
                    <img src={event.image} alt="Event Image" className="w-full h-48 object-cover object-center mb-4" />
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">Date: {event.date}</p>
                    <p className="text-gray-600 mb-2">Organiser: {event.organiser}</p>
                    <p className="text-gray-600 mb-4">Location: {event.location}</p>
                    <span className="text-blue-600 hover:underline">View Details</span>
                </Link>
            ))}
        </div>
    );
};

const TrainingPlansSection = () => {
    return (
        <>
            {trainingPlans.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-md">
                    <Link to={plan.link} target="_blank">
                        <img src={plan.image} alt={plan.type} className="mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                        <p className="text-black mb-2">Duration: {plan.duration}</p>
                        <p className="text-black mb-4">{plan.description}</p>
                        <span className="text-blue-600 hover:underline hover:text-green-600">View Plan</span>
                    </Link>
                </div>
            ))}
        </>
    );
};

const HealthAndInjuriesSection = () => {
    return (
        <>
            {healthAndInjuriesData.map((data, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                    <Link to={data.link} target="_blank">
                        <img src={data.image} alt={`${data.title} Image`} className="w-full h-48 object-cover object-center mb-4" />
                        <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                        <p className="text-gray-600 mb-4">{data.description}</p>
                    </Link>
                </div>
            ))}
        </>
    );
};

const Main = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Run Pakistan",
        "url": "https://www.runpakistan.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.runpakistan.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "description": "Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan.",
        "image": image1
    };

    return (
        <>
             <Helmet>
                <title>runPAKISTAN - Running Events, News, Training Plans, and Recovery Tips</title>
                <meta name="description" content="Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
                <meta name="keywords" content="Run Pakistan, running events, running news, training plans, recovery tips, marathons in Pakistan, Pakistani runners" />
                <meta name="author" content="Run Pakistan Team" />
                <meta property="og:title" content="Run Pakistan - Running Events, News, Training Plans, and Recovery Tips" />
                <meta property="og:description" content="Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
                <meta property="og:image" content={image1} />
                <meta property="og:url" content="https://www.runpakistan.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Run Pakistan - Running Events, News, Training Plans, and Recovery Tips" />
                <meta name="twitter:description" content="Discover the latest running events, news, training plans, and recovery tips for runners in Pakistan. Join our community and stay updated with Run Pakistan." />
                <meta name="twitter:image" content={image1} />
                <link rel="canonical" href="https://www.runpakistan.com" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205461782762104"
                crossorigin="anonymous"></script>
            </Helmet>

            <div className="relative px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between mt-2 mb-8">
                    {/* Main Card 1 */}
                    <div className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-20 md:mr-2 md:ml-0 text-gray-800">
                        <Link to="/galiyat-mountain-trail-2024" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image1} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-2xl md:text-4xl font-bold px-4 mb-2 italic">Galiyat Mountain Trail Race</h1>
                                <p className="px-4">Registration for the most exciting and scenic trail race in Pakistan is open now. Enjoy an early bird discount on the 20km and 60km categories.</p>
                            </div>
                        </Link>
                    </div>

                    {/* Main Card 2 */}
                    <div className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-20 md:ml-2 md:mr-0 text-gray-800">
                        <Link to="/barkley-jasmin-2024" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image2} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-2xl md:text-4xl font-bold px-4 mb-2 italic">I was so close to passing out.</h1>
                                <p className="px-4">No woman and only 21 men were able to finish this race until Jasmin ran over 100 miles with 63,000 ft elevation and tendinitis in one knee only. Read more ...</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.5" fill="#38A169"/>
            </svg>
        
            <div className="relative max-w-full flex items-center justify-center py-2 mt-5">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <Link to="/events-main-page" target="_blank">Upcoming Events</Link>
                </h2>
            </div>
            <div id="events-section" className="overflow-x-auto whitespace-nowrap px-3 py-8">
                <EventsSection />
            </div>

            <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center mt-5">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    <Link to="/news-main-page" target="_blank">Running News </Link>
                </h2>
            </div>
            <section id="news-container" className="container mx-auto px-4 py-8 mt-0">
                <NewsSection />
            </section>

            <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center mt-5">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <Link to="/training-homepage" target="_blank">Training Plans </Link>
                </h2>
            </div>
            <div id="training-plans" className="relative max-w-full px-3 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TrainingPlansSection />
            </div>

                        <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center py-2 mt-5">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <Link to="/injury-homepage" target="_blank">Injuries & Recovery </Link>
                </h2>
            </div>
            <div id="healthAndInjuriesContainer" className="relative max-w-full px-3 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HealthAndInjuriesSection />
            </div>
        </>
    );
};

export default Main;
