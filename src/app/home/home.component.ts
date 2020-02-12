import { Component, OnInit, Input, PipeTransform } from '@angular/core';
import {MoviedataService} from  '../moviedata.service' ;
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
 

export class HomeComponent implements OnInit 
{
   users$: any=[] ; 
  constructor(private data : MoviedataService)  { }
  ngOnInit() 
  {
     this.data.getMovies().subscribe(
         data => this.users$=data 
    );

  }

}
