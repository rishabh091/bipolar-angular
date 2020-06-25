import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { CompSignupComponent } from './comp-signup/comp-signup.component';
import { CompBookingComponent } from './comp-booking/comp-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CompLoginComponent,
    CompSignupComponent,
    CompBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
