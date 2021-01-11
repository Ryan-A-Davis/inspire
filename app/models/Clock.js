export default class Clock {
  constructor() {
    this.date = new Date()
    this.hours = this.date.getHours()
    this.minutes = this.date.getMinutes()
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
    this.time = `${this.hours}:${this.minutes}`
  }

  get Template() {
    return `
    <p class = "fs-1">${this.time}</p>
    `
  }
}