import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {
  score: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get('score');
  }

  ionViewDidLoad() {
  }
  goToHome() {
    this.navCtrl.push(HomePage);
  }
}
