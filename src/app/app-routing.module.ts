import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { CompSignupComponent } from './comp-signup/comp-signup.component';
import { CompBookingComponent } from './comp-booking/comp-booking.component';


const routes: Routes = [
  {
    path: '', component: CompLoginComponent
  },
  {
    path: 'signup', component: CompSignupComponent
  },
  {
    path: 'book', component: CompBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
