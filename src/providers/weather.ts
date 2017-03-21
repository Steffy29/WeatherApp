import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Weather {
    
  private appId ='7dde7bb476d674e5ea93cd95e0e7e0a8';
  private baseUrl ='http://api.openweathermap.org/data/2.5/';
  
  constructor(public http: Http) {
    console.log('Hello Weather Provider');
  }
  city(city: string, country: string){
    let url = this.baseUrl + 'weather';
    url+= '?q=' +city;
    url+=',' +country;
    url+='&appid=' + this.appId;

    return this.http.get(url);
  }
  zipcode(zipcode: string){
    let url = this.baseUrl + 'weather';
    url+= '?q=' +zipcode;
    url+='&units=metric&APPID=' + this.appId;
    return this.http.get(url);
  }
  forecast(cityId: string , numbOfDays:number){
    let url = this.baseUrl + 'forecast/daily';
    url+= '?id='+cityId;
    url+= '&units=metric&appid=' + this.appId;
    url+= '&cnt=' + numbOfDays;

    return this.http.get(url);
  }
  local(){
    let Obs = Observable.create(observer =>{
  
      Geolocation.getCurrentPosition().then((resp =>{
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
  
        let url = this.baseUrl +'weather';
        url+= `?lat=${lat}&lon=${lng}`;
        url+= '&units=metric&appid=' +this.appId;
    
        return this.http.get(url)
          .subscribe(data => {
              observer.next(data.json());
            },
            err => observer.error(err),
            () => observer.compelte
          )
        }))
      })
      
      return Obs;
    }
}
  