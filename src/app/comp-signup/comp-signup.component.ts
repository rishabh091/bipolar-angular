import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user/service-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-signup',
  templateUrl: './comp-signup.component.html',
  styleUrls: ['./comp-signup.component.css']
})
export class CompSignupComponent implements OnInit {

  aptNo: Number;
  name: String;
  password: String;

  constructor(private userService: ServiceUserService, private router: Router) { }

  ngOnInit() {
    this.redirect();
  }

  //redirect to main page if already logged in
  redirect() {
    const result = this.userService.checkLogin();
    if(result) {
      this.router.navigate(['book']);
    }
  }

  enterApt(event) {
    this.aptNo = event.target.value;
  }
  enterName(event) {
    this.name = event.target.value;
  }
  enterPassword(event) {
    this.password = event.target.value;
  }

  signup() {
    if(this.aptNo <= 0) {
      alert('Apartment number cannot be negative or zero');
      return;
    }

    this.userService.save(this.aptNo, this.name, this.password)
    .then((res) => {
      if(res) {
        alert('Data added');
      }
      else {
        alert('Try again');
      }
    })
    .catch((err) => {
      console.log(err);
      alert('Please fill data completely');
    }) ;
  }

}
