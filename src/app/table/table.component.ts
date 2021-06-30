import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    public planetService: PlanetService,
    public httpClient: HttpClient,
    
    ) { }



    

  info: any

  isShown = false;
 
  residentsArray: any 

 
  @Input() name!: string;
  @Input() diameter!: string;
  @Input() climate!: string;
  @Input() population!: string;
  @Input() dataAboutPlanet!: any

  ngOnInit(): void {
  }

  



  showListOfResidents(){

    if(this.dataAboutPlanet.residents.length != 0){
      this.isShown = !this.isShown
      console.log(this.dataAboutPlanet.residents.length)
      let tempArr: { name: any; height: any; birthday: any; }[] = [];
      for(let i = 0; i < this.dataAboutPlanet.residents.length; i++){
  
        this.httpClient.get(this.dataAboutPlanet.residents[i]).subscribe(
          (data) => {
            this.info = data
            tempArr.push({
              name: this.info.name,
              height: this.info.height,
              birthday: this.info.birth_year
            })
  
          }
        )
      }
      this.residentsArray = tempArr;
      console.log(this.residentsArray)
    }else{
      alert("There is nobody to live here")
    }

    

   

  }

  closeModal(){
    this.isShown = !this.isShown
  }

}
