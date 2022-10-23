import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';

import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ConfirmPopupModule,
    DialogModule
    
   
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ConfirmPopupModule,
    DialogModule
    
  ]
})
export class PrimengModule { }
