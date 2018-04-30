import { NgModule } from '@angular/core';
import { CentralWeatherCardComponent } from './central-weather-card/central-weather-card';
import { HourWeatherCardComponent } from './hour-weather-card/hour-weather-card';
import { DayWeatherCardComponent } from './day-weather-card/day-weather-card';
@NgModule({
	declarations: [HourWeatherCardComponent,
    DayWeatherCardComponent],//CentralWeatherCardComponent],
	imports: [],
	exports: [HourWeatherCardComponent,
    DayWeatherCardComponent],//CentralWeatherCardComponent]
})
export class ComponentsModule {}
