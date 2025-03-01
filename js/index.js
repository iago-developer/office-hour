const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const btn_home = document.querySelector("#btn_home");
const btn_new = document.querySelector("#btn_new");
const btn_search = document.querySelector("#btn_search");
const btn_management = document.querySelector("#btn_management");
const btn_management02 = document.querySelector("#btn_management02");
const btn_about = document.querySelector("#btn_about ");

btn_home.addEventListener("click", (event) => {
  openPage(event.target, "./home.html");
});

btn_new.addEventListener("click", (event) => {
  openPage(event.target, "./new.html");
});

btn_search.addEventListener("click", (event) => {
  openPage(event.target, "./search.html");
});

btn_management.addEventListener("click", (event) => {
  openPage(event.target, "./management.html");
});

btn_about.addEventListener("click", (event) => {
  openPage(event.target, "./about.html");
});

const openPage = (element, url) => {
  const allFlaps = [...document.querySelectorAll(".flap")];
  console.log(allFlaps);
  allFlaps.forEach((el) => {
    el.classList.remove("flapSelected");
  });
  element.classList.add("flapSelected");
  window.open(url, "if_main");
};
