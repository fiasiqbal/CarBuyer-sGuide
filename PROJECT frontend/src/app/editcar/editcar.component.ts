import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {
  brands;
  car;
  id;
  constructor(private carService:CarService,private router:Router,private _Activatedroute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.carService.getCar(this.id).subscribe((data)=>{
      this.car = JSON.parse(JSON.stringify(data));
    })
    this.carService.getBrands().subscribe((item)=>{
      this.brands = JSON.parse(JSON.stringify(item));
    })
  }
  
  EditCar(){
    this.carService.editCar(this.car);
    alert('Your edits have been saved');
    this.router.navigate(['/cars']);
  }
}
