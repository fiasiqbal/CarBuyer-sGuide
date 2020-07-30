import { Component, OnInit } from '@angular/core';
import { BrandsModel } from './brands.model';
import { CarService } from '../car.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: BrandsModel[];
  constructor(private carService: CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getBrands().subscribe((data)=>{
      this.brands = JSON.parse(JSON.stringify(data));
    });
  }

  SingleBrand(brand){
    var name = brand.name;
    this.router.navigate(["brands/singlebrand/"+name]);
  }
}
