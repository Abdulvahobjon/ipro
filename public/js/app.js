let headerMenuBtn =  document.querySelector("#headerMenuBtn")
let headerResponsiveMenu =  document.querySelector("#headerResponsiveMenu")
let headerResponsiveBtn =  document.querySelector("#headerResponsiveBtn")

headerMenuBtn.addEventListener('click' , function(){
  headerResponsiveMenu.classList.add("translate-x-0")
  headerResponsiveMenu.classList.remove("translate-x-full")
})


headerResponsiveBtn.addEventListener('click' , function(){
  headerResponsiveMenu.classList.remove("translate-x-0")
  headerResponsiveMenu.classList.add("translate-x-full")
})



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 21,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
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

wow = new WOW({
  animateClass: "animated",
  offset: 100,
  callback: function (box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
  },
});
wow.init();
document.getElementById("moar").onclick = function () {
  var section = document.createElement("section");
  section.className = "section--purple wow fadeInDown";
  this.parentNode.insertBefore(section, this);
};

