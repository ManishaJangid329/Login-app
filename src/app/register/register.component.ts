import { Component, OnInit } from '@angular/core';
import  { SignUpdataService } from '../sign-updata.service' ;
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private SignUpService : SignUpdataService )  { }
  ngOnInit() 
  {   
  }
  SignUpData:any={
    "Email" : "manisha@surewaves.com",
    "Password": "Manisha#12345678",
    "ConfirmedPassword": "Manisha#12345678"
   } ; 



  onSubmit(form :NgForm)
  {  
    
    // console.log(form.value.email) ;
    // console.log(form.value.password) ;
    // console.log(form.value.confirmPassword) ;

    this.SignUpService
        .signUp(this.SignUpData)
        .subscribe(data => console.log(data));
  }
  

}
