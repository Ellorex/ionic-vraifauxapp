import { OptionsPage } from './../options/options';
import { QuestionPage } from './../question/question';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) {}

  goToQuestion() {
    this.navCtrl.push(QuestionPage);
  }

  goToOptions() {
    this.navCtrl.push(OptionsPage);
  }
}
