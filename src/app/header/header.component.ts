import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() featureSelector = new EventEmitter<string>() ;
  constructor() { }

  ngOnInit() {
  }

  select(feature :string ){

    this.featureSelector.emit(feature) ;
  }

}
