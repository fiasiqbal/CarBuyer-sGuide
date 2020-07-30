import { Component, OnInit } from '@angular/core';
import { BrandsModel } from '../brands/brands.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebrands',
  templateUrl: './deletebrands.component.html',
  styleUrls: ['./deletebrands.component.css']
})
export class DeletebrandsComponent implements OnInit {
  brands: BrandsModel[];
  constructor(private carService:CarService,private router:Router) { }

  ngOnInit(): void {
    this.carService.getBrands().subscribe((data)=>{
      this.brands = JSON.parse(JSON.stringify(data));
    });
  }
  confirm(brand){
    if (confirm("Are you sure you want to delete "+brand.name+"?")) {
      this.delete(brand);
    }
  }
  delete(brand){
    this.carService.deleteBrand(brand._id)
    .subscribe(res=>{
      this.brands.splice(this.brands.indexOf(brand),1);
    })
    alert(brand.name+" has been deleted successfully");
    this.router.navigate(['/brands']);
  }
}