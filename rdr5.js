function addStylesIfNotExist() {
  // Check if the styles already exist in the document
  var existingStyles = document.querySelectorAll('style');
  for (var i = 0; i < existingStyles.length; i++) {
    var cssText = existingStyles[i].textContent;
    if (cssText.includes('.ct-container') && cssText.includes('.preloader') && cssText.includes('.center') && cssText.includes('.large') && cssText.includes('.soractrl') && cssText.includes('.rd_btn') && cssText.includes('.PurpleTxt')) {
      // Styles already exist, so no need to add them
      return;
    }
  }

  // Create a <style> element
  var styleElement = document.createElement('style');

  // Set the CSS rules
  var cssText = `
    footer .ct-container { justify-content: center; }
    .preloader { 
      align-items: center;
      background: #171616;
      display: flex;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0;
      transition: opacity .3s linear;
      width: 100%;
      z-index: 9999;
    }
    .preloader.loaded { opacity: 0; pointer-events: none; }
    .center { 
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .large { font-size: 1.5rem; }
    .soractrl { 
      clear: both;
      position: relative;
      text-align: center;
      margin-bottom: 15px;
    }
    .rd_btn {
      box-sizing: border-box;
      text-decoration: none;
      outline: none!important;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      padding: .5rem 2.5rem;
      margin: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      display: block;
      width: 20rem!important;
      font-weight: 600;
      border-radius: 8px 8px 8px 8px;
      background: #8C46FE;
      color: #FFF!important;
      font-family: "proxima-nova", sans-serif;
      cursor: pointer;
    }
    .rd_btn:hover { 
      background: #7038cb!important;
      color: #FFF!important;
    }
    .PurpleTxt { 
      color: #7e41ff;
      font-weight: 600;
      margin-left: .3ch;
      margin-right: .3ch;
    }
  `;

  // Set the CSS text of the <style> element
  styleElement.textContent = cssText;

  // Append the <style> element to the <head> section of the document
  document.head.appendChild(styleElement);
}

// Call the function to add styles if they do not exist
addStylesIfNotExist();


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
	if (url === null || typeof url === 'undefined') {
  url=window.location.href;
  }
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

	
	// Check if the specific div exists in the document body
var specificDiv = document.getElementById('footbtn');

if (specificDiv) {
  // If the specific div exists, insert the initialHTML inside it
  specificDiv.innerHTML = initialHTML;
} else {
  // If the specific div does not exist, insert the initialHTML before the footer element
  var footerElement = document.getElementById('footer');
  footerElement.insertAdjacentHTML('beforebegin', initialHTML);
}


	 // Get the necessary elements
  var genButton = document.getElementById('gen');
  var footinElement = document.getElementById('footin');
	
	
	
// Add event listener to the genButton
  genButton.addEventListener('click', function() {
    // Update the HTML and start countdown
    
	  var countdown = localStorage.getItem('countdown');
   	  var countdownn = localStorage.getItem('countdown');

    var countdownHTML = '<center>' +
      '<div class="center">' +
      '  <div class="center">' +
      '    <a class="rd_btn">Please wait ' + countdownn + ' seconds ...</a>' +
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
  var initialHTML= '<center>' +
    '<div class="center">' +
    '  <a class="rd_btn" href="'+url+'">Continue »</a>' +
    '</div>' +
    '<div id="footer_sr">' +
    '  <span></span>' +
    '</div>' +
    '</center>';
  
	// Check if the specific div exists in the document body
var specificDiv = document.getElementById('footbtn');

if (specificDiv) {
  // If the specific div exists, insert the initialHTML inside it
  specificDiv.innerHTML = initialHTML;
} else {
  // If the specific div does not exist, insert the initialHTML before the footer element
  var footerElement = document.getElementById('footer');
  footerElement.insertAdjacentHTML('beforebegin', initialHTML);
}


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

  // Get the specific div element with ID "specific_div"
  var specificDiv = document.getElementById('headbtn');

  if (specificDiv) {
    // If the specific div exists, insert the verify div and margin div inside it
    specificDiv.appendChild(verifyDiv);
    specificDiv.appendChild(marginDiv);
  } else {
    // If the specific div is not found, get the header element
    var headerElement = document.querySelector('header');

    // Insert the verify div and margin div after the header element
    headerElement.insertAdjacentElement('afterend', verifyDiv);
    headerElement.insertAdjacentElement('afterend', marginDiv);
  }

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

	   	  var countdownn = localStorage.getItem('countdown');

  // Replace the HTML content of the top_nav element
  var topNavElement = document.getElementById('top_navmsg');
  topNavElement.innerHTML = '<center><p class="large">Please wait <span id="countdown" class="PurpleTxt">'+countdownn+'</span> seconds ...</p></center>';

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
	
