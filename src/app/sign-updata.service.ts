import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from './signUp.model' ;
import { Observable } from 'rxjs';
import { environment } from'../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignUpdataService {
  baseUrl = environment.baseUrl;

  constructor(private http : HttpClient ) { }


  signUp (data: signUp): Observable<signUp> 
  {
    return this.http.post<signUp>(this.baseUrl + '/signups', data ) ;
     
  }

}
