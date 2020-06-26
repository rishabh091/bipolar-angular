import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceUserService } from '../service-user/service-user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingService {

  constructor(private httpClient: HttpClient) {
  }

  book(object) {
    const url = 'https://bipolar-test.web.app/book';

    return this.httpClient.post(url, object).toPromise();
  }
}
