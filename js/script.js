let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}
// Function to check if the user has consented to cookies
function hasConsentedToCookies() {
  // Check if the user has a cookie named "consent" with the value "true"
  const consentCookie = getCookie('consent');
  return consentCookie === 'true';
}

// Function to set the consent cookie when the user accepts
function setCookieConsent() {
  // Set a cookie named "consent" with the value "true" that expires in 365 days
  document.cookie = 'consent=true; expires=' + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
}

// Function to get the value of a specific cookie
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

// Check if the user has consented to cookies
if (hasConsentedToCookies()) {
  // Execute the code that requires cookies
  // For example, load external scripts, display personalized ads, etc.
  console.log('Cookies are enabled. Proceed with AdSense and other functionalities.');
} else {
  // Display a cookie consent banner or prompt the user to provide consent
  console.log('Cookies are disabled. Show cookie consent banner or prompt user to provide consent.');
}

// Function to handle the user's consent to cookies
function handleCookieConsent() {
  setCookieConsent();
  // Execute the code that requires cookies after the user provides consent
  // For example, load external scripts, display personalized ads, etc.
  console.log('Cookies consent has been granted. Proceed with AdSense and other functionalities.');
}

// Example usage of the consent handling function
const consentButton = document.getElementById('consent-button');
consentButton.addEventListener('click', handleCookieConsent);
