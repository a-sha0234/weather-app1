"use strict";

const submitButton = document.querySelector(".submit");
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
    return [response.name, response.main.temp_max];
  } catch (err) {
    console.log("There was an error fetching the data: " + err);
  }
}

function extractData() {
  //function to extract data and put into an array
  let arrApiData = [];
  getApi(nameOfCity).then((x) => {
    arrApiData.push(x);
  });
  return arrApiData;
}

async function getCityName() {
  //function that gets city name
  const city = arrdata.name;
  console.log(city);
  return city;
}

function maxTemp() {
  //   let h = getApi(nameOfCity).then((x) => {
  //     console.log(x[1]);
  //   });
  //   return h;
}

function main() {
  submitButton.addEventListener("click", function () {
    let cityName = document.querySelector("#cityname").value;
    nameOfCity += cityName;
    // console.log(
    //   getApi(nameOfCity).then((x) => {
    //     console.log(x[1]);
    //   })
    // );
    console.log(extractData());
    nameOfCity = "";
  });
}

main();
