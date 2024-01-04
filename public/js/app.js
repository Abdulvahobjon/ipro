let headerMenuBtn = document.querySelector("#headerMenuBtn");
let headerResponsiveMenu = document.querySelector("#headerResponsiveMenu");
let headerResponsiveBtn = document.querySelector("#headerResponsiveBtn");

headerMenuBtn.addEventListener("click", function () {
  headerResponsiveMenu.classList.add("translate-x-0");
  headerResponsiveMenu.classList.remove("translate-x-full");
});

headerResponsiveBtn.addEventListener("click", function () {
  headerResponsiveMenu.classList.remove("translate-x-0");
  headerResponsiveMenu.classList.add("translate-x-full");
});

let section_counter = document.querySelector("#section_counter");
let counters = document.querySelectorAll(".counter-item .counter");

document.addEventListener("DOMContentLoaded", function () {
  var counters = document.querySelectorAll(".counter");

  counters.forEach(function (counterElement) {
    var target = parseInt(counterElement.getAttribute("data-target"));
    var count = 0;

    var updateCounter = function () {
      var increment = target / 100; // Qancha darajada oshirishni xohlaysiz
      count += increment;
      counterElement.innerText = Math.round(count);

      if (count < target) {
        requestAnimationFrame(updateCounter);
      } else {
        count = target;
        counterElement.style.opacity = 1;
      }
    };

    var handleScroll = function () {
      var scrollPosition = window.scrollY + window.innerHeight;
      var elementPosition = counterElement.offsetTop;

      if (scrollPosition > elementPosition) {
        updateCounter();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });
});

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector("#select-btn"),
  options = optionMenu.querySelectorAll(".option");

// Toggle the visibility of optionMenu when selectBtn is clicked
selectBtn.addEventListener("click", function () {
  optionMenu.classList.toggle("hidden");
  optionMenu.classList.toggle("flex");
});

// Add a click event listener to the document to hide the optionMenu when clicking outside of it
document.addEventListener("click", function (event) {
  const target = event.target;
  if (!optionMenu.contains(target) && target !== selectBtn && target !== selectBtn.querySelector('span') && target !== selectBtn.querySelector('svg') && target !== selectBtn.querySelector('path')) {
    optionMenu.classList.add("hidden");
    optionMenu.classList.remove("flex");
  }
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = selectBtn.querySelector("span");
    selectedOption.innerText = option.innerText;

    optionMenu.classList.toggle("hidden");
    optionMenu.classList.toggle("flex");
  });
});

function textRounded() {
  let circleText = document.querySelector("#circle-text");
  circleText.innerHTML = circleText.innerText
    .split("")
    .map((item, index) => {
      return `<span style="transform:rotate(${index * 8.2}deg)">${item}</span>`;
    })
    .join("");
}
textRounded();
