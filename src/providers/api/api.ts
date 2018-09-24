import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  Token: string

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ApiProvider Provider');
  }

  getCredentials = function (username, password) {
    return this.http.post("http://localhost:8100/api/api/auth/login", {
      "username": username,
      "password": password,
      "message": ""
    })
      .toPromise()
  }

  getRaces = function () {
    //this.Token = this.storage.get("token")
    this.storage.get("token").then((result) => {
      console.log(result);
      return this.Token = result;
    })
    .then(token => {
    return console.log(this.Token);
    })
    return this.http.get("http://localhost:8100/api/races", { Authorization: this.Token })
    
      .toPromise()
  

  }

}
