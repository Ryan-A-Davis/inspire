//TODO create methods to retrieve data and save to the State
import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"

class ImageService {

  constructor() {
    console.log("the image service is here")
  }
  async getImage() {
    let res = await api.get('images')
    ProxyState.background = new Image(res.data)
    console.log(ProxyState.background)
  }

}



const imageService = new ImageService();
export default imageService;