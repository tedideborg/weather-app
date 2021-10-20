import { Component, OnInit, Output, Input } from '@angular/core';
import {
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faSun,
    faBolt,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
    faCloudShowersHeavy: IconDefinition = faCloudShowersHeavy;

    @Input() size: string = 'small';
    @Input() data: any = {};
    dayName: string = '';
    weatherIcon: IconDefinition = faCloudShowersHeavy;

    weatherNumbers: any = {
        0: faSun,
        1: faCloudSun,
        2: faCloudSun,
        3: faCloudSun,
        61: faCloudRain,
        63: faCloudRain,
        65: faCloudRain,
        80: faCloudShowersHeavy,
        81: faCloudShowersHeavy,
        82: faCloudShowersHeavy,
        95: faBolt,
        96: faBolt,
        99: faBolt,
    };

    constructor() {}

    ngOnInit(): void {
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const d = new Date(this.data.day);
        this.dayName = days[d.getDay()];
        this.weatherIcon =
            this.weatherNumbers[this.data.weather] || faCloudShowersHeavy;
    }
}
