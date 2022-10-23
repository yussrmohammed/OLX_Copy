import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    CoreComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    
    
  ],
  providers:[
    AuthService,
    UserService,
    ConfirmationService,
    MessageService
  ]
})
export class CoreModule { }
