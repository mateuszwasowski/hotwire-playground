import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  reset() {
    console.log('connected')
    this.element.reset()
  }
}
