import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodImagesComponent } from './food-images/food-images.component';
import { FoodIndividualComponent } from './food-individual/food-individual.component';

// const routes: Routes = [];
const appRoutes: Routes = [
  {
    path: "food",
    component: FoodImagesComponent
  },
  {
    path: "",
    redirectTo: "/food",
    pathMatch: "full"
  },
  {
    path: "item",
    component: FoodIndividualComponent
  },
  { path:'**' ,
  redirectTo: '/login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
