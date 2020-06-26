import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  constructor(private httpClient: HttpClient) { }

  save(aptNo, name, pass) {
    const url = 'https://bipolar-test.web.app/signup';
    const json = {
      apartmentNo: aptNo,
      name: name,
      password: pass
    }

    return this.httpClient.post(url, json).toPromise();
  }

  login(room, password) {
    const url = 'https://bipolar-test.web.app/login';
    const json = {
      apartmentNo: room,
      password: password
    }

    return this.httpClient.post(url, json).pipe(
      map(data => {
        sessionStorage.setItem('token', btoa(room + ':' + password));
      }));
  }

  logout() {
    sessionStorage.removeItem('token');
    let url = 'https://bipolar-test.web.app/logout';

    return this.httpClient.delete(url).toPromise();
  }

  checkLogin() {
    const secret = sessionStorage.getItem('token');
    if (secret) {
      return true;
    }
    else {
      return false;
    }
  }
}
