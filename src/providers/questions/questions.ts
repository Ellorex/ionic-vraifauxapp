import { Injectable } from '@angular/core';
import { Question } from './../../model/Question';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionsProvider {
      questions: Question[] = [
      new Question (1, "Le deuxième nom de la Reine d'Angleterre est Vanessa", false, 1, "people", "Ses deuxièmes prénoms sont Alexandra et Mary", "Ses deuxièmes prénoms sont Alexandra et Mary"),
      new Question (2, "Adrien Rabiot a passé un an au Séville FC", false, 2, "sports", "Il n'a jamais joué pour un club espagnol", "Il n'a jamais joué pour un club espagnol"),
      new Question (3, "Les Américains sont les plus gros consommateurs de pizza", false, 2, "à table", "Les Norvégiens sont les plus gros consommateurs de pizzas au monde, suivis de près par les Américains", "Les Norvégiens sont les plus gros consommateurs de pizzas au monde, suivis de près par les Américains"),
  ];

  constructor() {
   
  }
  public getQuestions() {
    return this.questions;
  }
}
