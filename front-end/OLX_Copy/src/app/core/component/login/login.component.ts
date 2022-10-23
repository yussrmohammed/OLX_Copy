import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authservice:AuthService) { }
  loginData= new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]) ,
   password: new FormControl('',[Validators.minLength(8),Validators.required]),

  
  
  })
  logIn(){
    this.authservice.LogIn(this.loginData.value).subscribe(()=>{
      console.log('logged in')

    })
  }
  ngOnInit(): void {
  }

}
