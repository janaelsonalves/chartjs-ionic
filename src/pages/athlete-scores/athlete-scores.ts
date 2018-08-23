import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Chart from 'chart.js';

import { CartolaUtils } from '../../utils/cartola-utils';

@IonicPage()
@Component({
  selector: 'page-athlete-scores',
  templateUrl: 'athlete-scores.html',
})
export class AthleteScoresPage {

  athlete: any;
  scoutLabels = [];
  scoutQuantity = [];
  scoutPoints = [];
  scoutColors = [];

  barChart: Chart;
  @ViewChild('barCanvas') barCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athlete = navParams.get('data');
    console.log(this.athlete.scout)
    this.setLabelsAndValuesToScouts();
  }

  ionViewDidLoad() {
    console.log(this.scoutLabels)
    console.log(this.scoutQuantity)
    this.createBarChart();
  }

  setLabelsAndValuesToScouts() {
    let object = this.athlete.scout;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        this.scoutLabels.push(key);
        this.scoutQuantity.push(value);
      }
    }
  }

  getColor(scoutPoints: number) {
    return scoutPoints < 0 ? 'red' : '#3cba9f';
  }

  createBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement.getContext("2d"), {
      type: 'bar',
      data: {
        /* labels: this.weatherChart.dates, */
        labels: this.scoutLabels,
        datasets: [
          {
            label: "Quantidade",
            data: this.scoutQuantity,
            borderColor: "#ffcc00",
            backgroundColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              display: true,
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
