import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Chart from 'chart.js';

import { WeatherProvider } from '../../providers/weather/weather';
import { WeatherChart } from '../../models/weather-chart.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  lineChart: Chart;
  weatherChart: WeatherChart;
  barChart: Chart;

  @ViewChild('barCanvas') barCanvas: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weather: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.weather.getDailyForecast()
      .subscribe(res => {

        this.weatherChart = new WeatherChart()

        this.weatherChart.maxTemps = res['list'].map(res => res.main.temp_max);
        this.weatherChart.minTemps = res['list'].map(res => res.main.temp_min);

        let numericDates = res['list'].map(res => res.dt);

        this.weatherChart.dates = numericDates.map(date => {
          return new Date(date * 1000).toLocaleTimeString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        });

        console.log(this.weatherChart.dates);

        setTimeout(() => {
          this.createLineChart();
          this.createBarChart();
        }, 200)
      });
  }

  createLineChart() {
    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: this.weatherChart.dates,
        datasets: [
          {
            label: "Max Temperature",
            data: this.weatherChart.maxTemps,
            borderColor: "#3cba9f",
            fill: false
          },
          {
            label: "Min Temperature",
            data: this.weatherChart.minTemps,
            borderColor: "#ffcc00",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              display: true
            }
          }]
        }
      }
    });
  }

  createBarChart() {

    let scoutLabels = scouts.map(scout => scout.type);
    let scoutQuantity = scouts.map(scout => scout.quantity);
    let scoutPoints = scouts.map(scout => scout.total);


    this.barChart = new Chart(this.barCanvas.nativeElement.getContext("2d"), {
      type: 'bar',
      data: {
        /* labels: this.weatherChart.dates, */
        labels: scoutLabels,
        datasets: [
          {
            /*label: "Max Temperature",
             data: this.weatherChart.maxTemps, */
            label: "Quantidade",
            data: scoutQuantity,
            borderColor: "#3cba9f",
            backgroundColor: "#3cba9f",
            fill: false
          },
          {
            /* label: "Min Temperature",
            data: this.weatherChart.minTemps, */
            label: "Pontuação",
            data: scoutPoints,
            borderColor: "#ffcc00",
            backgroundColor: "ffcc00",
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
              display: true
            }
          }]
        }
      }
    });
  }

  createChart(context, type, data, options) {
    return new Chart(context, {
      type: type,
      data: data,
      options: options
    })
  }
}

export const scouts: any[] = [
  {
    type: 'G',
    description: 'Gol',
    quantity: 10,
    total: 80,
  },
  {
    type: 'A',
    description: 'Assistência',
    quantity: 5,
    total: 50,
  },
  {
    type: 'RB',
    description: 'Roubada de Bolas',
    quantity: 10,
    total: 15,
  },
  {
    type: 'FS',
    description: 'Falta sofrida',
    quantity: 10,
    total: 3,
  },
  {
    type: 'I',
    description: 'Impedimento',
    quantity: 5,
    total: 5,
  }
]