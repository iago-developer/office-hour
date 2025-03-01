const btn_direct_new = document.getElementById("btn_direct_new");
const btn_direct_management = document.getElementById("btn_direct_management");

const openPage = (element, url) => {
  const allFlaps = [...document.querySelectorAll(".flap")];
  console.log(allFlaps);
  allFlaps.forEach((el) => {
    el.classList.remove("flapSelected");
  });
  element.classList.add("flapSelected");
  window.open(url, "if_main");
};

btn_direct_new.addEventListener("click", (event) => {
  openPage(event.target, "./new.html");
});

btn_direct_management.addEventListener("click", (event) => {
  openPage(event.target, "./management.html");
});
