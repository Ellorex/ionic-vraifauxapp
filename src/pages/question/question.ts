import { ScoresPage } from './../scores/scores';
import { QuestionsProvider } from './../../providers/questions/questions';
import { Question } from './../../model/Question';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  questions:Question [] = [];
  question: string;
  current_question: any;
  answer_img: string;
  answer_text: string;
  answer_desc: string;
  display_content: boolean = true;
  score: number = 0;

  constructor(
    public navCtrl: NavController, 
    private QuestionsProvider: QuestionsProvider
  ){}

  displayOneQuestion() {
    this.answer_img = "";
    this.answer_text = "";
    this.answer_desc= "";
    let numRandom = Math.floor(Math.random()*this.questions.length);
    let questionRandom = this.questions[numRandom].getTitle();
    this.current_question = this.questions[numRandom];

    this.questions.splice(numRandom, 1);

    return this.question = questionRandom;
  }

  ionViewDidLoad(){
    this.questions = this.QuestionsProvider.getQuestions();
    this.displayOneQuestion();

  }

  checkValue(value: boolean) {
    if(this.current_question.getValue() ===  value) {
      this.answer_img = "/assets/pictos/vrai.png";
      this.answer_text = "Bonne réponse";
      this.answer_desc = this.current_question.getDescCorrect();
      this.score += 1;
      this.display_content = false;
    
    } else {
      this.answer_text = "Mauvaise réponse";
      this.answer_img = "/assets/pictos/wrong.png";
      this.answer_desc = this.current_question.getDescNotCorrect();
      this.display_content = false;
    }
  }

  nextQuestion() {
    this.display_content = true;
    this.displayOneQuestion();
  }

  goToScores() {
    this.navCtrl.push(ScoresPage, {
      score: this.score
    });
  }
}
