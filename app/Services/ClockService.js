import { ProxyState } from "../AppState.js"
import Clock from "../models/Clock.js"
class ClockService {

  constructor() {
    console.log('this is the clock service')
  }


  getTime() {
    ProxyState.clock = new Clock
  }
}


export const clockService = new ClockService