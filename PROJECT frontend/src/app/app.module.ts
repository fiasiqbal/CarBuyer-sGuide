import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CarsComponent } from './cars/cars.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditbrandsComponent } from './editbrands/editbrands.component';
import { DeletebrandsComponent } from './deletebrands/deletebrands.component';
import { EditcarsComponent } from './editcars/editcars.component';
import { DeletecarsComponent } from './deletecars/deletecars.component';
import { EditcarComponent } from './editcar/editcar.component';
import { EditbrandComponent } from './editbrand/editbrand.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SinglebrandComponent } from './singlebrand/singlebrand.component';
import { SinglecarComponent } from './singlecar/singlecar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BrandsComponent,
    CarsComponent,
    AddbrandComponent,
    AddcarComponent,
    EditbrandsComponent,
    DeletebrandsComponent,
    EditcarsComponent,
    DeletecarsComponent,
    EditcarComponent,
    EditbrandComponent,
    LoginComponent,
    RegisterComponent,
    SinglebrandComponent,
    SinglecarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
