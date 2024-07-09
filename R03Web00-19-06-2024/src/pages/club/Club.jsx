import React from 'react';
import { Helmet } from 'react-helmet';

const clubs = [
    {
        location: "Lahore",
        name: "Falcon Triathlon Club",
        activities: "Running/ Cycling",
        contactPerson: "Usman Bashir",
        contactNumber: "+923175092111"
    },
    {
        location: "Lahore",
        name: "Hiker.pk",
        activities: "Running",
        contactPerson: "Zaira Syed",
        contactNumber: "----------"
    },
    {
        location: "Lahore",
        name: "Lahore Runners",
        activities: "Running",
        contactPerson: "Abdul Rehman",
        contactNumber: "+923214559500"
    },
    {
        location: "Lahore",
        name: "Team Spirit",
        activities: "Running / Cycling / Swimming",
        contactPerson: "Hassan Tajdar",
        contactNumber: "+923334244422"
    },
    {
        location: "Islamabad",
        name: "IRC (Islamabad Running Club)",
        activities: "Running",
        contactPerson: "Bilal Ehsan",
        contactNumber: "+923018113358"
    },
    {
        location: "Islamabad",
        name: "IRU (Islamabad Run with Us)",
        activities: "Running",
        contactPerson: "Qasim Naz/ Saad Sultan",
        contactNumber: "+923215863610"
    },
    {
        location: "Islamabad",
        name: "MTR (Margallas Trail Runners)",
        activities: "Trail Running",
        contactPerson: "Javed Ali",
        contactNumber: "+923463863624"
    },
    {
        location: "Karachi",
        name: "Born 2 Run Pakistan",
        activities: "Running",
        contactPerson: "Sohail Sardar",
        contactNumber: "+923218222373"
    },
    {
        location: "Karachi",
        name: "DD Athletes",
        activities: "Running / Cycling",
        contactPerson: "Tabish Shahid",
        contactNumber: "+923212010085"
    },
    {
        location: "Karachi",
        name: "Karachi Striders",
        activities: "Running",
        contactPerson: "Talha Shahid/Saqib Munir",
        contactNumber: "+923002448984"
    },
    {
        location: "Karachi",
        name: "Sports in Pakistan",
        activities: "Running/Cycling",
        contactPerson: "Shoaib Nizami",
        contactNumber: "+923008207262"
    },
    {
        location: "Karachi",
        name: "SVRC Seaview Runners Club",
        activities: "Running / Cycling",
        contactPerson: "Adnan Gandhi",
        contactNumber: "+923018479017"
    },
    {
        location: "Karachi",
        name: "The Bolts Athletics",
        activities: "Running",
        contactPerson: "Akbar Bangash",
        contactNumber: "+923122373122"
    },
    {
        location: "Karachi",
        name: "United Fitness Squad of Pakistan",
        activities: "Running",
        contactPerson: "Yousuf Malik",
        contactNumber: "+923132925415"
    },
    {
        location: "Karachi",
        name: "Wednesday Night Pacers",
        activities: "Running/Cycling",
        contactPerson: "Danish Raza",
        contactNumber: "+923008205738"
    },
    {
        location: "Abu Dhabi",
        name: "Pakistan Road Runners",
        activities: "Running",
        contactPerson: "Umer Shad",
        contactNumber: "+971559734881"
    },
    {
        location: "Gujar Khan",
        name: "Khalid Jatt Fitness Club KJFC",
        activities: "Running",
        contactPerson: "Khalid Jatt",
        contactNumber: "+923009549124"
    },
    {
        location: "Tando Allahyar",
        name: "Nizamani Running Community",
        activities: "Running",
        contactPerson: "Asad Nizamani",
        contactNumber: "+923003088664"
    },
    {
        location: "Sheikhupura",
        name: "Abdul Khaliq Athletics Academy",
        activities: "Running",
        contactPerson: "Amir Shahzad",
        contactNumber: "+923035905641"
    }
];

const Club = () => {
    return (
        <>
            <Helmet>
                <title>Running and Cycling Clubs in Pakistan</title>
                <meta
                    name="description"
                    content="Discover running and cycling clubs in Pakistan. Find clubs in your city, get contact details, and join a community of fitness enthusiasts."
                />
                <meta
                    name="keywords"
                    content="running clubs Pakistan, cycling clubs Pakistan, fitness clubs Pakistan, running groups, cycling groups, fitness communities"
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://www.runpakistan.com/clubs"
                />
                <meta name="author" content="runPAKISTAN" />
            </Helmet>
            
            <div className="flex flex-col min-h-screen">
                <div className="mb-8 text-center h-16"> {/* Increase height here */}
                            {/* First Ad Space */}
                {/* Uncomment the following div if you want to display an ad */}
                {/*
                <div className="mb-8 text-center h-28">
                <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
                </div>
                */}
                </div>

                <div className="container mx-auto mb-5 mt-5">
                    <h2 className="text-5xl text-center text-green-700 font-bold mb-4">Running and Cycling Clubs</h2>
                    <table className="table-auto w-full border">
                        <thead className="text-xl text-green-700">
                            <tr className="text-left">
                                <th className="px-4 py-2 border">Location</th>
                                <th className="px-4 py-2 border">Club Name</th>
                                <th className="px-4 py-2 border">Activities</th>
                                <th className="px-4 py-2 border">Contact Person</th>
                                <th className="px-4 py-2 border">Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clubs.map((club, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{club.location}</td>
                                    <td className="border px-4 py-2">{club.name}</td>
                                    <td className="border px-4 py-2">{club.activities}</td>
                                    <td className="border px-4 py-2">{club.contactPerson}</td>
                                    <td className="border px-4 py-2">{club.contactNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                  {/* Second Ad Space */}
                    {/* Uncomment the following div if you want to display an ad */}
                    {/*
                    <div className="mb-8 text-center h-28">
                    <img src="ad1.jpg" alt="Advertisement 1" className="mx-auto h-full" />
                    </div>
                    */}
            </div>
        </>
    );
};

export default Club;
