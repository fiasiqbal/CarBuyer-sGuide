import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../cars/cars.model';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlecar',
  templateUrl: './singlecar.component.html',
  styleUrls: ['./singlecar.component.css']
})
export class SinglecarComponent implements OnInit {
  car:CarsModel;
  name;
  constructor(private carService:CarService,private _Activatedroute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.name=this._Activatedroute.snapshot.paramMap.get("name");
    this.carService.Car(this.name).subscribe((data)=>{
      this.car = JSON.parse(JSON.stringify(data));
    });
  }

}
