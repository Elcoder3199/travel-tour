"use strict";
// Loading Page
//  when page loading the the loading will be none and show the content
let loading = document.querySelector(".loading");

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setTimeout(() => {
      loading.style.display = "none";
      loading.remove();
    }, 300);
  }
};

// -------- menu working open and close navbar -------
let menu = document.querySelector("#menu_btn"),
  navbar = document.querySelector(".header .navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.onscroll = function () {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// -----------------------------------------------

// ------ home page swiper slider section
