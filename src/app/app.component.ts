import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'weather-app';
    week: Array<Object> = [];
    today: Object = {};

    cities: any = {
        stockholm: 'latitude=59.3328&longitude=18.0645',
        berlin: 'latitude=52.5235&longitude=13.4115',
        washington: 'latitude=38.8921&longitude=-77.0241',
        london: 'latitude=51.5002&longitude=-0.1262',
        paris: 'latitude=48.8567&longitude=2.3510',
        madrid: 'latitude=40.4167&longitude=-3.7033',
    };
    selectedCity: any = 'stockholm';
    cityNames = Object.keys(this.cities);

    selectCity = async (city: String): Promise<void> => {
        this.selectedCity = city;
        const weather = await this.getWeatherData();
        this.populateWeatherData(weather.daily);
    };

    async ngOnInit() {
        const weather = await this.getWeatherData();
        this.populateWeatherData(weather.daily);
    }

    async getWeatherData() {
        const rawData: any = await fetch(
            `https://api.open-meteo.com/v1/forecast?${
                this.cities[this.selectedCity]
            }&daily=weathercode,temperature_2m_max&timezone=Europe%2FBerlin`
        );
        const data = await rawData.json();
        return data;
    }

    populateWeatherData(weather: any) {
        this.today = {
            day: 'today',
            weather: weather.weathercode[0],
            temperature: weather.temperature_2m_max[0],
        };

        this.week = [];
        // const week: Array<Object> = [];
        for (let i = 1; i < 7; i++) {
            this.week.push({
                day: weather.time[i],
                temperature: weather.temperature_2m_max[i],
                weather: weather.weathercode[i],
            });
        }
    }
}
