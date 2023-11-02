let circleText  = document.querySelector("#circle-text")
circleText.innerHTML = circleText.innerText.split("").map((item , index)=>{
  return  `<span style="transform:rotate(${index*8.2}deg)">${item}</span>`
}).join("")


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
});