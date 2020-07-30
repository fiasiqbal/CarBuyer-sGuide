import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../cars/cars.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.css']
})
export class EditcarsComponent implements OnInit {
  cars: CarsModel[];
  constructor(private carService: CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data)=>{
      this.cars = JSON.parse(JSON.stringify(data));
    });
  }
  edit(car){
    var id = car._id;
    this.router.navigate(["cars/edit/"+id]);
  }
}
