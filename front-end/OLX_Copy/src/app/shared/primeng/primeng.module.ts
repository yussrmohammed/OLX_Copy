import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';

import {ConfirmPopupModule} from 'primeng/confirmpopup';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ConfirmPopupModule
    
   
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ConfirmPopupModule
    
  ]
})
export class PrimengModule { }
