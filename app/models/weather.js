export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.floor(this.kelvin - 273.15)
    this.fahrenheit = Math.floor((this.celsius * 9 / 5) + 32)
    this.description = data.weather[0].main
  }

  get Template() {
    return `
    <p class ="font-weight-bold" id="weather-display">${this.city}- ${this.description}: ${this.fahrenheit} °F</p><div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onclick="app.weatherController.toggle()">
</div>
    `
  }

}