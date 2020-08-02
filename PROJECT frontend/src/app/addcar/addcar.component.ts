import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarsModel } from '../cars/cars.model';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private carService:CarService,private router:Router) { }
  brands;
  car = new CarsModel(null,null,null,null);
  ngOnInit(): void {
    this.carService.getBrands().subscribe((data)=>{
      this.brands = JSON.parse(JSON.stringify(data));
    });
  }
  AddCar(){
    this.carService.addCar(this.car);
    alert(this.car.name+' has been added');
    this.router.navigate(['/cars']);
  }
}
