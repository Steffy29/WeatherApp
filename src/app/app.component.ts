import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
  templateUrl: 'app.html'
})
export class WeatherApp {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {
    // set default language
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
