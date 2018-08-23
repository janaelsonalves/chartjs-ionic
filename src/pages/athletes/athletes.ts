import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AthletesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  roundedData: any;
  athletes: [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartola: CartolaProvider) {
  }

  ionViewDidLoad() {
    this.cartola.getCurrentRoundedData()
      .subscribe(data => {
        this.roundedData = data;
        let athletes = data['atletas'];
        this.athletes = this.getArrayFrom(athletes);
        this.athletes.sort(this.comparePoints);
        console.log(this.roundedData['rodada'])
      })
  }

  getArrayFrom(object): any {
    let array = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        array.push(object[key]);
      }
    }
    return array;
  }

  /**
   * Methods relationed to athletes
   */

  goScoresPage(athlete: any) {
    this.navCtrl.push('AthleteScoresPage', { data: athlete });
  }

  comparePoints(a: any, b: any) {
    return a.pontuacao < b.pontuacao ? 1 : - 1;
  }

  goPage(page: any = "") {
    this.navCtrl.push('AthleteScoresPage');
  }

}
