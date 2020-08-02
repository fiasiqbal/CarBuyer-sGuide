import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../cars/cars.model';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlebrand',
  templateUrl: './singlebrand.component.html',
  styleUrls: ['./singlebrand.component.css']
})
export class SinglebrandComponent implements OnInit {
  cars: CarsModel[];
  brand;
  constructor(private carService:CarService,private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.brand=this._Activatedroute.snapshot.paramMap.get("name");
    this.carService.getBrandCars(this.brand).subscribe((data)=>{
      this.cars = JSON.parse(JSON.stringify(data));
    });
  }

  SingleCar(car){
    var name = car.name;
    this.router.navigate(["cars/singlecar/"+name]);
  }
}
