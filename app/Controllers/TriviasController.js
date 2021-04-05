import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";


//Private
function _draw() {
  let trivias = ProxyState.trivias;
  let template = ''
  trivias.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = /*html*/`  
  <div className="card-columns trivias">
    <button class="btn btn-secondary m-5" onclick= "app.triviasController.getTrivia('https://opentdb.com/api.php?amount=1&type=boolean')">Click to Generate Trivia Question</button>
      ${template}
  </div>
  `
}

//Public
export default class TriviasController {

  constructor() {
    ProxyState.on("trivias", _draw);


    triviasService.getTrivia()
  }

  getTrivia(url) {
    triviasService.getTrivia(url)
  }

}