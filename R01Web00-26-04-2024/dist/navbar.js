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

                // Set the correct path for the logo image dynamically
                const logo = navbarContainer.querySelector("#logo");
                if (logo) {
                    logo.src = "/dist/images/logo.png"; // Update the path as needed
                } else {
                    console.error('Logo element not found.');
                }

                // Reattach event listeners for dropdown menus
                reattachDropdownEventListeners();

                // Add event listener for mobile menu button
                const mobileMenuBtn = document.getElementById("mobileMenuBtn");
                if (mobileMenuBtn) {
                    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
                } else {
                    console.error('Mobile menu button not found.');
                }
            })
            .catch(error => console.error('Error fetching navbar:', error));
    };

    // Function to reattach event listeners for dropdown menus
function reattachDropdownEventListeners() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        const dropdown = button.nextElementSibling;
        if (dropdown) {
            // Function to show dropdown menu
            const showDropdownMenu = function() {
                dropdown.classList.remove("hidden");
            };

            // Function to hide dropdown menu
            const hideDropdownMenu = function() {
                dropdown.classList.add("hidden");
            };

            // Show dropdown menu when button is clicked or hovered
            button.addEventListener("mouseenter", showDropdownMenu);
            button.addEventListener("click", showDropdownMenu);

            // Hide dropdown menu when cursor leaves the button or the dropdown
            button.addEventListener("mouseleave", function(event) {
                if (!dropdown.contains(event.relatedTarget)) {
                    hideDropdownMenu();
                }
            });

            dropdown.addEventListener("mouseleave", function(event) {
                if (!button.contains(event.relatedTarget)) {
                    hideDropdownMenu();
                }
            });
        } else {
            console.error('Dropdown element not found.');
        }
    });
}


    // Function to toggle mobile menu visibility
    function toggleMobileMenu() {
        const mobileNavMenu = document.getElementById("mobileNavMenu");
        if (mobileNavMenu) {
            mobileNavMenu.classList.toggle("hidden");
        } else {
            console.error('Mobile navbar menu not found.');
        }
    }
    
    // Call the function to fetch and inject navbar
    fetchAndInjectNavbar();
});
