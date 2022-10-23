import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

import { CoreComponent } from './core.component';

const routes: Routes = [{ path: '', component: CoreComponent },
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'profile/:id', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
