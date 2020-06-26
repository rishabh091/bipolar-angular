import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service-user/service-user.service';
import { ServiceBookingService } from '../service-booking/service-booking.service';

@Component({
  selector: 'app-comp-booking',
  templateUrl: './comp-booking.component.html',
  styleUrls: ['./comp-booking.component.css']
})
export class CompBookingComponent implements OnInit {

  facility;

  name: String;
  apartmentNo: any;
  start: Date;
  end: Date;


  constructor(private router: Router, private user_service: ServiceUserService, private booking_service: ServiceBookingService) {
    this.apartmentNo = sessionStorage.getItem('aptNo');
   }

  ngOnInit() {
    this.redirect();
  }

  redirect() {
    if(!this.user_service.checkLogin()) {
      this.router.navigateByUrl('signup');
    }
  }

  //to restrict past dates
  restrictPast() {
    const date = new Date();

    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();
    let year: any = date.getFullYear();

    //check whether month and day are single digit and add 0 in front of them
    if(month < 10) {
      month = '0' + month.toString();
    }
    if(day < 10) {
      day = '0' + day.toString();
    }

    const maxDate = year + '-' + month + '-' + day + 'T' + date.getHours() + ":" + date.getMinutes();

    return maxDate;
  }

  //get data from user
  enterName(event) {
    this.name = event.target.value;
  }
  enterTo(event) {
    this.end = new Date(event.target.value);
  }
  enterTime(event) {
    this.start = new Date(event.target.value);
  }

  book(facility) {
    this.facility = facility;
  }

  finalBook() {
    let object = {
      name: this.name,
      apartmentNo: this.apartmentNo,
      start: this.start,
      end: this.end,
      facility: this.facility
    }

    //book here
    this.booking_service.book(object)
    .then((res) => {
      console.log(res);

      alert('booking successful');
    }, (error) => {
      console.log(error);
      alert('Slot already booked');
    })
  }

  logout() {
    this.user_service.logout()
    .then((res) => {
      this.router.navigate(['']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
