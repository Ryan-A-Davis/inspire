export default class Quote {
  constructor(data) {
    console.log("this is the quote model")
    this.body = data.quote.body
    this.author = data.quote.author
  }


  get Template() {
    return `
    <p>${this.body}</p>
    <span id="author" class="d-none">${this.author}</span>
    `
  }

}