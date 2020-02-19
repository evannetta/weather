import * as page from "./pageElements.js";
export function setTime() {
  let nowTime = new Date(Date.now());
  document.getElementById("time").innerText = `${nowTime.toLocaleTimeString(
    "UA",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  )}`;
}
export function setDate() {
  const language =
    document.getElementById("language").innerText === "EN" ? "UK" : "EN";
  let nowDate = new Date(Date.now());
  document.getElementById("date").innerText = `${nowDate.toLocaleDateString(
    language,
    {
      weekday: "short",
      month: "long",
      day: "numeric"
    }
  )}`;
}
export let currentLocation = {};

export async function setBackground(newLocation) {
  const location = newLocation || "winter";
  const queryUrl = `https://api.unsplash.com/photos/random?query=${location}&client_id=42248cc832eb80710e1b3150c92c4b2599d40fec703a2a686e8b04b85cc2e6c7`;
  const response = await fetch(queryUrl);
  let imageUrl;
  if (response.ok) {
    const data = await response.json();
    imageUrl = await data.urls.regular;
  } else {
    imageUrl = "./assets/winter.jpg";
  }
  document.getElementById(
    "wrapper"
  ).style.backgroundImage = `url('${imageUrl}')`;
}

export function setLocationData() {
  navigator.geolocation.getCurrentPosition(getLocationInfo);
}

async function getLocationInfo(position) {
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=8910bf6ed76646e3a19639fd6f1d0a89`;
  const response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    currentLocation.city = data.results[0].components.city;
    currentLocation.country = data.results[0].components.country;
    document.getElementById(
      "location-text"
    ).innerText = `${currentLocation.city}, ${currentLocation.country}`;
    getWeather(position);
  }
}
export async function getWeather(position) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.latitude}&units=metric&APPID=6a43fc087c918e0f3bb9857171684fde`;
  const response = await fetch(url);
  let newTemperature = "";
  let newSummary = "";
  if (response.ok) {
    let data = await response.json();
    let unit = document.getElementById("unit").innerText;
    unit = unit === "F" ? "C" : "F";
    newTemperature = `${Number(data.main.temp)} °${unit}`;
    newSummary =
      `${data.weather[0].description}\n feels like: ${data.main.feels_like}\n` +
      `wind: ${data.wind.speed}\n humidity: ${data.main.humidity}`;
  }
  document.getElementById("temperature").innerText = newTemperature;
  document.getElementById("summary").innerText = newSummary;
}
export function fahrenheitToCelsius(temperature) {
  return (((temperature - 32) * 5) / 9).toFixed(2);
}
export function celsiusToFahrenheit(temperature) {
  return ((temperature * 9) / 5 + 32).toFixed(2);
}
