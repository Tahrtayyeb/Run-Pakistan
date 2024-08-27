import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Banner from '../assets/images/icon.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


import image1 from '../assets/images/surface.jpg';
import image2 from '../assets/images/faisalshafi/faisal13.jpeg'
{/* Importing for News */}
import londonImage from '../assets/images/london3.jpg';
import bostonImage from '../assets/images/bostonGroup.jpeg';
import galiyat1Image from '../assets/images/galiyat2024/galiyat5.jpeg';
import lahore8Image from '../assets/images/runlahore8/00.jpg';
import lahore9Image from '../assets/images/runlahore9/hiker.jpeg'
import pearlImage from '../assets/images/pearl2024/pearl1.png';
{/* Importing for Events */}
import backyardImage from '../assets/images/backyard24.jpg';
import galiyatImage from '../assets/images/galiyat2025.jpg';
import hillImage from '../assets/images/mtrhill2025.jpg';
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
    { image: galiyat1Image, heading: "Highlights & Results of Galiyat Mountain Trail 2024", link: "/events/galiyat-mountain-trail-2024" },
    { image: pearlImage, heading: "Highlights & Results of Pearl Half Marathon AJK 2024", link: "/events/pearl-half-marathon-rawalakot-2024" },
    { image: lahore9Image, heading: "The 9th edition of the Run Lahore Time Trial Series", link: "/run-lahore-time-trail-9th-edition-hikerpk"},
    { image: lahore8Image, heading: "The 8th edition of the Run Lahore Time Trial Series", link: "/run-lahore-time-trail-8th-edition-cml" },
    { image: londonImage, heading: "London Marathon 2024 & Strides of Pakistani Runners", link: "/london-marathon-2024" },
    { image: bostonImage, heading: "Highlights of Boston Marathon 2024 & Pakistani Running Community", link: "/boston-marathon-2024" },
];


const upcomingEvents = [
    { title: "The Karakoram Challenge 2024", date: "01 Sep 2024", location: "KKH, Gojal, Hunza", organiser: "Islamabad Running Club & NorthBound", link: "/karakoram-half-marathon-2024", image: karaImage },
    { title: "Margalla Backyard Ultra 2024", date: "07 Dec 2024", location: "Fatima Jinnah Park Islamabad", organiser: "Margalla Trail Runners", link: "/margalla-backyard-ultra-2024", image: backyardImage },
    { title: "Capital Half Marathon 2024", date: "24 Nov 2024", location: "Islamabad City", organiser: "Islamabad Running Club", link: "/capital-half-marathon-2025", image: capitalImage },
    { title: "Karachi Marathon 2025", date: "04 Jan 2024", location: "Sea View Karachi", organiser: "Sea View Running Club", link: "/karachi-marathon-2025", image: karachiImage },
    { title: "Islamabad Marathon 2025", date: "26 Jan 2025", location: "Islamabad City", organiser: "Islamabad Run With Us", link: "/islamabad-marathon-2025", image: islamabadImage },
    { title: "Lahore Marathon 2025", date: "16 Feb 2025", location: "Lahore City", organiser: "Falcon Triathlon Club", link: "/lahore-marathon-2025", image: lahoreImage },
    { title: "Inter Club Hill Half Marathon 2025", date: "13 April 2025", location: "Margalla Hills", organiser: "Margalla Trail Runners", link: "/inter-club-hill-half-marathon-2025", image: hillImage },
    { title: "Galiyat Mountain Trail 2025", date: "20 July 2025", location: "Galiyat", organiser: "Margalla Trail Runners", link: "/galiyat-mountain-trail-2025", image: galiyatImage },
];

const trainingPlans = [
    { type: "", duration: "6 weeks", description: "Get ready to start your running jounrey with first 5k with this 6-week training plan.", link: "/five-training-plan", image: tCard1Image },
    { type: "", duration: "8 weeks", description: "Train for a 10k race with this 8-week training plan designed for beginners.", link: "/ten-training-plan", image: tCard2Image },
    { type: "", duration: "12 weeks", description: "Prepare yourself for a half marathon with this 12-week training plan.", link: "/half-marathon-training-plan", image: tCard3Image },
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
                <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}>
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                    <Link to={news.link} target="_blank" className="block">
                        <img src={news.image} alt="News Image" className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="md:text-lg font-bold mb-2">{news.heading}</h3>
                        </div>
                    </Link>
                </div>
                </motion.div>
            ))}
        </div>
    );
};

const EventsSection = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        infinite: true,
        speed: 5000, // Increased speed (lower number means faster transition)
        slidesToShow: 5, // Show 5 events on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Reduced autoplay time to 2 seconds
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
        <div className="relative">
            <button
                onClick={() => sliderRef?.slickPrev()}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
    
            <Slider ref={setSliderRef} {...settings}>
                {upcomingEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="px-1 md:mt-5 pb-8">
                            <Link to={event.link} target="_blank" className="bg-white p-4 rounded-md shadow-md block h-full">
                                <div className="h-52 mb-2 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt="Event Image"
                                        className="w-full h-52 object-cover rounded-md object-center"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-1 truncate">{event.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">Date: {event.date}</p>
                                <p className="text-sm text-gray-600 mb-1 truncate">Organiser: {event.organiser}</p>
                                <p className="text-sm text-gray-600 mb-2 truncate">Location: {event.location}</p>
                                <span className="text-sm text-blue-600 hover:underline">View Details</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </Slider>
    
            <button
                onClick={() => sliderRef?.slickNext()}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

const TrainingPlansSection = () => {
    return (
        <>
            {trainingPlans.map((plan, index) => (
                            <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}>
                <div key={index} className="bg-white p-6 rounded-md shadow-md mt-5">
                    <Link to={plan.link} target="_blank">
                        <img src={plan.image} alt={plan.type} className="mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                        <p className="text-black mb-2">Duration: {plan.duration}</p>
                        <p className="text-black mb-4">{plan.description}</p>
                        <span className="text-blue-600 hover:underline hover:text-green-600">View Plan</span>
                    </Link>
                </div>
                </motion.div>
            ))}
        </>
    );
};

const HealthAndInjuriesSection = () => {
    return (
        <>
            {healthAndInjuriesData.map((data, index) => (
                            <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}>
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                    <Link to={data.link} target="_blank">
                        <img src={data.image} alt={`${data.title} Image`} className="w-full h-48 object-cover rounded-md object-center mb-4" />
                        <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                        <p className="text-gray-600 mb-4">{data.description}</p>
                    </Link>
                </div>
                </motion.div>
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
                <meta name="robots" content="index, follow" />
                <link rel="alternate" hreflang="x-default" href="https://www.runpakistan.com/" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
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
                    <motion.div
                        key="card1"
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-5 md:mt-20 md:mr-2 md:ml-0 text-gray-800"
                    >                    
                        <motion.h1 
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                       >
                        <Link to="/injury/running-surfaces-impact-performance-injury" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image1} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-center md:text-left text-xl md:text-3xl font-bold px-4 mb-2 italic">Ultimate Guide to Running Surfaces: Boost Performance, Prevent Injuries</h1>
                                <p className="px-4 hidden md:block">Understanding the characteristics of different running surfaces is essential for runners looking to optimize their training and minimize the risk of injuries., Click here for details</p>
                            </div>
                        </Link>
                    </motion.h1>
                    </motion.div>

                    {/* Main Card 2 */}
                    <motion.div
                        key="card1"
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-1/2 relative rounded-xl mb-4 md:mb-0 border-2 mt-5 md:mt-20 md:mr-2 md:ml-0 text-gray-800"
                    >                     <motion.h1 
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                       >
                        <Link to="/blog/faisal-shafi-running-mental-health" className="flex flex-col h-full">
                            <div className="rounded-t-xl">
                                <img src={image2} className="w-full rounded-xl" style={{ aspectRatio: '16/9' }} alt="Main Image" />
                                <h1 className="text-center md:text-left text-xl md:text-3xl font-bold px-4 mb-2 italic">Running for Mental Health: Faisal Shafi's Inspirational Journey</h1>
                                <p className="px-4 hidden md:block">In an era where mental health awareness is more crucial than ever, running emerges as a powerful tool for maintaining psychological well-being. Click here for details</p>
                            </div>
                        </Link>
                        </motion.h1>

                    </motion.div>
                </div>
            </div>


            <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.5" fill="#38A169"/>
            </svg>
        
            <div className="relative max-w-full flex items-center justify-center py-2 mt-5">
                <h2 className="text-3xl md:text-5xl font-extrabold text-green-600 mb-2 transition-transform transform hover:scale-105 hover:text-green-500">
                    <Link to="/events-main-page" target="_blank" className="hover:opacity-75">
                        Upcoming Events
                    </Link>
                </h2>
            </div>

            <div id="events-section" className="px-3 overflow-hidden">
                <EventsSection />
            </div>

            <svg className="w-full h-0.5 bg-green-600 mt-10" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center py-2 mt-5">
                <h2 className="text-3xl md:text-5xl font-extrabold text-green-600 mb-2 transition-transform transform hover:scale-105 hover:text-green-500">
                    <Link to="/news-main-page" target="_blank" className="hover:opacity-75">
                    Running News </Link>
                </h2>
            </div>
            <section id="news-container" className="container mx-auto px-4 py-8 mt-0">
                <NewsSection />
            </section>

            <svg className="w-full h-0.5 bg-green-600 mt-2" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center py-2 mt-5 ">
                <h2 className="text-3xl md:text-5xl font-extrabold text-green-600 mb-2 transition-transform transform hover:scale-105 hover:text-green-500">
                    <Link to="/training-homepage" target="_blank" className="hover:opacity-75">
                Training Plans </Link>
                </h2>
            </div>
            <div id="training-plans" className="relative max-w-full px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TrainingPlansSection />
            </div>

                        <svg className="w-full h-0.5 bg-green-600 mt-10" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="0.25" fill="#38A169"/>
            </svg>

            <div className="relative max-w-full flex items-center justify-center py-2 mt-5">
                <h2 className="text-3xl md:text-5xl font-extrabold text-green-600 mb-2 transition-transform transform hover:scale-105 hover:text-green-500">
                    <Link to="/injury-homepage" target="_blank" className="hover:opacity-75">
                Injuries & Recovery </Link>
                </h2>
            </div>
            <div id="healthAndInjuriesContainer" className="relative max-w-full px-3 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HealthAndInjuriesSection />
            </div>
        </>
    );
};

export default Main;
