function changeCity(element) {
  element.preventDefault();
  let city = document.getElementById("form").value;
  city = city.trimStart().trimEnd();
  if (city.length === 0) {
    alert("Please, type the new city name.");
    location.reload();
  }
  document.querySelector("h1").innerHTML = `${city}`;
}
document.getElementById("button-addon2").addEventListener("click", changeCity);
//
let now = new Date();
function formatDate(day) {
  let DaysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Hours = now.getHours();
  let Minutes = now.getMinutes();
  if (Hours < 10) {
    Hours = `0${now.getHours()}`;
  }
  if (Minutes < 10) {
    Minutes = `0${now.getMinutes()}`;
  }
  let moment = `${DaysofWeek[now.getDay()]}, ${Hours}:${Minutes}`;
  return moment;
}
document.getElementById("data").innerHTML = `${formatDate(new Date())}`;
//
function toF(temperature) {
  temperature.preventDefault();
  document.getElementById("number0").innerHTML = `75`;
}
//
function toC(temperature) {
  temperature.preventDefault();
  document.getElementById("number0").innerHTML = `24`;
}
//
document.getElementById("link2").addEventListener("click", toF);
document.getElementById("link1").addEventListener("click", toC);
