// Function to filter event data based on search query
function filterEventData(searchQuery) {
    const eventData = [
        { title: "Galiyat Mountain Trail 2024", date: "21 July 2024", location: "Nathia Gali Club",  organiser: "Margalla Trail Runners" ,link: "./Events/mtrGaliyat.html", image: "/dist/images/galiyat.png" },
        { title: "Margalla Backyard Ultra 2024", date: "07 Dec 2024", location: "Fatima Jinnah Park Islamabad", organiser: "Margalla Trail Runners" , link: "./Events/mtrBackyard2024.html", image: "/dist/images/backyard24.jpg" },
        { title: "Capital Half Marathon 2024", date: "To be announced", location: "Islamabad City", organiser: "Islamabad Running Club" , link: "./Events/ircIslamabad2024.html", image: "/dist/images/capitalHM.png" },
        { title: "Karachi Marathon 2025", date: "To be announced", location: "Sea View Karachi", organiser: "Sea View Running Club", link: "./Events/svrcKarachi2025.html", image: "/dist/images/karachi1.png" },
        { title: "Islamabad Marathon 2025", date: "26 Jan 2025", location: "Islamabad City", organiser: "Islamabad Run With Us" , link: "./Events/iruIslamabad2025.html", image: "/dist/images/iru2025.jpg" },
        { title: "Lahore Marathon 2025", date: "16 Feb 2025", location: "Lahore City", organiser: "Falcon Triathlon Club" , link: "./Events/ftcLahore.html", image: "/dist/images/ftc2025.jpg" },
    ];

    return eventData.filter(event => {
        return event.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
}

// Function to filter health and injuries data based on search query
function filterHealthAndInjuriesData(searchQuery) {
    const healthAndInjuriesData = [
        { title: "Injury Prevention", description: "Learn how to prevent running injuries.", image: "/dist/images/injuryPrevention.jpg", link: "../dist/Health/injuryPrevention.html" },
        { title: "Nutrition For Athletes", description: "Explore the importance of nutrition for runners.", image: "/dist/images/nutrition.jpg", link: "../dist/Health/nutrition.html" },
        { title: "Is Running Bad For Knees", description: "Let's find what science says about running is good or bad for knees", image: "/dist/images/runningBadKnees.jpg", link: "../dist/Health/Knee/isRunningBad.html" },
        { title: "Recovery Techniques", description: "Discover effective recovery techniques for runners.", image: "/dist/images/recoveryTech.jpg", link: "../dist/Health/recoveryTech.html" }
    ];

    return healthAndInjuriesData.filter(item => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
               item.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
}

// Function to filter training plan data based on search query
function filterTrainingPlanData(searchQuery) {
    const trainingPlanData = [
        { type: "5K", duration: "6 weeks", description: "Get ready to run your first 5k with this 6-week training plan.", link: "../dist/Training/5km.html" },
        { type: "10K", duration: "8 weeks", description: "Train for a 10k race with this 8-week training plan designed for beginners.", link: "../dist/Training/10km.html" },
        { type: "Half Marathon", duration: "12 weeks", description: "Prepare yourself for a half marathon with this 12-week training plan suitable for all levels.", link: "../dist/Training/hm.html" },
        { type: "Full Marathon", duration: "16 weeks", description: "Conquer the full marathon distance with this comprehensive 16-week training plan.", link: "../dist/Training/fm.html" }
    ];

    return trainingPlanData.filter(plan => {
        return plan.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
               plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
}

// Function to display event search results
function displayEventResults(eventData) {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear existing results

    eventData.forEach(event => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = event.link;
        link.textContent = event.title;
        listItem.appendChild(link);
        eventList.appendChild(listItem);
    });
}

// Function to display health and injuries search results
function displayHealthAndInjuriesResults(healthData) {
    const healthList = document.getElementById("health-list");
    healthList.innerHTML = ""; // Clear existing results

    healthData.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.title;
        listItem.appendChild(link);
        healthList.appendChild(listItem);
    });
}

// Function to display training plan search results
function displayTrainingPlanResults(trainingData) {
    const trainingList = document.getElementById("training-list");
    trainingList.innerHTML = ""; // Clear existing results

    trainingData.forEach(plan => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = plan.link;
        link.textContent = plan.type;
        listItem.appendChild(link);
        trainingList.appendChild(listItem);
    });
}

// Function to handle search input
function handleSearchInput() {
    const searchQuery = searchInput.value.trim(); // Get the search query and remove leading/trailing spaces

    // Perform actions based on search query
    if (searchQuery.length > 0) {
        // Fetch suggestions based on the search query for events, health and injuries, and training plans
        const eventData = filterEventData(searchQuery);
        const healthAndInjuriesData = filterHealthAndInjuriesData(searchQuery);
        const trainingPlanData = filterTrainingPlanData(searchQuery);

        // Display search results
        displayEventResults(eventData);
        displayHealthAndInjuriesResults(healthAndInjuriesData);
        displayTrainingPlanResults(trainingPlanData);
    } else {
        // Clear any existing suggestions if search query is empty
        const eventList = document.getElementById("event-list");
        const healthList = document.getElementById("health-list");
        const trainingList = document.getElementById("training-list");
        eventList.innerHTML = "";
        healthList.innerHTML = "";
        trainingList.innerHTML = "";
    }
}

// Add event listener for search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", handleSearchInput);

// Function to handle search completion (e.g., pressing Enter)
function handleSearchCompletion() {
    const searchQuery = searchInput.value.trim();

    // Navigate to search results page if search query is not empty
    if (searchQuery.length > 0) {
        // Implement navigation to the search results page based on the search query
        const searchResultsUrl = "../dist/search-results.html?query=" + encodeURIComponent(searchQuery);
        window.open(searchResultsUrl, "_blank"); // Open in a new tab
        console.log("Navigating to search results page for query:", searchQuery);
    }
}

// Add event listener for search completion (e.g., pressing Enter)
searchInput.addEventListener("keydown", function(event) {
    // Check if the Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        handleSearchCompletion();
    }
});
