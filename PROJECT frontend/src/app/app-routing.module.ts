import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CarsComponent } from './cars/cars.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditbrandsComponent } from './editbrands/editbrands.component';
import { EditcarsComponent } from './editcars/editcars.component';
import { DeletebrandsComponent } from './deletebrands/deletebrands.component';
import { DeletecarsComponent } from './deletecars/deletecars.component';
import { EditcarComponent } from './editcar/editcar.component';
import { EditbrandComponent } from './editbrand/editbrand.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SinglebrandComponent } from './singlebrand/singlebrand.component';
import { SinglecarComponent } from './singlecar/singlecar.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"brands",component:BrandsComponent},
  {path:"brands/singlebrand/:name",component:SinglebrandComponent},
  {path:"brands/add",component:AddbrandComponent},
  {path:"brands/edit",component:EditbrandsComponent},
  {path:"brands/edit/:id",component:EditbrandComponent},
  {path:"brands/delete",component:DeletebrandsComponent},
  {path:"cars",component:CarsComponent},
  {path:"cars/singlecar/:name",component:SinglecarComponent},
  {path:"cars/add",component:AddcarComponent},
  {path:"cars/edit",component:EditcarsComponent},
  {path:"cars/edit/:id",component:EditcarComponent},
  {path:"cars/delete",component:DeletecarsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
