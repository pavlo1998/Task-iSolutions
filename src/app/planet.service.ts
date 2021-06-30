import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(public httpClient: HttpClient) { }

  public planets = []



  getPlanets(){
    return this.httpClient.get("https://swapi.dev/api/planets")
  }

 


}
