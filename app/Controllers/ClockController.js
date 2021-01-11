import { ProxyState } from "../AppState.js"
import { clockService } from "../Services/ClockService.js"

function _drawClock() {
  document.getElementById('clock').innerHTML = ProxyState.clock.Template
}

export default class ClockController {
  constructor() {
    console.log("the clock controller")
    setInterval(this.getTime, 1000);
  }

  getTime() {
    clockService.getTime()
    _drawClock()
  }


}