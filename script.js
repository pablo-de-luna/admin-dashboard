/* THE LORD IS MY SHEPHERD, I LACK NOTHING */

"use strict"

const root = document.documentElement;
const themeButton = document.querySelector("#theme-button"); 
const themeIcon = document.querySelector("#theme-icon")

themeButton.addEventListener("click", () => {
  if (root.className === "dark-theme") {
    root.className = "light-theme"
    themeIcon.setAttribute("src", "./assets/icons/brightness-6.svg")
  } else {
    root.className = "dark-theme"
    themeIcon.setAttribute("src", "./assets/icons/brightness-4.svg")
  }
});