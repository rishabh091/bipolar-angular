import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private httpClient: HttpClient) { }

  save(aptNo, name, pass) {
    const url = 'http://localhost:8080/signup';
    const json = {
      apartmentNo: aptNo,
      name: name,
      password: pass
    }

    return this.httpClient.post(url, json).toPromise();
  }

  login(room, password) {
    const url = 'http://localhost:8080/login';
    const json = {
      apartmentNo: room,
      password: password
    }

    return this.httpClient.post(url, json).toPromise();
  }

  logout() {
    localStorage.removeItem('secret');
    let url = 'http://localhost:8080/logout';

    return this.httpClient.delete(url).toPromise();
  }

  checkLogin() {
    const secret = localStorage.getItem('secret');
    if(secret != null || secret != undefined) {
      return true;
    }
    else {
      return false;
    }
  }
}
