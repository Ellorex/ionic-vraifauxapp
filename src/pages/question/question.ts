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
  questions:Question [] = this.QuestionsProvider.questions;
  question: string;
  current_question: any;
  answer_img: string;
  answer_text: string;

  constructor(
    public navCtrl: NavController, 
    private QuestionsProvider: QuestionsProvider
  ){}

  displayOneQuestion() {
    let numRandom = Math.floor(Math.random()*this.questions.length);
    let questionRandom = this.questions[numRandom].getTitle();
    this.current_question = this.questions[numRandom];
    return questionRandom;
  }

  ionViewWillEnter(){
       this.question = this.displayOneQuestion();
  }
  ionViewDidLoad(questions){
    this.QuestionsProvider.getQuestions();
    
    questions = this.QuestionsProvider.getQuestions();
  }

  checkValue(value: boolean) {
    if(this.current_question.getValue() ==  value) {
      this.answer_img = "/assets/pictos/vrai.png";
      this.answer_text = "Bonne réponse";
    } else {
      this.answer_text = "Mauvaise réponse";
      this.answer_img = "/assets/pictos/wrong.png";
    }
  }

}
