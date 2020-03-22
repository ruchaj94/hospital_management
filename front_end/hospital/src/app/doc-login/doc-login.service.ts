import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocLoginService {

  http:HttpClient
  url = 'http://localhost:4000/doc/login'; 
  constructor(httpClient:HttpClient) {
    this.http = httpClient
   }

   onLogin(email:string, password:string)
   {
     alert('service onLogin()')
    const body = {
      email:email,
      password:password
    }
     return this.http.post(this.url,body)
   }
}
