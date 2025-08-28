const helmet = document.querySelector(".helmet");
const star = document.querySelector(".s6");
const message = document.querySelector(".message");
const secret1 = document.querySelectorAll(".secret");
const secret = document.querySelector(".secret");
const btn = document.querySelector(".btn");
const blackout = document.querySelector(".blackout");
const star1 = document.querySelector(".s1");

helmet.addEventListener("click", () => {
  message.style.display = "block";
});
star.addEventListener("click", () => {
  secret.style.display = "block";
  console.log("secret");
  setTimeout(() => {
    secret.style.display = "none";
  }, 1000);
});

star1.addEventListener("click", () => {
  secret1[1].style.display = "block";
  console.log("secret");
  setTimeout(() => {
    secret1[1].style.display = "none";
  }, 1000);
});

btn.addEventListener("click", () => {
  blackout.style.display = "none";
});
