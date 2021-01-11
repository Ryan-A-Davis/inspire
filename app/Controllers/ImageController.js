import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";
import Image from "../models/Image.js"


//TODO Create methods for constructor, and rendering the image to the page
function _setImage() {
  document.body.style.backgroundImage = `url('${ProxyState.background.url}')`
  // document.body.style.backgroundImage = "url(https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mzgz8arzYo1st5lhmo1_1280.jpg)"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"

}

//(you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)


export default class ImageController {
  constructor() {
    ProxyState.on("background", _setImage)
    this.getImage()
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}