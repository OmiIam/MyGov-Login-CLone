document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            fetch(loginForm.action, {
                method: "POST",
                body: new FormData(loginForm)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Response:", data);
                if (data && !data.error) {
                    window.location.href = "verification.html"; // Redirect to verification page if successful
                } else {
                    alert("Failed to submit form. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error submitting form. Please check your internet connection.");
            });
        });
    }

    // Check if we're on the verification page
    if (window.location.pathname.includes('verification.html')) {
        // Add a timeout to show error if taking too long
        setTimeout(() => {
            const statusMessage = document.querySelector('.status-message');
            if (statusMessage) {
                statusMessage.textContent = 'Verification is taking longer than expected. Please try again.';
            }
        }, 10000); // Show error after 10 seconds
    }
}); 