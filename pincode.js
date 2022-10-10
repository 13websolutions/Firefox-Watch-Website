function policy() {
  document.getElementById("popupmain").style.display = "block";
}
function myclose() {
  document.getElementById("popupmain").style.display = "none";
}
let a = document.getElementById("lock");
a.addEventListener("click", disableScroll);
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
let b= document.getElementById("close");
b.addEventListener("click",enable);
function enable(){
    window.onscroll = function() {};
}
//    pincode checker
let pincodes = [140801, 140802, 147001, 140301, 148001];
let pinbtn = document.querySelector(".pincode-checker");
pinbtn.addEventListener("click", checkpincode);

function checkpincode() {
  let message = document.querySelector(".message");
  let pincode = document.querySelector(".pincode").value;
  let value = Number(pincode);
  // console.log(value);
  if (pincodes.includes(value)) {
    let html;
    html = `<h3>${value} is available for delivery </h3>`;
    message.innerHTML = html;
    message.style.color = "Green";
  } else {
    let html;
    html = `<h3>${value} is not available for delivery </h3>`;
    message.innerHTML = html;
    message.style.color = "Red";
  }
}
//      image effect on main page
let allHoverImages = document.querySelectorAll(".hover-container div img");
let imgContainer = document.querySelector(".img-container");

imgContainer.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

//    Drag element for scrrenshot
function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}

let box = document.querySelector("#drag");
let gx = "";
let gy = "";
function boxmove(ev) {
  box.style.left = ev.clientX - gx + "px";
  box.style.top = ev.clientY - gy + "px";
}
box.addEventListener("mousedown", (ev) => {
  gx = ev.clientX - box.offsetLeft;
  gy = ev.clientY - box.offsetTop;
  window.addEventListener("mousemove", boxmove);
});
window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", boxmove);
});

//      counter up data value
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 5,
    time: 1000,
  });
});
