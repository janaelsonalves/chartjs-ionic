import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AthletesScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletes-scores',
  templateUrl: 'athletes-scores.html',
})
export class AthletesScoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartola: CartolaProvider) {
  }

  ionViewDidLoad() {
    this.cartola.getCurrentRoundedData()
      .subscribe(result => {
        console.log(result);        
      })
    console.log('ionViewDidLoad AthletesScoresPage');
  }

}
