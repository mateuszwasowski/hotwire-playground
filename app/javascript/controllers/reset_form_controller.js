import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ "output" ]

  reset() {
    console.log('connected')
    this.element.reset()
    Rails.enableElement(this.element)
  }
}
