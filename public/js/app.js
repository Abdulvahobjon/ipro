let circleText  = document.querySelector("#circle-text")
circleText.innerHTML = circleText.innerText.split("").map((item , index)=>{
  return  `<span style="transform:rotate(${index*8.2}deg)">${item}</span>`
}).join("")