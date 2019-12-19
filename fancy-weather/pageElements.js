import * as events from "./events.js";
import { setDate, setTime, currentLocation } from "./utils.js";

const root = document.getElementById("wrapper");
let controlsBlock, weatherBlock;

export function createControlsBlock() {
  controlsBlock = document.createElement("div");
  controlsBlock.className = "controls-block";
  root.appendChild(controlsBlock);
  createButtonArea();
  createSearchArea();
}

function createButtonArea() {
  const buttonArea = document.createElement("div");
  buttonArea.className = "button-area";
  controlsBlock.appendChild(buttonArea);

  const imgButton = document.createElement("button");
  imgButton.style.backgroundImage = `url('./assets/reload-svgrepo-com.svg')`;
  imgButton.addEventListener("click", events.onClickImgButton);
  buttonArea.appendChild(imgButton);

  const langButton = document.createElement("button");
  langButton.id = "language";
  langButton.addEventListener("click", events.onClickLangButton);
  langButton.innerText = "UK";
  buttonArea.appendChild(langButton);

  const temperatureButton = document.createElement("button");
  temperatureButton.addEventListener("click", events.onClicktemperatureButton);
  temperatureButton.innerText = "F";
  temperatureButton.id = "unit";
  buttonArea.appendChild(temperatureButton);
}
function createSearchArea() {
  const searchArea = document.createElement("div");
  searchArea.className = "search-area";
  controlsBlock.appendChild(searchArea);

  const searchField = document.createElement("input");
  searchField.type = "search";
  searchField.placeholder = "search by city";
  searchArea.appendChild(searchField);

  const searchButton = document.createElement("button");
  searchButton.addEventListener("click", events.onClickSearchButton);
  searchButton.innerText = "Search";
  searchButton.style.width = "70px";
  searchArea.appendChild(searchButton);
}

export function createTodayWeatherBlock() {
  weatherBlock = document.createElement("div");
  weatherBlock.className = "weather-block";
  root.appendChild(weatherBlock);
  createLocationArea();
  createDateArea();
  createWeatherArea();
}
function createLocationArea() {
  const locationArea = document.createElement("div");
  locationArea.className = "location-area";
  weatherBlock.appendChild(locationArea);

  const locationText = document.createElement("p");
  locationText.id = 'location-text';
  locationArea.appendChild(locationText);
}
function createDateArea() {
  const dateArea = document.createElement("div");
  dateArea.className = "date-area";
  weatherBlock.appendChild(dateArea);

  const date = document.createElement("p");
  date.id = "date";
  dateArea.appendChild(date);
  setDate();

  const time = document.createElement("p");
  time.id = "time";
  dateArea.appendChild(time);
  setTime();
}
function createWeatherArea() {
  const weatherArea = document.createElement("div");
  weatherArea.className = "weather-area";
  weatherBlock.appendChild(weatherArea);

  const temperature = document.createElement("p");
  temperature.id = "temperature";
  weatherArea.appendChild(temperature);
 
 
}