const body = document.querySelector("body");
const day = document.querySelector("#f_day");
const month = document.querySelector("#f_month");
const year = document.querySelector("#f_year");

const date = new Date();
const dayNow = date.getDate();
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const monthNow = months[date.getMonth()];
const yearNow = date.getFullYear();

day.value = dayNow;
month.value = monthNow;
year,value = yearNow;