import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user/service-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css']
})
export class CompLoginComponent implements OnInit {

  type = 'password';

  number;
  password;

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

  enterNumber(event) {
    this.number = event.target.value;
  }
  enterPassword(event) {
    this.password = event.target.value;
  }

  togglePassword() {
    if(this.type.match('password')) {
      this.type = 'text';
      console.log(this.type);
    }
    else {
      this.type = 'password';
      console.log(this.type);
    }
  }

  login() {
    this.userService.login(this.number, this.password).subscribe((res) => {
      
      sessionStorage.setItem('aptNo', this.number);
      this.router.navigate(['/book']);
    }, error => {
      alert('Incorrect user or password');
    })
  }

}
