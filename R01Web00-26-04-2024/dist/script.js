
document.addEventListener("DOMContentLoaded", function() {
    //News
const displayNews = function() {
    const newsContainer = document.querySelector("#news-container .grid");

    // Assuming you have an array of news items with image URLs and headings
    const newsItems = [
        { image: "/dist/images/london3.jpg", heading: "London Marathon 2024 & Strides of Pakistani Runners", link: "../dist/News/Articles/london2024.html" },
        { image: "/dist/images/bostonGroup.jpeg", heading: "Highlights of Boston Marathon 2024 & Pakistani Running Community", link: "../dist/News/Articles/boston2024.html" },
        { image: "/dist/images/geezer.jpg", heading: "Hardest Geezer Running Through Africa", link: "../dist/News/Articles/hardestGeezer.html" },
        { image: "/dist/images/kiptumCar.jpeg", heading: "Kiptun Sad Demise Left Running World in Shock", link: "../dist/News/Articles/kiptum.html" },
        { image: "/dist/images/beijing2.jpeg", heading: "Huge Controversy at Beijing Half Marathon left Spectators Stunned", link: "../dist/News/Articles/beijing2024.html" },
        { image: "/dist/images/jasmin2.jpg", heading: "Jasmin Paris Makes History at Barkley Marathon", link: "../dist/News/Articles/jasmin2024.html" }
    ];
    
    // Loop through the array of news items and create news cards
    newsItems.forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("bg-emerald-300", "rounded-lg", "shadow-md", "overflow-hidden", "relative");
    
        // Anchor element wrapping the image and news content
        const anchorElement = document.createElement("a");
        anchorElement.href = news.link; // Set the link for each news item
        anchorElement.target = "_blank";
        anchorElement.classList.add("block");
    
        // Image element
        const imageElement = document.createElement("img");
        imageElement.src = news.image;
        imageElement.alt = "News Image";
        imageElement.classList.add("w-full", "h-48", "object-cover", "object-center");
        anchorElement.appendChild(imageElement);
    
        // News content
        const newsContent = document.createElement("div");
        newsContent.classList.add("p-4");
    
        // Heading element
        const headingElement = document.createElement("h3");
        headingElement.textContent = news.heading;
        headingElement.classList.add("text-lg", "font-bold", "mb-2");
        newsContent.appendChild(headingElement);
    
        // Append the news content to the anchor element
        anchorElement.appendChild(newsContent);
    
        // Append the anchor element to the news card
        newsCard.appendChild(anchorElement);
    
        // Append the news card to the news container
        newsContainer.appendChild(newsCard);
    });

};

// Call the function to fetch news data and display news cards
displayNews();
// Add event listener to search input
document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and inject navbar HTML
    const fetchAndInjectNavbar = function() {
        const navbarContainer = document.getElementById("navbar-container");
        // Fetch navbar.html using AJAX
        fetch('/dist/navbar.html')
            .then(response => response.text())
            .then(data => {
                // Inject navbar HTML into the container
                navbarContainer.innerHTML = data;
              
                // Reattach event listeners for dropdown menus
                reattachDropdownEventListeners();
            })
            .catch(error => console.error('Error fetching navbar:', error));
    };

    // Function to reattach event listeners for dropdown menus
    function reattachDropdownEventListeners() {
        const dropdownButtons = document.querySelectorAll('.dropdown-button');

        dropdownButtons.forEach(button => {
            const dropdown = button.nextElementSibling;

            // Function to show dropdown menu
            const showDropdownMenu = function() {
                dropdown.classList.remove("hidden");
            };

            // Function to hide dropdown menu
            const hideDropdownMenu = function() {
                dropdown.classList.add("hidden");
            };

            // Show dropdown menu when button is hovered
            button.addEventListener("mouseenter", function() {
                showDropdownMenu();
            });

            // Hide dropdown menu when cursor leaves the button or the dropdown
            button.addEventListener("mouseleave", function() {
                hideDropdownMenu();
            });

            dropdown.addEventListener("mouseenter", function() {
                showDropdownMenu();
            });

            dropdown.addEventListener("mouseleave", function() {
                hideDropdownMenu();
            });
        });
    }

    // Call the function to fetch and inject navbar
    fetchAndInjectNavbar();

});
    //Event
    const upcomingEvents = [
        { title: "Galiyat Mountain Trail 2024", date: "21 July 2024", location: "Nathia Gali Club",  organiser: "Margalla Trail Runners" ,link: "./Events/mtrGaliyat.html", image: "/dist/images/galiyat.png" },
        { title: "Margalla Backyard Ultra 2024", date: "07 Dec 2024", location: "Fatima Jinnah Park Islamabad", organiser: "Margalla Trail Runners" , link: "./Events/mtrBackyard2024.html", image: "/dist/images/backyard24.jpg" },
        { title: "Capital Half Marathon 2024", date: "To be announced", location: "Islamabad City", organiser: "Islamabad Running Club" , link: "./Events/ircIslamabad2024.html", image: "/dist/images/capitalHM.png" },
        { title: "Karachi Marathon 2025", date: "To be announced", location: "Sea View Karachi", organiser: "Sea View Running Club", link: "./Events/svrcKarachi2025.html", image: "/dist/images/karachi1.png" },
        { title: "Islamabad Marathon 2025", date: "26 Jan 2025", location: "Islamabad City", organiser: "Islamabad Run With Us" , link: "./Events/iruIslamabad2025.html", image: "/dist/images/iru2025.jpg" },
        { title: "Lahore Marathon 2025", date: "16 Feb 2025", location: "Lahore City", organiser: "Falcon Triathlon Club" , link: "./Events/ftcLahore.html", image: "/dist/images/ftc2025.jpg" },
    ];
    
    const upcomingEventsContainer = document.getElementById("events-container");
    
    // Loop through the array of upcoming events and create event cards
    for (let i = 0; i < Math.min(upcomingEvents.length, 8); i++) {
        const event = upcomingEvents[i];
        const eventCard = document.createElement("a"); // Changed from div to anchor element
        eventCard.href = event.link; // Set the href attribute to the event page URL
        eventCard.classList.add("bg-yellow-100", "p-6", "rounded-md", "shadow-md", "mx-2");
    
        // Image element
        const imageElement = document.createElement("img");
        imageElement.src = event.image;
        imageElement.alt = "Event Image";
        imageElement.classList.add("w-full", "h-48", "object-cover", "object-center", "mb-4");
        eventCard.appendChild(imageElement);
    
        // Event details
        eventCard.innerHTML += `
            <h3 class="text-xl font-bold mb-2">${event.title}</h3>
            <p class="text-gray-600 mb-2">Date: ${event.date}</p>
            <p class="text-gray-600 mb-2">Organiser: ${event.organiser}</p>
            <p class="text-gray-600 mb-4">Location: ${event.location}</p>
            <a href="${event.link}" class="text-blue-600 hover:underline">View Details</a>
        `;
    
        upcomingEventsContainer.appendChild(eventCard);
    }
    const trainingPlans = [
        { type: "", duration: "6 weeks", description: "Get ready to run your first 5k with this 6-week training plan.", link: "../dist/Training/5km.html", image: "../dist/images/Tcard1.png" },
        { type: "", duration: "8 weeks", description: "Train for a 10k race with this 8-week training plan designed for beginners.", link: "../dist/Training/10km.html", image: "../dist/images/Tcard2.png" },
        { type: "", duration: "12 weeks", description: "Prepare yourself for a half marathon with this 12-week training plan suitable for all levels.", link: "../dist/Training/hm.html", image: "../dist/images/Tcard3.png" },
        { type: "", duration: "16 weeks", description: "Conquer the full marathon distance with this comprehensive 16-week training plan.", link: "../dist/Training/fm.html", image: "../dist/images/Tcard4.png" }
    ];
    
    const trainingPlansContainer = document.getElementById("training-plans");
    
    // Loop through the array of training plans and create plan cards
    trainingPlans.forEach(plan => {
        const planCard = document.createElement("div");
        planCard.classList.add("bg-cyan-200", "p-6", "rounded-md", "shadow-md");
    
        // Create an anchor tag to wrap the card
        const anchorElement = document.createElement("a");
        anchorElement.href = plan.link;
        anchorElement.target = "_blank";
    
        // Card content
        anchorElement.innerHTML = `
            <img src="${plan.image}" alt="${plan.type}" class="mb-4 rounded-md">
            <h3 class="text-xl font-bold mb-2">${plan.type}</h3>
            <p class="text-gray-600 mb-2">Duration: ${plan.duration}</p>
            <p class="text-gray-600 mb-4">${plan.description}</p>
            <a href="${plan.link}" class="text-blue-600 hover:underline" target="_blank">View Plan</a>
        `;
    
        // Append anchor element to the card
        planCard.appendChild(anchorElement);
    
        // Append plan card to the container
        trainingPlansContainer.appendChild(planCard);
    });
    
 // Health & injuries
const healthAndInjuriesData = [
    { title: "Injury Prevention", description: "Learn how to prevent running injuries.", image: "/dist/images/injuryprevention2.jpeg", link: "../dist/Health/injuryPrevention.html" },
    { title: "Nutrition For Athletes", description: "Explore the importance of nutrition for runners.", image: "/dist/images/nutrition1.jpeg", link: "../dist/Health/nutrition.html" },
    { title: "Is Running Bad For Knees", description: "Let's find what science says about running is good or bad for knees", image: "/dist/images/knee3.jpeg", link: "../dist/Health/Knee/isRunningBad.html" },
    { title: "Recovery Techniques", description: "Discover effective recovery techniques for runners.", image: "/dist/images/runner7.jpeg", link: "../dist/Health/recoveryTech.html" }
    // Add more items as needed
];

const healthAndInjuriesContainer = document.getElementById("healthAndInjuriesContainer");

// Function to create a card for each health & injury option
function createHealthAndInjuryCard(title, description, image, link) {
    const card = document.createElement("div");
    card.classList.add("bg-red-200", "p-4", "rounded-md", "shadow-md");

    // Create an anchor tag to wrap the card
    const anchorElement = document.createElement("a");
    anchorElement.href = link;
    anchorElement.target = "_blank";


    // Image element
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = title + " Image";
    imageElement.classList.add("w-full", "h-48", "object-cover", "object-center");
    // Append image element to anchor
    anchorElement.appendChild(imageElement);

    // Title element
    const titleElement = document.createElement("h3");
    titleElement.classList.add("text-lg", "font-bold", "mb-2");
    titleElement.textContent = title;
    // Append title element to anchor
    anchorElement.appendChild(titleElement);

    // Description element
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-gray-600", "mb-4");
    descriptionElement.textContent = description;
    // Append description element to anchor
    anchorElement.appendChild(descriptionElement);

    // Append anchor element to card
    card.appendChild(anchorElement);

    return card;
}

// Populate the container with health & injury cards
healthAndInjuriesData.forEach(data => {
    const card = createHealthAndInjuryCard(data.title, data.description, data.image, data.link);
    healthAndInjuriesContainer.appendChild(card);
});
});
