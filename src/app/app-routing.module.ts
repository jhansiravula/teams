
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/teams',
    pathMatch: 'full'
  },
  {
    path:'teams',
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
