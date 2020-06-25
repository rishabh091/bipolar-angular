import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user/service-user.service';

@Component({
  selector: 'app-comp-signup',
  templateUrl: './comp-signup.component.html',
  styleUrls: ['./comp-signup.component.css']
})
export class CompSignupComponent implements OnInit {

  aptNo: Number;
  name: String;
  password: String;

  constructor(private userService: ServiceUserService) { }

  ngOnInit() {
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
      alert('Please fill data completely');
    }) ;
  }

}
