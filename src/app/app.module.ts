import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WeatherApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WeatherPage } from '../pages/weather/weather-page';
import {Weather} from '../providers/weather';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    WeatherApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage
  ],
  imports: [
    IonicModule.forRoot(WeatherApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WeatherApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Weather]
})
export class AppModule {}
