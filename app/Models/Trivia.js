import { ProxyState } from "../AppState.js"
export default class Trivia {
  constructor({ category, question, correct_answer, incorrect_answer }) {
    this.category = category
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswer = incorrect_answer
  }

  get Template() {

    return /*html*/`
        <div class="card p-2 value">
            <p> The Category is... ${this.category}</p><br>
            <p> True or False... ${this.question}</p><br>
            <p>-----Scroll Down for Answer-----</p>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="card p-2 value">
            ${this.correctAnswer}
        </div>
       
        `
  }
}
