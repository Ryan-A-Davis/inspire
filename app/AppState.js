import Todo from "./Models/Todo.js"
import Weather from "./Models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Image from "./Models/Image.js"
import Quote from "./models/Quote.js"
import Clock from "./models/Clock.js"

// TODO you will want to add all your other data to the AppState
class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = []
  /** @type {Weather} */
  weather = null
  /**@type {Image} */
  background = null
  /**@type {Quote} */
  quote = null
  /**@type {Clock} */
  clock = new Clock
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
