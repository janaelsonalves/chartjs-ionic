import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  private api = '/weather';

  constructor(private http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getDailyForecast(): any {
    return this.http.get(`${this.api}/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22`);
  }
}
