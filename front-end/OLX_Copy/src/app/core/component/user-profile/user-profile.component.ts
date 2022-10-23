import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {ConfirmationService} from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
currentUser:object|any
userData= new FormGroup({
  name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
  email: new FormControl('',[Validators.required,Validators.email]) ,
  phone: new FormControl(0,[Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$"),Validators.required]),

  gender: new FormControl('',Validators.required),
  oldpassword: new FormControl('',[Validators.minLength(8),Validators.required]),
  newpassword: new FormControl('',[Validators.minLength(8),Validators.required]),
  role: new FormControl('',Validators.required),

    
  
  
  })
  constructor(private userservice:UserService, private route:ActivatedRoute,private router:Router,  private confirmationservice:ConfirmationService,
    
    ) {

    
   }
   display: boolean = false;

   showDialog() {
       this.display = true;


    
        this.userData.setValue({
          name: this.currentUser.name,
          email: this.currentUser.email,
          phone: this.currentUser.phone,
          gender: this.currentUser.gender,
          oldpassword: null,
          newpassword: null,
          role:this.currentUser.role
        })
       
   }

  ngOnInit(): void {
        const id =this.route.snapshot.paramMap.get('id')
    this.userservice.getOneUser( String(id)).subscribe((res:object|any)=>{
      
      this.currentUser=res
 console.log(this.currentUser)
    })
   

  }
  confirm(event: Event) {
    const id =this.route.snapshot.paramMap.get('id')

    this.confirmationservice.confirm({
        target: event.target as EventTarget, 
        message: 'Are you sure ?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          

            this.userservice.deleteUser(String(id)).subscribe((res)=>{
              console.log('deleted', res)
              this.router.navigate(['core/login'])

            })
        },
        reject: () => {

        }
    });
}
updateUser(){
  const id =this.route.snapshot.paramMap.get('id')

  this.userservice.updateUser(this.userData.value, String(id)).subscribe((res=>{
    window.location.reload()
  }))


}

  


}
