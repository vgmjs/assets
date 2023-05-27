function clearAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
		localStorage.clear();
}
	function incrementLocalStorageItem(key) {
  // Retrieve the current value from Local Storage
  var value = localStorage.getItem(key);

  // Check if the value exists in Local Storage
  if (value) {
    // Convert the value to a number and increment by 1
    var incrementedValue = parseInt(value) + 1;

    // Update the value in Local Storage
    localStorage.setItem(key, incrementedValue.toString());
  } else {
    // If the value doesn't exist, set it to 1
    localStorage.setItem(key, "1");
  }
}

function insertHTMLBeforeFooter() {
	var link = localStorage.getItem('link');
	var token = localStorage.getItem('token');
	
	var visit = localStorage.getItem('visit');
	var getlink='url'+visit;
	console.log(getlink);
	
	var url = localStorage.getItem(getlink);
	
	// Retrieve the values from Local Storage
var pageviewValue = localStorage.getItem("pageview");
var visitValue = localStorage.getItem("visit");

// Check if the values are equal
if (pageviewValue === visitValue) {
	// Call the function to increment the "visit" item in Local Storage
incrementLocalStorageItem("visit");

	// Create the initial HTML code
  var initialHTML = '<center>' +
    '<div class="center">' +
    '  <div class="center" id="footin">' +
    '    <a class="rd_btn" id="gen">Generate Link »</a>' +
    '  </div>' +
    '</div>' +
    '<div id="footer_sr">' +
    '  <span></span>' +
    '</div>' +
    '</center>';

	
	// Insert the initial HTML before the footer element
  var footerElement = document.getElementById('footer');
  footerElement.insertAdjacentHTML('beforebegin', initialHTML);

	 // Get the necessary elements
  var genButton = document.getElementById('gen');
  var footinElement = document.getElementById('footin');
	
	
	
// Add event listener to the genButton
  genButton.addEventListener('click', function() {
    // Update the HTML and start countdown
    
	  var countdown = localStorage.getItem('countdown');
   
    var countdownHTML = '<center>' +
      '<div class="center">' +
      '  <div class="center">' +
      '    <a class="rd_btn">Please wait ' + countdown + ' seconds ...</a>' +
      '  </div>' +
      '</div>' +
      '<div id="footer_sr">' +
      '  <span></span>' +
      '</div>' +
      '</center>';

    footinElement.innerHTML = countdownHTML;

    var countdownInterval = setInterval(function() {
      countdown--;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        var finalHTML = '<center>' +
          '<div class="center">' +
          '  <div class="center">' +
          '    <a class="rd_btn" href="'+link+'?token='+token+'" rel="nofollow" target="_blank">Go to Download Link »</a>' +
          '  </div>' +
          '</div>' +
          '<div id="footer_sr">' +
          '  <span></span>' +
          '</div>' +
          '</center>';

        footinElement.innerHTML = finalHTML;
		  clearAllCookies()
      } else {
        footinElement.querySelector('.rd_btn').innerText = 'Please wait ' + countdown + ' seconds ...';
      }
    }, 1000);
  });
	
	
	
	
  console.log("The values of 'pageview' and 'visit' are equal.");
} else {
	
	// Call the function to increment the "visit" item in Local Storage
incrementLocalStorageItem("visit");

	
  console.log("The values of 'pageview' and 'visit' are not equal.");
	
	 // Create the HTML code to be inserted
  var htmlCode = '<center>' +
    '<div class="center">' +
    '  <a class="rd_btn" href="'+url+'">Continue »</a>' +
    '</div>' +
    '<div id="footer_sr">' +
    '  <span></span>' +
    '</div>' +
    '</center>';
  // Create a temporary element to hold the HTML code
  var tempElement = document.createElement('div');
  tempElement.innerHTML = htmlCode;

  // Get the reference to the footer element
  var footerElement = document.getElementById('footer');

  // Insert the HTML code before the footer element
  footerElement.parentNode.insertBefore(tempElement, footerElement);
}

	
 

}


// Check if the visit local storage value exists and is numeric
function checkVisitLocalStorage() {
  var visitLocalStorage = localStorage.getItem('visit');

  if (visitLocalStorage && !isNaN(visitLocalStorage)) {
    // Local storage value exists and is numeric
    console.log("Visit local storage value exists and is numeric:", visitLocalStorage);
	  addhtml()
  } else {
    // Local storage value does not exist or is not numeric
    console.log("Visit local storage value does not exist or is not numeric");
  }
}
function addhtml() {
	 console.log("html added!");
  // Create the div element with id "verify"
  var verifyDiv = document.createElement('div');
  verifyDiv.id = 'verify';

  // Create the center element
  var centerElement = document.createElement('center');

  // Create the h3 element
  var h3Element = document.createElement('h3');
  h3Element.textContent = 'Please verify that you are human.';

  // Append the h3 element to the center element
  centerElement.appendChild(h3Element);

  // Append the center element to the verify div
  verifyDiv.appendChild(centerElement);

  // Create the div element with margin
  var marginDiv = document.createElement('div');
  marginDiv.style.margin = '10px';
marginDiv.id = 'top_navmsg';
  // Create another center element
  var centerElement2 = document.createElement('center');

  // Create the button element
  var buttonElement = document.createElement('button');
  buttonElement.className = 'rd_btn';
  buttonElement.id = 'top_nav';
  buttonElement.textContent = 'Click to verify';

  // Append the button element to the second center element
  centerElement2.appendChild(buttonElement);

  // Append the second center element to the margin div
  marginDiv.appendChild(centerElement2);

  // Get the header element
  var headerElement = document.querySelector('header');

  // Insert the verify div and margin div after the header element
  headerElement.insertAdjacentElement('afterend', verifyDiv);
  headerElement.insertAdjacentElement('afterend', marginDiv);
	
	
	// Get the button element with id top_nav
var buttonElement = document.getElementById('top_nav');

// Add a click event listener to the button
buttonElement.addEventListener('click', handleClick);
	
}



	
// Function to handle the click event
function handleClick() {
	// Get the element by its ID
var elementToRemove = document.getElementById("verify");

// Check if the element exists
if (elementToRemove) {
  // Remove the element
  elementToRemove.parentNode.removeChild(elementToRemove);
}

	
  // Replace the HTML content of the top_nav element
  var topNavElement = document.getElementById('top_navmsg');
  topNavElement.innerHTML = '<center><p class="large">Please wait <span id="countdown" class="PurpleTxt"></span> seconds ...</p></center>';

  // Start the countdown of 6 seconds
   var countdown = localStorage.getItem('countdown');
  var countdownValue = countdown;
  var countdownElement = document.getElementById('countdown');

  var countdownInterval = setInterval(function() {
    countdownValue--;
    countdownElement.textContent = countdownValue;

    // Check if the countdown is completed
    if (countdownValue === 0) {
      // Clear the interval
      clearInterval(countdownInterval);

      // Append the HTML content after countdown completed
     topNavElement.innerHTML = '<center><p class="large">Scroll down and click <span class="PurpleTxt">Continue</span> button.</p></center>';

// Call the function to insert the HTML before the footer element
insertHTMLBeforeFooter();
    }
  }, 1000);
}




checkVisitLocalStorage()
	
