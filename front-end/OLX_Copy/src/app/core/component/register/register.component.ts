import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  registerData= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]) ,
   password: new FormControl('',[Validators.minLength(8),Validators.required]),
   gender: new FormControl('', Validators.required),
   role: new FormControl('',Validators.required),
   phone:new FormControl('', Validators.required),


  
  
  })
  register(){
    this.authservice.register(this.registerData.value).subscribe((res)=>{
      console.log(res)
    })

  }

  ngOnInit(): void {
  }

}
