import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


export const DefaultRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DefaultRoutes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
