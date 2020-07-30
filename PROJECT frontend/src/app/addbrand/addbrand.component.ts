import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { BrandsModel } from '../brands/brands.model';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  constructor(private carService:CarService,private router:Router) { }
  brand = new BrandsModel(null,null);
  ngOnInit(): void {
  }
  AddBrand(){
    this.carService.addBrand(this.brand);
    alert(this.brand.name+' has been added');
    this.router.navigate(['/brands']);
  }
}
