"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////
// Button Scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo to specify coordinates.
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////
// Event Delegation _implementing  page Navigation

// Event delegation is a technique in which a single event listener is attached to a common ancestor of multiple elements, rather than attaching individual event listeners to each element.

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log("LINK");
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1.Add event listener to common parent Element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  // This code adds a click event listener to a common parent element with the class .nav__links. It prevents the default behavior of link clicks (e.preventDefault()). The code then determines the specific element that triggered the event (e.target). If the clicked element has the class "nav__link," it extracts the target section's ID from its href attribute and smoothly scrolls to that section using scrollIntoView. The code employs event delegation to efficiently handle multiple link clicks within the parent container.
});
// Building Tabbed Component

// tabs.forEach((tab) => {
//   tab.addEventListener("click", function () {
//     const tabId = this.getAttribute("data-tab");

//     tabs.forEach((t) => t.classList.remove("active"));
//     tabContents.forEach((content) => content.classList.remove("active"));

//     this.classList.add("active");
//     document.getElementById(tabId).classList.add("active");
//   });
// });

tabsContainer.addEventListener("click", function (e) {
  // Uses closest to find the closest ancestor of the clicked element with the class "operations__tab". closestb are used when there are other siblings,sideways
  const clicked = e.target.closest(".operations__tab");

  // Guard clause The guard clause (if (!clicked) return;) ensures that the click event occurred outside a tab, avoiding errors.
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  // : Uses the 'dataset.tab' attribute to construct a selector for the corresponding content area and adds the "operations__content--active" class.
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
// Passing Argument to an event handler
// Menu Fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing 'argument' into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation_the scroll Event

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// intersection observer API
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; // array from entries, expecting only header
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
  // threshold: 0: Triggers the callback as soon as any part of the target element becomes visible.
  // rootMargin: -${navHeight}px``: Defines a margin around the viewport within which the intersection is calculated. In this case, it's set to the negative value of the navigation height, creating a trigger point when the header is about to leave the viewport.
});
headerObserver.observe(header);

// Reveal Section using intersectionObserver API

// Reveal Sections: To reveal elements on scroll, you can use the Intersection Observer API to detect when an element comes into view and then apply a class or other styles to make it visible

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; //indicating section not in view.
  entry.target.classList.remove("section--hidden"); //If the section is in view, it removes the "section--hidden" class, revealing the section.
  observer.unobserve(entry.target); // to improve performance
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // entire VP
  threshold: 0.15, //triggers callback at least 15%
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden"); //initial hiding
});

// Lazy loading images
// Lazy loading images is a technique that defers the loading of offscreen images until they are needed. Generate the placeholder of images and blur them a little bit then Use Lazyloading

const imgTarget = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src; //setting attribute as value
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
// It takes an array of entries as a parameter. In this case, it expects only one entry (an image).
// Checks if the image is intersecting with the viewport (entry.isIntersecting). If not, it returns, indicating that the image is not in view.
// If the image is in view, it sets the src attribute to the value of data-src, triggering the image to load.
// Adds an event listener for the "load" event. When the image has loaded, it removes the "lazy-img" class, indicating that the image is no longer lazy-loaded.
// observer.unobserve(entry.target): Stops observing the image once it has been loaded.
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
imgTarget.forEach((img) => imgObserver.observe(img));

// Slider component
//this involves creating a container for the slides, adding navigation buttons, and handling the logic to transition between slides.
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector(".slider");
slider.style.transform = "scale(.4)translateX(-800px)";
slider.style.overflow = "visible";

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%,100%, 200%, 300%

// Next slide
btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
16mins 45sec
//////////////////////////////////////////////
/*
// Selecting Elements

console.log(document.documentElement); //selecting entire element
console.log(document.head); // Selecting head
console.log(document.body); // Selecting body

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");
console.log(allSection);

document.getElementById("section--1");

// get element by tag name return html collection which are updated automatically...
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements

const message = document.createElement("div");
message.classList.add("cookie-message");

// Add content to the div
// message.textContent = 'We use cookie for improved functionality and analytics.';
message.innerHTML =
  "We use cookie for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it! </button>";
// Append the paragraph to the body of the document
header.append(message);
// header.prepend(message)
// header.append(message.cloneNode(true)); // multiple appearance of created element

// header.before(message);
// header.after(message);

// Deleting Element
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    //  message.parentElement.removeChild(message);
  });

// Styles, Attributes, Classes
// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// To change CSS variables
document.documentElement.style.setProperty("--color-primary", "ora");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("Company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");

console.log(link.href);
console.log(link.getAttribute("href"));

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// logo.className = 'jonas'


// Implementing Smooth Scrolling

// Implementing smooth scrolling in JavaScript involves using the 'scrollIntoView' method along with some additional styling to achieve a smooth transition.

// Button Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo to specify coordinates.
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Type of Events and Events handlers.

const h1 = document.querySelector("h1");
const alertH1 = function (e) {
  alert("addEventListener: Great you are reading the header page");
};

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 6000);


// rgb (255,255,255)
// Event happens at document root and from there it travels to document elements.

// bubbles up means as if the event happens in all the parent elements

// Event Propagation in practice....
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});


/////// DOM TRAVERSING
// DOM traversing in JavaScript involves navigating the hierarchical structure of the Document Object Model. Common methods include accessing parent nodes, retrieving child nodes and elements, navigating siblings, finding descendants with selectors, and traversing along the tree.

// Navigating the hierarchy of structures of DOM
// Selecting an element relative to another element.
// QuerySelector finds children no matter how deep while Closest finds parents no matter distance.
const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(.5)";
  // Converts the HTMLCollection into an array using the spread operator (...).
  // Initiates a loop over each element in the array.
});
*/
