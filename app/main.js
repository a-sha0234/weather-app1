"use strict";

const submitButton = document.querySelector(".submit");

async function getApi(cityname) {
  //function to fetch data and return it
  //for this small application I will be exposing the api key
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=708dbd9b677bb41f1461a55259144588`
    );
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log("There was an error fetching the data: " + err);
  }
}

function main() {
  submitButton.addEventListener("click", function () {
    let cityName = document.querySelector("#cityname").value;
    getApi(cityName);
  });
}

main();
