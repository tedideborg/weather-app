import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityHeaderComponent } from './components/city-header/city-header.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
    declarations: [AppComponent, CityHeaderComponent, WeatherComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
