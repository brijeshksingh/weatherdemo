import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'aa69195559bd4f88d79f9aadeb77a8f6';

  url;
  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  }
  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey)
      .map(res => res.json());

  }

}
