let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let question = prompt("Wouldn't you mind to enter the name of the city?");
question = question.trimStart().trimEnd();
question = question.toLocaleLowerCase();
if (weather[question]) {
  let celsium = Math.round(weather[question].temp);
  let fahrenheit = Math.round(weather[question].temp * 1.8 + 32);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  alert(
    `It is currently ${celsium}°C (${fahrenheit}°F) in ${capitalizeFirstLetter(
      question
    )} with a humidity of ${weather[question].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to \r\n\r\nhttps://www.google.com/search?q=weather+${question}`
  );
}
