import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "../Services/AxiosService.js";

class TriviasService {
  async getTrivia(url = "trivias") {
    let response = await api.get(url)

    console.log(response.data.results)
    let trivias = response.data.results.map(t => new Trivia(t))
    ProxyState.trivias = trivias
    // let allChoices = ''
    // allChoices = response.data.results.filter(choices => )
    // console.log(allChoices)

  }

  // async getChoices(url = "trivias") {
  //   let response = await api.get(url)
  //   console.log(response.data.results.correct_answer, response.data.results.incorrect_answer)
  //   let allChoices = response.data.results.filter(choices => new Trivia(incorrect_answer && correct_answer))
  //   ProxyState.allChoices = allChoices
  // }
}

export const triviasService = new TriviasService();

