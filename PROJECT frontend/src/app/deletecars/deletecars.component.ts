import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../cars/cars.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletecars',
  templateUrl: './deletecars.component.html',
  styleUrls: ['./deletecars.component.css']
})
export class DeletecarsComponent implements OnInit {
  cars: CarsModel[];
  constructor(private carService: CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data)=>{
      this.cars = JSON.parse(JSON.stringify(data));
    });
  }
  confirm(car){
    if (confirm("Are you sure you want to delete "+car.name+"?")) {
      this.delete(car);
    }
  }
  delete(car){
    this.carService.deleteCar(car._id)
    .subscribe(res=>{
      this.cars.splice(this.cars.indexOf(car),1);
    })
    alert(car.name+" has been deleted successfully");
    this.router.navigate(['/cars']);
  }
}
