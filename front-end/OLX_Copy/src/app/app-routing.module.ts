import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },




 

{ path: 'core', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }




 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
