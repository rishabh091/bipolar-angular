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
}
