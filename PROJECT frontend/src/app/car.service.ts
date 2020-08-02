import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private http:HttpClient ) { }
  getBrands(){
    return this.http.get("http://localhost:3000/brands");
  }
  getBrand(id){
    return this.http.get("http://localhost:3000/brands/"+id);
  }
  addBrand(item){
    return this.http.post("http://localhost:3000/brands/insert",{"brand":item})
    .subscribe((data)=>{console.log(data)});
  }
  editBrand(item){
    return this.http.put("http://localhost:3000/brands/edit",{"brand":item})
    .subscribe(data=>{console.log(data)});
  }
  deleteBrand(id){
    return this.http.delete("http://localhost:3000/brands/delete/"+id);
  }
  getCars(){
    return this.http.get("http://localhost:3000/cars");
  }
  getCar(id){
    return this.http.get("http://localhost:3000/cars/"+id);
  }
  Car(name){
    return this.http.get("http://localhost:3000/car/"+name);
  }
  addCar(item){
    return this.http.post("http://localhost:3000/cars/insert",{"car":item})
    .subscribe((data)=>{console.log(data)});
  }
  editCar(item){
    return this.http.put("http://localhost:3000/cars/edit",{"car":item})
    .subscribe(data=>{console.log(data)});
  }
  deleteCar(id){
    return this.http.delete("http://localhost:3000/cars/delete/"+id);
  }
  getBrandCars(brand){
    return this.http.get("http://localhost:3000/brandcars/"+brand);
  }
}