/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let messageArray = ["Full-stack Developer & Freelancer"];
let textPosition = 0;
let speed = 100;

typewriter = () => {
  document.querySelector("#h3intro").innerHTML =
    messageArray[0].substring(0, textPosition) +
    "<span id='typewriter'>\u25ae</span id='typewriter'>";

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});



// Get all of the nav links on the page
const navLinks = document.querySelectorAll("nav a");

// Set up an event listener to listen for scroll events
window.addEventListener("scroll", function () {

  // Loop through all of the nav links
  navLinks.forEach(function (link) {
    // Get the position of the element that the nav link points to
    const elementPos = link.getAttribute("href");
    if (elementPos == "#") {
    } else {
      const element = document.querySelector(elementPos);
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      // If the scroll position is within the bounds of the element, add the 'active' class to the nav link
      if (1 >= elementTop && 1 <= elementBottom) {

        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});


// This code adds an event listener to the window that listens for "scroll" events. When a scroll event occurs, the code loops through all of the nav links on the page and gets the position of the element that each link points to. If the scroll position is within the bounds of the element, the code adds the 'active' class to the nav link, which can be used to highlight the link as the user scrolls through the page. If the scroll position is not within the bounds of the element, the code removes the 'active' class from the nav link.

// The first line of code gets all of the nav links on the page and assigns them to the navLinks variable using the querySelectorAll method. This method returns a NodeList of elements that match the specified CSS selector.

// The second line of code sets up an event listener that listens for scroll events. When a scroll event occurs, the anonymous function provided as the second argument to the addEventListener method is executed.

// Inside the function, the code loops through each nav link using the forEach method. For each link, the code gets the position of the element that the link points to by getting the value of the href attribute of the link. If the href attribute is equal to "#" (which would indicate that the link is pointing to an element on the same page), the code does nothing. Otherwise, the code gets the actual element that the link points to by using the querySelector method and passing in the value of the href attribute as the argument.

// Next, the code gets the top and bottom positions of the element relative to the viewport using the getBoundingClientRect method. This method returns an object with the top, bottom, left, and right positions of the element relative to the viewport, as well as the element's width and height.

// The code then checks if the scroll position is within the bounds of the element by comparing the value of 1 (which represents the current scroll position) to the top and bottom positions of the element. If the scroll position is within the bounds of the element, the code adds the 'active' class to the nav link using the classList.add method. If the scroll position is not within the bounds of the element, the code removes the 'active' class from the nav link using the classList.remove method.