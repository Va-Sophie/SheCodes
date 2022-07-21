function showTemperature(element) {
  let temp = Math.round(element.data.main.temp);
  let city = element.data.name;
  document.querySelector("h1").innerHTML = `${city}`;
  document.getElementById("number0").innerHTML = `${temp}`;
  console.log(temp);
}
let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);
//
function currentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function action() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
document.getElementById("current").addEventListener("click", action);
//
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeCity(element) {
  let city = document.getElementById("form").value;
  city = city.toLowerCase();
  city = city.trimStart().trimEnd();
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  if (city.length === 0) {
    alert("Please, type the new city name.");
    location.reload();
  }
}
document.getElementById("button-addon2").addEventListener("click", changeCity);

const input = document.querySelector("form");
input.onkeydown = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    let city = document.getElementById("form").value;
    city = city.toLowerCase();
    city = city.trimStart().trimEnd();
    let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
};
