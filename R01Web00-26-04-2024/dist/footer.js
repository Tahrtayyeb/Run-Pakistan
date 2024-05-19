document.addEventListener("DOMContentLoaded", function() {
    // Reusable function to fetch and inject the footer
    function fetchAndInjectFooter() {
        const footerContainer = document.getElementById("footer-container");
        // Fetch footer.html using AJAX
        fetch('/dist/footer.html')
            .then(response => response.text())
            .then(data => {
                // Inject footer HTML into the container
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error fetching footer:', error));
    }
    // Call the function to fetch and inject the footer
    fetchAndInjectFooter();
});
