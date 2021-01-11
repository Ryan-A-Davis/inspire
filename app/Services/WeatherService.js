import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
  toggle() {
    let weather = document.getElementById('weather-display')
    if (weather.innerText === `${ProxyState.weather.city}- ${ProxyState.weather.description}: ${ProxyState.weather.fahrenheit} °F`) {
      weather.innerText = `${ProxyState.weather.city}- ${ProxyState.weather.description}: ${ProxyState.weather.celsius} °C`
    } else if (weather.innerText === `${ProxyState.weather.city}- ${ProxyState.weather.description}: ${ProxyState.weather.celsius} °C`) {
      weather.innerText = `${ProxyState.weather.city}- ${ProxyState.weather.description}: ${ProxyState.weather.fahrenheit} °F`
    }
  }
}

const weatherService = new WeatherService();
export default weatherService;