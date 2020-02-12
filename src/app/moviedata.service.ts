import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private http : HttpClient) { }
  
  getMovies() {

    return this.http.get('https://ghibliapi.herokuapp.com/films/') ;
  }



 
}


