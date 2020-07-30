import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.css']
})
export class EditbrandComponent implements OnInit {
  brand;
  id;
  constructor(private carService:CarService,private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.carService.getBrand(this.id).subscribe((data)=>{
      this.brand = JSON.parse(JSON.stringify(data));
    })
  }

  EditBrand(){
    this.carService.editBrand(this.brand);
    alert('Your edits have been saved');
    this.router.navigate(['/brands']);
  }
}
