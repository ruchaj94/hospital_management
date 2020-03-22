import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {

  http: HttpClient
  url = 'http://localhost:4000'   //express port 4000

  constructor(httpClient: HttpClient) {
    this.http = httpClient
   }

   getSpecialization()
   {
    return this.http.get(this.url+'/spec')
   }

   getDoctors(id:number)
   {
     console.log('id : ',id)
     return this.http.get(this.url+'/doc/spec/'+id)
   }
}
