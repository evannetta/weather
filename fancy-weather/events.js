import { setDate, setBackground, fahrenheitToCelsius, celsiusToFahrenheit} from "./utils.js";
export function onClickImgButton() {
  setBackground();
}
export function onClicktemperatureButton(event) {
  const unit = event.target.innerText;
  event.target.innerText = unit === "F" ? "C" : "F";
  const temperature = document.getElementById('temperature');
  if(unit === 'C'){
    temperature.innerText = fahrenheitToCelsius(parseInt(temperature.innerText)) + ` °${unit}`;
  }
  if(unit === 'F'){
    temperature.innerText = celsiusToFahrenheit(parseInt(temperature.innerText)) + ` °${unit}`;
  }
  
  
}
export function onClickLangButton() {
  const unit = event.target.innerText;
  event.target.innerText = unit === "EN" ? "UK" : "EN";
  setDate();
}
export function onClickSearchButton() {}
