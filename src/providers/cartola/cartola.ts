import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  private apiProxy = '/cartola';

  constructor(private http: HttpClient) {
    console.log('Hello CartolaProvider Provider');
  }

  getCurrentRoundedData(){
    return this.http.get(`${this.apiProxy}/atletas/pontuados`);
  }

}
