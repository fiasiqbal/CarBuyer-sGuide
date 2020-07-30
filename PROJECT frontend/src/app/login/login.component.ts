import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService:UsersService,private router: Router) { }
  user = new UserModel(null,null);
  ngOnInit(): void {
  }

  login(){
    this.usersService.login(this.user)
    .subscribe((error)=>{
      console.log("Error: "+(error));
    },
    (data)=>{
      console.log('Data: '+(data.status));
      if (data.status==401) {
        alert("Wrong email/password");
      } else if (data.status==200) {
        this.router.navigate(['/']);
      }
    });
  }

  pass() {
    if (this.user.password.length < 8) {
      alert("Enter valid password");
      return false;
    } else {
      return this.login();
    }
  }

  email() {
    let regex1 = /^\w[\w\.-]+\w@[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]\.[a-z]{2,3}(\.[a-z]{2,3})?$/;

    if (regex1.test(this.user.email)) {
      return this.pass();
    } else {
      alert("Enter valid email address");
      return false;
    }
  }

  validateForm() {
    if (this.user.email == "" || this.user.password == "") {
      alert("Empty field");
      return false;
    } else {
      return this.email();
    }
  }
}
