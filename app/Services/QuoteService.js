import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Quote from "../models/Quote.js"

//TODO create methods to retrieve data and update the State
class QuoteService {
  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }

  showAuthor() {
    document.getElementById('author').classList.remove('d-none')
  }
  hideAuthor() {
    document.getElementById('author').classList.add('d-none')
  }
}


export const quoteService = new QuoteService();