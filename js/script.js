// 사이드바
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("active");
});
sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("active");
});

// 슬라이더
const images = document.querySelectorAll(".banner-img");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const indicatorsContainer = document.querySelector(".banner-indicators");
let currentIndex = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    indicatorsContainer.children[i].classList.toggle("active", i === index);
  });
}
function createIndicators() {
  indicatorsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
    indicatorsContainer.appendChild(dot);
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
createIndicators();
showSlide(currentIndex);
rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);
setInterval(nextSlide, 4000);

// 쿠키 관련
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}
function getCookie(name) {
  return document.cookie.split("; ").find(row => row.startsWith(name + "="))?.split("=")[1];
}

// 팝업 1
const popup1 = document.getElementById("popup1");
const closePopup1 = document.getElementById("closePopup1");
const hide1Day1 = document.getElementById("hide1Day1");
if (getCookie("popup1Hidden") !== "true") popup1.style.display = "block";
closePopup1.addEventListener("click", () => {
  popup1.style.display = "none";
  if (hide1Day1.checked) setCookie("popup1Hidden", true, 1);
  if (getCookie("popup2Hidden") !== "true") popup2.style.display = "block";
});

// 팝업 2
const popup2 = document.getElementById("popup2");
const closePopup2 = document.getElementById("closePopup2");
const hide1Day2 = document.getElementById("hide1Day2");
if (getCookie("popup1Hidden") === "true" && getCookie("popup2Hidden") !== "true") {
  popup2.style.display = "block";
}
closePopup2.addEventListener("click", () => {
  popup2.style.display = "none";
  if (hide1Day2.checked) setCookie("popup2Hidden", true, 1);
});
