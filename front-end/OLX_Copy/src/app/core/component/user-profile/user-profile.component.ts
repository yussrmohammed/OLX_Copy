import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
currentUser:object|any
 
  constructor(private userservice:UserService, private route:ActivatedRoute,private router:Router,  private confirmationservice:ConfirmationService,
    private  messageService:MessageService
    ) {

    
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

  


}
