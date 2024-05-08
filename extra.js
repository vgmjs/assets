var gtagScript = document.createElement('script');
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-P36YDXY7SM';
gtagScript.async = true;
var customScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P36YDXY7SM');
`;
gtagScript.onload = function() {
  var customScriptElement = document.createElement('script');
  customScriptElement.innerHTML = customScript;
  document.head.appendChild(customScriptElement);
};

document.head.appendChild(gtagScript);
