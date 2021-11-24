"use strict";

//imports
import { createListElement, removeHtml } from "./createLists.js";
import { kelvinToCelsius } from "./unitConversions.js";

//selectors
const card = document.querySelector("#weather-card");
const submitButton = document.querySelector(".submit");
const leftSelector = document.querySelector("#left-side");
const rightSelector = document.querySelector("#right-side");
const city = document.querySelector("#city");
const sky = document.querySelector("#sky-description");

let nameOfCity = "";

async function getApi(cityname) {
  //function to fetch data and return it
  //for this small application I will be exposing the api key
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=708dbd9b677bb41f1461a55259144588`
    );
    const response = await data.json();
    console.log(response);
    return [
      response.name,
      response.main.temp,
      response.main.feels_like,
      response.main.temp_max,
      response.main.temp_min,
      response.wind.speed,
      response.weather[0].description,
    ];
  } catch (err) {
    console.log("There was an error fetching the data: " + err);
  }
}

function displayData() {
  //gets city name and displays it on page
  getApi(nameOfCity).then((x) => {
    city.textContent = x[0];
    sky.textContent = x[6];
    createListElement(
      "Temperature: " + kelvinToCelsius(x[1]) + "°C",
      leftSelector
    );
    createListElement(
      "Feels Like: " + kelvinToCelsius(x[2]) + "°C",
      leftSelector
    );
    createListElement(
      "Max Temp: " + kelvinToCelsius(x[3]) + "°C",
      rightSelector
    );
    createListElement(
      "Min Temp: " + kelvinToCelsius(x[4]) + "°C",
      rightSelector
    );
    createListElement("Wind speed: " + x[5] + "m/s", rightSelector);
  });
}

function main() {
  //calls other functions
  submitButton.addEventListener("click", function () {
    let cityName = document.querySelector("#cityname").value;
    nameOfCity += cityName;
    removeHtml(leftSelector);
    removeHtml(rightSelector);
    displayData();

    nameOfCity = "";
  });
}

main();
