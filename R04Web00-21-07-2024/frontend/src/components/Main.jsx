import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Banner from '../assets/images/icon.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/images/kark1.jpg';
import image2 from '../assets/images/hot8.jpg'
{/* Importing for News */}
import londonImage from '../assets/images/london3.jpg';
import bostonImage from '../assets/images/bostonGroup.jpeg';
import jasminImage from '../assets/images/jasmin2.jpg';
import kiptumImage from '../assets/images/kiptumCar.jpeg';
import lahore8Image from '../assets/images/runlahore8/00.jpg';
import pheidImage from '../assets/images/pheid2.jpeg';
{/* Importing for Events */}
import galiyatImage from '../assets/images/galiyat.jpg';
import pearlImage from '../assets/images/pearl.jpeg';
import backyardImage from '../assets/images/backyard24.jpg';
import capitalImage from '../assets/images/capitalHM.png';
import karachiImage from '../assets/images/karachi2025.png';
import islamabadImage from '../assets/images/iru2025.jpg';
import karaImage from '../assets/images/kark1.jpg';
import lahoreImage from '../assets/images/ftc2025.jpg';

{/* Importing for Training */}
import tCard1Image from '../assets/images/Tcard1.png';
import tCard2Image from '../assets/images/Tcard2.png';
import tCard3Image from '../assets/images/Tcard3.png';
import tCard4Image from '../assets/images/Tcard4.png';
{/* Importing for Recovery */}
import yogaImage from '../assets/images/squat0.jpg';
import nutritionImage from '../assets/images/nutrition1.jpg';
import runImage from '../assets/images/run-1.jpg';
import squatImage from '../assets/images/yoga3.jpg';

const newsItems = [
    { image: lahore8Image, heading: "The 8th edition of the Run Lahore Time Trial Series", link: "/run-lahore-time-trail-8th-edition-cml" },
    { image: londonImage, heading: "London Marathon 2024 & Strides of Pakistani Runners", link: "/london-marathon-2024" },
    { image: bostonImage, heading: "Highlights of Boston Marathon 2024 & Pakistani Running Community", link: "/boston-marathon-2024" },
    { image: jasminImage, heading: "Record Breaking Barkley Marathon & Jasmin Paris", link: "/barkley-jasmin-2024" },
    { image: kiptumImage, heading: "Kiptun Sad Demise Left Running World in Shock", link: "/kiptum-death" },
    { image: pheidImage, heading: "Marathon Messenger-Dive into History How Marathon Started", link: "/messenger-marathon-pheid" }
];


const upcomingEvents = [
    { title: "Galiyat Mountain Trail 2024", date: "21 July 2024", location: "Nathia Gali Club", organiser: "Margalla Trail Runners", link: "/galiyat-mountain-trail-2024", image: galiyatImage },
    { title: "Pearl Half Marathon Rawalakot AJK", date: "21 July 2024", location: "Rawalakot AJK", organiser: "Dr Ghassan Zahid & Zukifal Zafar", link: "/events-pearl-half-marathon-rawalakot-ajk", image: pearlImage },
    { title: "The Karakoram Challenge 2024", date: "01 Sep 2024", location: "KKH, Gojal, Hunza", organiser: "Islamabad Running Club & NorthBound", link: "/karakoram-half-marathon-2024", image: karaImage },
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
                            <h3 className="md:text-lg font-bold mb-2">{news.heading}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

const EventsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 250, // Increased speed (lower number means faster transition)
        slidesToShow: 5, // Show 5 events on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Reduced autoplay time to 2 seconds
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
        {upcomingEvents.map((event, index) => (
            <div key={index} className="px-1">
            <Link to={event.link} target="_blank" className="bg-white p-4 rounded-md shadow-md block h-full">
                <div className="h-40 mb-2"> {/* Increased height and fixed container */}
                <img 
                    src={event.image} 
                    alt="Event Image" 
                    className="w-full h-full object-cover rounded-md object-center"
                />
                </div>
                <h3 className="text-lg font-bold mb-1 truncate">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">Date: {event.date}</p>
                <p className="text-sm text-gray-600 mb-1 truncate">Organiser: {event.organiser}</p>
                <p className="text-sm text-gray-600 mb-2 truncate">Location: {event.location}</p>
                <span className="text-sm text-blue-600 hover:underline">View Details</span>
            </Link>
            </div>
        ))}
        </Slider>
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
                        <img src={data.image} alt={`${data.title} Image`} className="w-full h-48 object-cover rounded-md object-center mb-4" />
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
            </Helmet>

            <div className="relative px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between mt-2 mb-8">
                    {/* Main Card 1 */}
                    <div className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-5 md:mt-20 md:mr-2 md:ml-0 text-gray-800">
                        <Link to="/karakoram-half-marathon-2024" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image1} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold px-4 mb-2 italic">Karakoram Challenge 2024 </h1>
                                <p className="px-4 hidden md:block">For the first time in the history of Pakistan, Hunza awaits the local and global community to join the Karakoram Challenge, Click here for details</p>
                            </div>
                        </Link>
                    </div>

                    {/* Main Card 2 */}
                    <div className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-5 md:mt-20 md:ml-2 md:mr-0 text-gray-800">
                        <Link to="/running-in-hot-and-humid-weather-tips" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image2} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold px-4 mb-2 italic">Running in Hot & Humid Weather</h1>
                                <p className="px-4 hidden md:block">Discover essential strategies to stay cool and safe while running in hot and humid conditions. Learn expert tips to make your summer runs enjoyable and effective.</p>
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
            <div id="events-section" className="px-3">
                <EventsSection />
            </div>

            <svg className="w-full h-0.5 bg-green-600 mt-6" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div id="training-plans" className="relative max-w-full px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
