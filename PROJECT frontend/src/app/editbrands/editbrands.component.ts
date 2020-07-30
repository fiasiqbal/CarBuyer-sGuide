import { Component, OnInit } from '@angular/core';
import { BrandsModel } from '../brands/brands.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbrands',
  templateUrl: './editbrands.component.html',
  styleUrls: ['./editbrands.component.css']
})
export class EditbrandsComponent implements OnInit {
  brands: BrandsModel[];
  constructor(private carService:CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getBrands().subscribe((data)=>{
      this.brands = JSON.parse(JSON.stringify(data));
    });
  }
  edit(brand){
    var id = brand._id;
    this.router.navigate(["brands/edit/"+id]);
  }
}
