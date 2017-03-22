import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Weather} from '../../providers/weather';

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather-page.html'
})
export class WeatherPage {
  public weatherList =[];
  public localWeather:Object;
  public isActive: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public weather:Weather) {
    this.isActive = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }
  getWeather(city:string , country:string){
    this.weather.city(city,country)
    .map(data => data.json())
    .subscribe(data=> {
      this.weatherList.push(data);
      this.isActive = true;
    })
  }
  getLocalWeather(){
    this.weather.local().subscribe(
      data => {
        this.localWeather = data;
        this.isActive = true;
      }
    )
  }
  searchWeather(search) {
    this.weather.zipcode(search)
    .map(data => data.json())
    .subscribe(data=> {
      console.log(data);
      this.weatherList.push(data);
      this.localWeather = data;
      this.isActive = true;
    })
  }
}
