import { Component, OnInit } from '@angular/core';
import { CarsModel } from './cars.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: CarsModel[];
  constructor(private carService:CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data)=>{
      this.cars = JSON.parse(JSON.stringify(data));
    });
  }

  SingleCar(car){
    var name = car.name;
    this.router.navigate(["cars/singlecar/"+name]);
  }
}
