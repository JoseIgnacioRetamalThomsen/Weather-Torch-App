import { NgModule } from '@angular/core';
import { CentralWeatherCardComponent } from './central-weather-card/central-weather-card';
import { HourWeatherCardComponent } from './hour-weather-card/hour-weather-card';
@NgModule({
	declarations: [HourWeatherCardComponent],//CentralWeatherCardComponent],
	imports: [],
	exports: [HourWeatherCardComponent],//CentralWeatherCardComponent]
})
export class ComponentsModule {}
