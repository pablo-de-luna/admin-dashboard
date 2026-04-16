/* THE LORD IS MY SHEPHERD, I LACK NOTHING */

"use strict"

const root = document.documentElement;
const themeButton = document.querySelector("#theme-button"); 
const themeIcon = document.querySelector("#theme-icon")

themeButton.addEventListener("click", () => {
  if (root.className === "dark") {
    root.className = "light"
    themeIcon.setAttribute("src", "./assets/icons/brightness-6.svg")
  } else {
    root.className = "dark"
    themeIcon.setAttribute("src", "./assets/icons/brightness-4.svg")
  }
});