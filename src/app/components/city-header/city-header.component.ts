import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-city-header',
    templateUrl: './city-header.component.html',
    styleUrls: ['./city-header.component.css'],
})
export class CityHeaderComponent implements OnInit {
    constructor() {}

    @Input() selectCity: (city: String) => void = () => {};
    @Input() selectedCity: String = '';
    @Input() cities: Array<string> = [];
    selectOption(event: any) {
        const city: String = event.value;
        this.selectCity(city);
    }

    ngOnInit(): void {}
}
