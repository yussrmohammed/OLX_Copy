import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
currentUser:object|any
  constructor(private userservice:UserService, private route:ActivatedRoute) {

    
   }


  ngOnInit(): void {
        const id =this.route.snapshot.paramMap.get('id')
    this.userservice.getOneUser( String(id)).subscribe((res:object|any)=>{
      
      this.currentUser=res
 console.log(this.currentUser)
    })
   

  }
  


}
