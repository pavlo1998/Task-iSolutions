import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-list-of-planets',
  templateUrl: './list-of-planets.component.html',
  styleUrls: ['./list-of-planets.component.css']
})
export class ListOfPlanetsComponent implements OnInit {

  constructor(public planetService: PlanetService) { }

  allData: any

  planets: any

  isShown!: boolean

  @Output() dataForTable: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe(
      (data) => {
        this.allData = data
        this.planets = this.allData.results
        console.log(this.planets)
      }
      
    )
   
  }

  

  onChange(event: any){   
    
    let index = this.planets.findIndex((planet: { name: any; }) => planet.name == event.target.value)

    console.log(this.planets[index])

    this.dataForTable.emit(this.planets[index])
  }

}
