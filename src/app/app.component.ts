import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planets';

  

  name!: string;
  diameter!: string;
  climate!: string;
  population!: string;

  dataAboutPlanet: any


  acceptedData(data: any){
    
    this.dataAboutPlanet = data

    this.name = data.name;
    this.diameter = data.diameter;
    this.climate = data.climate;
    this.population = data.population;
    
  }
}
