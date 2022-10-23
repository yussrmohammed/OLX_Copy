import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authservice:AuthService, private router:Router){ }
  loginData= new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]) ,
   password: new FormControl('',[Validators.minLength(8),Validators.required]),

  
  
  })
  logIn(){
    this.authservice.LogIn(this.loginData.value).subscribe((res)=>{
      const ID =res.body
      console.log('logged in',ID)
      
      this.router.navigate(['core/profile',ID])

    })
  }
  ngOnInit(): void {
  }

}
