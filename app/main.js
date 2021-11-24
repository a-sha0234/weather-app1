"use strict";

import { createListElement, removeHtml } from "./createLists.js";
import { kelvinToCelsius } from "./unitConversions.js";

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
  //gets city name and displayes it on page
  getApi(nameOfCity).then((x) => {
    city.textContent = x[0];
    sky.textContent = x[6];
    createListElement(kelvinToCelsius(x[1]), leftSelector);
    createListElement(kelvinToCelsius(x[2]), leftSelector);
    createListElement(kelvinToCelsius(x[3]), rightSelector);
    createListElement(kelvinToCelsius(x[4]), rightSelector);
    createListElement(x[5], rightSelector);
    console.log(x);
  });
}

function main() {
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
