const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// AOS

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});



// EmailJS Init
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
  emailjs.init("u4y5f7UiKEFcXhtuP");
});

// Show green alert message
function showSuccess(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "20px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.backgroundColor = "#4CAF50";
  alertBox.style.color = "#fff";
  alertBox.style.padding = "12px 24px";
  alertBox.style.borderRadius = "6px";
  alertBox.style.fontSize = "16px";
  alertBox.style.zIndex = "1000";
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 4000);
}

// Subscribe Form
document.getElementById("subscribe-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_portfolio_07642", "template_msl0ays", this)
    .then(() => {
      showSuccess("Subscription successful!");
      this.reset();
    }, (error) => {
      alert("Error: " + JSON.stringify(error));
    });
});

// Contact Form
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_cuisine-k5lypyf", "template_sd9s4ux", this)
    .then(() => {
      showSuccess("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Error: " + JSON.stringify(error));
    });
});

// Book Table Form
document.getElementById("book-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_portfolio_07642", "template_msl0ays", this)
    .then(() => {
      showSuccess("Table booked successfully!");
      this.reset();
    }, (error) => {
      alert("Error: " + JSON.stringify(error));
    });
});
