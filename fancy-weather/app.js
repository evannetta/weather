import * as page from "./pageElements.js";
import {setTime, setLocationData, setBackground, getWeather} from "./utils.js";

(function initPage() {
  setBackground("winter");
  page.createControlsBlock();
  page.createTodayWeatherBlock();
  setLocationData();
  setInterval(setTime, 60000);
})();


